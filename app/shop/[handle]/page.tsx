import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { PhotoPlaceholder, Rule } from "@/components/ui/Atoms";
import { AddToCart } from "@/components/shop/AddToCart";
import { ProductCard } from "@/components/shop/ProductCard";
import { PRODUCTS, getProduct, formatPrice } from "@/lib/merch";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ handle: p.handle }));
}

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const product = getProduct(params.handle);
  if (!product) return { title: "Not found" };
  return {
    title: `${product.name} · The Salvage Store`,
    description: product.tagline,
  };
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = getProduct(params.handle);
  if (!product) notFound();
  const soldOut = product.variants.every((v) => !v.available);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.handle !== product.handle).slice(0, 3);

  return (
    <>
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Link href="/shop" className="sc-label" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            ← The Salvage Store
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container split" style={{ alignItems: "start", gap: "48px" }}>
          {/* Media */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <PhotoPlaceholder label={`Merch — ${product.name}`} depth={product.lot} h={460} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
              {["Front", "Detail", "On the dock"].map((v) => (
                <PhotoPlaceholder key={v} label={v} h={120} />
              ))}
            </div>
          </div>

          {/* Buy panel */}
          <div>
            <div className="sc-tag-text" style={{ color: "var(--text-faint)", marginBottom: "8px" }}>{product.category} · {product.lot}</div>
            <h1 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "10px" }}>{product.name}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
              <span className="sc-display" style={{ color: "var(--brass-400)" }}>{formatPrice(product.price)}</span>
              {product.badge && <Tag tone="brass">{product.badge}</Tag>}
              {soldOut ? <Badge tone="full" dot>Sold Out</Badge> : <Badge tone="available" dot>In Stock</Badge>}
            </div>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "26px" }}>{product.description}</p>

            <AddToCart product={product} />

            <Rule style={{ margin: "28px 0" }} />
            <div className="sc-small" style={{ color: "var(--text-muted)", lineHeight: 1.9 }}>
              <div>· Ships after the run, Nov 2026 · tracked delivery</div>
              <div>· Pick-up at the dock available for ticket holders</div>
              <div>· {SITE.shop.note}</div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
          <div className="container section">
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "22px" }}>More from {product.category}</h2>
            <div className="cards-3">
              {related.map((p) => (
                <ProductCard key={p.handle} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
