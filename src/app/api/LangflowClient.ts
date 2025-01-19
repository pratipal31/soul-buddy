/* eslint-disable @typescript-eslint/no-explicit-any */
interface LangflowResponse {
    outputs: Array<{
      outputs: Array<{
        outputs: {
          message: {
            message: any;
            text: string;
          };
        };
        artifacts?: {
          stream_url?: string;
        };
      }>;
    }>;
  }
  
  interface Tweaks {
    [key: string]: Record<string, unknown>;
  }
  
  type InputType = 'chat' | 'text' | string;
  type OutputType = 'chat' | 'text' | string;
  type OnUpdateCallback = (data: { chunk: string }) => void;
  type OnCloseCallback = (message: string) => void;
  type OnErrorCallback = (error: string | Event) => void;
  
  export class LangflowClient {
    private baseURL: string;
    private applicationToken: string;
  
    constructor(baseURL: string, applicationToken: string) {
      this.baseURL = baseURL;
      this.applicationToken = applicationToken;
    }
  
    private async post(
      endpoint: string,
      body: Record<string, unknown>,
      headers: Record<string, string> = { "Content-Type": "application/json" }
    ): Promise<LangflowResponse> {
      headers["Authorization"] = `Bearer ${this.applicationToken}`;
      headers["Content-Type"] = "application/json";
      const url = `${this.baseURL}${endpoint}`;
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body)
        });
  
        const responseMessage = await response.json();
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
        }
        return responseMessage as LangflowResponse;
      } catch (error) {
        console.error('Request Error:', error instanceof Error ? error.message : 'Unknown error');
        throw error;
      }
    }
  
    private async initiateSession(
      flowId: string,
      langflowId: string,
      inputValue: string,
      inputType: InputType = 'chat',
      outputType: OutputType = 'chat',
      stream = false,
      tweaks: Tweaks = {}
    ): Promise<LangflowResponse> {
      const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
      return this.post(endpoint, { 
        input_value: inputValue, 
        input_type: inputType, 
        output_type: outputType, 
        tweaks: tweaks 
      });
    }
  
    private handleStream(
      streamUrl: string,
      onUpdate: OnUpdateCallback,
      onClose: OnCloseCallback,
      onError: OnErrorCallback
    ): EventSource {
      const eventSource = new EventSource(streamUrl);
  
      eventSource.onmessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data);
        onUpdate(data);
      };
  
      eventSource.onerror = (event: Event) => {
        console.error('Stream Error:', event);
        onError(event);
        eventSource.close();
      };
  
      eventSource.addEventListener("close", () => {
        onClose('Stream closed');
        eventSource.close();
      });
  
      return eventSource;
    }
  
    async runFlow(
      flowIdOrName: string,
      langflowId: string,
      inputValue: string,
      inputType: InputType = 'chat',
      outputType: OutputType = 'chat',
      tweaks: Tweaks = {},
      stream = false,
      onUpdate?: OnUpdateCallback,
      onClose?: OnCloseCallback,
      onError?: OnErrorCallback
    ): Promise<LangflowResponse | void> {
      try {
        const initResponse = await this.initiateSession(
          flowIdOrName,
          langflowId,
          inputValue,
          inputType,
          outputType,
          stream,
          tweaks
        );
  
        console.log('Init Response:', initResponse);
  
        if (
          stream &&
          initResponse?.outputs?.[0]?.outputs?.[0]?.artifacts?.stream_url &&
          onUpdate &&
          onClose &&
          onError
        ) {
          const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
          console.log(`Streaming from: ${streamUrl}`);
          this.handleStream(streamUrl, onUpdate, onClose, onError);
        }
  
        return initResponse;
      } catch (error) {
        console.error('Error running flow:', error);
        if (onError) {
          onError('Error initiating session');
        }
      }
    }
  }
  
  // Example usage in Next.js:
  export async function example(): Promise<void> {
    const flowIdOrName = '37b7335c-69ec-46d8-bded-f289aaa606b7';
    const langflowId = 'eeff00a0-5745-497c-a533-9bd07b7f91c0';
    const applicationToken = process.env.NEXT_PUBLIC_LANGFLOW_TOKEN || '';
    
    const langflowClient = new LangflowClient(
      'https://api.langflow.astra.datastax.com',
      applicationToken
    );
  
    const tweaks: Tweaks = {
      "ChatInput-j4xwt": {},
      "AstraDB-K8Rux": {},
      "Google Generative AI Embeddings-rLLGE": {},
      "ChatOutput-etnt9": {},
      "GroqModel-7V1SY": {},
      "ParseData-RArw9": {},
      "Prompt-HIANz": {}
    };
  
    try {
      const response = await langflowClient.runFlow(
        flowIdOrName,
        langflowId,
        "Your input message",
        'chat',
        'chat',
        tweaks,
        false,
        (data) => console.log("Received:", data.chunk),
        (message) => console.log("Stream Closed:", message),
        (error) => console.log("Stream Error:", error)
      );
  
      if (!response?.outputs) return;
  
      const output = response.outputs[0].outputs[0].outputs.message;
      console.log("Final Output:", output.message.text);
    } catch (error) {
      console.error('Example Error:', error instanceof Error ? error.message : 'Unknown error');
    }
  }