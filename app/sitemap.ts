import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/merch";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/experience", "/tickets", "/manifest", "/crew", "/gallery", "/shop", "/venue", "/faq", "/partners", "/careers", "/group-bookings", "/contact"];
  const productRoutes = PRODUCTS.map((p) => `/shop/${p.handle}`);
  return [...routes, ...productRoutes].map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "/tickets" ? "daily" : "weekly",
    priority: r === "" ? 1 : r === "/tickets" ? 0.9 : r === "/shop" ? 0.8 : 0.6,
  }));
}
