import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Atoms";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Stills and film from below the waterline — the room, the manifest, and the crew of SVNKEN CITY at EDC Orlando.",
};

type Media = { label: string; provenance: string; kind: "photo" | "film"; span?: number; tall?: boolean };

const GALLERY: Media[] = [
  { label: "The Wreck Bar at first seating", provenance: "Pier 9", kind: "photo", span: 2, tall: true },
  { label: "Reef snapper, charred whole", provenance: "Dive 14m", kind: "photo" },
  { label: "Lantern line, full room", provenance: "Lot 0447", kind: "film" },
  { label: "Wreck oysters off the hull", provenance: "Pier 9", kind: "photo" },
  { label: "The crew works the rail", provenance: "Nov 7", kind: "photo", tall: true },
  { label: "Salt-cured cobia, plated", provenance: "Lot 0451", kind: "photo" },
  { label: "Below the waterline — teaser", provenance: "0:42", kind: "film", span: 2 },
  { label: "Drowned-grove citrus, set custard", provenance: "From the Grove", kind: "photo" },
  { label: "Vocalist under the swell light", provenance: "Show", kind: "photo", tall: true },
  { label: "The dock at load-in", provenance: "Tinker Field", kind: "photo" },
  { label: "Black rum cake, wreck stores", provenance: "Lot 0009", kind: "photo" },
  { label: "Surfacing — closing night film", provenance: "1:12", kind: "film" },
];

function Tile({ m }: { m: Media }) {
  const isFilm = m.kind === "film";
  return (
    <div
      className="sc-grain"
      style={{
        gridColumn: m.span === 2 ? "span 2" : "span 1",
        position: "relative",
        minHeight: m.tall ? 380 : 240,
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: isFilm
          ? "radial-gradient(120% 120% at 70% 0%, var(--abyss-600), var(--abyss-900) 72%)"
          : "radial-gradient(120% 120% at 30% 0%, var(--verdigris-700), var(--abyss-900) 70%)",
        display: "flex",
        alignItems: "flex-end",
        padding: "16px",
        boxShadow: "var(--shadow-md)",
      }}
    >
      {isFilm && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "1px solid var(--line-brass)",
              background: "color-mix(in oklab, var(--abyss-900) 55%, transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--brass-400)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px" }}>
        <span className="sc-tag-text" style={{ color: "var(--brass-400)", textTransform: "uppercase" }}>
          {isFilm ? "Film" : "Still"}
        </span>
        <span className="sc-label" style={{ color: "var(--fog-400)", fontSize: "11px" }}>
          {m.label} · {m.provenance}
        </span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>Media Gallery</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>From below the waterline</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto" }}>
            Stills and film of the room, the manifest, and the crew. Fresh capture drops through the run, Nov 4&ndash;9.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((m) => (
              <Tile key={m.label} m={m} />
            ))}
          </div>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", textAlign: "center", marginTop: "20px" }}>
            Placeholder tiles stand in for the live media. Real stills and film are loaded as they&rsquo;re captured.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <Card framed style={{ padding: "clamp(28px, 4vw, 44px)", textAlign: "center" }}>
            <Eyebrow style={{ marginBottom: "12px" }}>Press &amp; Media</Eyebrow>
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Need the press kit?</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 24px" }}>
              High-resolution stills, logos, and b-roll are available to press and partners. Write us and we&rsquo;ll send the manifest.
            </p>
            <div className="row-center">
              <ButtonLink href={`mailto:${SITE.contact.press}`} external variant="secondary">
                {SITE.contact.press}
              </ButtonLink>
              <ButtonLink href="/tickets">Get Tickets</ButtonLink>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
