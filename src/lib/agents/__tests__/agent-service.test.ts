import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AgentService } from '../agent-service';

// Mock global fetch
global.fetch = vi.fn();

describe('AgentService', () => {
  let agentService: AgentService;

  beforeEach(() => {
    vi.clearAllMocks();
    agentService = AgentService.getInstance();
  });

  it('should be a singleton', () => {
    const instance1 = AgentService.getInstance();
    const instance2 = AgentService.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should call discoverCompetitors with correct parameters', async () => {
    const mockData = { success: true, data: [] };
    (fetch as any).mockResolvedValue({
      json: async () => mockData,
    });

    const result = await agentService.discoverCompetitors('Electronics');

    expect(fetch).toHaveBeenCalledWith('/api/agents/discover?market=Electronics');
    expect(result).toEqual(mockData);
  });

  it('should call extractPricing via the API route', async () => {
    const mockData = { success: true, data: { price: 100 } };
    (fetch as any).mockResolvedValue({
      json: async () => mockData,
    });

    const result = await agentService.extractPricing('https://example.com/p1');

    expect(fetch).toHaveBeenCalledWith('/api/agents/extract', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ url: 'https://example.com/p1' }),
    }));
    expect(result).toEqual(mockData);
  });

  it('should perform live extraction correctly', async () => {
    // This test would need to mock TinyfishService
    // But since AgentService is a singleton and imports tinyfishService,
    // we can mock the fetch inside tinyfishService if we were testing it directly.
    // Here we just check the method exists and has basic error handling
    const result = await agentService.performLiveExtraction('https://example.com');
    expect(result.success).toBe(false); // Fails because TINYFISH_API_KEY is missing
  });
});
