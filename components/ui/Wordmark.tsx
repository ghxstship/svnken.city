import React from "react";

/**
 * SVNKEN CITY wordmark as a width-filling SVG.
 *
 * The text is drawn once into a fixed viewBox and the SVG scales to 100% of
 * its parent (height follows by aspect ratio). Because it's SVG <text>, it can
 * never wrap; because `textLength` pins the advance to the viewBox width with
 * `lengthAdjust="spacingAndGlyphs"`, it can never overflow or shift if the font
 * swaps in late. Cap the rendered size by constraining the parent's width.
 */
export function Wordmark({
  fill = "currentColor",
  title = "SVNKEN CITY",
  className,
  style,
}: {
  fill?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  // viewBox tuned to Stalinist One's natural proportions for these 10 caps.
  const W = 1000;
  const H = 132;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={title}
      className={className}
      style={{ display: "block", width: "100%", height: "auto", overflow: "visible", ...style }}
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x={W / 2}
        y={H - 30}
        textAnchor="middle"
        textLength={W}
        lengthAdjust="spacingAndGlyphs"
        fill={fill}
        style={{
          fontFamily: "var(--font-wordmark)",
          fontWeight: 400,
          fontSize: "104px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        SVNKENCITY
      </text>
    </svg>
  );
}
