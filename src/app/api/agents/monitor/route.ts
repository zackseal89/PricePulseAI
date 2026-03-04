import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      {
        id: 'a1',
        productId: 'p1',
        productName: 'Sony WH-1000XM4',
        competitorId: '1',
        oldPrice: 348.00,
        newPrice: 298.00,
        type: 'price_drop',
        priority: 'high',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'a2',
        productId: 'p2',
        productName: 'Samsung Galaxy S23 Ultra',
        competitorId: '2',
        oldPrice: 1199.00,
        newPrice: 1199.00,
        type: 'stock_out',
        priority: 'medium',
        timestamp: new Date(Date.now() - 900000).toISOString(),
      }
    ],
    metadata: {
      duration: 800,
      agentId: 'monitor-agent-003'
    }
  });
}
