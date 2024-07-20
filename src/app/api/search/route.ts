import { type NextRequest } from 'next/server';
import { NextResponse } from "next/server";

const API_KEY = process.env.API_KEY;

export async function GET(req: NextRequest) {
	const searchTerm = req.nextUrl.searchParams.get('q');
    console.log("searchTerm :", searchTerm);
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}&pageSize=10&searchIn=title`;
    const response = await fetch(url);
	const data: unknown = await response.json();
    return NextResponse.json(data);
}