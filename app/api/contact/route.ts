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
  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const message = clean(data.message, 4000);
  const allowedTopics = ["general", "group", "partner", "career"] as const;
  const topic = (allowedTopics as readonly string[]).includes(data.topic as string) ? (data.topic as string) : "general";

  if (!name) {
    return NextResponse.json({ error: "We'll need a name for the log." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "That email didn't read right. Try again." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Leave us a note and we'll write back." }, { status: 400 });
  }

  await appendRecord("contact.jsonl", {
    type: "contact",
    at: new Date().toISOString(),
    topic,
    name,
    email,
    party: clean(data.party, 80) || null,
    night: clean(data.night, 120) || null,
    org: clean(data.org, 160) || null,
    role: clean(data.role, 160) || null,
    message,
  });

  const messages: Record<string, string> = {
    group: "Logged. The dockmaster will write back with availability and a hold.",
    partner: "Logged. Our partnerships crew will write back with the deck and next steps.",
    career: "Logged. If the tide matches, the crew will write you for a call.",
    general: "Logged. The crew will write you back at the email you left.",
  };

  return NextResponse.json({ ok: true, message: messages[topic] || messages.general });
}
