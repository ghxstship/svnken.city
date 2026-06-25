"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/shop/cart";
import type { SeatingInventory, SectionInventory, Seat } from "@/lib/inventory";

interface Props {
  inventory: SeatingInventory;
  display: string; // "Thu · Nov 5"
  time: string; // "8:00 PM"
  buyUrl: string;
}

const seatBase: React.CSSProperties = {
  width: 22,
  height: 22,
  borderRadius: 3,
  padding: 0,
  fontSize: 0,
  lineHeight: 0,
  cursor: "pointer",
  transition: "background var(--dur-fast) var(--ease-tide), border-color var(--dur-fast) var(--ease-tide)",
};

export function SeatMap({ inventory, display, time, buyUrl }: Props) {
  const { lines, add, remove } = useCart();
  const [selected, setSelected] = React.useState<Set<string>>(new Set());

  // Seats already in the cart this session (held by the user).
  const heldIds = React.useMemo(() => new Set(lines.filter((l) => l.kind === "ticket").map((l) => l.id)), [lines]);
  const lineId = (seat: Seat) => `ticket:${seat.id}`;

  function toggle(section: SectionInventory, seat: Seat) {
    if (seat.taken) return;
    const id = lineId(seat);
    if (heldIds.has(id)) {
      remove(id); // already in hold → release it
      return;
    }
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(seat.id)) next.delete(seat.id);
      else next.add(seat.id);
      return next;
    });
  }

  const selectedList = inventory.sections.flatMap((sec) =>
    sec.seats.filter((s) => selected.has(s.id)).map((s) => ({ sec, s })),
  );
  const selectedTotal = selectedList.reduce((n, { sec }) => n + sec.price, 0);

  function addToHold() {
    selectedList.forEach(({ sec, s }) => {
      add({
        id: lineId(s),
        kind: "ticket",
        channel: "speakeasy",
        name: `${display} · ${time}`,
        detail: `${sec.name} · Seat ${s.label}`,
        price: sec.price,
        buyUrl,
        maxQty: 1,
      });
    });
    setSelected(new Set());
  }

  if (inventory.totalAvailable === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div className="sc-eyebrow" style={{ color: "var(--rust-400)", marginBottom: "12px" }}>Sold Out</div>
        <p className="sc-body" style={{ color: "var(--text-muted)", marginBottom: "22px" }}>
          Every seat at this seating is gone. Join the waitlist and we&rsquo;ll write you first if the tide turns.
        </p>
        <Link href="/#waitlist" className="sc-label" style={{ color: "var(--brass-400)" }}>Join the Waitlist →</Link>
      </div>
    );
  }

  return (
    <div>
      {/* legend */}
      <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginBottom: "20px" }}>
        <Legend swatch={{ background: "transparent", border: "1px solid var(--brass-500)" }} label="Available" />
        <Legend swatch={{ background: "var(--brass-500)", border: "1px solid var(--brass-600)" }} label="Selecting" />
        <Legend swatch={{ background: "var(--verdigris-500)", border: "1px solid var(--verdigris-600)" }} label="In your hold" />
        <Legend swatch={{ background: "var(--abyss-600)", border: "1px solid var(--abyss-500)" }} label="Taken" />
      </div>

      {/* orientation */}
      <div style={{ textAlign: "center", marginBottom: "18px" }}>
        <div
          className="sc-label"
          style={{
            display: "inline-block",
            color: "var(--brass-400)",
            border: "1px solid var(--line-brass)",
            borderRadius: "var(--radius-sm)",
            padding: "8px 40px",
            letterSpacing: "0.28em",
            background: "radial-gradient(120% 200% at 50% 0%, color-mix(in oklab, var(--verdigris-600) 30%, transparent), transparent 70%)",
          }}
        >
          The Water · Performance
        </div>
      </div>

      {/* sections */}
      <div style={{ overflowX: "auto", paddingBottom: "8px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "26px", minWidth: "fit-content" }}>
          {inventory.sections.map((sec) => (
            <div key={sec.id}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}>
                  <h3 className="sc-h4" style={{ color: "var(--text-strong)", margin: 0 }}>{sec.name}</h3>
                  <span className="sc-tag-text" style={{ color: "var(--brass-400)" }}>${sec.price}</span>
                  <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>{sec.blurb}</span>
                </div>
                <span className="sc-tag-text" style={{ color: sec.available === 0 ? "var(--rust-400)" : "var(--text-muted)" }}>
                  {sec.available === 0 ? "Section full" : `${sec.available} of ${sec.count} left`}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${sec.cols}, 22px)`,
                  gap: 6,
                  justifyContent: "center",
                  padding: "12px",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--surface)",
                }}
              >
                {sec.seats.map((seat) => {
                  const held = heldIds.has(lineId(seat));
                  const isSel = selected.has(seat.id);
                  let style: React.CSSProperties;
                  if (seat.taken) style = { background: "var(--abyss-600)", border: "1px solid var(--abyss-500)", cursor: "not-allowed" };
                  else if (held) style = { background: "var(--verdigris-500)", border: "1px solid var(--verdigris-600)" };
                  else if (isSel) style = { background: "var(--brass-500)", border: "1px solid var(--brass-600)" };
                  else style = { background: "transparent", border: "1px solid var(--brass-500)" };
                  return (
                    <button
                      key={seat.id}
                      onClick={() => toggle(sec, seat)}
                      disabled={seat.taken}
                      aria-label={`${sec.name} seat ${seat.label}${seat.taken ? " (taken)" : held ? " (in your hold)" : isSel ? " (selected)" : ` ($${sec.price})`}`}
                      title={`${sec.name} · ${seat.label} · $${sec.price}`}
                      style={{ ...seatBase, ...style }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* summary */}
      <div
        style={{
          marginTop: "26px",
          padding: "18px 20px",
          border: "1px solid var(--line-brass)",
          borderRadius: "var(--radius-md)",
          background: "var(--surface-raised)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div>
          <div className="sc-h4" style={{ color: "var(--text-strong)" }}>
            {selectedList.length === 0
              ? "No seats selected"
              : `${selectedList.length} seat${selectedList.length === 1 ? "" : "s"} · $${selectedTotal}`}
          </div>
          <div className="sc-tag-text" style={{ color: "var(--text-faint)" }}>
            {selectedList.length === 0
              ? "Tap open seats above to choose where you sit."
              : selectedList.map(({ s }) => s.label).join(" · ")}
          </div>
        </div>
        <Button size="lg" onClick={addToHold} disabled={selectedList.length === 0}>
          Add to Hold
        </Button>
      </div>
      {heldIds.size > 0 && (
        <p className="sc-small sc-italic" style={{ color: "var(--text-muted)", marginTop: "14px", textAlign: "center" }}>
          {heldIds.size} seat{heldIds.size === 1 ? "" : "s"} already in your hold (shown in patina). Tap a held seat to release it, or{" "}
          <Link href="/shop/cart" style={{ color: "var(--brass-400)" }}>review your hold →</Link>
        </p>
      )}
    </div>
  );
}

function Legend({ swatch, label }: { swatch: React.CSSProperties; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
      <span style={{ width: 16, height: 16, borderRadius: 3, ...swatch }} />
      <span className="sc-tag-text" style={{ color: "var(--text-muted)" }}>{label}</span>
    </span>
  );
}
