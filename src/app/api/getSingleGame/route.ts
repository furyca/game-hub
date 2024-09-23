import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { search } = new URL(req.url);
  const id = search.slice(1)
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const ssUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const responses = await Promise.all([fetch(apiUrl), fetch(ssUrl)]);

  return  NextResponse.json(await Promise.all(responses.map((response) => response.json())));
}
