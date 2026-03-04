export type AgentStatus = 'idle' | 'running' | 'completed' | 'failed';

export interface AgentConfig {
  id: string;
  name: string;
  type: 'discover' | 'extract' | 'monitor';
  parameters: Record<string, any>;
}

export interface AgentAction {
  id: string;
  type: string;
  payload: any;
  timestamp: string;
}

export interface AgentResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  metadata: {
    duration: number;
    tokensUsed?: number;
    agentId: string;
  };
}

export interface CompetitorData {
  id: string;
  name: string;
  url: string;
  lastScraped: string;
  status: 'active' | 'inactive';
}

export interface PriceAlert {
  id: string;
  productId: string;
  productName: string;
  competitorId: string;
  oldPrice: number;
  newPrice: number;
  type: 'price_drop' | 'stock_out' | 'new_entrant' | 'surge';
  priority: 'high' | 'medium' | 'low';
  timestamp: string;
}
