import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { PhotoPlaceholder } from "@/components/ui/Atoms";
import { formatPrice, type Product } from "@/lib/merch";

export function ProductCard({ product }: { product: Product }) {
  const soldOut = product.variants.every((v) => !v.available);
  return (
    <Link href={`/shop/${product.handle}`} style={{ textDecoration: "none" }}>
      <Card interactive style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative" }}>
          <PhotoPlaceholder label={`Merch — ${product.name}`} depth={product.lot} h={260} />
          {product.badge && (
            <Tag tone="brass" style={{ position: "absolute", top: 12, left: 12 }}>
              {product.badge}
            </Tag>
          )}
        </div>
        <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", flex: 1 }}>
          <div className="sc-tag-text" style={{ color: "var(--text-faint)", marginBottom: "6px" }}>{product.category}</div>
          <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "6px" }}>{product.name}</h3>
          <p className="sc-small sc-italic" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>{product.tagline}</p>
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span className="sc-h4" style={{ color: "var(--brass-400)" }}>{formatPrice(product.price)}</span>
            <span className="sc-label" style={{ color: soldOut ? "var(--text-faint)" : "var(--text-muted)", fontSize: 12 }}>
              {soldOut ? "Sold Out" : "View →"}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
