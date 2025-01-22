import { NornsAIOptions, ScrapeResponse } from "./types";

export default class NornsAI {
  private apiKey: string;

  constructor(options: NornsAIOptions) {
    if (!options.apiKey) {
      throw new Error("API key is required.");
    }
    this.apiKey = options.apiKey;
  }

  public async scrape(url: string): Promise<ScrapeResponse> {
    try {
      const response = await fetch("https://www.norns.ai/api/v0/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return { success: false, error: `Norns API error: ${errorText}` };
      }

      const result = await response.json();
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message || "Unknown error" };
    }
  }
}
