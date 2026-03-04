import { AgentConfig, AgentResponse, CompetitorData, PriceAlert, TinyfishRunResponse } from './types';
import { tinyfishService } from './tinyfish-service';

export class AgentService {
  private static instance: AgentService;

  private constructor() {}

  public static getInstance(): AgentService {
    if (!AgentService.instance) {
      AgentService.instance = new AgentService();
    }
    return AgentService.instance;
  }

  async discoverCompetitors(market: string): Promise<AgentResponse<CompetitorData[]>> {
    const res = await fetch(`/api/agents/discover?market=${encodeURIComponent(market)}`);
    return res.json();
  }

  async extractPricing(url: string): Promise<AgentResponse<any>> {
    // If we're on the client, we might still want to call our API route
    // But for the sake of the task, let's assume this service can be used on the server too
    // or it's calling the API route which uses the TinyfishService.

    // For production-ready, we'll route this through our internal API to keep keys secure
    const res = await fetch('/api/agents/extract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    return res.json();
  }

  /**
   * Performs a live extraction using Tinyfish.
   * This should typically be called from a server-side context (like an API route).
   */
  async performLiveExtraction(url: string): Promise<AgentResponse<any>> {
    const startTime = Date.now();
    try {
      const tinyfishRes: TinyfishRunResponse = await tinyfishService.runSync({
        url,
        goal: 'Extract the product name, current price, currency, and stock status from this page. Return as JSON.',
      });

      if (!tinyfishRes.success) {
        throw new Error(tinyfishRes.error || 'Tinyfish extraction failed');
      }

      return {
        success: true,
        data: tinyfishRes.data,
        metadata: {
          duration: Date.now() - startTime,
          agentId: 'tinyfish-extractor',
          runId: tinyfishRes.run_id,
        }
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
        metadata: {
          duration: Date.now() - startTime,
          agentId: 'tinyfish-extractor',
        }
      };
    }
  }

  async monitorCompetitors(): Promise<AgentResponse<PriceAlert[]>> {
    const res = await fetch('/api/agents/monitor');
    return res.json();
  }

  async getAnalytics(): Promise<AgentResponse<any>> {
    // Mock analytics fetching
    return {
      success: true,
      data: {
        categoryIndex: [
          { name: "Electronics", value: 105.2, width: "85%", color: "bg-primary" },
          { name: "Apparel", value: 92.4, width: "60%", color: "bg-blue-500" },
          { name: "Home Goods", value: 112.8, width: "95%", color: "bg-orange-500" },
          { name: "Beauty", value: 98.1, width: "75%", color: "bg-purple-500" },
        ]
      },
      metadata: { duration: 150, agentId: 'analytics-mock' }
    };
  }

  // Future Google ADK Integration method placeholder
  async runAdkAgent(config: AgentConfig): Promise<AgentResponse> {
    console.log('Running ADK Agent with config:', config);
    // This would call the real ADK agent logic
    return {
      success: true,
      metadata: { duration: 100, agentId: config.id }
    };
  }
}

export const agentService = AgentService.getInstance();
