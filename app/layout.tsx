import type { Metadata } from "next";
import { Stalinist_One, Barlow_Semi_Condensed, EB_Garamond, Cinzel, Special_Elite } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/components/shop/cart";
import { SITE } from "@/lib/site";

// Self-hosted via next/font (no fragile remote @import ordering, no FOUT).
// Each exposes a CSS variable the design tokens consume — see globals.css.
const wordmark = Stalinist_One({ weight: "400", subsets: ["latin"], variable: "--f-wordmark", display: "swap" });
const display = Barlow_Semi_Condensed({ weight: ["500", "600", "700"], subsets: ["latin"], variable: "--f-display", display: "swap" });
const body = EB_Garamond({ weight: ["400", "500", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--f-body", display: "swap" });
const engraved = Cinzel({ weight: ["500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--f-engraved", display: "swap" });
const tag = Special_Elite({ weight: "400", subsets: ["latin"], variable: "--f-tag", display: "swap" });

const fontVars = `${wordmark.variable} ${display.variable} ${body.variable} ${engraved.variable} ${tag.variable}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SVNKEN CITY · A Subterranean World Awaits",
    template: "%s · SVNKEN CITY",
  },
  description: SITE.description,
  keywords: [
    "SVNKEN CITY",
    "Sunken City",
    "Salvage City Supper Club",
    "EDC Orlando",
    "Lot54",
    "The Vanguard",
    "immersive dinner",
    "dinner theatre Orlando",
    "Speakeasy tickets",
  ],
  openGraph: {
    title: "SVNKEN CITY · A Subterranean World Awaits",
    description: SITE.description,
    url: SITE.url,
    siteName: "SVNKEN CITY",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVNKEN CITY · A Subterranean World Awaits",
    description: SITE.description,
  },
  icons: { icon: "/favicon.png", apple: "/app-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body>
        <CartProvider>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Nav />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
