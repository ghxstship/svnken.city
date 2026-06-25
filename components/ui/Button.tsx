"use client";
import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "patina" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, React.CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: "12px", letterSpacing: "0.14em" },
  md: { padding: "12px 24px", fontSize: "13px", letterSpacing: "0.16em" },
  lg: { padding: "16px 34px", fontSize: "15px", letterSpacing: "0.16em" },
};

const variants: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(180deg, var(--brass-400), var(--brass-600))",
    color: "var(--ink-900)",
    border: "1px solid var(--brass-700)",
    boxShadow: "var(--shadow-brass), var(--shadow-sm)",
  },
  secondary: {
    background: "transparent",
    color: "var(--brass-400)",
    border: "1px solid var(--line-brass)",
    boxShadow: "none",
  },
  patina: {
    background: "linear-gradient(180deg, var(--verdigris-500), var(--verdigris-700))",
    color: "var(--bone-100)",
    border: "1px solid var(--verdigris-700)",
    boxShadow: "var(--shadow-sm)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text)",
    border: "1px solid transparent",
    boxShadow: "none",
  },
  danger: {
    background: "linear-gradient(180deg, var(--rust-500), var(--rust-700))",
    color: "var(--bone-100)",
    border: "1px solid var(--rust-700)",
    boxShadow: "var(--shadow-sm)",
  },
};

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

function baseStyle(p: Required<Pick<BaseProps, "variant" | "size" | "fullWidth">> & { style?: React.CSSProperties }): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6em",
    width: p.fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-label)",
    fontWeight: 600,
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform var(--dur-fast) var(--ease-tide), filter var(--dur-fast) var(--ease-tide)",
    ...sizes[p.size],
    ...variants[p.variant],
    ...p.style,
  };
}

const hoverIn = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.filter = "brightness(1.08)";
};
const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.filter = "none";
  e.currentTarget.style.transform = "none";
};
const press = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.transform = "translateY(1px)";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  onClick,
  disabled,
  style,
}: BaseProps & {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      onMouseDown={press}
      onMouseUp={(e) => (e.currentTarget.style.transform = "none")}
      style={{ ...baseStyle({ variant, size, fullWidth, style }), opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  external = false,
  style,
}: BaseProps & { href: string; external?: boolean }) {
  const s = baseStyle({ variant, size, fullWidth, style });
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={hoverIn} onMouseLeave={hoverOut} onMouseDown={press} onMouseUp={(e) => (e.currentTarget.style.transform = "none")} style={s}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onMouseEnter={hoverIn} onMouseLeave={hoverOut} onMouseDown={press} onMouseUp={(e) => (e.currentTarget.style.transform = "none")} style={s}>
      {children}
    </Link>
  );
}
