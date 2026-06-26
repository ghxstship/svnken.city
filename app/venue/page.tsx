import React from "react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow, PhotoPlaceholder, SectionHead } from "@/components/ui/Atoms";
import { WeekendProgram } from "@/components/site/WeekendProgram";
import { SITE } from "@/lib/site";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Harbor · Lot54 at The Vanguard",
  description:
    "Find SVNKEN CITY at Lot54, The Vanguard, in downtown Orlando. Getting there, the wreck bar and afterparty, parking, and what to expect.",
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
            {SITE.venue.context} · {SITE.venue.address}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <PhotoPlaceholder label="Lot54 at The Vanguard, Orlando" depth="578 N Orange Ave" src={IMG.room[3]} h={400} />
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>Getting There</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "18px" }}>A drowned city in downtown Orlando.</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              SVNKEN CITY surfaces at Lot54, the outdoor room at The Vanguard — minutes from the heart of downtown Orlando, for six nights
              only. {SITE.venue.note}
            </p>
            <div className="row" style={{ gap: "10px", marginBottom: "26px" }}>
              <Tag tone="patina">Downtown Orlando</Tag>
              <Tag tone="brass">Wreck bar &amp; afterparty</Tag>
              <Tag tone="ink">Step-free access</Tag>
            </div>
            <div className="row">
              <ButtonLink href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} external variant="secondary">
                Open in Maps →
              </ButtonLink>
              <ButtonLink href="/tickets">Register to Board</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* AFTER HOURS */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container section">
          <SectionHead eyebrow="After Hours" title="Bar, voyage, afterparty" style={{ marginBottom: "16px" }} />
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "640px", marginBottom: "32px" }}>
            On the main run (Nov 5&ndash;8), Lot54 runs long: the wreck bar opens before the first seating, the five-course voyage runs through
            the night, and a late afterparty carries on once the last plate clears. Dinner guests get the door.
          </p>
          <WeekendProgram />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Plan Your Night" title="What to know before you set out" center style={{ marginBottom: "40px" }} />
          <div className="cards-3">
            {[
              ["One ticket, the whole night", "Your SVNKEN CITY seating ticket covers the room, the five-course voyage, and — on the main run — the wreck bar before and the afterparty after."],
              ["Arrive 15 minutes early", "Get to the dock a quarter-hour before your seating so the crew can log you in before the room seals and the voyage begins."],
              ["Low light, haze & sound", "The voyage runs dark, with theatrical haze and loud, immersive audio. Flag any sensory needs and we&rsquo;ll set your seat."],
              ["Dress for the deep", "Shipwrecked formal rewards the room — brass, bone, deep teal. Closed-toe footwear is wise for the outdoor lot."],
              ["Parking & rideshare", "Downtown parking and rideshare drop are close. On busy nights, a rideshare straight to The Vanguard is the easy call."],
              ["The afterparty", "On the main run, the night ends with a late afterparty at Lot54 — dinner guests get the door."],
            ].map(([title, body]) => (
              <Card key={title as string} interactive>
                <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: title as string }} />
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }} dangerouslySetInnerHTML={{ __html: body as string }} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <Card framed style={{ padding: "clamp(28px, 4vw, 48px)", textAlign: "center" }}>
            <h2 className="sc-h2" style={{ color: "var(--text-strong)", marginBottom: "12px" }}>Questions about the voyage?</h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 24px" }}>
              The logbook answers most of it — tickets, after hours, access, allergies, and the sensory warnings.
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
