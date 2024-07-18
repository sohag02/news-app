
const rss_feed = 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms';

export async function GET () {
    const response = await fetch(rss_feed);
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    const items = xmlDoc.getElementsByTagName("item");
    console.log(items);
    return new Response("Hello World");
}