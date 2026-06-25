"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/components/shop/cart";

export function CartButton() {
  const { count } = useCart();
  return (
    <Link
      href="/shop/cart"
      aria-label={`Cart — ${count} item${count === 1 ? "" : "s"}`}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--line-strong)",
        color: "var(--brass-400)",
        textDecoration: "none",
        background: "color-mix(in oklab, var(--abyss-900) 40%, transparent)",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 7h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: -7,
            right: -7,
            minWidth: 18,
            height: 18,
            padding: "0 4px",
            borderRadius: "var(--radius-pill)",
            background: "var(--brass-500)",
            color: "var(--ink-900)",
            fontFamily: "var(--font-label)",
            fontSize: 11,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          {count}
        </span>
      )}
    </Link>
  );
}
