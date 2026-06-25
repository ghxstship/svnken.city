import React from "react";

type Tone = "neutral" | "brass" | "patina" | "coral" | "available" | "full";

const tones: Record<Tone, { color: string; border: string; dot: string }> = {
  neutral: { color: "var(--text-muted)", border: "var(--line-strong)", dot: "var(--fog-500)" },
  brass: { color: "var(--brass-400)", border: "var(--line-brass)", dot: "var(--brass-500)" },
  patina: { color: "var(--verdigris-400)", border: "var(--verdigris-600)", dot: "var(--verdigris-500)" },
  coral: { color: "var(--rust-400)", border: "var(--rust-600)", dot: "var(--rust-500)" },
  available: { color: "var(--verdigris-400)", border: "var(--verdigris-600)", dot: "var(--verdigris-500)" },
  full: { color: "var(--rust-400)", border: "var(--rust-600)", dot: "var(--rust-500)" },
};

export function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
}: {
  children: React.ReactNode;
  tone?: Tone;
  dot?: boolean;
  style?: React.CSSProperties;
}) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5em",
        padding: "4px 10px",
        fontFamily: "var(--font-label)",
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        color: t.color,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--radius-pill)",
        background: "color-mix(in oklab, var(--abyss-900) 40%, transparent)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: t.dot, flex: "none" }} />}
      {children}
    </span>
  );
}
