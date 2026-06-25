import React from "react";

type Tone = "kraft" | "brass" | "patina" | "ink";

const tones: Record<Tone, React.CSSProperties> = {
  kraft: { background: "var(--bone-300)", color: "var(--ink-900)", border: "1px solid var(--bone-400)" },
  brass: { background: "color-mix(in oklab, var(--brass-500) 22%, var(--abyss-800))", color: "var(--brass-200)", border: "1px solid var(--line-brass)" },
  patina: { background: "color-mix(in oklab, var(--verdigris-500) 20%, var(--abyss-800))", color: "var(--verdigris-200)", border: "1px solid var(--verdigris-600)" },
  ink: { background: "var(--abyss-900)", color: "var(--bone-200)", border: "1px solid var(--line-strong)" },
};

export function Tag({
  children,
  tone = "kraft",
  tilt = false,
  style,
}: {
  children: React.ReactNode;
  tone?: Tone;
  tilt?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45em",
        padding: "6px 12px 6px 22px",
        fontFamily: "var(--font-tag)",
        fontSize: "12px",
        letterSpacing: "0.02em",
        borderRadius: "var(--radius-sm)",
        transform: tilt ? "rotate(-1.4deg)" : "none",
        ...tones[tone],
        ...style,
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--abyss-900)",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.35)",
        }}
      />
      {children}
    </span>
  );
}
