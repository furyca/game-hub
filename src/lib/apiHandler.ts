import { NextRequest, NextResponse } from "next/server";

export function createApiHandler(endpoint: string) {
  return async function handler(req: NextRequest) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const { search } = new URL(req.url);
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}${search ? `${search}&` : "?"}key=${apiKey}`;    
    
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Response error: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      return NextResponse.json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
  };
}