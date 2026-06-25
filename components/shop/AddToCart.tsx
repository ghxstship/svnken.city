"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/shop/cart";
import type { Product } from "@/lib/merch";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const sizes = product.options.Size;
  const [size, setSize] = React.useState<string | null>(null);
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  // Resolve the selected variant.
  const variant = sizes
    ? product.variants.find((v) => v.options.Size === size) ?? null
    : product.variants[0] ?? null;

  const needsSize = !!sizes && !size;
  const unavailable = !!variant && !variant.available;

  function onAdd() {
    if (!variant || needsSize || unavailable) return;
    add(
      {
        variantId: variant.shopifyVariantId,
        handle: product.handle,
        name: product.name,
        variantTitle: variant.title,
        price: product.price,
        lot: product.lot,
      },
      qty,
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {sizes && (
        <div>
          <div className="sc-label" style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
            Size{size ? <span style={{ color: "var(--brass-400)" }}> · {size}</span> : ""}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {sizes.map((s) => {
              const v = product.variants.find((x) => x.options.Size === s);
              const soldOut = v ? !v.available : true;
              const selected = size === s;
              return (
                <button
                  key={s}
                  onClick={() => !soldOut && setSize(s)}
                  disabled={soldOut}
                  aria-pressed={selected}
                  style={{
                    minWidth: 46,
                    padding: "10px 12px",
                    fontFamily: "var(--font-label)",
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    cursor: soldOut ? "not-allowed" : "pointer",
                    color: soldOut ? "var(--text-faint)" : selected ? "var(--ink-900)" : "var(--text)",
                    background: selected ? "var(--brass-500)" : "var(--surface-sunk)",
                    border: `1px solid ${selected ? "var(--brass-600)" : "var(--line-strong)"}`,
                    borderRadius: "var(--radius-sm)",
                    textDecoration: soldOut ? "line-through" : "none",
                    opacity: soldOut ? 0.5 : 1,
                  }}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: "12px", alignItems: "stretch" }}>
        <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-sm)", background: "var(--surface-sunk)" }}>
          <QtyBtn onClick={() => setQty((q) => Math.max(1, q - 1))} label="Decrease quantity">−</QtyBtn>
          <span className="sc-label" style={{ minWidth: 34, textAlign: "center", color: "var(--text-strong)" }}>{qty}</span>
          <QtyBtn onClick={() => setQty((q) => Math.min(10, q + 1))} label="Increase quantity">+</QtyBtn>
        </div>
        <Button size="lg" onClick={onAdd} disabled={needsSize || unavailable} fullWidth>
          {unavailable ? "Sold Out" : needsSize ? "Select a Size" : added ? "Added to Hold ✓" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}

function QtyBtn({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: 40,
        height: 44,
        background: "none",
        border: "none",
        color: "var(--brass-400)",
        cursor: "pointer",
        fontSize: 18,
        fontFamily: "var(--font-label)",
      }}
    >
      {children}
    </button>
  );
}
