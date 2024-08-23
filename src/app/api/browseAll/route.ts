import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const { search } = new URL(req.url);
  const platformsUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/platforms${search || "?"}key=${apiKey}`;
  const genresUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/genres${search || "?"}key=${apiKey}`;
  const tagsUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tags${search || "?"}key=${apiKey}`;
  const creatorsUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/creators${search || "?"}key=${apiKey}`;
  const developersUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/developers${search || "?"}key=${apiKey}`;
  const publishersUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/publishers${search || "?"}key=${apiKey}`;
  const storesUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/stores${search || "?"}key=${apiKey}`;
  
  try {
    const responses = await Promise.all([
      fetch(platformsUrl),
      fetch(genresUrl),
      fetch(tagsUrl),
      fetch(creatorsUrl),
      fetch(developersUrl),
      fetch(publishersUrl),
      fetch(storesUrl),
    ]) //response

    const data = await Promise.all(responses.map(response => response.json())); //resolve
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
