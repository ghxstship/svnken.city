"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Field";
import { Tag } from "@/components/ui/Tag";

export function NotifyForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = React.useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = React.useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          name: form.get("name") || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went under.");
      setState("done");
      setMsg(data.message || "You're on the manifest.");
    } catch (err) {
      setState("error");
      setMsg(err instanceof Error ? err.message : "Something went under.");
    }
  }

  if (state === "done") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
        <Tag tone="patina">Logged · Lot No. 0488</Tag>
        <p className="sc-body" style={{ color: "var(--text)", margin: 0 }}>{msg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%", maxWidth: compact ? "100%" : "440px" }}>
      {!compact && <Input label="Name" name="name" placeholder="Marlow" />}
      <Input label="Email" name="email" type="email" placeholder="you@tide.mail" required hint="Drop alerts, manifest, and waitlist openings — no spam." />
      <Button type="submit" size="lg" fullWidth disabled={state === "loading"}>
        {state === "loading" ? "Logging…" : "Send to the Dock"}
      </Button>
      {state === "error" && (
        <span className="sc-small" style={{ color: "var(--rust-400)", fontStyle: "italic" }}>{msg}</span>
      )}
    </form>
  );
}
