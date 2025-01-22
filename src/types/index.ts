// Define and export your types here
export interface NornsAIOptions {
  apiKey: string;
}

export interface ScrapeResponse {
  success: boolean;
  data?: ScrapedData;
  error?: string;
}

export interface ScrapedData {
  markdown: string;
  metadata: {
    title: string;
    description: string;
    html: string;
  };
  scrape_id: string;
}
