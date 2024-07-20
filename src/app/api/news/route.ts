import Parser from "rss-parser";
import { NextResponse } from "next/server";
import cheerio from "cheerio";
import { extractMetaTag } from "@/lib/extractImage";

const rssUrl = "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en";

const getRssFeed = async () => {
    const parser = new Parser();
    const response = await parser.parseURL(rssUrl);
    // console.log("response", response);
    return response;
  };

const getImageUrl = async (item: unknown) => {
  const res = await fetch(item.link, {redirect: 'follow'});
  const html = await res.text();
  // console.log("html", html);
  const $ = cheerio.load(html);
  const metaTag = $('meta[property="og:image"]');
  const imageUrl = metaTag.attr('content') ?? '';
  return imageUrl;
}

export async function GET () {
    const response = await getRssFeed();
    const items = response.items;
    const imageUrls = await Promise.all(items.map(async (item) => {
      const imageUrl = await extractMetaTag(item.link);
      return imageUrl;
    }));
    response.items = items.map((item, index) => ({
        ...item,
        urlToImage: imageUrls[index],
    }));
    return NextResponse.json(response);
}