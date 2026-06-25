import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, OrnamentLabel } from "@/components/ui/Atoms";
import { ShowSchedule } from "@/components/site/ShowSchedule";
import { SITE } from "@/lib/site";
import { RUN_LABEL, totalSeatings } from "@/lib/shows";

export const metadata: Metadata = {
  title: "Tickets · Dates & Times",
  description: `SVNKEN CITY at EDC Orlando — ${RUN_LABEL}. ${totalSeatings()} seatings across six nights. Tickets on Speakeasy.`,
};

const TIERS = [SITE.pricing.softOpening, SITE.pricing.standard, SITE.pricing.captains];

export default function TicketsPage() {
  return (
    <>
      {/* HERO */}
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 60px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "780px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "18px" }}>On Sale Now · {SITE.ticketing.platform}</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Dates &amp; Times</h1>
          <OrnamentLabel style={{ marginBottom: "20px" }}>{RUN_LABEL}</OrnamentLabel>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto" }}>
            Every seat below is a full seated voyage with dinner included. Pick your night, pick your tide, and you&rsquo;ll be carried
            straight to {SITE.ticketing.platform} to check out.
          </p>
        </div>
      </section>

      {/* SPEAKEASY NOTICE */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap", textAlign: "center" }}>
          <Badge tone="patina" dot>Official</Badge>
          <span className="sc-small" style={{ color: "var(--text)" }}>
            All seats are sold on <strong style={{ color: "var(--brass-400)" }}>{SITE.ticketing.platform}</strong> — not Ticket Fairy. If a link points anywhere else, it isn&rsquo;t us.
          </span>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="section">
        <div className="container">
          <Eyebrow style={{ marginBottom: "12px" }}>Fares</Eyebrow>
          <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "28px" }}>Three ways aboard</h2>
          <div className="cards-3">
            {TIERS.map((t, i) => (
              <Card key={t.label} framed={i === 1} interactive>
                {i === 1 && <Tag tone="brass" style={{ position: "absolute", top: "-14px", left: "20px" }}>Most aboard</Tag>}
                <div className="sc-eyebrow" style={{ marginBottom: "10px" }}>{t.label}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "12px" }}>
                  <span className="sc-display" style={{ color: "var(--text-strong)" }}>${t.price}</span>
                  <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>/ seat</span>
                </div>
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{t.note}</p>
              </Card>
            ))}
          </div>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "18px" }}>
            Dinner is included in every fare. Wine and rum pairings poured from the wreck cellar; a zero-proof tide list logged for every seating.
          </p>
        </div>
      </section>

      {/* SCHEDULE */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "28px", flexWrap: "wrap" }}>
            <div>
              <Eyebrow style={{ marginBottom: "12px" }}>The Run</Eyebrow>
              <h2 className="sc-h1" style={{ color: "var(--text-strong)", margin: 0 }}>Choose your seating</h2>
            </div>
            <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{totalSeatings()} seatings · 6 nights</span>
          </div>
          <ShowSchedule />
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "18px" }}>
            Status shown is approximate and updates as seats move on {SITE.ticketing.platform}. Sold-out seatings open a waitlist.
          </p>
        </div>
      </section>

      {/* WRISTBAND NOTE + CTA */}
      <section className="section">
        <div className="container">
          <Card variant="patina" style={{ padding: "clamp(28px, 4vw, 44px)", textAlign: "center" }}>
            <Eyebrow style={{ marginBottom: "12px" }}>Before you book</Eyebrow>
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>You&rsquo;ll need an EDC Orlando wristband, too.</h2>
            <p className="sc-body" style={{ color: "var(--text)", maxWidth: "600px", margin: "0 auto 24px" }}>
              SVNKEN CITY is staged on the Tinker Field infield inside the festival footprint. A valid EDC Orlando wristband is required to
              reach the room in addition to your seating ticket.
            </p>
            <ButtonLink href="/venue" variant="secondary">
              Getting there →
            </ButtonLink>
          </Card>
        </div>
      </section>
    </>
  );
}
