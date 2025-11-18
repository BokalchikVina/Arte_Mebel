import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.info("[telemetry] event", payload);

    return NextResponse.json(
      { status: "queued", receivedAt: new Date().toISOString() },
      { status: 202 },
    );
  } catch (error) {
    console.error("[telemetry] failed", error);
    return NextResponse.json(
      { status: "error", message: "invalid payload" },
      { status: 400 },
    );
  }
}
