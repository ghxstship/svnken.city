import { NextResponse } from "next/server";
import { appendRecord, isEmail, clean } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const email = clean(data.email, 200);
  const name = clean(data.name, 120);

  if (!isEmail(email)) {
    return NextResponse.json({ error: "That email didn't catch. Give it another haul." }, { status: 400 });
  }

  await appendRecord("waitlist.jsonl", {
    type: "waitlist",
    at: new Date().toISOString(),
    email,
    name: name || null,
  });

  return NextResponse.json({
    ok: true,
    message:
      "Logged at the rail. If a seat surfaces you'll hear from us before anyone above the waterline does — and the night's manifest lands at first light.",
  });
}
