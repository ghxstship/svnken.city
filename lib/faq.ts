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
        a: "It is a theatrical expedition dinner — a five-course voyage through the ocean's depth zones, staged below the waterline, ending in the discovery of a drowned, luminous city. One long table, lantern light, a live crew, and a manifest pulled from the water. You are not an audience; you board as crew.",
      },
      {
        q: "How long is a seating?",
        a: "Plan for roughly 90 minutes from the moment the room seals and the voyage begins. Arrive 15 minutes before your seating time so the crew can log you in.",
      },
      {
        q: "Is this a concert or a dinner?",
        a: "Both, and neither. It is a full five-course dinner wrapped in live performance, projection, and sound — a voyage you eat your way through. It runs at Lot54, The Vanguard, in downtown Orlando — its own world for six nights only.",
      },
      {
        q: "Will you spoil the ending?",
        a: "No. The fifth course — the city itself — is never shown on this site or anywhere else. It surfaces once, at your table, and only there.",
      },
      {
        q: "Is there a dress code?",
        a: "The room rewards a little salvage-glamour. Think shipwrecked formal — brass, bone, deep teal. Closed-toe footwear is wise for the outdoor lot.",
      },
    ],
  },
  {
    group: "Tickets & After Hours",
    items: [
      {
        q: "Where do I buy tickets?",
        a: "All seats are sold on Speakeasy — not Ticket Fairy. Every seating links straight to its Speakeasy checkout from the Tickets page. If a link points anywhere else, it is not us.",
      },
      {
        q: "How much are tickets?",
        a: "Soft Opening preview seats are $129. The Manifest seating is $169. The Chef's Pass — a counter seat at the pass — is $229. The Captain's Table, with front-rail seating, wreck-cellar pairing, and a welcome pour, is $299. Every fare is the full five-course voyage with dinner included.",
      },
      {
        q: "Is there an afterparty?",
        a: "On the main run (Nov 5–8) the wreck bar opens before the first seating and a late afterparty carries the night after the last plate clears, all at Lot54. Dinner guests get the door.",
      },
      {
        q: "Do I need anything besides my ticket?",
        a: "Just your seating ticket and an ID for the bar. Lot54 is at The Vanguard in downtown Orlando — arrive 15 minutes early so the crew can log you in before the room seals.",
      },
      {
        q: "Are tickets refundable?",
        a: "Seats are non-refundable but transferable through Speakeasy up to 48 hours before your seating. The tide does not wait, and neither do we.",
      },
    ],
  },
  {
    group: "Food, Access & Sensory",
    items: [
      {
        q: "Can you handle allergies and dietary needs?",
        a: "Yes, and a five-course tasting needs to know in advance — tell us when you reserve and again at the dock. We log a plant-based and a shellfish-free manifest for every seating. Severe allergies: write bonvoyage@svnken.city before your night.",
      },
      {
        q: "What are the sensory conditions?",
        a: "The voyage runs in low light with theatrical haze and loud, immersive sound and music throughout. If you are sensitive to haze, darkness, or volume, write bonvoyage@svnken.city and we will set your seat and prep the crew.",
      },
      {
        q: "Is the venue accessible?",
        a: "The room is step-free and ADA accessible, with companion seating. For specific access needs — mobility, assistive listening, or anything else — write bonvoyage@svnken.city and we will set your seat where the lanterns reach.",
      },
      {
        q: "Is it 21+?",
        a: "The dinner is all-ages with a guardian, but alcohol service is 21+ with valid ID. Every fare includes the full five-course manifest regardless of age. The late afterparty may carry its own age policy.",
      },
    ],
  },
];
