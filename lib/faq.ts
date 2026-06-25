export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  group: string;
  items: FaqItem[];
}

export const FAQ: FaqGroup[] = [
  {
    group: "The Experience",
    items: [
      {
        q: "What is SVNKEN CITY?",
        a: "It is the EDC Orlando surfacing of Salvage City Supper Club — a seated dinner-theatre voyage staged below the waterline. One long table, lantern light, a live crew, and a multi-course manifest pulled from the water. You are not an audience; you are on the manifest.",
      },
      {
        q: "How long is a seating?",
        a: "Plan for roughly 90 minutes from the moment the lanterns are lit. Arrive 15 minutes before your seating time so the crew can log you in before the room goes under.",
      },
      {
        q: "Is this a concert or a dinner?",
        a: "Both, and neither. It is a full multi-course dinner wrapped in live performance and sound. It runs inside EDC Orlando but is its own world — a quiet, candlelit harbor away from the main stages.",
      },
      {
        q: "Is there a dress code?",
        a: "Come as you are for the festival, but the room rewards a little salvage-glamour. Think shipwrecked formal — brass, bone, deep teal. Closed-toe footwear is wise on the infield.",
      },
    ],
  },
  {
    group: "Tickets",
    items: [
      {
        q: "Where do I buy tickets?",
        a: "All seats are sold on Speakeasy — not Ticket Fairy. Every seating links straight to its Speakeasy checkout from the Tickets page. If a link points anywhere else, it is not us.",
      },
      {
        q: "How much are tickets?",
        a: "Soft Opening preview seats are $95. The full Manifest seating is $145 per seat. The Captain's Table — front rail, wreck-cellar pairing, welcome pour — is $225. Dinner is included in every fare.",
      },
      {
        q: "Are tickets refundable?",
        a: "Seats are non-refundable but transferable through Speakeasy up to 48 hours before your seating. The tide does not wait, and neither do we.",
      },
      {
        q: "Do I need an EDC Orlando wristband?",
        a: "Yes. SVNKEN CITY is staged on the Tinker Field infield inside the festival footprint, so a valid EDC Orlando wristband is required to reach the room in addition to your seating ticket.",
      },
    ],
  },
  {
    group: "Food & Access",
    items: [
      {
        q: "Can you handle allergies and dietary needs?",
        a: "Yes — tell us when you reserve and again at the dock. We log a plant-based and a shellfish-free manifest for every seating. Severe allergies: write us at bonvoyage@svnken.city before your night.",
      },
      {
        q: "Is the venue accessible?",
        a: "The infield room is step-free and ADA accessible. If you have specific access needs, write bonvoyage@svnken.city and we will set your seat where the lanterns reach.",
      },
      {
        q: "Is it 21+?",
        a: "The room is all-ages with a guardian, but alcohol service is 21+ with valid ID. Every fare includes the full food manifest regardless of age.",
      },
    ],
  },
];
