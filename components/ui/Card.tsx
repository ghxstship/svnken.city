"use client";
import React from "react";

type Variant = "surface" | "sunk" | "paper" | "patina";

const variants: Record<Variant, React.CSSProperties> = {
  surface: { background: "var(--surface-raised)", color: "var(--text)", border: "1px solid var(--line)" },
  sunk: { background: "var(--surface-sunk)", color: "var(--text)", border: "1px solid var(--line)", boxShadow: "var(--shadow-inset)" },
  paper: { background: "var(--paper)", color: "var(--text-ink)", border: "1px solid var(--bone-400)" },
  patina: { background: "color-mix(in oklab, var(--verdigris-700) 30%, var(--abyss-700))", color: "var(--text)", border: "1px solid var(--verdigris-600)" },
};

export function Card({
  children,
  variant = "surface",
  framed = false,
  interactive = false,
  style,
}: {
  children: React.ReactNode;
  variant?: Variant;
  framed?: boolean;
  interactive?: boolean;
  style?: React.CSSProperties;
}) {
  const base: React.CSSProperties = {
    position: "relative",
    borderRadius: "var(--radius-md)",
    padding: "var(--space-5)",
    boxShadow: variant === "sunk" ? "var(--shadow-inset)" : "var(--shadow-md)",
    transition: "transform var(--dur-base) var(--ease-tide), box-shadow var(--dur-base) var(--ease-tide)",
    ...variants[variant],
    ...(framed ? { boxShadow: "var(--glow-brass), var(--shadow-md)", border: "1px solid var(--line-brass)" } : null),
    ...style,
  };

  const hoverProps = interactive
    ? {
        onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        },
        onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = (base.boxShadow as string) || "var(--shadow-md)";
        },
      }
    : {};

  return (
    <div style={{ ...base, cursor: interactive ? "pointer" : "default" }} {...hoverProps}>
      {children}
    </div>
  );
}
