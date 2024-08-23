import { NextRequest, NextResponse } from "next/server";

export function createApiHandler(endpoint: string) {
  return async function handler(req: NextRequest) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const { search } = new URL(req.url);
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}${search || "?"}key=${apiKey}`;

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
      } catch (error) {
        if (attempt === 3) {
          throw error;
        }

        console.error(`Attempt ${attempt} failed. Retrying in ${1000}ms...`, error);
        await new Promise((res) => setTimeout(res, 1000));
      }
    }
  };
}