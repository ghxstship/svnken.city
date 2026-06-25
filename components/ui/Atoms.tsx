import React from "react";

export function Eyebrow({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="sc-eyebrow" style={style}>
      {children}
    </div>
  );
}

export function Rule({ style }: { style?: React.CSSProperties }) {
  return <hr className="sc-rule" style={style} />;
}

/** Hero sub-label set between two fading brass rules. */
export function OrnamentLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "16px", ...style }}>
      <span className="ornament-rule" style={{ height: "1px", background: "linear-gradient(90deg,transparent,var(--line-brass))" }} />
      <span className="sc-label ornament-label" style={{ color: "var(--brass-400)", textAlign: "center", maxWidth: "100%" }}>
        {children}
      </span>
      <span className="ornament-rule" style={{ height: "1px", background: "linear-gradient(90deg,var(--line-brass),transparent)" }} />
    </div>
  );
}

/** Provenance photo placeholder — bottom-left salvage label, deep-water gradient. */
export function PhotoPlaceholder({
  label,
  depth,
  h = 220,
  src,
  style,
}: {
  label: string;
  depth?: string;
  h?: number | string;
  /** real image URL — when set, renders the photo with a provenance scrim */
  src?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="sc-grain"
      style={{
        position: "relative",
        height: h,
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: src ? "var(--abyss-800)" : "radial-gradient(120% 120% at 30% 0%, var(--verdigris-700), var(--abyss-900) 70%)",
        display: "flex",
        alignItems: "flex-end",
        padding: "14px",
        ...style,
      }}
    >
      {src && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={label}
            loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,21,26,.10) 30%, rgba(7,21,26,.78))" }} />
        </>
      )}
      <span className="sc-label" style={{ position: "relative", color: "var(--fog-400)", fontSize: "11px" }}>
        {label}
        {depth ? ` · ${depth}` : ""}
      </span>
    </div>
  );
}

/** Section heading block: eyebrow + title, optional centered. */
export function SectionHead({
  eyebrow,
  title,
  center = false,
  style,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  center?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ textAlign: center ? "center" : "left", ...style }}>
      {eyebrow && <Eyebrow style={{ marginBottom: "12px" }}>{eyebrow}</Eyebrow>}
      <h2 className="sc-h1" style={{ color: "var(--text-strong)", margin: 0 }}>
        {title}
      </h2>
    </div>
  );
}
