import React from "react";
import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, SectionHead } from "@/components/ui/Atoms";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Group Tables & Buyouts",
  description: "Bring a crew to SVNKEN CITY — group tables, private seatings, and full buyouts at Lot54, The Vanguard, during the EDC Orlando weekend.",
};

export default function GroupBookingsPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>Group Tables</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Bring the whole crew below.</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto" }}>
            Eight or eighty, we can set the table for it — a reserved stretch of the rail, a private seating, or the whole room for one night.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Ways to Gather" title="Three sizes of crew" center style={{ marginBottom: "40px" }} />
          <div className="cards-3">
            {[
              ["Reserved Rail", "8 – 12", "A held stretch of the long table at a single seating. Book direct on Speakeasy or ask us to set it up."],
              ["Private Seating", "13 – 40", "A seating reserved for your crew alone — same voyage, your people on the manifest."],
              ["Full Buyout", "The room", "Take the whole harbor for one night. Custom manifest, custom timing, your event below the waterline."],
            ].map(([title, size, body]) => (
              <Card key={title as string} interactive>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3 className="sc-h4" style={{ color: "var(--text-strong)", margin: 0 }}>{title}</h3>
                  <Tag tone="brass">{size}</Tag>
                </div>
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section split" style={{ alignItems: "start" }}>
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>Inquire</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>Tell us about the table.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              Leave the size, the night, and the occasion. The dockmaster will write back with availability and a hold — group seats move
              fast during the festival, so reach out early.
            </p>
            <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
              Prefer email? Write <a href={`mailto:${SITE.contact.groups}`}>{SITE.contact.groups}</a>.
            </p>
          </div>
          <ContactForm topic="group" />
        </div>
      </section>
    </>
  );
}
