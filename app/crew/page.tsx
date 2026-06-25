import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, PhotoPlaceholder, SectionHead } from "@/components/ui/Atoms";
import { CREW, CREW_NOTE } from "@/lib/crew";

export const metadata: Metadata = {
  title: "The Crew",
  description:
    "The expedition team behind SVNKEN CITY — host, chef, creative and show directors, composer, and the company of performers who run the descent.",
};

export default function CrewPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "84px 24px 56px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>The Expedition</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>The crew of the descent</h1>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto" }}>
            A supper club is only as good as the hands that run it. Meet the expedition team that takes the room from the surface to the city,
            night after night.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="The Roster" title="Who takes you down" style={{ marginBottom: "32px" }} />
          <div className="cards-3">
            {CREW.map((m) => (
              <Card key={m.role} interactive style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <PhotoPlaceholder label={`Crew — ${m.role}`} depth={m.station} h={220} />
                <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "4px" }}>
                    <h3 className="sc-h4" style={{ color: "var(--text-strong)", margin: 0 }}>{m.role}</h3>
                  </div>
                  <div className="sc-tag-text" style={{ color: "var(--brass-400)", marginBottom: "12px" }}>{m.rank}</div>
                  <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{m.bio}</p>
                  <div style={{ marginTop: "16px" }}>
                    <Tag tone="ink">{m.station}</Tag>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", marginTop: "20px" }}>{CREW_NOTE}</p>
        </div>
      </section>

      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <Card framed style={{ padding: "clamp(28px, 4vw, 44px)", textAlign: "center" }}>
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Want to crew the run?</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 24px" }}>
              We hire across twelve departments for the EDC Orlando run — kitchen, performance, production, and more.
            </p>
            <div className="row-center">
              <ButtonLink href="/careers" variant="secondary">See Open Roles</ButtonLink>
              <ButtonLink href="/tickets">Get Tickets</ButtonLink>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
