import React from "react";
import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow, SectionHead } from "@/components/ui/Atoms";
import { ContactForm } from "@/components/site/ContactForm";
import { DEPARTMENTS, SENIORITY_TIERS, totalRoles } from "@/lib/careers";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the Crew · Careers",
  description: `Crew the EDC Orlando run of SVNKEN CITY. ${totalRoles()} roles across twelve XPMS departments — culinary, entertainment, production, technical, operations and more.`,
};

export default function CareersPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "780px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>Join the Crew</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Crew the voyage.</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "580px", margin: "0 auto 22px" }}>
            We&rsquo;re hiring across every department to surface SVNKEN CITY at Lot54, The Vanguard, Nov 4&ndash;9. Salvage City has run
            the room from Las Vegas to Miami to the high seas — Orlando is the next port.
          </p>
          <div className="row-center" style={{ gap: "10px" }}>
            <Badge tone="brass">{DEPARTMENTS.length} XPMS Departments</Badge>
            <Badge tone="patina">{totalRoles()} Roles</Badge>
            <Badge tone="neutral">Nov 4–9 · Orlando</Badge>
          </div>
        </div>
      </section>

      {/* SENIORITY */}
      <section className="section-sm" style={{ borderBottom: "1px solid var(--line)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="container">
          <Eyebrow style={{ marginBottom: "18px" }}>How the Crew is Built</Eyebrow>
          <div className="tier-grid">
            {SENIORITY_TIERS.map(([tier, desc], i) => (
              <Card key={tier} variant="sunk">
                <div className="sc-tag-text" style={{ color: "var(--brass-400)", marginBottom: "8px" }}>Tier {i + 1}</div>
                <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "8px" }}>{tier}</h3>
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Open Roles" title="By XPMS department" style={{ marginBottom: "32px" }} />
          <div className="dept-grid">
            {DEPARTMENTS.map((d) => (
              <Card key={d.code} interactive style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "6px" }}>
                  <h3 className="sc-h3" style={{ color: "var(--text-strong)", margin: 0 }}>{d.name}</h3>
                  <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{d.code}</span>
                </div>
                <p className="sc-small sc-italic" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>{d.blurb}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                  {d.roles.map((r) => (
                    <span
                      key={r}
                      className="sc-small"
                      style={{
                        padding: "5px 11px",
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--surface-sunk)",
                        color: "var(--text)",
                      }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "18px" }}>
            Departments and titles follow the Salvage City Supper Club staffing model. Not every role opens for every run — apply to the
            department that fits and we&rsquo;ll place you.
          </p>
        </div>
      </section>

      {/* APPLY */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section split" style={{ alignItems: "start" }}>
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>Sign On</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>Put your name on the manifest.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              Tell us the department and role you&rsquo;re after, your availability for the run, and where we can see your work. If the tide
              matches, we&rsquo;ll write you for a call.
            </p>
            <div className="row" style={{ gap: "10px", marginBottom: "16px" }}>
              <Tag tone="brass">Run crew</Tag>
              <Tag tone="patina">Department leads</Tag>
              <Tag tone="ink">Seasonal &amp; contract</Tag>
            </div>
            <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
              Prefer email? Write <a href={`mailto:${SITE.contact.careers}`}>{SITE.contact.careers}</a>.
            </p>
          </div>
          <ContactForm topic="career" />
        </div>
      </section>
    </>
  );
}
