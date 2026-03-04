import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TinyfishService } from '../tinyfish-service';

// Mock global fetch
global.fetch = vi.fn();

describe('TinyfishService', () => {
  let tinyfishService: TinyfishService;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.TINYFISH_API_KEY = 'test-api-key';
    // Force singleton to pick up the new env var by accessing private instance
    // @ts-ignore
    TinyfishService.instance = undefined;
    tinyfishService = TinyfishService.getInstance();
  });

  it('should be a singleton', () => {
    const instance1 = TinyfishService.getInstance();
    const instance2 = TinyfishService.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should call runSync with correct parameters', async () => {
    const mockResponse = { success: true, run_id: '123', status: 'completed', data: { price: 99 } };
    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const request = { url: 'https://test.com', goal: 'Extract price' };
    const result = await tinyfishService.runSync(request);

    expect(fetch).toHaveBeenCalledWith('https://api.tinyfish.ai/v1/run', expect.objectContaining({
      method: 'POST',
      headers: expect.objectContaining({
        'Authorization': 'Bearer test-api-key',
      }),
      body: JSON.stringify({
        url: request.url,
        goal: request.goal,
      }),
    }));
    expect(result).toEqual(mockResponse);
  });

  it('should handle API errors correctly in runSync', async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
      text: async () => 'Internal Server Error',
    });

    const result = await tinyfishService.runSync({ url: 't.com', goal: 'g' });
    expect(result.success).toBe(false);
    expect(result.error).toBe('Internal Server Error');
  });
});
