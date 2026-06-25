import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Atoms";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/shop/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/merch";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Salvage Store · Merch",
  description: "Apparel, headwear, prints, and goods from SVNKEN CITY — pulled from the wreck. Checkout handled securely on Shopify.",
};

export default function ShopPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>The Salvage Store</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Wear the wreck home.</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 18px" }}>
            Apparel, headwear, prints, and goods pulled from the SVNKEN CITY build. Limited to the run.
          </p>
          {!SITE.shop.live && (
            <Badge tone="brass" dot>Store opens with the run · checkout on {"Shopify"}</Badge>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {CATEGORIES.map((cat) => {
            const items = PRODUCTS.filter((p) => p.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat} style={{ marginBottom: "56px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
                  <h2 className="sc-h2" style={{ color: "var(--text-strong)", margin: 0 }}>{cat}</h2>
                  <span style={{ flex: 1, height: "1px", background: "var(--line)" }} />
                  <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{items.length} {items.length === 1 ? "piece" : "pieces"}</span>
                </div>
                <div className="cards-3">
                  {items.map((p) => (
                    <ProductCard key={p.handle} product={p} />
                  ))}
                </div>
              </div>
            );
          })}
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", textAlign: "center" }}>
            Product imagery is placeholder until the line is shot. {SITE.shop.note}
          </p>
        </div>
      </section>
    </>
  );
}
