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
    return NextResponse.json({ error: "That email didn't read right. Try again." }, { status: 400 });
  }

  await appendRecord("waitlist.jsonl", {
    type: "waitlist",
    at: new Date().toISOString(),
    email,
    name: name || null,
  });

  return NextResponse.json({
    ok: true,
    message: "You're on the manifest. We'll send drop alerts, openings, and the night's tide list — no spam.",
  });
}
