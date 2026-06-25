"use client";
import React from "react";
import { SITE } from "@/lib/site";

export interface CartLine {
  variantId: string;
  handle: string;
  name: string;
  variantTitle: string;
  price: number;
  qty: number;
  lot: string;
}

interface CartCtx {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (variantId: string, qty: number) => void;
  remove: (variantId: string) => void;
  clear: () => void;
  checkoutUrl: string | null;
}

const Ctx = React.createContext<CartCtx | null>(null);
const KEY = "svnken-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<CartLine[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  // Load once on mount (client only — avoids SSR mismatch).
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
      const i = prev.findIndex((l) => l.variantId === line.variantId);
      if (i === -1) return [...prev, { ...line, qty }];
      const next = [...prev];
      next[i] = { ...next[i], qty: next[i].qty + qty };
      return next;
    });
  };

  const setQty: CartCtx["setQty"] = (variantId, qty) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.variantId !== variantId) : prev.map((l) => (l.variantId === variantId ? { ...l, qty } : l)),
    );
  };

  const remove: CartCtx["remove"] = (variantId) => setLines((prev) => prev.filter((l) => l.variantId !== variantId));
  const clear = () => setLines([]);

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.qty * l.price, 0);

  // Shopify cart permalink: https://{domain}/cart/{variantId}:{qty},...
  const checkoutUrl =
    SITE.shop.live && lines.length
      ? `https://${SITE.shop.domain}/cart/${lines.map((l) => `${l.variantId}:${l.qty}`).join(",")}`
      : null;

  return (
    <Ctx.Provider value={{ lines, count, subtotal, add, setQty, remove, clear, checkoutUrl }}>{children}</Ctx.Provider>
  );
}

export function useCart(): CartCtx {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
