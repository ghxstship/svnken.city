import React from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow, OrnamentLabel, PhotoPlaceholder, SectionHead } from "@/components/ui/Atoms";
import { Wordmark } from "@/components/ui/Wordmark";
import { NotifyForm } from "@/components/site/NotifyForm";
import { SITE } from "@/lib/site";
import { SHOWS, RUN_LABEL, totalSeatings } from "@/lib/shows";
import { MANIFEST } from "@/lib/manifest";

export default function HomePage() {
  const previewDishes = MANIFEST[1].items.slice(0, 3);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "120px 24px 100px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto" }}>
          <Eyebrow style={{ letterSpacing: "var(--tracking-mega)", marginBottom: "26px" }}>
            Below the Waterline · A Salvage City Voyage
          </Eyebrow>
          <h1 style={{ margin: "0 auto", width: "min(100%, 720px)", filter: "drop-shadow(0 4px 44px rgba(0,0,0,.7))" }}>
            <Wordmark fill="var(--bone-100)" />
          </h1>
          <OrnamentLabel style={{ margin: "26px 0 30px" }}>{SITE.tagline}</OrnamentLabel>
          <p className="sc-lead" style={{ color: "var(--text)", maxWidth: "640px", margin: "0 auto 16px" }}>
            At the turn of the tide, a sunken city rises from the dark — its drowned cathedral still tolling through the water — and for six
            nights, it opens its gates. Descend on a five-course voyage where divers surface the day&rsquo;s catch, performers become the
            creatures of the deep, and a lost, luminous empire wakes to meet your table. There is no menu — only the manifest of what we
            brought up today.
          </p>
          <p className="sc-body" style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 20px" }}>
            Claude Debussy&rsquo;s <em style={{ color: "var(--text)" }}>The Sunken Cathedral</em>, reimagined as an immersive electro rock opera —
            fine dining at a Michelin pitch, Cirque-grade spectacle, and the pulse of EDC, five fathoms down.
          </p>
          <div className="sc-tag-text" style={{ color: "var(--brass-400)", marginBottom: "34px" }}>{RUN_LABEL}</div>
          <div className="row-center">
            <ButtonLink href="/tickets" size="lg">
              Register to Board
            </ButtonLink>
            <ButtonLink href="/experience" size="lg" variant="secondary">
              Dive Deeper
            </ButtonLink>
          </div>
          <div className="row-center" style={{ marginTop: "30px", gap: "10px" }}>
            <Badge tone="patina" dot>
              Tickets on {SITE.ticketing.platform}
            </Badge>
            <Badge tone="brass">{totalSeatings()} Seatings · 6 Nights</Badge>
            <Badge tone="neutral">Lot54 · The Vanguard</Badge>
          </div>
        </div>
      </section>

      {/* ---------- RUN STRIP ---------- */}
      <section style={{ borderBottom: "1px solid var(--line)", background: "var(--abyss-900)" }}>
        <div className="container" style={{ display: "flex", gap: "8px", overflowX: "auto", padding: "18px 40px" }}>
          {SHOWS.map((d) => (
            <a
              key={d.date}
              href={`/tickets#day-${d.date}`}
              style={{
                flex: "1 0 auto",
                minWidth: "150px",
                textDecoration: "none",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-sm)",
                padding: "12px 16px",
                background: "var(--surface)",
              }}
            >
              <div className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "4px" }}>{d.display}</div>
              <div className="sc-tag-text" style={{ color: "var(--brass-400)" }}>
                {d.label} · {d.seatings.length} {d.seatings.length === 1 ? "show" : "shows"}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow style={{ marginBottom: "18px" }}>The House</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "20px" }}>
              We set the table where the town went under.
            </h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
              In &rsquo;47 the grove flooded and never drained. The salvage crews stayed, and a kitchen grew up around the wreck — brass rails,
              lantern light, and whatever the reef gives back.
            </p>
            <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "26px" }}>
              For one week, SVNKEN CITY surfaces at Lot54, The Vanguard — the official EDC Orlando home. One long table, a live crew, and a
              five-course descent pulled from the water. You sit where the lanterns reach.
            </p>
            <ButtonLink href="/experience" variant="secondary">
              What to expect →
            </ButtonLink>
          </div>
          <PhotoPlaceholder label="Photo — The Wreck Bar at first seating" depth="Pier 9" h={360} />
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container section">
          <SectionHead eyebrow="The Crossing" title="Three tides, one seating" center style={{ marginBottom: "40px" }} />
          <div className="cards-3">
            {[
              ["I", "Board at the dock", "Arrive 15 minutes early. The crew finds your name on the manifest and the room seals as the descent begins."],
              ["II", "Descend, course by course", "Five courses drop you a depth zone deeper while the crew works the room. Roughly ninety minutes, surface to city."],
              ["III", "Surface", "The city ignites, then the room lifts back to warm light — and on festival nights, the afterparty carries the rest."],
            ].map(([num, title, body]) => (
              <Card key={num as string} interactive>
                <div className="sc-wordmark" style={{ color: "var(--brass-500)", fontSize: "28px", marginBottom: "14px" }}>{num}</div>
                <h3 className="sc-h3" style={{ color: "var(--text-strong)", marginBottom: "10px" }}>{title}</h3>
                <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0 }}>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MANIFEST PREVIEW ---------- */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "28px", flexWrap: "wrap" }}>
            <SectionHead eyebrow="Reclaimed from the Deep" title="Pulled this morning" />
            <ButtonLink href="/manifest" variant="ghost">
              See the full manifest →
            </ButtonLink>
          </div>
          <div className="cards-3">
            {previewDishes.map((dish) => (
              <Card key={dish.name} interactive style={{ padding: 0, overflow: "hidden" }}>
                <PhotoPlaceholder label={`Photo — ${dish.name}`} />
                <div style={{ padding: "var(--space-5)" }}>
                  <h3 className="sc-h4" style={{ color: "var(--text-strong)", marginBottom: "8px" }}>{dish.name}</h3>
                  <p className="sc-small sc-italic" style={{ color: "var(--text-muted)", marginBottom: "14px" }}>{dish.desc}</p>
                  <Tag tone="brass">{dish.lot}</Tag>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TICKETS CTA ---------- */}
      <section style={{ background: "var(--abyss-900)", borderTop: "1px solid var(--line)" }}>
        <div className="container section">
          <Card framed style={{ padding: "clamp(32px, 5vw, 56px)", textAlign: "center" }}>
            <Eyebrow style={{ marginBottom: "16px" }}>On Sale Now · {SITE.ticketing.platform}</Eyebrow>
            <h2 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>
              Claim a seat below the waterline.
            </h2>
            <p className="sc-lead" style={{ color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto 28px" }}>
              Seats run from ${SITE.pricing.softOpening.price}. Dinner is included in every fare. When a seating fills, it&rsquo;s gone —
              the tide does not wait.
            </p>
            <div className="row-center">
              <ButtonLink href="/tickets" size="lg">
                See Dates & Times
              </ButtonLink>
              <ButtonLink href="/group-bookings" size="lg" variant="secondary">
                Group Tables
              </ButtonLink>
            </div>
          </Card>
        </div>
      </section>

      {/* ---------- WAITLIST ---------- */}
      <section className="section anchor" id="waitlist">
        <div className="container split">
          <div>
            <Eyebrow style={{ marginBottom: "16px" }}>The Waitlist</Eyebrow>
            <h2 className="sc-h1" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>
              If the tide turns, we&rsquo;ll write you first.
            </h2>
            <p className="sc-body" style={{ color: "var(--text-muted)", margin: 0 }}>
              Sold-out seatings free up. Leave your name at the dock and we&rsquo;ll send openings, the night&rsquo;s manifest, and word when the
              next run goes on sale.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <NotifyForm />
          </div>
        </div>
      </section>
    </>
  );
}
