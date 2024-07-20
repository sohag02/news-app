import { NextResponse } from "next/server";
import Parser from "rss-parser";

const rssUrl = "https://timesofindia.indiatimes.com/rssfeedstopstories.cms";

const getRssFeed = async () => {
  const parser = new Parser();
  const response = await parser.parseURL(rssUrl);
  // console.log("response", response);
  // const sortedItems = response.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  // return sortedItems;
  return response;
};

export async function GET () {
  const response = await getRssFeed();
  // const data: unknown = await response.json();
  return NextResponse.json(response);
}