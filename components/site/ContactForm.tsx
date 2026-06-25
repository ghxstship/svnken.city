"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Field";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function ContactForm({ topic = "general" }: { topic?: "general" | "group" }) {
  const [state, setState] = React.useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = React.useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, topic }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "The message didn't reach the dock.");
      setState("done");
      setMsg(data.message || "Logged. We'll write you back.");
    } catch (err) {
      setState("error");
      setMsg(err instanceof Error ? err.message : "The message didn't reach the dock.");
    }
  }

  if (state === "done") {
    return (
      <Card framed style={{ padding: "44px 40px", textAlign: "center" }}>
        <Tag tone="patina" style={{ marginBottom: "16px" }}>Logged · Lot No. 0488</Tag>
        <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Your message reached the dock.</h2>
        <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>{msg}</p>
      </Card>
    );
  }

  return (
    <Card style={{ padding: "clamp(28px, 4vw, 40px)" }}>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Input label="Name" name="name" placeholder="Marlow" required />
        <Input label="Email" name="email" type="email" placeholder="you@tide.mail" required />
        {topic === "group" ? (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Select label="Party Size" name="party" defaultValue="8 – 12">
                <option>8 – 12 guests</option>
                <option>13 – 20 guests</option>
                <option>21 – 40 guests</option>
                <option>Buy out a seating</option>
              </Select>
              <Input label="Preferred Night" name="night" placeholder="Nov 7, 8:00 PM" />
            </div>
            <Textarea label="Tell us about the table" name="message" placeholder="The occasion, must-have seating, anything the kitchen should know…" rows={4} required />
          </>
        ) : (
          <Textarea label="Message" name="message" placeholder="What can the dock help with?" rows={5} required />
        )}
        <Button type="submit" size="lg" fullWidth disabled={state === "loading"}>
          {state === "loading" ? "Sending…" : "Send to the Dock"}
        </Button>
        {state === "error" && <span className="sc-small" style={{ color: "var(--rust-400)", fontStyle: "italic" }}>{msg}</span>}
      </form>
    </Card>
  );
}
