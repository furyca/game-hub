import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const ssUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const responses = await Promise.all([fetch(apiUrl), fetch(ssUrl)]);
  const data = await Promise.all(responses.map((response) => response.json()));

  return NextResponse.json(data);
}
