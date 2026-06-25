"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/components/shop/cart";

export function AddSeatingButton({
  id,
  name,
  price,
  buyUrl,
  soldOut,
}: {
  id: string;
  name: string;
  price: number;
  buyUrl: string;
  soldOut: boolean;
}) {
  const { lines, add, setQty } = useCart();
  const line = lines.find((l) => l.id === id);

  if (soldOut) {
    return (
      <Link
        href="/#waitlist"
        className="sc-label"
        style={{ color: "var(--text-faint)", fontSize: 12, textDecoration: "none", whiteSpace: "nowrap" }}
      >
        Waitlist →
      </Link>
    );
  }

  if (line) {
    return (
      <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--brass-600)", borderRadius: "var(--radius-sm)", background: "color-mix(in oklab, var(--brass-500) 12%, var(--surface-sunk))" }}>
        <Step onClick={() => setQty(id, line.qty - 1)} label="Remove one seat">−</Step>
        <span className="sc-label" style={{ minWidth: 30, textAlign: "center", color: "var(--brass-200)" }}>{line.qty}</span>
        <Step onClick={() => setQty(id, line.qty + 1)} label="Add one seat">+</Step>
      </div>
    );
  }

  return (
    <button
      onClick={() =>
        add({ id, kind: "ticket", channel: "speakeasy", name, detail: "Seated voyage · dinner included", price, buyUrl, maxQty: 12 })
      }
      className="sc-label"
      style={{
        padding: "8px 16px",
        fontSize: 12,
        letterSpacing: "0.14em",
        color: "var(--ink-900)",
        background: "linear-gradient(180deg, var(--brass-400), var(--brass-600))",
        border: "1px solid var(--brass-700)",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        boxShadow: "var(--shadow-brass), var(--shadow-sm)",
      }}
    >
      Add · ${price}
    </button>
  );
}

function Step({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} aria-label={label} style={{ width: 34, height: 38, background: "none", border: "none", color: "var(--brass-400)", cursor: "pointer", fontSize: 16, fontFamily: "var(--font-label)" }}>
      {children}
    </button>
  );
}
