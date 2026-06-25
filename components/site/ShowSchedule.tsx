import React from "react";
import Link from "next/link";
import { SHOWS, STATUS_COPY, seatingSlug, type ShowDay, type Seating } from "@/lib/shows";
import { seatingAvailability } from "@/lib/inventory";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";

function kindTone(kind: ShowDay["kind"]) {
  if (kind === "soft-opening") return "patina" as const;
  if (kind === "closing") return "ink" as const;
  return "brass" as const;
}

function statusTone(s: Seating["status"]) {
  if (s === "sold-out") return "full" as const;
  if (s === "limited") return "brass" as const;
  return "available" as const;
}

function SeatingRow({ s, day }: { s: Seating; day: ShowDay }) {
  const soldOut = s.status === "sold-out";
  const { available, total, fromPrice } = seatingAvailability(day.date, s.time24);
  const pct = total ? available / total : 0;
  const barColor = soldOut ? "var(--rust-500)" : pct < 0.25 ? "var(--brass-500)" : "var(--verdigris-500)";

  const inner = (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
        <span className="sc-h4" style={{ color: "var(--text-strong)", minWidth: "72px" }}>{s.time}</span>
        <Badge tone={statusTone(s.status)} dot>{STATUS_COPY[s.status]}</Badge>
      </div>
      <div className="seating-meta">
        {/* live availability meter */}
        <div style={{ textAlign: "right", minWidth: "84px" }}>
          <div className="sc-tag-text" style={{ color: soldOut ? "var(--rust-400)" : "var(--text-muted)" }}>
            {soldOut ? "0 left" : `${available} left`}
          </div>
          <div style={{ width: "84px", height: "3px", marginTop: "4px", background: "var(--line)", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{ width: `${Math.max(soldOut ? 0 : 4, pct * 100)}%`, height: "100%", background: barColor }} />
          </div>
        </div>
        <span className="sc-label" style={{ color: soldOut ? "var(--text-faint)" : "var(--brass-400)", fontSize: "12px", whiteSpace: "nowrap" }}>
          {soldOut ? "Waitlist →" : `Select seats · from $${fromPrice} →`}
        </span>
      </div>
    </>
  );

  const rowStyle: React.CSSProperties = {
    padding: "12px 14px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--line)",
    background: soldOut ? "transparent" : "var(--surface-sunk)",
    opacity: soldOut ? 0.6 : 1,
    textDecoration: "none",
  };

  return (
    <Link className="seating-row" href={soldOut ? "/#waitlist" : `/tickets/${seatingSlug(day.date, s.time24)}`} style={rowStyle}>
      {inner}
    </Link>
  );
}

export function ShowSchedule() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {SHOWS.map((day) => (
        <div
          key={day.date}
          className="anchor"
          id={`day-${day.date}`}
          style={{
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-md)",
            background: "var(--surface-raised)",
            boxShadow: "var(--shadow-md)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "20px 22px",
              borderBottom: "1px solid var(--line)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px", flexWrap: "wrap" }}>
                <h3 className="sc-h3" style={{ color: "var(--text-strong)", margin: 0 }}>
                  {day.display}
                </h3>
                <Tag tone={kindTone(day.kind)}>{day.label}</Tag>
              </div>
              <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0, maxWidth: "440px" }}>
                {day.blurb}
              </p>
            </div>
            <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>
              {day.seatings.length} {day.seatings.length === 1 ? "seating" : "seatings"}
            </span>
          </div>

          <div className={`seating-grid${day.seatings.length >= 3 ? " cols-2" : ""}`}>
            {day.seatings.map((s) => (
              <SeatingRow key={s.time24} s={s} day={day} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
