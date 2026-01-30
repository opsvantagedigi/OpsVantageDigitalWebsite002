import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Get the API key and base URL from environment variables
    const ollamaApiKey = process.env.OLLAMA_API_KEY;
    const ollamaBaseUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434/api';

    if (!ollamaApiKey) {
      return NextResponse.json(
        { error: 'Ollama API key is not configured' },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { prompt, model = 'llama2', stream = false } = body;

    // Prepare the request to Ollama
    const ollamaResponse = await fetch(`${ollamaBaseUrl}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ollamaApiKey}`,
      },
      body: JSON.stringify({
        model,
        prompt,
        stream,
      }),
    });

    if (!ollamaResponse.ok) {
      const errorData = await ollamaResponse.json();
      return NextResponse.json(
        { error: errorData.error || 'Failed to connect to Ollama' },
        { status: ollamaResponse.status }
      );
    }

    const data = await ollamaResponse.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error calling Ollama API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check if Ollama is configured
export async function GET() {
  const ollamaApiKey = process.env.OLLAMA_API_KEY;
  
  if (!ollamaApiKey) {
    return NextResponse.json(
      { configured: false, error: 'Ollama API key is not configured' },
      { status: 500 }
    );
  }

  return NextResponse.json({ configured: true });
}