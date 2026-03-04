import { NextResponse } from 'next/server';
import { agentService } from '@/lib/agents/agent-service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const market = searchParams.get('market') || 'General';

  // In a real scenario, we might trigger an ADK agent here
  if (process.env.GOOGLE_ADK_API_KEY) {
    const result = await agentService.runAdkAgent({
      id: 'discover-competitors',
      name: 'Competitor Discovery Agent',
      type: 'discover',
      parameters: { market }
    });
    // This is a placeholder for ADK processing
    // For now, we still return the mocked data but simulate agent invocation
    console.log('ADK Agent invoked:', result.metadata.agentId);
  }

  return NextResponse.json({
    success: true,
    data: [
      { id: '1', name: 'Amazon', url: 'https://amazon.com', status: 'active', lastScraped: new Date().toISOString() },
      { id: '2', name: 'BestBuy', url: 'https://bestbuy.com', status: 'active', lastScraped: new Date().toISOString() },
      { id: '3', name: 'Walmart', url: 'https://walmart.com', status: 'active', lastScraped: new Date().toISOString() },
    ],
    metadata: {
      duration: 450,
      agentId: 'discover-agent-001'
    }
  });
}
