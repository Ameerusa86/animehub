import { NextResponse } from "next/server";
import crypto from "crypto";
import axios from "axios";

export async function GET(
  req: Request,
  context: { params: { endpoint: string } }
) {
  // Await params from the context
  const { endpoint } = await context.params;

  // Marvel API Configuration
  const baseUrl = process.env.MARVEL_API_BASE_URL!;
  const publicKey = process.env.MARVEL_PUBLIC_KEY!;
  const privateKey = process.env.MARVEL_PRIVATE_KEY!;
  const timestamp = new Date().getTime();
  const hash = crypto
    .createHash("md5")
    .update(`${timestamp}${privateKey}${publicKey}`)
    .digest("hex");

  const url = `${baseUrl}/${endpoint}`;

  try {
    const randomData = Math.floor(Math.random() * 1000);
    // Parse query parameters from the request URL
    const { searchParams } = new URL(req.url);
    const queryParams = Object.fromEntries(searchParams);

    // Fetch data from Marvel API
    const response = await axios.get(url, {
      params: {
        ...queryParams, // Forward query parameters
        ts: timestamp,
        apikey: publicKey,
        hash,
        offset: randomData,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Marvel API Error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Failed to fetch data from Marvel API." },
      { status: 500 }
    );
  }
}
