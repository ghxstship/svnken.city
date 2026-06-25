import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, OrnamentLabel, SectionHead, Rule } from "@/components/ui/Atoms";
import { NotifyForm } from "@/components/site/NotifyForm";
import { SocialLinks } from "@/components/site/SocialLinks";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community · The Salvage Society",
  description:
    "Join the SVNKEN CITY community — the Salvage Society. Drop alerts and the night's manifest, the crew on social, ambassador tables, and your own voyage shared with the deep.",
};

const WAYS: [string, string, string][] = [
  [
    "Join the Manifest",
    "Drop alerts, waitlist openings, and the night's tide list — the first to know when the city surfaces, and the first back in when a seat frees up.",
    "Newsletter",
  ],
  [
    "Follow the Tide",
    "The crew posts from below the waterline all week — manifests, creatures, behind-the-rail. Tag us and you might surface in the gallery.",
    "Social",
  ],
  [
    "Share Your Voyage",
    "Post your night with #SVNKENCITY. The best captures from the deep get re-surfaced across our channels and the media gallery.",
    "#SVNKENCITY",
  ],
  [
    "Salvage Society Ambassadors",
    "Bring a crew, host a table, spread the word. Ambassadors get early access to new runs, perks at the wreck bar, and a name on the manifest.",
    "Ambassadors",
  ],
  [
    "Group Tables",
    "Eight or eighty, gather your people below. Reserved rails, private seatings, and full buyouts for the crew you choose.",
    "Tables",
  ],
  [
    "Crew the Run",
    "Want to work the room? We hire across twelve departments for the run — kitchen, performance, production, and more.",
    "Careers",
  ],
];

export default function CommunityPage() {
  return (
    <>
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "100px 24px 72px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "780px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "16px" }}>The Community</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>The Salvage Society</h1>
          <OrnamentLabel style={{ marginBottom: "22px" }}>Everyone the tide brought in</OrnamentLabel>
          <p className="sc-lead" style={{ color: "var(--text)", maxWidth: "600px", margin: "0 auto" }}>
            A city this strange needs a crew to keep it alive. Divers, regulars, ambassadors, and first-timers — the Salvage Society is
            everyone who answers when the lanterns are lit.
          </p>
        </div>
      </section>

      {/* WAYS TO BELONG */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Come Aboard" title="Six ways to belong" style={{ marginBottom: "32px" }} />
          <div className="cards-3">
            {WAYS.map(([title, body, tag]) => (
              <Card key={title} interactive style={{ display: "flex", flexDirection: "column" }}>
                <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "10px" }}>{title}</h3>
                <p className="sc-small" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>{body}</p>
                <div style={{ marginTop: "auto" }}>
                  <Tag tone="brass">{tag}</Tag>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE MANIFEST */}
      <section className="anchor" id="join" style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section split" style={{ alignItems: "start" }}>
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>Join the Manifest</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>Get the night before everyone else.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              Leave your name at the dock. We send on-sale alerts, the night&rsquo;s manifest, and waitlist openings when seats free up — and
              nothing else.
            </p>
            <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
              Already aboard? Pull your people in too.
            </p>
            <Rule style={{ margin: "24px 0 18px" }} />
            <span className="sc-label" style={{ color: "var(--brass-400)", display: "block", marginBottom: "12px" }}>Follow the Tide</span>
            <SocialLinks size={40} gap={10} />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <NotifyForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Card framed style={{ padding: "clamp(28px, 4vw, 48px)", textAlign: "center" }}>
            <Eyebrow style={{ marginBottom: "12px" }}>The Salvage Society</Eyebrow>
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>The city is only as alive as its crew.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 24px" }}>
              Six nights below the waterline. Bring your people and become part of the manifest.
            </p>
            <div className="row-center">
              <ButtonLink href="/tickets" size="lg">Register to Board</ButtonLink>
              <ButtonLink href="/group-bookings" size="lg" variant="secondary">Group Tables</ButtonLink>
            </div>
          </Card>
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", textAlign: "center", marginTop: "18px" }}>
            Press &amp; partnerships: <a href={`mailto:${SITE.contact.general}`}>{SITE.contact.general}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
