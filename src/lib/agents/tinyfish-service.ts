import { TinyfishRunRequest, TinyfishRunResponse } from './types';

export class TinyfishService {
  private static instance: TinyfishService;
  private apiKey: string | undefined;
  private baseUrl = 'https://api.tinyfish.ai/v1';

  private constructor() {
    this.apiKey = process.env.TINYFISH_API_KEY;
  }

  public static getInstance(): TinyfishService {
    if (!TinyfishService.instance) {
      TinyfishService.instance = new TinyfishService();
    }
    return TinyfishService.instance;
  }

  async runSync(request: TinyfishRunRequest): Promise<TinyfishRunResponse> {
    if (!this.apiKey) {
      throw new Error('Tinyfish API key not configured');
    }

    const response = await fetch(`${this.baseUrl}/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        url: request.url,
        goal: request.goal,
        parameters: request.parameters,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return {
        success: false,
        run_id: '',
        status: 'failed',
        error: error || 'Failed to execute Tinyfish run',
      };
    }

    return await response.json();
  }

  async runAsync(request: TinyfishRunRequest): Promise<{ run_id: string }> {
    if (!this.apiKey) {
      throw new Error('Tinyfish API key not configured');
    }

    const response = await fetch(`${this.baseUrl}/run/async`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        url: request.url,
        goal: request.goal,
        parameters: request.parameters,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to start Tinyfish async run');
    }

    return await response.json();
  }

  async getRun(runId: string): Promise<TinyfishRunResponse> {
    if (!this.apiKey) {
      throw new Error('Tinyfish API key not configured');
    }

    const response = await fetch(`${this.baseUrl}/run/${runId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Tinyfish run ${runId}`);
    }

    return await response.json();
  }
}

export const tinyfishService = TinyfishService.getInstance();
