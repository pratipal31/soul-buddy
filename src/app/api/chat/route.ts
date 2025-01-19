import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const LANGFLOW_BASE_URL = 'https://api.langflow.astra.datastax.com';
  const LANGFLOW_TOKEN = process.env.NEXT_PUBLIC_LANGFLOW_TOKEN;
  const FLOW_ID = '37b7335c-69ec-46d8-bded-f289aaa606b7';
  const LANGFLOW_ID = 'eeff00a0-5745-497c-a533-9bd07b7f91c0';

  try {
    const body = await request.json();

    const response = await fetch(
      `${LANGFLOW_BASE_URL}/lf/${LANGFLOW_ID}/api/v1/run/${FLOW_ID}?stream=false`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LANGFLOW_TOKEN}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`Langflow API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}