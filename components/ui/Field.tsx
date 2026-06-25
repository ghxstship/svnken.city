"use client";
import React from "react";

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-label)",
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "var(--text-muted)",
};

function wellStyle(focused: boolean, error?: boolean): React.CSSProperties {
  return {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "var(--surface-sunk)",
    border: `1px solid ${error ? "var(--rust-500)" : focused ? "var(--brass-400)" : "var(--line-strong)"}`,
    boxShadow: focused ? "var(--glow-brass)" : "var(--shadow-inset)",
    borderRadius: "var(--radius-sm)",
    padding: "0 14px",
    transition: "border-color var(--dur-fast) var(--ease-tide), box-shadow var(--dur-fast) var(--ease-tide)",
  };
}

const controlStyle: React.CSSProperties = {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  padding: "12px 0",
  width: "100%",
};

interface CommonProps {
  label?: string;
  hint?: string;
  error?: string;
  name?: string;
  required?: boolean;
}

export function Input({
  label,
  hint,
  error,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
}: CommonProps & { type?: string; placeholder?: string; defaultValue?: string }) {
  const [focused, setFocused] = React.useState(false);
  const id = name || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%" }}>
      {label && (
        <label htmlFor={id} style={{ ...labelStyle, color: error ? "var(--rust-400)" : "var(--text-muted)" }}>
          {label}
          {required && <span style={{ color: "var(--brass-400)" }}> *</span>}
        </label>
      )}
      <div style={wellStyle(focused, !!error)}>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={controlStyle}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontStyle: "italic", color: error ? "var(--rust-400)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}

export function Textarea({ label, hint, name, placeholder, required, rows = 4 }: CommonProps & { placeholder?: string; rows?: number }) {
  const [focused, setFocused] = React.useState(false);
  const id = name || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%" }}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}
          {required && <span style={{ color: "var(--brass-400)" }}> *</span>}
        </label>
      )}
      <div style={{ ...wellStyle(focused), alignItems: "stretch" }}>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...controlStyle, resize: "vertical", lineHeight: 1.6 }}
        />
      </div>
      {hint && <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontStyle: "italic", color: "var(--text-muted)" }}>{hint}</span>}
    </div>
  );
}

export function Select({
  label,
  name,
  required,
  defaultValue,
  children,
}: CommonProps & { defaultValue?: string; children: React.ReactNode }) {
  const [focused, setFocused] = React.useState(false);
  const id = name || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%" }}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}
          {required && <span style={{ color: "var(--brass-400)" }}> *</span>}
        </label>
      )}
      <div style={{ ...wellStyle(focused), position: "relative" }}>
        <select
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...controlStyle, appearance: "none", cursor: "pointer", paddingRight: "20px" }}
        >
          {children}
        </select>
        <span style={{ position: "absolute", right: "14px", color: "var(--text-muted)", pointerEvents: "none", fontSize: "11px" }}>▼</span>
      </div>
    </div>
  );
}
