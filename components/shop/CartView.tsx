"use client";
import React from "react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow, Rule, PhotoPlaceholder } from "@/components/ui/Atoms";
import { useCart } from "@/components/shop/cart";
import { formatPrice } from "@/lib/merch";
import { SITE } from "@/lib/site";

export function CartView() {
  const { lines, subtotal, count, setQty, remove, checkoutUrl } = useCart();

  if (count === 0) {
    return (
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center", padding: "40px 0" }}>
        <Eyebrow style={{ marginBottom: "14px" }}>Your Hold</Eyebrow>
        <h1 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Nothing on the manifest yet.</h1>
        <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "26px" }}>
          The hold is empty. Pull something up from the salvage store.
        </p>
        <ButtonLink href="/shop" size="lg">Browse the Store</ButtonLink>
      </div>
    );
  }

  return (
    <div className="cart-grid">
      {/* Lines */}
      <div>
        <Eyebrow style={{ marginBottom: "16px" }}>Your Hold · {count} {count === 1 ? "item" : "items"}</Eyebrow>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {lines.map((l) => (
            <Card key={l.variantId} style={{ display: "flex", gap: "16px", alignItems: "center", padding: "14px" }}>
              <div style={{ width: 84, flex: "none" }}>
                <PhotoPlaceholder label={l.name} h={84} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <Link href={`/shop/${l.handle}`} className="sc-h4" style={{ color: "var(--text-strong)", textDecoration: "none" }}>
                  {l.name}
                </Link>
                <div className="sc-tag-text" style={{ color: "var(--text-faint)" }}>
                  {l.variantTitle !== "One size" ? `${l.variantTitle} · ` : ""}{l.lot}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-sm)", background: "var(--surface-sunk)" }}>
                <QtyBtn onClick={() => setQty(l.variantId, l.qty - 1)} label="Decrease">−</QtyBtn>
                <span className="sc-label" style={{ minWidth: 28, textAlign: "center", color: "var(--text-strong)" }}>{l.qty}</span>
                <QtyBtn onClick={() => setQty(l.variantId, l.qty + 1)} label="Increase">+</QtyBtn>
              </div>
              <div style={{ width: 64, textAlign: "right" }}>
                <div className="sc-body" style={{ color: "var(--text-strong)", fontWeight: 600 }}>{formatPrice(l.price * l.qty)}</div>
                <button onClick={() => remove(l.variantId)} className="sc-tag-text" style={{ background: "none", border: "none", color: "var(--rust-400)", cursor: "pointer", padding: 0 }}>
                  Remove
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Summary */}
      <Card framed style={{ padding: "28px 26px", position: "sticky", top: "100px" }}>
        <h2 className="sc-h3" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>Summary</h2>
        <Row label="Subtotal" value={formatPrice(subtotal)} />
        <Row label="Shipping" value="Calculated at checkout" muted />
        <Row label="Taxes" value="Calculated at checkout" muted />
        <Rule style={{ margin: "16px 0" }} />
        <Row label="Total" value={formatPrice(subtotal)} strong />

        <div style={{ marginTop: "22px" }}>
          {checkoutUrl ? (
            <ButtonLink href={checkoutUrl} external size="lg" fullWidth>
              Checkout on Shopify →
            </ButtonLink>
          ) : (
            <>
              <Button size="lg" fullWidth disabled>
                Checkout Opens Soon
              </Button>
              <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "12px", textAlign: "center" }}>
                The store goes live with the run. Checkout will hand off to Shopify once it opens.
              </p>
            </>
          )}
        </div>
        <p className="sc-tag-text" style={{ color: "var(--text-faint)", marginTop: "16px", textAlign: "center" }}>
          Secure checkout on {SITE.shop.domain.replace(".myshopify.com", "")} · {SITE.shop.currency}
        </p>
      </Card>
    </div>
  );
}

function Row({ label, value, strong, muted }: { label: string; value: string; strong?: boolean; muted?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "6px 0" }}>
      <span className={strong ? "sc-h4" : "sc-small"} style={{ color: strong ? "var(--text-strong)" : "var(--text-muted)" }}>{label}</span>
      <span className={strong ? "sc-h4" : "sc-small"} style={{ color: strong ? "var(--brass-400)" : muted ? "var(--text-faint)" : "var(--text)" }}>{value}</span>
    </div>
  );
}

function QtyBtn({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} aria-label={label} style={{ width: 34, height: 38, background: "none", border: "none", color: "var(--brass-400)", cursor: "pointer", fontSize: 16, fontFamily: "var(--font-label)" }}>
      {children}
    </button>
  );
}
