import React from "react";
import type { Metadata } from "next";
import { CartView } from "@/components/shop/CartView";

export const metadata: Metadata = {
  title: "Your Hold · Cart",
  description: "Review your salvage-store hold and check out securely on Shopify.",
};

export default function CartPage() {
  return (
    <section className="section">
      <div className="container">
        <CartView />
      </div>
    </section>
  );
}
