import axios, { type AxiosResponse } from 'axios';
import cheerio from 'cheerio';

interface CustomAxiosResponse extends AxiosResponse {
  request: {
    res: {
      responseUrl: string;
    };
  };
}

async function fetchFinalHTML(url: string): Promise<{ finalURL: string; html: string } | null> {
  try {
    // Make a request and follow redirects
    const response = await axios.get(url, { maxRedirects: 10 });
    // Cast the response to our custom type
    const customResponse = response as CustomAxiosResponse;
    const finalURL = customResponse.request.res.responseUrl;
    const html = customResponse.data as string;
    return { finalURL, html };
  } catch (error) {
    console.error('Error fetching the final URL or HTML:', error);
    return null;
  }
}

async function extractMetaTag(url: string) {
  try {
    // Fetch the final URL and HTML content
    const result = await fetchFinalHTML(url);

    if (!result) {
      throw new Error('Failed to fetch the final URL or HTML');
    }

    const { finalURL, html } = result;

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    // Extract the og:image meta tag content
    const metaTag = $('meta[property="og:image"]');
    const imageUrl = metaTag.attr('content') ?? '';

    return imageUrl;
  } catch (error) {
    console.error('Error extracting the meta tag:', error);
    return '';
  }
}

export { extractMetaTag };
