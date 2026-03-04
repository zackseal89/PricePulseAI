import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body;

  return NextResponse.json({
    success: true,
    data: {
      product: 'Sony WH-1000XM4',
      price: 298.00,
      currency: 'USD',
      inStock: true,
    },
    metadata: {
      duration: 1200,
      agentId: 'extract-agent-002'
    }
  });
}
