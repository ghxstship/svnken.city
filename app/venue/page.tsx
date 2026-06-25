import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, PhotoPlaceholder, SectionHead } from "@/components/ui/Atoms";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Harbor · Tinker Field Infield",
  description:
    "Find SVNKEN CITY on the Tinker Field infield inside EDC Orlando. Getting there, what to bring, and what the wristband covers.",
};

const mapQuery = encodeURIComponent(`${SITE.venue.name}, ${SITE.venue.address}`);

export default function VenuePage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "780px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>The Harbor</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>{SITE.venue.name}</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto" }}>
            {SITE.venue.context}. {SITE.venue.address}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <PhotoPlaceholder label="Map — Tinker Field infield, EDC Orlando" depth="287 S Tampa Ave" h={400} />
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>Getting There</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>Through the festival gates.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              SVNKEN CITY sits on the Tinker Field infield, inside the EDC Orlando footprint. {SITE.venue.note} Once you&rsquo;re through the
              gates, follow the lantern line to the dock.
            </p>
            <div className="row" style={{ gap: "10px", marginBottom: "26px" }}>
              <Tag tone="brass">Inside EDC Orlando</Tag>
              <Tag tone="patina">Wristband required</Tag>
              <Tag tone="ink">Step-free access</Tag>
            </div>
            <div className="row">
              <ButtonLink href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} external variant="secondary">
                Open in Maps →
              </ButtonLink>
              <ButtonLink href="/tickets">Get Tickets</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container section">
          <SectionHead eyebrow="Plan Your Night" title="What to know before you cross" center style={{ marginBottom: "40px" }} />
          <div className="cards-3">
            {[
              ["The wristband", "A valid EDC Orlando wristband gets you onto the grounds. Your SVNKEN CITY seating ticket gets you into the room. You need both."],
              ["Arrive early", "Get to the dock 15 minutes before your seating. Festival gates and crowds move slow — leave yourself a tide of extra time."],
              ["Closed-toe footwear", "It&rsquo;s an infield. The ground is real and so is the salvage. Wear something you can stand the night in."],
              ["Bag policy", "EDC Orlando&rsquo;s festival bag and security rules apply at the gates. Travel light; the room is candlelit and close."],
              ["Climate", "The room is covered and away from the main stages — a quieter, cooler harbor in the middle of the festival.","",],
              ["Re-entry", "When you surface, your wristband carries you back into EDC Orlando. The night is far from over."],
            ].map(([title, body]) => (
              <Card key={title as string} interactive>
                <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: title as string }} />
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }} dangerouslySetInnerHTML={{ __html: body as string }} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Card framed style={{ padding: "clamp(28px, 4vw, 48px)", textAlign: "center" }}>
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Questions about the crossing?</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 24px" }}>
              The logbook answers most of it — tickets, access, allergies, and what the wristband covers.
            </p>
            <div className="row-center">
              <ButtonLink href="/faq" variant="secondary">Read the Logbook</ButtonLink>
              <ButtonLink href="/contact">Contact the Dock</ButtonLink>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
