import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, OrnamentLabel, PhotoPlaceholder, SectionHead, Rule } from "@/components/ui/Atoms";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Voyage",
  description:
    "What to expect at SVNKEN CITY — a seated dinner-theatre voyage below the waterline inside EDC Orlando. The story, the room, the crossing.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* HERO */}
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "100px 24px 80px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "20px" }}>The Voyage</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "20px" }}>
            You don&rsquo;t watch the room. You&rsquo;re on the manifest.
          </h1>
          <p className="sc-lead" style={{ color: "var(--text)", maxWidth: "620px", margin: "0 auto" }}>
            SVNKEN CITY is a seated dinner-theatre voyage — part supper club, part shipwreck, staged for ninety minutes below the waterline.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="section">
        <div className="container split">
          <PhotoPlaceholder label="Photo — The drowned grove, low tide" depth="Drowned Grove, FL" h={380} />
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>The Legend</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>The town that never drained.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              In &rsquo;47 the grove flooded and the water stayed. The salvage crews who came to strip the wreck never left — they built a
              kitchen out of what they pulled up, lit it with lanterns, and started feeding whoever found the door.
            </p>
            <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
              That kitchen is Salvage City Supper Club. SVNKEN CITY is its drowned twin, surfacing for one week inside EDC Orlando before the
              water takes the room back.
            </p>
          </div>
        </div>
      </section>

      {/* THE ROOM — what to expect */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container section">
          <SectionHead eyebrow="The Room" title="What you walk into" center style={{ marginBottom: "40px" }} />
          <div className="cards-3">
            {[
              ["One long table", "Communal seating by the lantern line. You&rsquo;ll meet whoever the tide brought in beside you."],
              ["A live crew", "Divers, cooks, and a dockmaster work the room in character. The performance is the service."],
              ["Sound below water", "An original score and live moments wash through the room — built for the space, not piped in from a stage."],
              ["Salvage everywhere", "Brass rails, bone china, lantern light, and a wreck bar built from what washed up."],
              ["Course by course", "A multi-course manifest surfaces as the kitchen pulls it. No menu — only what the divers brought up today."],
              ["Ninety minutes under", "From the moment the lanterns are lit to the moment you surface. Plan your festival night around it."],
            ].map(([title, body]) => (
              <Card key={title as string} interactive>
                <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: title as string }} />
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }} dangerouslySetInnerHTML={{ __html: body as string }} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* THE CROSSING — timeline */}
      <section className="section">
        <div className="container-narrow">
          <SectionHead eyebrow="The Crossing" title="How a seating runs" center style={{ marginBottom: "36px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              ["−15 min", "Log in at the dock", "Arrive a quarter-hour before your seating time. The crew finds your name and tags your table."],
              ["00:00", "The lanterns are lit", "The doors close, the room goes under, and the first course surfaces from the rail."],
              ["~00:40", "From the deep", "The main manifest arrives course by course while the crew works the room around you."],
              ["~01:20", "From the grove", "Something sweet pulled from the drowned citrus, and a last pour from the wreck cellar."],
              ["~01:30", "Surface", "You&rsquo;re back into EDC Orlando — same wristband, the taste of the wreck still on you."],
            ].map(([time, title, body], i, arr) => (
              <div key={time as string} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "20px" }}>
                <div style={{ textAlign: "right" }}>
                  <span className="sc-tag-text" style={{ color: "var(--brass-400)" }}>{time}</span>
                </div>
                <div style={{ borderLeft: "1px solid var(--line-brass)", paddingLeft: "22px", paddingBottom: i < arr.length - 1 ? "28px" : 0, position: "relative" }}>
                  <span style={{ position: "absolute", left: "-5px", top: "4px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--brass-500)" }} />
                  <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "6px" }} dangerouslySetInnerHTML={{ __html: title as string }} />
                  <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }} dangerouslySetInnerHTML={{ __html: body as string }} />
                </div>
              </div>
            ))}
          </div>
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
                <Tag tone="patina">Dinner included</Tag>
                <Tag tone="ink">All ages w/ guardian</Tag>
                <Tag tone="brass">21+ for the bar</Tag>
              </div>
              <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                Tell us about allergies and dietary needs when you reserve and again at the dock — we log a plant-based and a shellfish-free
                manifest for every seating.
              </p>
              <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
                The infield room is step-free and ADA accessible. Need something specific? Write{" "}
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
                Get Tickets
              </ButtonLink>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
