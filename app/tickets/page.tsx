import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, OrnamentLabel } from "@/components/ui/Atoms";
import { ShowSchedule } from "@/components/site/ShowSchedule";
import { AddExtras } from "@/components/site/AddExtras";
import { WeekendProgram } from "@/components/site/WeekendProgram";
import { SITE } from "@/lib/site";
import { RUN_LABEL, totalSeatings } from "@/lib/shows";

export const metadata: Metadata = {
  title: "Tickets · Dates & Times",
  description: `SVNKEN CITY at Lot54, The Vanguard — ${RUN_LABEL}. ${totalSeatings()} seatings of the five-course descent. Tickets on Speakeasy.`,
};

const TIERS = [SITE.pricing.softOpening, SITE.pricing.standard, SITE.pricing.chefsPass, SITE.pricing.captains];

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
            Every seat is a full five-course descent with dinner included. Pick your night and your tide, then choose your exact seats and
            section on a live map — checkout settles on {SITE.ticketing.platform}.
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
          <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "28px" }}>Four ways aboard</h2>
          <div className="tier-grid">
            {TIERS.map((t) => {
              const featured = t.label === "The Manifest";
              return (
                <Card key={t.label} framed={featured} interactive style={{ display: "flex", flexDirection: "column" }}>
                  {featured && <Tag tone="brass" style={{ position: "absolute", top: "-14px", left: "20px" }}>Most aboard</Tag>}
                  <div className="sc-eyebrow" style={{ marginBottom: "10px" }}>{t.label}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "12px" }}>
                    <span className="sc-display" style={{ color: "var(--text-strong)" }}>${t.price}</span>
                    <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>/ seat</span>
                  </div>
                  <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{t.note}</p>
                </Card>
              );
            })}
          </div>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "18px" }}>
            Every fare is the full five-course descent with dinner included. Wine and rum pairings poured from the wreck cellar; a zero-proof
            tide list logged for every seating.
          </p>
        </div>
      </section>

      {/* EDC WEEKEND PROGRAM */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <Eyebrow style={{ marginBottom: "12px" }}>The EDC Weekend</Eyebrow>
          <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>More than dinner on festival nights</h2>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "640px", marginBottom: "30px" }}>
            Nov 5&ndash;8, your seating sits inside the SVNKEN CITY × EDC Orlando × The Vanguard program — a pregame and shuttles to the
            festival, then exit shuttles back to a late afterparty at Lot54.
          </p>
          <WeekendProgram />
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
            Seats-left counts update live. Pick a seating to choose your exact seats and section, layer on tables and upgrades below, then
            check out — everything in one hold on {SITE.ticketing.platform}. Sold-out seatings open a waitlist.
          </p>
        </div>
      </section>

      {/* TABLES & ADD-ONS */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "28px" }}>
            <Eyebrow style={{ marginBottom: "12px" }}>Enhance the Night</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", margin: 0 }}>Tables, sections &amp; upgrades</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "620px", marginTop: "12px", marginBottom: 0 }}>
              Reserve a table, add a pairing, or skip the dock. Everything drops into the same hold as your seatings and checks out together.
            </p>
          </div>
          <AddExtras />
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "18px" }}>
            Larger parties and full buyouts go through{" "}
            <a href="/group-bookings">group tables</a>.
          </p>
        </div>
      </section>

      {/* VENUE NOTE + CTA */}
      <section className="section">
        <div className="container">
          <Card variant="patina" style={{ padding: "clamp(28px, 4vw, 44px)", textAlign: "center" }}>
            <Eyebrow style={{ marginBottom: "12px" }}>Before you book</Eyebrow>
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Dinner is a separate ticket from the festival.</h2>
            <p className="sc-body" style={{ color: "var(--text)", maxWidth: "600px", margin: "0 auto 24px" }}>
              SVNKEN CITY is staged at Lot54, The Vanguard — the official EDC Orlando partner venue. Your seating ticket is all you need to
              dine; no festival wristband required. On festival nights, shuttles run between Lot54 and EDC Orlando.
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
