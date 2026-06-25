import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/experience", "/tickets", "/manifest", "/venue", "/faq", "/group-bookings", "/contact"];
  return routes.map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "/tickets" ? "daily" : "weekly",
    priority: r === "" ? 1 : r === "/tickets" ? 0.9 : 0.6,
  }));
}
