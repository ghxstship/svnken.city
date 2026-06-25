"use client";
import React from "react";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, Rule, PhotoPlaceholder } from "@/components/ui/Atoms";
import { useCart, KIND_LABELS, type CartLine } from "@/components/shop/cart";
import { formatPrice } from "@/lib/merch";
import { SITE } from "@/lib/site";

export function CartView() {
  const {
    count,
    subtotal,
    experienceLines,
    merchLines,
    experienceSubtotal,
    merchSubtotal,
    setQty,
    remove,
    clear,
    shopifyCheckoutUrl,
    speakeasyCheckoutUrl,
  } = useCart();

  if (count === 0) {
    return (
      <div style={{ maxWidth: 540, margin: "0 auto", textAlign: "center", padding: "40px 0" }}>
        <Eyebrow style={{ marginBottom: "14px" }}>Your Hold</Eyebrow>
        <h1 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Nothing on the manifest yet.</h1>
        <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "26px" }}>
          The hold is empty. Add a seating, a table, or pull something up from the salvage store.
        </p>
        <div className="row-center">
          <ButtonLink href="/tickets" size="lg">Get Tickets</ButtonLink>
          <ButtonLink href="/shop" size="lg" variant="secondary">The Store</ButtonLink>
        </div>
      </div>
    );
  }

  const bothChannels = experienceLines.length > 0 && merchLines.length > 0;

  return (
    <div className="cart-grid">
      {/* Lines, grouped by fulfillment */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Eyebrow>Your Hold · {count} {count === 1 ? "item" : "items"}</Eyebrow>
          <button onClick={clear} className="sc-tag-text" style={{ background: "none", border: "none", color: "var(--text-faint)", cursor: "pointer" }}>
            Empty hold
          </button>
        </div>

        {experienceLines.length > 0 && (
          <LineGroup
            title="The Voyage"
            sub={`Seatings, tables & add-ons · checkout on ${SITE.ticketing.platform}`}
            lines={experienceLines}
            setQty={setQty}
            remove={remove}
          />
        )}
        {merchLines.length > 0 && (
          <LineGroup
            title="The Salvage Store"
            sub="Merch · ships after the run, checkout on Shopify"
            lines={merchLines}
            setQty={setQty}
            remove={remove}
          />
        )}
      </div>

      {/* Summary */}
      <Card framed style={{ padding: "28px 26px", position: "sticky", top: "100px" }}>
        <h2 className="sc-h3" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>Summary</h2>
        {experienceLines.length > 0 && <Row label="The Voyage" value={formatPrice(experienceSubtotal)} />}
        {merchLines.length > 0 && <Row label="The Salvage Store" value={formatPrice(merchSubtotal)} />}
        <Row label="Shipping & taxes" value="At checkout" muted />
        <Rule style={{ margin: "16px 0" }} />
        <Row label="Subtotal" value={formatPrice(subtotal)} strong />

        <div style={{ marginTop: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {bothChannels && (
            <p className="sc-small sc-italic" style={{ color: "var(--text-muted)", margin: 0 }}>
              Your hold has experience tickets and store merch, fulfilled by different partners. Finish in two quick, secure steps:
            </p>
          )}

          {speakeasyCheckoutUrl && (
            <ButtonLink href={speakeasyCheckoutUrl} external size="lg" fullWidth>
              {bothChannels ? "1 · Checkout Tickets" : "Checkout on Speakeasy"} →
            </ButtonLink>
          )}

          {merchLines.length > 0 &&
            (shopifyCheckoutUrl ? (
              <ButtonLink href={shopifyCheckoutUrl} external size="lg" fullWidth variant={bothChannels ? "secondary" : "primary"}>
                {bothChannels ? "2 · Checkout Merch" : "Checkout on Shopify"} →
              </ButtonLink>
            ) : (
              <div>
                <Button size="lg" fullWidth variant={bothChannels ? "secondary" : "primary"} disabled>
                  {bothChannels ? "2 · Merch Opens Soon" : "Store Opens Soon"}
                </Button>
                <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "10px", textAlign: "center" }}>
                  The store goes live with the run; merch checkout hands off to Shopify once it opens.
                </p>
              </div>
            ))}
        </div>

        <p className="sc-tag-text" style={{ color: "var(--text-faint)", marginTop: "16px", textAlign: "center" }}>
          Secure checkout · {SITE.shop.currency}
        </p>
      </Card>
    </div>
  );
}

function LineGroup({
  title,
  sub,
  lines,
  setQty,
  remove,
}: {
  title: string;
  sub: string;
  lines: CartLine[];
  setQty: (id: string, q: number) => void;
  remove: (id: string) => void;
}) {
  return (
    <div>
      <div style={{ marginBottom: "14px" }}>
        <h2 className="sc-h3" style={{ color: "var(--text-strong)", margin: 0 }}>{title}</h2>
        <div className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{sub}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {lines.map((l) => (
          <Card key={l.id} style={{ display: "flex", gap: "16px", alignItems: "center", padding: "14px" }}>
            {l.kind === "merch" ? (
              <div style={{ width: 72, flex: "none" }}>
                <PhotoPlaceholder label={l.image || l.name} h={72} />
              </div>
            ) : (
              <KindMark kind={KIND_LABELS[l.kind]} />
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                {l.handle ? (
                  <Link href={`/shop/${l.handle}`} className="sc-h4" style={{ color: "var(--text-strong)", textDecoration: "none" }}>
                    {l.name}
                  </Link>
                ) : (
                  <span className="sc-h4" style={{ color: "var(--text-strong)" }}>{l.name}</span>
                )}
                <Tag tone={l.channel === "shopify" ? "kraft" : "brass"}>{KIND_LABELS[l.kind]}</Tag>
              </div>
              {l.detail && <div className="sc-tag-text" style={{ color: "var(--text-faint)", marginTop: 2 }}>{l.detail}</div>}
            </div>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-sm)", background: "var(--surface-sunk)" }}>
              <Step onClick={() => setQty(l.id, l.qty - 1)} label="Decrease">−</Step>
              <span className="sc-label" style={{ minWidth: 26, textAlign: "center", color: "var(--text-strong)" }}>{l.qty}</span>
              <Step onClick={() => setQty(l.id, l.qty + 1)} label="Increase">+</Step>
            </div>
            <div style={{ width: 70, textAlign: "right", flex: "none" }}>
              <div className="sc-body" style={{ color: "var(--text-strong)", fontWeight: 600 }}>{formatPrice(l.price * l.qty)}</div>
              <button onClick={() => remove(l.id)} className="sc-tag-text" style={{ background: "none", border: "none", color: "var(--rust-400)", cursor: "pointer", padding: 0 }}>
                Remove
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function KindMark({ kind }: { kind: string }) {
  return (
    <div
      style={{
        width: 72,
        height: 72,
        flex: "none",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--line-brass)",
        background: "radial-gradient(120% 120% at 30% 0%, var(--abyss-600), var(--abyss-900) 75%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 4,
      }}
    >
      <span className="sc-tag-text" style={{ color: "var(--brass-400)" }}>{kind}</span>
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

function Step({ children, onClick, label }: { children: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} aria-label={label} style={{ width: 34, height: 38, background: "none", border: "none", color: "var(--brass-400)", cursor: "pointer", fontSize: 16, fontFamily: "var(--font-label)" }}>
      {children}
    </button>
  );
}
