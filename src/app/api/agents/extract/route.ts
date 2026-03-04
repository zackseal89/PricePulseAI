import { NextResponse } from 'next/server';
import { agentService } from '@/lib/agents/agent-service';

export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body;

  if (process.env.TINYFISH_API_KEY) {
    const result = await agentService.performLiveExtraction(url);
    return NextResponse.json(result);
  }

  // Fallback to mock for hackathon demo if no API key
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
      agentId: 'mock-extractor'
    }
  });
}
