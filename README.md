# NORNS.AI

> A simple client library for the Norns AI data extraction API.

## Installation

```bash
npm install norns-ai
```

## Usage

```js
import NornsAI from "norns-ai";

const app = new NornsAI({ apiKey: "YOUR_API_KEY" });

(async () => {
  const result = await app.scrape("https://example.com");
  if (!result.success) {
    console.error("Error:", result.error);
  } else {
    console.log("Scrape data:", result.data);
  }
})();
```

## API

### Constructor

```ts
new NornsAI({ apiKey: string });
```

**apiKey**: Your Norns API key from [https://norns.ai](https://norns.ai).

### scrape(url: string)

Accepts a URL to scrape. Returns a Promise with a result:

```js
{
success: boolean;
data?: ScrapedData;
error?: string;
}
```

**ScrapedData**: The data returned from the Norns API.

```ts
interface ScrapedData {
  markdown: string;
  metadata: {
    title: string;
    description: string;
    html: string;
  };
  scrape_id: string;
}
```

## Example cURL

```bash
curl --request POST 'https://www.norns.ai/api/v0/scrape' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: Bearer YOUR_API_KEY' \
 --data-raw '{
"url": "https://example.com"
}'
```
