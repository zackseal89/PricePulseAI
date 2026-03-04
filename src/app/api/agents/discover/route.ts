import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const market = searchParams.get('market') || 'General';

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
