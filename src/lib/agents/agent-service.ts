import { AgentConfig, AgentResponse, CompetitorData, PriceAlert } from './types';

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
    const res = await fetch('/api/agents/extract', {
      method: 'POST',
      body: JSON.stringify({ url }),
    });
    return res.json();
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
