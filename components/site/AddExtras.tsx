"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { useCart } from "@/components/shop/cart";
import { TABLES, ADDONS, type Extra } from "@/lib/extras";

function ExtraRow({ x }: { x: Extra }) {
  const { lines, add, setQty } = useCart();
  const id = `${x.kind}:${x.id}`;
  const line = lines.find((l) => l.id === id);

  return (
    <Card style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 18px" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
          <h3 className="sc-h4" style={{ color: "var(--text-strong)", margin: 0 }}>{x.name}</h3>
          {x.perSeat && <Tag tone="patina">per seat</Tag>}
        </div>
        <p className="sc-small sc-italic" style={{ color: "var(--text-muted)", margin: 0 }}>{x.detail}</p>
      </div>
      <div style={{ textAlign: "right", flex: "none" }}>
        <div className="sc-h4" style={{ color: "var(--brass-400)", marginBottom: "8px" }}>${x.price}</div>
        {line ? (
          <div style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--brass-600)", borderRadius: "var(--radius-sm)", background: "color-mix(in oklab, var(--brass-500) 12%, var(--surface-sunk))" }}>
            <Step onClick={() => setQty(id, line.qty - 1)} label="Remove one">−</Step>
            <span className="sc-label" style={{ minWidth: 28, textAlign: "center", color: "var(--brass-200)" }}>{line.qty}</span>
            <Step onClick={() => setQty(id, line.qty + 1)} label="Add one">+</Step>
          </div>
        ) : (
          <button
            onClick={() =>
              add({
                id,
                kind: x.kind,
                channel: "speakeasy",
                name: x.name,
                detail: x.perSeat ? "Per seat · with your seating" : x.detail,
                price: x.price,
                buyUrl: x.buyUrl,
                maxQty: x.maxQty,
              })
            }
            className="sc-label"
            style={{
              padding: "8px 16px",
              fontSize: 12,
              letterSpacing: "0.14em",
              color: "var(--brass-400)",
              background: "transparent",
              border: "1px solid var(--line-brass)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Add
          </button>
        )}
      </div>
    </Card>
  );
}

function Step({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} aria-label={label} style={{ width: 32, height: 36, background: "none", border: "none", color: "var(--brass-400)", cursor: "pointer", fontSize: 16, fontFamily: "var(--font-label)" }}>
      {children}
    </button>
  );
}

export function AddExtras() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <div className="sc-eyebrow" style={{ marginBottom: "14px" }}>Tables &amp; Sections</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {TABLES.map((x) => (
            <ExtraRow key={x.id} x={x} />
          ))}
        </div>
      </div>
      <div>
        <div className="sc-eyebrow" style={{ marginBottom: "14px" }}>Upgrades &amp; Add-ons</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="addon-grid">
          {ADDONS.map((x) => (
            <ExtraRow key={x.id} x={x} />
          ))}
        </div>
      </div>
    </div>
  );
}
