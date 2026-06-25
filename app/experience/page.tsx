import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, OrnamentLabel, PhotoPlaceholder, SectionHead, Rule } from "@/components/ui/Atoms";
import { SensesSection } from "@/components/site/Senses";
import { SITE } from "@/lib/site";
import { RUN_OF_SHOW, RUNTIME_NOTE, ZONES } from "@/lib/runofshow";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Voyage",
  description:
    "What to expect at SVNKEN CITY — a theatrical five-course voyage through the ocean's depth zones, ending in a drowned, luminous city. The story, the voyage, the run of show.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* HERO */}
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "100px 24px 80px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "20px" }}>The Voyage</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "20px" }}>
            You don&rsquo;t watch the room. You go under with it.
          </h1>
          <p className="sc-lead" style={{ color: "var(--text)", maxWidth: "640px", margin: "0 auto" }}>
            SVNKEN CITY is a theatrical expedition dinner — a five-course voyage through the ocean&rsquo;s depth zones, staged for ninety
            minutes, ending in the discovery of a drowned, luminous city. You board as crew.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="section">
        <div className="container split">
          <PhotoPlaceholder label="The drowned grove, low tide" depth="Drowned Grove, FL" src={IMG.sea[2]} h={380} />
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>The Legend</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>The town that never drained.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              In &rsquo;47 the grove flooded and the water stayed. The salvage crews who came to strip the wreck never left — they built a
              kitchen out of what they pulled up, lit it with lanterns, and started feeding whoever found the door.
            </p>
            <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
              That kitchen is Salvage City Supper Club. SVNKEN CITY is its drowned twin — surfacing for one week at Lot54, The Vanguard, as the
              official EDC Orlando partner venue, before the water takes the room back.
            </p>
          </div>
        </div>
      </section>

      {/* THE EXPEDITION — depth zones */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container section">
          <SectionHead eyebrow="The Expedition" title="Five courses, five depths" center style={{ marginBottom: "12px" }} />
          <p className="sc-body" style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: "620px", margin: "0 auto 40px" }}>
            The whole night reads as a dive. Each course drops you a zone deeper — the light fading, the sound thickening, the room going dark
            — until the city ignites at the bottom.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {ZONES.map((z, i) => (
              <div key={z.name} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "20px" }}>
                <div style={{ textAlign: "right" }}>
                  <div className="sc-h4" style={{ color: "var(--brass-400)" }}>{z.depth}</div>
                </div>
                <div style={{ borderLeft: "1px solid var(--line-brass)", paddingLeft: "22px", paddingBottom: i < ZONES.length - 1 ? "26px" : 0, position: "relative" }}>
                  <span style={{ position: "absolute", left: "-5px", top: "5px", width: "9px", height: "9px", borderRadius: "50%", background: i === ZONES.length - 1 ? "var(--rust-500)" : "var(--brass-500)" }} />
                  <h3 className="sc-h3" style={{ color: "var(--text-strong)", marginBottom: "4px" }}>{z.name}</h3>
                  <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{z.mood}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FIVE SENSES */}
      <SensesSection dark />

      {/* RUN OF SHOW */}
      <section className="section">
        <div className="container-narrow">
          <SectionHead eyebrow="The Run of Show" title="Ninety minutes, surface to city" center style={{ marginBottom: "10px" }} />
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", textAlign: "center", marginBottom: "36px" }}>
            {RUNTIME_NOTE}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {RUN_OF_SHOW.map((b, i, arr) => (
              <div key={b.t} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: "18px" }} className="ros-row">
                <div style={{ textAlign: "right" }}>
                  <div className="sc-tag-text" style={{ color: "var(--brass-400)" }}>{b.t}</div>
                  <div className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{b.min}</div>
                </div>
                <div
                  style={{
                    borderLeft: `1px solid ${b.feature ? "var(--rust-500)" : "var(--line-brass)"}`,
                    paddingLeft: "22px",
                    paddingBottom: i < arr.length - 1 ? "24px" : 0,
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", left: "-5px", top: "5px", width: "9px", height: "9px", borderRadius: "50%", background: b.feature ? "var(--rust-500)" : "var(--brass-500)" }} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "3px" }}>
                    <h3 className="sc-h4" style={{ color: b.feature ? "var(--rust-400)" : "var(--text-strong)", margin: 0 }}>{b.block}</h3>
                    <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{b.zone} · {b.depth}</span>
                  </div>
                  <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{b.beat}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", textAlign: "center", marginTop: "26px" }}>
            The reveal at Course V is never shown here — it surfaces once, at your table.
          </p>
        </div>
      </section>

      {/* GOOD TO KNOW */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <div className="split">
            <div>
              <Eyebrow style={{ marginBottom: "16px" }}>Good to Know</Eyebrow>
              <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "20px" }}>Before the lanterns</h2>
              <div className="row" style={{ gap: "10px", marginBottom: "20px" }}>
                <Tag tone="brass">~90 minutes</Tag>
                <Tag tone="patina">5 courses included</Tag>
                <Tag tone="ink">All ages w/ guardian</Tag>
                <Tag tone="brass">21+ for the bar</Tag>
              </div>
              <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                A five-course voyage needs to know your table in advance. Tell us about allergies and dietary needs when you reserve and again
                at the dock — we log a plant-based and a shellfish-free manifest for every seating.
              </p>
              <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                The voyage runs in <strong style={{ color: "var(--text)" }}>low light with theatrical haze and loud, immersive sound</strong>. If
                that&rsquo;s a concern, write us and we&rsquo;ll set your seat and the night for you.
              </p>
              <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
                The room is step-free and ADA accessible, with companion seating. Need something specific? Write{" "}
                <a href={`mailto:${SITE.contact.general}`}>{SITE.contact.general}</a>.
              </p>
            </div>
            <Card framed style={{ padding: "40px 36px", textAlign: "center", alignSelf: "center" }}>
              <OrnamentLabel style={{ marginBottom: "20px" }}>{SITE.tagline}</OrnamentLabel>
              <p className="sc-lead sc-italic" style={{ color: "var(--text)", marginBottom: "24px" }}>
                &ldquo;Service begins when the lanterns are lit.&rdquo;
              </p>
              <Rule style={{ marginBottom: "24px" }} />
              <ButtonLink href="/tickets" size="lg" fullWidth>
                Register to Board
              </ButtonLink>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
