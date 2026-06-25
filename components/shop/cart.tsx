"use client";
import React from "react";
import { SITE } from "@/lib/site";

// ----------------------------------------------------------
// Unified cart — one hold for every kind of line. Lines route to a
// fulfillment `channel` at checkout: experience items (tickets, tables,
// add-ons) hand off to Speakeasy; merch hands off to Shopify.
// ----------------------------------------------------------
export type LineKind = "ticket" | "table" | "addon" | "merch";
export type Channel = "speakeasy" | "shopify";

export interface CartLine {
  /** stable unique id, e.g. "ticket:2026-11-04:18:30" or "merch:<variantId>" */
  id: string;
  kind: LineKind;
  channel: Channel;
  name: string;
  detail?: string;
  price: number; // unit price, USD
  qty: number;
  maxQty?: number;
  /** routing payloads */
  buyUrl?: string; // speakeasy seating/checkout link
  shopifyVariantId?: string; // merch
  /** display */
  handle?: string; // merch product handle (links back to PDP)
  image?: string; // placeholder label
  lot?: string;
}

export const KIND_LABELS: Record<LineKind, string> = {
  ticket: "Seating",
  table: "Table",
  addon: "Add-on",
  merch: "Merch",
};

interface CartCtx {
  lines: CartLine[];
  count: number;
  subtotal: number;
  experienceLines: CartLine[];
  merchLines: CartLine[];
  experienceSubtotal: number;
  merchSubtotal: number;
  has: (id: string) => boolean;
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  /** Shopify cart permalink for merch lines (null until store is live / empty) */
  shopifyCheckoutUrl: string | null;
  /** Speakeasy handoff for experience lines (null when none) */
  speakeasyCheckoutUrl: string | null;
}

const Ctx = React.createContext<CartCtx | null>(null);
const KEY = "svnken-cart-v2";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<CartLine[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (hydrated) localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const add: CartCtx["add"] = (line, qty = 1) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.id === line.id);
      if (i === -1) return [...prev, { ...line, qty }];
      const next = [...prev];
      const cap = line.maxQty ?? next[i].maxQty ?? 99;
      next[i] = { ...next[i], qty: Math.min(cap, next[i].qty + qty) };
      return next;
    });
  };

  const setQty: CartCtx["setQty"] = (id, qty) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty: Math.min(l.maxQty ?? 99, qty) } : l)),
    );
  };

  const remove: CartCtx["remove"] = (id) => setLines((prev) => prev.filter((l) => l.id !== id));
  const clear = () => setLines([]);
  const has = (id: string) => lines.some((l) => l.id === id);

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.qty * l.price, 0);

  const experienceLines = lines.filter((l) => l.channel === "speakeasy");
  const merchLines = lines.filter((l) => l.channel === "shopify");
  const experienceSubtotal = experienceLines.reduce((n, l) => n + l.qty * l.price, 0);
  const merchSubtotal = merchLines.reduce((n, l) => n + l.qty * l.price, 0);

  // Merch → Shopify cart permalink: /cart/{variantId}:{qty},...
  const shopifyCheckoutUrl =
    SITE.shop.live && merchLines.length
      ? `https://${SITE.shop.domain}/cart/${merchLines.map((l) => `${l.shopifyVariantId}:${l.qty}`).join(",")}`
      : null;

  // Experience → Speakeasy. A single seating deep-links to its event; a
  // mixed experience hold hands off to the Speakeasy box office, which
  // itemizes the hold there. (Tickets are on sale, so this is always live.)
  const speakeasyCheckoutUrl =
    experienceLines.length === 0
      ? null
      : experienceLines.length === 1 && experienceLines[0].buyUrl
        ? experienceLines[0].buyUrl
        : SITE.ticketing.speakeasyBase;

  return (
    <Ctx.Provider
      value={{
        lines,
        count,
        subtotal,
        experienceLines,
        merchLines,
        experienceSubtotal,
        merchSubtotal,
        has,
        add,
        setQty,
        remove,
        clear,
        shopifyCheckoutUrl,
        speakeasyCheckoutUrl,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart(): CartCtx {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
