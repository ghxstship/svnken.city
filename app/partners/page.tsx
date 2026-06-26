import React from "react";
import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, SectionHead } from "@/components/ui/Atoms";
import { ContactForm } from "@/components/site/ContactForm";
import { PARTNER_TIERS, PARTNER_REASONS, PARTNER_STATS } from "@/lib/partners";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnerships & Sponsorship",
  description:
    "Partner with SVNKEN CITY in Orlando — presenting, beverage, and activation sponsorships inside a seated, captive, content-built supper-club world.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>Partnerships &amp; Sponsorship</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Put your brand below the waterline.</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
            For six nights in downtown Orlando, SVNKEN CITY holds a seated, captive audience — ninety minutes a guest, in a room engineered for
            capture. There are a handful of ways to come aboard.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderBottom: "1px solid var(--line)", background: "var(--abyss-900)" }}>
        <div className="container partner-stats" style={{ padding: 0 }}>
          {PARTNER_STATS.map(([n, label]) => (
            <div key={label} style={{ padding: "28px 20px", textAlign: "center", borderLeft: "1px solid var(--line)" }}>
              <div className="sc-display" style={{ color: "var(--brass-400)" }}>{n}</div>
              <div className="sc-tag-text" style={{ color: "var(--text-muted)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Why Partner" title="A room, not a banner" style={{ marginBottom: "32px" }} />
          <div className="cards-2">
            {PARTNER_REASONS.map(([title, body]) => (
              <Card key={title} interactive>
                <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "10px" }}>{title}</h3>
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <SectionHead eyebrow="Ways Aboard" title="Partnership tiers" style={{ marginBottom: "32px" }} />
          <div className="cards-3" style={{ alignItems: "start" }}>
            {PARTNER_TIERS.map((t) => (
              <Card key={t.name} framed={t.featured} interactive style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {t.featured && <Tag tone="brass" style={{ position: "absolute", top: "-14px", left: "20px" }}>Flagship</Tag>}
                <div className="sc-eyebrow" style={{ marginBottom: "8px" }}>{t.code}</div>
                <h3 className="sc-h3" style={{ color: "var(--text-strong)", marginBottom: "10px" }}>{t.name}</h3>
                <p className="sc-small sc-italic" style={{ color: "var(--text-muted)", marginBottom: "18px" }}>{t.blurb}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {t.perks.map((p) => (
                    <li key={p} className="sc-small" style={{ color: "var(--text)", display: "flex", gap: "10px" }}>
                      <span style={{ color: "var(--brass-500)", flex: "none" }}>—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "18px" }}>
            Tiers are a starting point — every partnership is built to the brand. Tell us your goals and we&rsquo;ll shape the deck around them.
          </p>
        </div>
      </section>

      {/* INQUIRE */}
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>Come Aboard</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>Let&rsquo;s build it together.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              Send your brand, the tier you&rsquo;re eyeing, and what you want out of the run. Our partnerships crew will write back with the
              full deck, audience detail, and next steps.
            </p>
            <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
              Prefer email? Write <a href={`mailto:${SITE.contact.partners}`}>{SITE.contact.partners}</a>.
            </p>
          </div>
          <ContactForm topic="partner" />
        </div>
      </section>
    </>
  );
}
