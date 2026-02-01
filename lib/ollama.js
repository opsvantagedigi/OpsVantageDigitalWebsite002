// lib/ollama.js
// Utility functions for interacting with the Ollama API

class OllamaClient {
  constructor(apiKey, baseUrl = "http://localhost:11434/api") {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async generate(prompt, options = {}) {
    if (!this.apiKey) {
      throw new Error("Ollama API key is not configured");
    }

    const { model = "llama2", stream = false } = options;

    try {
      const response = await fetch(`${this.baseUrl}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model,
          prompt,
          stream,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error calling Ollama API:", error);
      throw error;
    }
  }

  async listModels() {
    if (!this.apiKey) {
      throw new Error("Ollama API key is not configured");
    }

    try {
      const response = await fetch(`${this.baseUrl}/tags`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Ollama models:", error);
      throw error;
    }
  }
}

// Function to create an Ollama client instance using environment variables
export function createOllamaClient() {
  const apiKey = process.env.OLLAMA_API_KEY;
  const baseUrl = process.env.OLLAMA_BASE_URL || "http://localhost:11434/api";

  if (!apiKey) {
    throw new Error("OLLAMA_API_KEY environment variable is not set");
  }

  return new OllamaClient(apiKey, baseUrl);
}

// Convenience function to generate text using Ollama
export async function generateWithOllama(prompt, options = {}) {
  try {
    const client = createOllamaClient();
    return await client.generate(prompt, options);
  } catch (error) {
    console.error("Error in generateWithOllama:", error);
    throw error;
  }
}

// Export the class as default
export default OllamaClient;
