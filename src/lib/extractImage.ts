import axios from 'axios';
import cheerio from 'cheerio';

async function fetchFinalHTML(url) {
  try {
    // Make a request and follow redirects
    const response = await axios.get(url, { maxRedirects: 10 });
    const finalURL = response.request.res.responseUrl;
    const html = response.data;
    return { finalURL, html };
  } catch (error) {
    console.error('Error fetching the final URL or HTML:', error);
    return null;
  }
}

async function extractMetaTag(url) {
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
    const imageUrl = metaTag.attr('content') || '';

    return imageUrl;
  } catch (error) {
    console.error('Error extracting the meta tag:', error);
    return '';
  }
}

export { extractMetaTag };
