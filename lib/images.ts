// ============================================================
// SVNKEN CITY · IMAGERY
// Curated stock (Unsplash CDN, hotlinkable) mapped to the five senses
// and the world: lost ruins, festival light, sea & coast, the table,
// salvage textures, the company. Swap for owned photography post-shoot.
// ============================================================

const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;

export const IMG = {
  // Sight — lost ruins beneath the surface
  ruins: [u("1652971489919-b22d11d257fb"), u("1758970442148-55673b672053"), u("1767724588099-deba67ed8912")],
  // Sound — epic / electronic / festival light
  sound: [u("1459749411175-04bf5292ceea"), u("1470229722913-7c0e2dbbafd3"), u("1540039155733-5bb30b53aa14")],
  // Scent — salt sea air, coastal breeze
  sea: [u("1569091923578-399adee3f634"), u("1590309285152-3a4919040b78"), u("1608721636036-f412d14e608a")],
  // Taste — global fusion, plated for the deep
  food: [u("1705948730553-3ea0c89ae6fb"), u("1621494268492-d01b98eba7e4"), u("1660652377925-d615178531db")],
  // Touch — wood, rope, sand, sailcloth
  textures: [u("1573157726810-b51b782f3bfd"), u("1451195090173-2e0781d7c33e"), u("1519142891393-97f6fce43ee4")],
  // The company — aerial / performers
  company: [u("1738681172508-12b39b19ffd2"), u("1773459516717-c772070071c7")],
  // The room — candlelit, salvage bar
  room: [u("1469234496837-d0101f54be3e"), u("1703793578040-07e1778b6b2c"), u("1653205580794-309d27d8c1c7"), u("1695641738244-25e5355e9a42")],
};

export const SENSE_IMG: Record<string, string> = {
  Sight: IMG.ruins[0],
  Sound: IMG.sound[0],
  Scent: IMG.sea[0],
  Taste: IMG.food[0],
  Touch: IMG.textures[0],
};
