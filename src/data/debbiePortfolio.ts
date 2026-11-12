// Private portfolio for Debbie Hennessy. Facts are from the public
// UtahRealEstate.com listing pages fetched November 12, 2026, plus the
// county notes already published on the Clements Lane page for MLS 2184160.
// Not linked from the public site.
import photoManifest from "./debbiePhotos.json";

export const token = "d944019a9f26b2e59bfb35a2";
export const portfolioBase = `/p/${token}`;
export const asOf = "November 12, 2026";

export type Photo = [string, number, number];
export type Pair = [string, string];

export interface PortfolioListing {
  mls: string;
  /** Short label for badges. */
  statusLabel: string;
  /** One plain sentence under the badge when the status needs a reading. */
  statusNote?: string;
  title: string;
  street: string;
  town: string;
  stateZip: string;
  county: string;
  price: number;
  beds: number;
  /** Public header bath count, as printed. */
  baths: string;
  sqft: number;
  acres: string;
  kind: string;
  hook: string;
  summary: string[];
  facts: Pair[];
  pillars: { title: string; copy: string }[];
  improvements: Pair[];
  specGroups: { title: string; rows: Pair[] }[];
  steps: string[];
  brokerage: string;
  mapQuery: string;
  sources: { label: string; href: string }[];
  notes: string[];
}

const photos = photoManifest as Record<string, Photo[]>;

export function photosFor(mls: string): Photo[] {
  const list = photos[mls];
  if (!list?.length) throw new Error(`No photos for MLS ${mls}`);
  return list;
}

const ure = (mls: string) => ({
  label: `UtahRealEstate.com MLS #${mls}`,
  href: `https://www.utahrealestate.com/${mls}`,
});

export const listings: PortfolioListing[] = [
  {
    mls: "2159371",
    statusLabel: "Active",
    title: "Corral Road, Scofield",
    street: "1933 N Corral Rd",
    town: "Scofield",
    stateZip: "UT 84526",
    county: "Carbon",
    price: 699900,
    beds: 4,
    baths: "4",
    sqft: 3048,
    acres: "0.44",
    kind: "Cabin",
    hook: "1999 log cabin on 0.44 acres in Scofield Mountain Home, west of Scofield Reservoir. Snow-packed access is by ATV or tracked vehicle.",
    summary: [
      "MLS #2159371 asks $699,900 for a 1999 cabin at 1933 N Corral Rd in Scofield, Carbon County. The listing places it in Scofield Mountain Home, west of Scofield Reservoir.",
      "The public header counts 4 bedrooms and 4 baths, and 3,048 sq ft. The floor breakdown is 2 bedrooms on the main floor and 2 in the basement, with a loft on the upper floor. Baths on that breakdown are 1 half on the upper floor, 1 full and 1 three-quarter on the main floor, and 1 full in the basement. The remarks say 3.5 baths. The remarks also say the square footage is a courtesy estimate and the buyer should measure it.",
      "Access on snow-packed roads is by ATV or tracked vehicle. The lot field marks the road unpaved. The remarks say the cabin is about 90 minutes from Utah County and about 2 hours from Salt Lake City.",
    ],
    facts: [
      ["Asking price", "$699,900"],
      ["Acreage", "0.44 acres"],
      ["Water", "Shares, spring, and well. HOA amenities include water paid."],
      ["Access", "Snow-packed roads, by ATV or tracked vehicle. The road is unpaved."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "0.44 acres. Terrain is hilly and mountain, and the lot is wooded, with lake and mountain views. Mature trees and pines. Log, stone, and metal exterior. Metal pitched roof. One deck, a balcony, and a covered deck. No zoning field is published on the public listing page.",
      },
      {
        title: "Water",
        copy: "Water fields: shares, spring, and well. Water is listed as connected. The HOA amenity list includes water paid. Sewer is a septic tank.",
      },
      {
        title: "Utilities and access",
        copy: "Power and gas are listed as connected. Heat is forced air and propane. Cooling is natural ventilation. Garage capacity is 1, attached, plus uncovered parking. Winter access on snow-packed roads is by ATV or tracked vehicle.",
      },
    ],
    improvements: [
      ["Upper floor", "744 sq ft. One family room, listed as the loft. One half bath."],
      ["Main floor", "1,152 sq ft. Two bedrooms, one full bath, one three-quarter bath, a family room, a kitchen, and a bar."],
      ["Basement", "1,152 sq ft, 95% finished, daylight, with an entrance. Two bedrooms, one full bath, and a laundry room."],
      ["Outside", "One deck. Balcony, covered deck, basement entrance, double-pane windows, outdoor lighting. Garage capacity 1."],
      ["Also listed", "Fire alarm, primary bath, great room, freestanding range and oven, vaulted ceilings. Carpet and tile. Blinds, full window coverings, and shades."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$699,900"],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "176, as of November 12, 2026"],
          ["MLS #", "2159371"],
          ["HOA dues", "$550 per year"],
          ["HOA change fee", "$100"],
          ["HOA rental cap", "No, as the listing marks it"],
          ["Taxes", "$6,085 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "Cabin"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "1933 N Corral Rd, Scofield, UT 84526"],
          ["County", "Carbon"],
          ["Subdivision", "Scofield Mountain Home, west of Scofield Reservoir"],
          ["Lot size", "0.44 acres"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot", "Unpaved road, hilly, mountain, lake view, mountain view, wooded"],
          ["Landscape", "Mature trees, pines"],
          ["Road", "Unpaved. Snow-packed access is by ATV or tracked vehicle."],
          ["Drive times in the remarks", "About 90 minutes from Utah County. About 2 hours from Salt Lake City."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "1999"],
          ["Bedrooms", "4 on the public header. 2 on the main floor, 2 in the basement."],
          ["Bathrooms", "4 on the public header. Floor list: 1 half upstairs, 1 full and 1 three-quarter on the main floor, 1 full in the basement. The remarks say 3.5 baths."],
          ["Upper floor", "744 sq ft. One family room."],
          ["Main floor", "1,152 sq ft. Family room, kitchen, bar."],
          ["Basement", "1,152 sq ft. 95% finished. Daylight, entrance, full. One laundry room."],
          ["Listed total", "3,048 sq ft. The remarks say this is a courtesy estimate and the buyer should measure it."],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Features", "Fire alarm. Primary bath. Great room. Freestanding range and oven. Vaulted ceilings."],
          ["Floors", "Carpet and tile"],
          ["Windows", "Double pane. Coverings: blinds, full, shades."],
          ["Cooling", "Natural ventilation"],
          ["Heating", "Forced air, propane"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Log, stone, and metal"],
          ["Roof", "Metal, pitched"],
          ["Exterior", "Balcony, basement entrance, deck, covered, double-pane windows, outdoor lighting"],
          ["Deck", "1 deck"],
          ["Garage capacity", "1"],
          ["Parking", "Attached. Uncovered parking."],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Water fields", "Shares, spring, and well. Water connected."],
          ["HOA water", "The HOA amenity list includes water paid."],
          ["Power", "Connected"],
          ["Gas", "Connected"],
          ["Sewer", "Septic tank"],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["Dues", "$550 per year"],
          ["Change fee", "$100"],
          ["Rental cap", "No"],
          ["Amenities", "Barbecue, biking trails, fire pit, hiking trails, horse trails, maintenance paid, pet rules, pets permitted, picnic area, playground, storage area, water paid"],
        ],
      },
      {
        title: "Included in the sale",
        rows: [
          ["Included", "Ceiling fan, dryer, gas grill, microwave, range, range hood, refrigerator, washer, window coverings"],
        ],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Sally Mauro"],
          ["Middle", "Helper"],
          ["High", "Carbon"],
          ["District", "Carbon"],
        ],
      },
    ],
    steps: [
      "Walk the snow-packed approach and ask how the cabin is reached when the road is not packed. The remarks limit that access to an ATV or a tracked vehicle.",
      "Measure the house. The remarks call the 3,048 sq ft figure a courtesy estimate. Reconcile the 4-bath header with the 3.5-bath remark and the floor-by-floor bath list.",
      "Get the share, spring, and well documents, and the HOA water arrangement. Confirm the septic, the $550 yearly HOA, and the $100 change fee.",
    ],
    brokerage: "Equity Real Estate (Prosper Group)",
    mapQuery: "1933 N Corral Rd, Scofield, UT 84526",
    sources: [ure("2159371")],
    notes: [
      "The remarks say square footage is a courtesy estimate only, and that the buyer should get an independent measurement.",
    ],
  },
  {
    mls: "2173563",
    statusLabel: "Active",
    title: "Whispering Pines III, Mt. Pleasant",
    street: "14350 N 11550 E",
    town: "Mt. Pleasant",
    stateZip: "UT 84647",
    county: "Sanpete",
    price: 695000,
    beds: 4,
    baths: "3",
    sqft: 2960,
    acres: "2.00",
    kind: "Cabin",
    hook: "2001 log cabin on 2 acres in Whispering Pines III. The remarks say year-round access. The road is unpaved, and the community is gated.",
    summary: [
      "MLS #2173563 asks $695,000 for a 2001 log cabin at 14350 N 11550 E, Mt. Pleasant, Sanpete County. The remarks place it in Whispering Pines III and say access is year-round.",
      "The public header counts 4 bedrooms, 3 baths, and 2,960 sq ft. The floor list is 2 bedrooms upstairs, 1 on the main floor, and 1 in the basement. Baths are 1 three-quarter upstairs, and 1 full and 1 half on the main floor. The remarks say 2.5 baths.",
      "The remarks list a ramp, a wide stairway, 3-foot interior doors, an accessible primary bath, and sidewalks to the bowery and fire pit. They also list a storage shed, a woodshed, and two 1,000-gallon propane tanks.",
    ],
    facts: [
      ["Asking price", "$695,000"],
      ["Acreage", "2.00 acres"],
      ["Water", "Owned water rights and a spring. Water is connected. Gas is not available."],
      ["Access", "The remarks say year-round. The road is unpaved. The community is gated."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "2.00 acres. Corner lot, unpaved road, secluded yard, flat and gradual slope, mountain and valley views, wooded. Mature trees and pines. Log exterior. Metal pitched roof. One patio and one deck. No zoning field is published on the public listing page.",
      },
      {
        title: "Water",
        copy: "Water fields: owned water rights and a spring. Water is connected. Sewer is a septic tank. Natural gas is listed as not available. Heat is propane, with a space heater, at 95% efficiency or better. An instantaneous water heater is listed.",
      },
      {
        title: "Utilities and access",
        copy: "Power is connected. Gas is not available. Two 1,000-gallon propane tanks are in the remarks. Garage capacity is 2, attached, heated, with an opener. The remarks say year-round access, minutes from ATV and snowmobile trails.",
      },
    ],
    improvements: [
      ["Upper floor", "736 sq ft. Two bedrooms, one three-quarter bath, and a family room."],
      ["Main floor", "1,488 sq ft. One bedroom, one full bath, one half bath, formal living, kitchen, formal dining, and laundry."],
      ["Basement", "736 sq ft, 100% finished, full, walkout. One bedroom."],
      ["Outside", "Open porch, screened porch, deck, covered deck, walkout, basement entrance, outbuildings. One patio and one deck. Wrap-around porch, bowery, and fire pit are in the remarks."],
      ["Access features in the remarks", "Ramp, wide stairway, 3-foot interior doors, accessible primary bath, sidewalks to the bowery and fire pit."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$695,000"],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "101, as of November 12, 2026"],
          ["MLS #", "2173563"],
          ["HOA dues", "$650 per year"],
          ["HOA change fee", "$1,000"],
          ["HOA rental cap", "No, as the listing marks it"],
          ["Taxes", "$2,369 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "Cabin"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "14350 N 11550 E, Mt. Pleasant, UT 84647"],
          ["County", "Sanpete"],
          ["Community", "Whispering Pines III, in the remarks"],
          ["Lot size", "2.00 acres"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot", "Corner lot, unpaved road, secluded yard, flat, gradual slope, mountain view, valley view, wooded"],
          ["Landscape", "Mature trees, pines"],
          ["Road", "Unpaved. The remarks say year-round access."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "2001"],
          ["Bedrooms", "4. Two upstairs, one on the main floor, one in the basement."],
          ["Bathrooms", "3 on the public header. Floor list: 1 three-quarter upstairs, 1 full and 1 half on the main floor. The remarks say 2.5 baths."],
          ["Upper floor", "736 sq ft. One family room."],
          ["Main floor", "1,488 sq ft. Formal living, kitchen, formal dining, laundry."],
          ["Basement", "736 sq ft. 100% finished. Full and walkout."],
          ["Listed total", "2,960 sq ft"],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Features", "Primary bath, walk-in closet, den, built-in dishwasher, floor drains, freestanding range and oven, vaulted ceilings, instantaneous hot water"],
          ["Floors", "Carpet, linoleum, and tile"],
          ["Windows", "Double pane. Coverings: part, shades."],
          ["Cooling", "Natural ventilation"],
          ["Heating", "Propane, space heater, 95% efficiency or better"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Log"],
          ["Roof", "Metal, pitched"],
          ["Exterior", "Basement entrance, deck, covered, double-pane windows, outbuildings, open porch, screened porch, walkout"],
          ["Patio and deck", "1 patio, 1 deck"],
          ["Garage capacity", "2"],
          ["Parking", "Attached, heated, opener"],
          ["Remarks", "Storage shed, woodshed, and two 1,000-gallon propane tanks."],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Water fields", "Owned water rights and a spring. Water connected."],
          ["Power", "Connected"],
          ["Gas", "Not available"],
          ["Sewer", "Septic tank"],
          ["Other", "The listing has a Project Restrictions heading with no details under it."],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["Dues", "$650 per year"],
          ["Change fee", "$1,000"],
          ["Rental cap", "No"],
          ["Amenities", "Gated, pets permitted, picnic area, snow removal"],
          ["Other amenity field", "Gated community, cable TV wired, electric dryer hookup"],
        ],
      },
      {
        title: "Included in the sale",
        rows: [["Included", "Dryer, range, refrigerator, washer, window coverings, wood stove"]],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Mt. Pleasant"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
    ],
    steps: [
      "Confirm year-round access on 11550 East, and what the gate does in winter.",
      "Read the water-right and spring documents. Natural gas is listed as not available. Confirm the two propane tanks and the septic.",
      "Walk the ramp, door widths, and primary bath if access is part of the decision. Match the 3-bath header to the 2.5-bath remark.",
    ],
    brokerage: "Century 21 Essentials Realty",
    mapQuery: "14350 N 11550 E, Mt Pleasant, UT 84647",
    sources: [ure("2173563")],
    notes: [],
  },
  {
    mls: "2184160",
    statusLabel: "Active",
    title: "Clements Lane, Fairview",
    street: "25800 N Clements Ln",
    town: "Fairview",
    stateZip: "UT 84629",
    county: "Sanpete",
    price: 849000,
    beds: 3,
    baths: "2",
    sqft: 4490,
    acres: "3.02",
    kind: "Single family",
    hook: "1986 house on 3.02 acres at the end of Clements Lane. The listing states a well, a spring, and three Gooseberry irrigation shares.",
    summary: [
      "The house sits at the end of Clements Lane, north of Fairview, in Sanpete County. MLS #2184160 asks $849,000. The price was $899,000 when it came on the market September 9, 2026, and dropped to $849,000 on September 28.",
      "Built in 1986. Brick and cedar. Three bedrooms and two full baths on the finished floors, and a full unfinished basement. The listing total is 4,490 sq ft. Finished area above grade is 3,017 sq ft. Garage capacity is three, with a separate one-car garage in the remarks.",
      "Read the water before the finishes. The remarks state a new well and three shares of Gooseberry irrigation. The feature list also marks a spring. Power, gas, and water are listed as connected. Sewer is a septic tank.",
    ],
    facts: [
      ["Asking price", "$849,000. Reduced from $899,000 on September 28, 2026."],
      ["Acreage", "3.02 acres. Parcel 00021021X4."],
      ["Water", "Well, spring, and 3 Gooseberry shares, as the listing states them."],
      ["Access", "End of Clements Lane. The listing marks the road unpaved."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "3.02 acres on a gradual slope. Partial fence, partial landscaping, mature trees, and wooded ground. Mountain and valley views. Horse property. The remarks include animal rights. Listing zoning on the existing page for this MLS number is single-family and agricultural. No HOA. The county tax roll class is residential, and the county acreage matches at 3.02.",
      },
      {
        title: "Water",
        copy: "The remarks state a new well, a tankless water heater, and 3 shares of Gooseberry irrigation. The feature list also marks irrigation, shares, spring, and well, with water connected. An owned water softener is included.",
      },
      {
        title: "Utilities and access",
        copy: "Power and gas are listed as connected. Sewer is a septic tank. Heat is electric, forced air, heat pump, propane, and wood. Cooling is central air. The public road centerline for Clements Lane ends at this parcel. The road is unpaved.",
      },
    ],
    improvements: [
      ["Main floor", "1,473 sq ft. Two bedrooms, one full bath, great room with a wood-burning fireplace, updated kitchen, den, bar, and laundry."],
      ["Upper floor", "1,544 sq ft. One bedroom suite, one full bath with a separate shower and tub, a den, and a loft over the main room."],
      ["Basement", "1,473 sq ft, unfinished, with an entrance and a fireplace. The remarks describe plumbing for a kitchen and room for laundry, a family room, a bedroom, and a bath."],
      ["Garage", "Capacity 3. Built-in and detached, extra height and width, heated, with a workbench and an RV electrical hookup. The remarks add a one-car garage, an RV dump, and 220 power."],
      ["Deck and grounds", "One wraparound deck, an open porch, skylights, double-pane windows, and a partial automatic sprinkler. The lot is partly fenced."],
      ["Also listed", "Roof, flooring, and appliances are described as new. Sauna, hot tub, security alarm, and video cameras. Some furniture is listed as included."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$849,000"],
          ["Price history", "Listed September 9, 2026 at $899,000. Reduced September 28, 2026 to $849,000."],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "64, as of November 12, 2026"],
          ["MLS #", "2184160"],
          ["Terms", "Cash or conventional"],
          ["HOA", "None. The public calculator shows $0 a month."],
          ["Taxes", "$3,874 per year, per the listing"],
          ["Type", "Single family"],
          ["Style", "2-story, with a main floor, an upper floor, and a full basement"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "25800 N Clements Ln, Fairview, UT 84629"],
          ["County", "Sanpete"],
          ["MLS area", "Fairview; Thistle; Mt. Pleasant"],
          ["Neighborhood", "MORROW"],
          ["Lot size", "3.02 acres (131,551 sq ft)"],
          ["Parcel", "00021021X4"],
          ["Zoning, listing field", "Single-family, agricultural, as carried on the existing page for this MLS number"],
          ["Lot", "Partial fence, unpaved road, partial auto sprinkler, gradual slope, mountain view, valley view, wooded"],
          ["Landscape", "Partial landscaping, mature trees"],
          ["Use", "Horse property. Animal rights are stated in the remarks."],
          ["Road", "Clements Lane, unpaved. The mapped centerline ends at this parcel."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "1986"],
          ["Bedrooms", "3. Two on the main floor, one on the upper floor."],
          ["Bathrooms", "2 full. One on the main floor, one on the upper floor."],
          ["Main floor", "1,473 sq ft. Family room, den, kitchen, bar, laundry."],
          ["Upper floor", "1,544 sq ft. One den, in addition to the bedroom and bath."],
          ["Basement", "1,473 sq ft. 0% finished. Entrance and full. A laundry room is counted. The remarks add a fireplace, storage, and plumbing for a kitchen."],
          ["Listed total", "4,490 sq ft"],
          ["Finished above grade", "3,017 sq ft"],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Kitchen", "Updated. Granite counters. Gas range and oven. Built-in dishwasher."],
          ["Living", "Great room. Vaulted ceilings. Wood-burning heat."],
          ["Floors", "Hardwood, tile, and vinyl (LVP)"],
          ["Windows", "Double pane. Skylights. Window coverings: part."],
          ["Other", "Walk-in closet. Separate tub and shower. Security alarm. Video cameras."],
          ["Amenities", "Sauna / steam room. Gas dryer hookup."],
          ["Cooling", "Central air, electric"],
          ["Heating", "Electric, forced air, heat pump, propane, wood burning"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Brick and cedar"],
          ["Roof", "Asphalt shingles. The remarks call the roof new."],
          ["Exterior", "Basement entrance, entry foyer, open porch, sliding glass doors, horse property"],
          ["Deck", "1 deck"],
          ["Garage capacity", "3"],
          ["Parking", "3 covered spaces. Built-in, detached, extra height, extra width, heated, workbench, RV electrical hookup."],
          ["Remarks on the garage", "Oversized, extra width and height, heated and air conditioned, 220 power. An additional one-car garage. RV dump."],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Remarks", "New well. Tankless water heater. 3 shares of Gooseberry irrigation."],
          ["Water fields", "Irrigation, shares, spring, and well. Water connected."],
          ["Power", "Connected"],
          ["Gas", "Connected"],
          ["Sewer", "Septic tank"],
        ],
      },
      {
        title: "Included in the sale",
        rows: [
          ["Included", "Alarm system, ceiling fan, hot tub, microwave, range, range hood, refrigerator, storage shed or sheds, owned water softener, video cameras"],
          ["Remarks", "Some furniture is to be included."],
        ],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Fairview"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
      {
        title: "County parcel record",
        rows: [
          ["Source", "Utah parcel layer, Sanpete LIR, current as of October 23, 2025, as cited on the existing page for this MLS number"],
          ["Parcel / serial", "00021021X4 / R030128"],
          ["Acres on the roll", "3.02"],
          ["Class", "Residential"],
          ["Tax district", "15"],
          ["Primary-residence flag", "No"],
          ["Building records", "2,196 sq ft, built 1986, and a second record of 144 sq ft. Structure count: 2."],
        ],
      },
    ],
    steps: [
      "Get the well log, the spring documentation, and the Gooseberry share certificates. The remarks state three shares. Confirm those shares transfer.",
      "Walk the unfinished basement, both garages, the septic, and the unpaved approach. Reconcile the 4,490 sq ft listing total with the 2,196 sq ft county building record.",
      "Match parcel 00021021X4 to the project. The listing acreage is 3.02. Listing zoning carried on the existing page is single-family and agricultural. Terms are cash or conventional.",
    ],
    brokerage: "Equity Real Estate (Utah)",
    mapQuery: "25800 N Clements Ln, Fairview, UT 84629",
    sources: [
      ure("2184160"),
      {
        label: "Sanpete County parcels, Utah Geospatial Resource Center",
        href: "https://gis.utah.gov/products/sgid/cadastre/parcels/",
      },
    ],
    notes: [
      "County parcel 00021021X4, serial R030128, is 3.02 acres on the 2025 tax roll. Building area on that roll is 2,196 sq ft, plus a 144 sq ft record. The listing total is 4,490 sq ft, including an unfinished basement.",
    ],
  },
  {
    mls: "2189454",
    statusLabel: "Active",
    title: "Legacy Mountain #7, Fairview",
    street: "22432 N 13010 E #7",
    town: "Fairview",
    stateZip: "UT 84629",
    county: "Sanpete",
    price: 850000,
    beds: 5,
    baths: "4",
    sqft: 4336,
    acres: "5.00",
    kind: "Cabin",
    hook: "2005 log cabin on 5 acres in gated Legacy Mountain. The remarks say winter access may take a snow machine.",
    summary: [
      "MLS #2189454 asks $850,000 for a 2005 log cabin at 22432 N 13010 E #7, Fairview, Sanpete County. The remarks place it at the end of a mountain in gated Legacy Mountain, above Mt. Pleasant.",
      "The public header counts 5 bedrooms, 4 baths, and 4,336 sq ft on three levels. The floor list is 2 bedrooms on the top floor, 2 on the middle floor, and 1 on the lowest floor, with 3 full baths and 1 half bath. The remarks say 3.5 baths. Two kitchens are listed.",
      "The utility, lot, and landscape fields on the public page are blank. The remarks say water is connected, power is connected through Mt. Pleasant City, and propane is the fuel. They also say winter access may require a snow machine, and that the cabin is furnished.",
    ],
    facts: [
      ["Asking price", "$850,000"],
      ["Acreage", "5.00 acres"],
      ["Water", "The remarks say water is connected. The water feature field is blank."],
      ["Access", "Gated Legacy Mountain. The remarks say winter access may take a snow machine."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "5.00 acres. The lot and landscape fields are blank on the public page. Log exterior. Asphalt shingle roof. Two decks, a balcony, an open porch, an open patio, skylights, and a walkout. No zoning field is published on the public listing page.",
      },
      {
        title: "Water",
        copy: "The water and utility fields are blank. The remarks say water is connected. Heat includes propane, central gas, a gas stove, and wood. Sewer is not stated in the utility field.",
      },
      {
        title: "Utilities and access",
        copy: "The remarks say power is connected through Mt. Pleasant City and propane is the fuel. Garage capacity is 2, attached and built-in. The community is gated. Winter access may require a snow machine, depending on the road and the weather, as the remarks state it.",
      },
    ],
    improvements: [
      ["Top floor", "1,044 sq ft. Two bedrooms and one full bath. The remarks say a large bedroom is set up as a bunk room with its own deck."],
      ["Middle floor", "1,850 sq ft. Two bedrooms, one full bath, one half bath, a family room, and a kitchen."],
      ["Lowest floor", "1,442 sq ft. One bedroom, one full bath, a family room, and a second kitchen. The basement is 100% finished, daylight, with an entrance and a walkout."],
      ["Outside", "Two decks, balcony, open porch, open patio, skylights. Garage capacity 2."],
      ["Also listed", "Primary bath, jetted tub, built-in dishwasher, updated kitchen, granite counters. The remarks say the cabin is furnished."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$850,000"],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "38, as of November 12, 2026"],
          ["MLS #", "2189454"],
          ["HOA dues", "$300 per year"],
          ["HOA change fee", "$0"],
          ["HOA rental cap", "No, as the listing marks it"],
          ["Taxes", "$3,424 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "Cabin"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "22432 N 13010 E #7, Fairview, UT 84629"],
          ["County", "Sanpete"],
          ["Community", "Legacy Mountain, gated, in the remarks"],
          ["Lot size", "5.00 acres"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot", "The lot field is blank"],
          ["Landscape", "The landscape field is blank"],
          ["Road", "Not named on the public page. The remarks say winter access may require a snow machine."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "2005"],
          ["Bedrooms", "5. Two on the top floor, two on the middle floor, one on the lowest floor."],
          ["Bathrooms", "4 on the public header. Floor list: 3 full and 1 half. The remarks say 3.5 baths."],
          ["Top floor", "1,044 sq ft"],
          ["Middle floor", "1,850 sq ft. One family room and one kitchen."],
          ["Lowest floor", "1,442 sq ft. One family room and one kitchen. Basement: 100% finished, daylight, entrance, full, walkout."],
          ["Listed total", "4,336 sq ft"],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Features", "Primary bath, built-in dishwasher, jetted tub, second kitchen, updated kitchen, granite counters"],
          ["Floors", "Carpet"],
          ["Cooling", "Central air, gas"],
          ["Heating", "Central gas, gas stove, propane, wood burning"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Log"],
          ["Roof", "Asphalt shingles"],
          ["Exterior", "Balcony, basement entrance, entry foyer, open porch, skylights, walkout, open patio"],
          ["Deck", "2 decks"],
          ["Garage capacity", "2"],
          ["Parking", "Attached, built-in"],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Utility fields", "Blank on the public page"],
          ["Water field", "Blank on the public page"],
          ["Remarks", "Water is connected. Power is connected through Mt. Pleasant City. Propane is the fuel."],
          ["Sewer", "Not stated in the utility field"],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["Dues", "$300 per year"],
          ["Change fee", "$0"],
          ["Rental cap", "No"],
          ["Amenities", "Gated, maintenance paid"],
          ["Other", "Electric dryer hookup"],
        ],
      },
      {
        title: "Included in the sale",
        rows: [
          ["Included", "Portable dishwasher, dryer, gas grill, microwave, range, refrigerator, washer, wood stove"],
          ["Remarks", "Furnished."],
        ],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Fairview"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
    ],
    steps: [
      "Ask what winter access actually requires on this road, and who plows it. The remarks say a snow machine may be needed.",
      "The utility fields are blank. Confirm culinary water, the power account with Mt. Pleasant City, propane, and the sewer or septic.",
      "Walk both kitchens and the bunk room. Match the 4-bath header to the 3 full and 1 half on the floor list.",
    ],
    brokerage: "The Agency Salt Lake City (Nephi)",
    mapQuery: "22432 N 13010 E, Fairview, UT 84629",
    sources: [ure("2189454")],
    notes: [
      "Lot, landscape, water, and utility fields are blank on the public listing page. Water, power, and propane above are from the remarks only.",
    ],
  },
  {
    mls: "2186733",
    statusLabel: "Active",
    title: "14125 East, Fairview",
    street: "23000 N 14125 E",
    town: "Fairview",
    stateZip: "UT 84629",
    county: "Sanpete",
    price: 600000,
    beds: 3,
    baths: "2",
    sqft: 2600,
    acres: "4.63",
    kind: "Cabin",
    hook: "2003 log cabin on 4.63 wooded acres in Legacy Mountain. Garage capacity on the listing is 0. The remarks mention two 1,000-gallon backup water tanks.",
    summary: [
      "MLS #2186733 asks $600,000 for a 2003 log cabin at 23000 N 14125 E, Fairview, Sanpete County. The remarks place it in Legacy Mountain, on 4.63 wooded acres.",
      "The public header counts 3 bedrooms, 2 baths, and 2,600 sq ft. The floor list is 1 bedroom on the main floor and 2 in the basement, with 1 full bath on each of those floors. Main floor and basement are each 1,300 sq ft.",
      "The public interior-feature list is blank, and the included-items list is blank. The remarks mention a pellet stove and a wood stove, a wraparound deck, a gated driveway, and two 1,000-gallon underground backup water tanks. Garage capacity is 0.",
    ],
    facts: [
      ["Asking price", "$600,000"],
      ["Acreage", "4.63 acres"],
      ["Water", "Culinary, and connected. The remarks add two 1,000-gallon underground backup tanks."],
      ["Access", "Gated community on the amenity list. The remarks say a gated driveway. Garage capacity is 0."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "4.63 acres. Mountain terrain, mountain and valley views, wooded. The landscape field is blank. Log exterior. Metal roof. One patio and one deck. No zoning field is published on the public listing page.",
      },
      {
        title: "Water",
        copy: "Water field: culinary. Water is connected. The remarks add two 1,000-gallon underground backup water tanks. Sewer is a septic tank. A gas field is not listed.",
      },
      {
        title: "Utilities and access",
        copy: "Power is connected. Garage capacity is 0, and the parking field is blank. The amenity list includes a gated community. The remarks describe a gated driveway. Heat sources are not in the interior-feature list. The remarks mention a pellet stove and a wood stove.",
      },
    ],
    improvements: [
      ["Main floor", "1,300 sq ft. One bedroom, one full bath, family room, kitchen, bar, semiformal dining, and laundry."],
      ["Basement", "1,300 sq ft. Two bedrooms, one full bath, and a family room. Walkout and basement entrance are on the exterior list."],
      ["Outside", "Covered deck, covered patio, open porch, walkout. One patio and one deck. The remarks say a wraparound deck."],
      ["Parking", "Garage capacity 0. The parking feature field is blank."],
      ["Remarks only", "Pellet stove, wood stove, and two 1,000-gallon underground backup water tanks. The interior-feature list itself is blank."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$600,000"],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "51, as of November 12, 2026"],
          ["MLS #", "2186733"],
          ["HOA dues", "$300 per year"],
          ["HOA rental cap", "No, as the listing marks it"],
          ["Taxes", "$3,096 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "Cabin"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "23000 N 14125 E, Fairview, UT 84629"],
          ["County", "Sanpete"],
          ["Community", "Legacy Mountain, in the remarks"],
          ["Lot size", "4.63 acres"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot", "Mountain terrain, mountain view, valley view, wooded"],
          ["Landscape", "The landscape field is blank"],
          ["Road", "Not described in the lot field. The remarks say a gated driveway. The amenity list includes a gated community."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "2003"],
          ["Bedrooms", "3. One on the main floor, two in the basement."],
          ["Bathrooms", "2 full. One on the main floor, one in the basement."],
          ["Main floor", "1,300 sq ft. Family room, kitchen, bar, semiformal dining, laundry."],
          ["Basement", "1,300 sq ft. One family room."],
          ["Listed total", "2,600 sq ft"],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Feature list", "Blank on the public page"],
          ["Remarks", "Pellet stove and wood stove"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Log"],
          ["Roof", "Metal"],
          ["Exterior", "Basement entrance, deck, covered, double-pane windows, covered patio, open porch, walkout"],
          ["Patio and deck", "1 patio, 1 deck"],
          ["Garage capacity", "0"],
          ["Parking", "The parking field is blank"],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Water", "Culinary. Connected."],
          ["Remarks", "Two 1,000-gallon underground backup water tanks"],
          ["Power", "Connected"],
          ["Sewer", "Septic tank"],
          ["Gas", "Not listed in the utility field"],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["Dues", "$300 per year"],
          ["Rental cap", "No"],
          ["Change fee", "Not listed"],
          ["Amenities", "Cable TV wired, electric dryer hookup, gated community"],
        ],
      },
      {
        title: "Included in the sale",
        rows: [["Included", "The included-items list is blank on the public page"]],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Fairview"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
    ],
    steps: [
      "Confirm there is no garage. The capacity field is 0. Ask where vehicles park in winter.",
      "Get the culinary water documents and the tank details. The two backup tanks are in the remarks, not in the water feature field.",
      "The interior-feature list is blank. Confirm heat, the pellet stove, the wood stove, and what is included.",
    ],
    brokerage: "Realtypath LLC (Innovate)",
    mapQuery: "23000 N 14125 E, Fairview, UT 84629",
    sources: [ure("2186733")],
    notes: [
      "The public interior-feature list and the included-items list are blank. Stoves and backup tanks above are from the remarks.",
    ],
  },
  {
    mls: "2192213",
    statusLabel: "Active",
    title: "Fairview Heights, Fairview",
    street: "24560 N 11929 E",
    town: "Fairview",
    stateZip: "UT 84629",
    county: "Sanpete",
    price: 650000,
    beds: 4,
    baths: "4",
    sqft: 3740,
    acres: "0.93",
    kind: "Single family",
    hook: "1995 house on 0.93 acres in Fairview Heights, with a heated pool. Gas, power, sewer, and water are listed as connected.",
    summary: [
      "MLS #2192213 asks $650,000 for a 1995 house at 24560 N 11929 E, Fairview, Sanpete County. The remarks place it in Fairview Heights.",
      "The public header counts 4 bedrooms, 4 baths, and 3,740 sq ft. The floor list is 3 bedrooms upstairs and 1 in the basement, with 2 full baths upstairs, 1 half bath on the main floor, and 1 three-quarter bath in the basement. The basement is 90% finished. A second kitchen and a basement apartment are on the feature list.",
      "The public page does not include an exterior-feature list or an HOA section. The remarks mention a heated pool with a Kick A cover, an attached two-car garage, and RV parking. Utilities are gas, power, sewer, and water, all connected.",
    ],
    facts: [
      ["Asking price", "$650,000"],
      ["Acreage", "0.93 acres"],
      ["Water", "Culinary, irrigation, and shares. Water is connected."],
      ["Access", "The road type is not on the public page. The remarks give drive times to Fairview and nearby towns."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "0.93 acres. Lot, landscape, roof, and construction fields are not on the public page, because the exterior-feature list is absent. No zoning field is published. The remarks describe the setting as Fairview Heights.",
      },
      {
        title: "Water",
        copy: "Water fields: culinary, irrigation, and shares. Water is connected. Sewer is connected, which on this page is separate from the septic tanks listed on the mountain cabins.",
      },
      {
        title: "Utilities and access",
        copy: "Gas, power, sewer, and water are connected. Heat is gas radiant. Cooling is refrigerated air and a window unit. The remarks say an attached two-car garage and RV parking. A pool is on the amenity list.",
      },
    ],
    improvements: [
      ["Upper floor", "900 sq ft. Three bedrooms and two full baths."],
      ["Main floor", "1,441 sq ft. One half bath, family room, den, formal living, kitchen, formal dining, and laundry."],
      ["Basement", "1,399 sq ft, 90% finished, full. One bedroom, one three-quarter bath, a family room, and a bar. A basement apartment and a second kitchen are on the feature list. The remarks say a kitchenette."],
      ["Pool and garage", "Heated pool, in the remarks, with a Kick A cover that supports walking when it is secured. Attached two-car garage and RV parking are in the remarks. Those items are not in an exterior-feature list."],
      ["Also listed", "Theater room, exercise room, gas log, jetted tub, quartz counters, primary bath, walk-in closet, den."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$650,000"],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "22, as of November 12, 2026"],
          ["MLS #", "2192213"],
          ["HOA", "Not listed. The public calculator shows $0 a month."],
          ["Taxes", "$2,336 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "2-story"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "24560 N 11929 E, Fairview, UT 84629"],
          ["County", "Sanpete"],
          ["Area in the remarks", "Fairview Heights"],
          ["Lot size", "0.93 acres"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot and road", "Not on the public page. There is no exterior-feature list."],
          ["Drive times in the remarks", "Minutes to Fairview City, Skyline Drive, and Snow Land backcountry skiing. About 10 minutes to Mt. Pleasant, 20 minutes to Spring City, 30 minutes to Ephraim, 40 minutes to Spanish Fork."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "1995"],
          ["Bedrooms", "4. Three upstairs, one in the basement."],
          ["Bathrooms", "4 on the public header. Floor list: 2 full upstairs, 1 half on the main floor, 1 three-quarter in the basement."],
          ["Upper floor", "900 sq ft"],
          ["Main floor", "1,441 sq ft. Family room, den, formal living, kitchen, formal dining, laundry."],
          ["Basement", "1,399 sq ft. 90% finished. Full. Family room and bar. Basement apartment is a feature. Second kitchen is a feature."],
          ["Listed total", "3,740 sq ft"],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Features", "Basement apartment, primary bath, walk-in closet, den, built-in dishwasher, floor drains, French doors, gas log, great room, jetted tub, second kitchen, gas range, theater room, quartz counters"],
          ["Floors", "Carpet, hardwood, laminate, tile, and travertine"],
          ["Windows", "Blinds"],
          ["Cooling", "Refrigerated air, window unit"],
          ["Heating", "Gas radiant"],
          ["Amenities", "Exercise room, swimming pool"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Feature list", "The public page does not include an exterior-feature list"],
          ["Remarks", "Heated pool with a Kick A cover, attached two-car garage, RV parking, long-term food storage"],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Water", "Culinary, irrigation, and shares. Connected."],
          ["Power", "Connected"],
          ["Gas", "Connected"],
          ["Sewer", "Connected"],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["HOA", "Not listed on the public page"],
          ["Calculator", "$0 a month"],
        ],
      },
      {
        title: "Included in the sale",
        rows: [
          ["Included", "Ceiling fan, dog run, fireplace equipment, fireplace insert, gas grill, range, range hood, refrigerator, storage shed or sheds, window coverings, projector"],
        ],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Fairview"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
    ],
    steps: [
      "Walk the pool, the cover, and the equipment. The Kick A cover is described as supporting walking only when it is secured.",
      "The exterior-feature list is missing. Confirm the two-car garage, RV parking, roof, and road surface in person.",
      "Ask how the basement kitchen and the basement-apartment feature are permitted, and confirm the irrigation shares transfer.",
    ],
    brokerage: "Coldwell Banker Realty (Park City-Newpark)",
    mapQuery: "24560 N 11929 E, Fairview, UT 84629",
    sources: [ure("2192213")],
    notes: [
      "The public listing page has no exterior-feature list and no HOA section. Pool, garage, and RV parking above are from the remarks.",
    ],
  },
  {
    mls: "2186050",
    statusLabel: "Active T/C",
    statusNote:
      "Active T/C means the listing is under contract with a time clause, and it stays on the market so other offers can be made. It is still an on-market status.",
    title: "14330 North, Mt. Pleasant",
    street: "11741 E 14330 N",
    town: "Mt. Pleasant",
    stateZip: "UT 84647",
    county: "Sanpete",
    price: 678000,
    beds: 4,
    baths: "3",
    sqft: 3819,
    acres: "1.00",
    kind: "Single family",
    hook: "2019 house on 1 acre in a gated community. The road is unpaved. Public status is Active T/C, so a contract is already in place.",
    summary: [
      "MLS #2186050 asks $678,000 for a 2019 house at 11741 E 14330 N, Mt. Pleasant, Sanpete County. The public status is Active T/C. That means an offer has been accepted with a time clause, and the property stays on the market so other offers can be made.",
      "The public header counts 4 bedrooms, 3 baths, and 3,819 sq ft. The floor list is 3 bedrooms on the main floor and 1 upstairs, with 1 full bath on the main floor and 1 three-quarter and 1 half upstairs. A 212 sq ft loft is the third floor. The basement field says none, or a crawl space, 0% finished.",
      "The remarks mention new carpet, new LVP, a new water heater, a 1,000-gallon propane tank, a concrete septic tank, and a community pond. The lot road is unpaved. The community is gated. The remarks say the buyer should verify all of it.",
    ],
    facts: [
      ["Asking price", "$678,000"],
      ["Acreage", "1.00 acres"],
      ["Water", "Culinary and a spring. Water is connected."],
      ["Access", "Unpaved road. Gated community. Status is Active T/C."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "1.00 acre. Unpaved road, secluded yard, mountain and valley views, wooded. Full landscaping, mature trees, pines, and scrub oak. Stone and cement board. Metal pitched roof. One deck. No zoning field is published on the public listing page. The community name is not on the public page.",
      },
      {
        title: "Water",
        copy: "Water fields: culinary and spring. Water is connected. Sewer is a septic tank. The remarks say the septic tank is concrete, and they mention a 1,000-gallon propane tank. Natural gas is listed as not available.",
      },
      {
        title: "Utilities and access",
        copy: "Power is listed as both available and connected. Gas is listed as not available, while the heating field includes central gas, propane, forced air, and wood. Those two fields do not match. Confirm them. Garage capacity is 2. The road is unpaved.",
      },
    ],
    improvements: [
      ["Main floor", "1,588 sq ft. Three bedrooms, one full bath, and a family room."],
      ["Upper floor", "2,019 sq ft. One bedroom, one three-quarter bath, one half bath, a family room, kitchen, semiformal dining, and laundry."],
      ["Loft", "212 sq ft on the third floor. One family room. The remarks call it a carpeted loft."],
      ["Basement", "None, or a crawl space, 0% finished. The exterior list still includes a basement entrance."],
      ["Outside", "Balcony, covered deck, one deck, double-pane windows, entry foyer. Garage capacity 2, with extra width, opener, uncovered parking, RV parking, and a workshop."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$678,000"],
          ["Status", "Active T/C. Under contract with a time clause, and still on the market for other offers."],
          ["Days on UtahRealEstate.com", "56, as of November 12, 2026"],
          ["MLS #", "2186050"],
          ["HOA dues", "$630 per year"],
          ["HOA rental cap", "No, as the listing marks it"],
          ["HOA change fee", "Not listed"],
          ["Taxes", "$2,298 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "2-story"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "11741 E 14330 N, Mt. Pleasant, UT 84647"],
          ["County", "Sanpete"],
          ["Community", "Gated. The name is not on the public page."],
          ["Lot size", "1.00 acre"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot", "Unpaved road, secluded yard, mountain view, valley view, wooded"],
          ["Landscape", "Full landscaping, mature trees, pines, scrub oak"],
          ["Remarks", "North side has been graded and tilled and is to be seeded with mountain grass. Access to ATV trails, a community swimming and fishing pond, a swing set, and a turf play area."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "2019"],
          ["Bedrooms", "4. Three on the main floor, one upstairs."],
          ["Bathrooms", "3. One full on the main floor, one three-quarter and one half upstairs."],
          ["Third floor", "212 sq ft. One family room."],
          ["Upper floor", "2,019 sq ft. Family room, kitchen, semiformal dining, laundry."],
          ["Main floor", "1,588 sq ft. One family room."],
          ["Basement", "0% finished. None, or a crawl space."],
          ["Listed total", "3,819 sq ft"],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Features", "Primary bath, walk-in closet, den, built-in dishwasher, disposal, floor drains, French doors, great room, gas oven, gas range, freestanding range and oven, vaulted ceilings"],
          ["Floors", "Carpet and vinyl (LVP). The remarks say new carpet, new LVP, and a new water heater."],
          ["Windows", "Double pane. Blinds."],
          ["Cooling", "Central air, gas"],
          ["Heating", "Forced air, central gas, propane, wood burning"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Stone and cement board"],
          ["Roof", "Metal, pitched"],
          ["Exterior", "Balcony, basement entrance, deck, covered, double-pane windows, entry foyer"],
          ["Deck", "1 deck"],
          ["Garage capacity", "2"],
          ["Parking", "Attached, extra width, opener, uncovered parking, RV parking, workshop"],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Water", "Culinary and spring. Connected."],
          ["Power", "Listed as available and as connected"],
          ["Gas", "Not available, in the utility field"],
          ["Heating field", "Includes central gas and propane. That does not match the gas utility field. Confirm it."],
          ["Sewer", "Septic tank. The remarks say a concrete septic tank and a 1,000-gallon propane tank."],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["Dues", "$630 per year"],
          ["Rental cap", "No"],
          ["Change fee", "Not listed"],
          ["Amenities", "Gated, pets permitted, snow removal, trash paid. Also cable TV wired, electric and gas dryer hookups, park or playground, workshop."],
        ],
      },
      {
        title: "Included in the sale",
        rows: [["Included", "Ceiling fan, fireplace equipment, microwave, range, refrigerator, swing set, window coverings, wood stove"]],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Mt. Pleasant"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
    ],
    steps: [
      "Read the time clause before spending a trip on this one. The status is Active T/C, so a contract is already accepted.",
      "Reconcile the gas field. Utilities say gas is not available. Heating includes central gas and propane.",
      "Confirm the septic, the spring, the propane tank, and what the gated community maintains. The remarks say to verify all of it.",
    ],
    brokerage: "Rocky Mountain Realty",
    mapQuery: "11741 E 14330 N, Mt Pleasant, UT 84647",
    sources: [ure("2186050")],
    notes: [
      "Public status is Active T/C: under contract with a time clause, and still on the market for other offers.",
    ],
  },
  {
    mls: "2173571",
    statusLabel: "Active",
    title: "11550 East #153, Mt. Pleasant",
    street: "14355 N 11550 E #153",
    town: "Mt. Pleasant",
    stateZip: "UT 84647",
    county: "Sanpete",
    price: 890000,
    beds: 6,
    baths: "5",
    sqft: 3990,
    acres: "1.00",
    kind: "Single family",
    hook: "2022 house on 1 acre. The style field says Other. Gated, unpaved road, with culinary water and a well.",
    summary: [
      "MLS #2173571 asks $890,000 for a 2022 house at 14355 N 11550 E #153, Mt. Pleasant, Sanpete County. The style field says Other. The public page does not name the community.",
      "The public header counts 6 bedrooms, 5 baths, and 3,990 sq ft. All 6 bedrooms are on the main floor. Baths on the floor list are 2 full, 1 three-quarter, and 1 half on the main floor, plus 1 full in the basement. The basement is partial and 100% finished, at 934 sq ft.",
      "The road is unpaved and the community is gated. Natural gas is not available. Heat is wood and in-floor radiant. Water is culinary and a well. The remarks mention a community reservoir.",
    ],
    facts: [
      ["Asking price", "$890,000"],
      ["Acreage", "1.00 acre"],
      ["Water", "Culinary and a well. Water is connected. Gas is not available."],
      ["Access", "Unpaved road. Gated community. The community name is not on the public page."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "1.00 acre. Unpaved road, secluded yard, gradual slope, mountain and valley views, wooded. Partial auto sprinkler and partial auto drip. Fruit trees, pines, and scrub oak. Stone and cement board. Asphalt shingle roof. Two decks. No zoning field is published on the public listing page.",
      },
      {
        title: "Water",
        copy: "Water fields: culinary and well. Water is connected. Sewer is a septic tank. Natural gas is not available. The remarks mention a private community reservoir. That is a community amenity in the remarks, not a water right on the feature list.",
      },
      {
        title: "Utilities and access",
        copy: "Power is connected. Gas is not available. Heat is wood burning and in-floor radiant. Cooling is natural ventilation. Garage capacity is 2, attached, heated, with an opener, storage above, and extra length. The road is unpaved.",
      },
    ],
    improvements: [
      ["Main floor", "3,056 sq ft. Six bedrooms, 2 full baths, 1 three-quarter bath, 1 half bath, two family rooms, kitchen, bar, formal dining, and two laundry rooms."],
      ["Basement", "934 sq ft, partial, 100% finished. One full bath."],
      ["Outside", "Two covered decks, double-pane windows, entry foyer. Fruit trees, pines, scrub oak."],
      ["Garage", "Capacity 2. Attached, heated, opener, storage above, extra length."],
      ["Also listed", "Den, walk-in closet, built-in dishwasher, double oven, gas range, freestanding range, vaulted ceilings, granite and Silestone counters, theater room, video cameras, smart thermostats."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$890,000"],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "253, as of November 12, 2026"],
          ["MLS #", "2173571"],
          ["HOA dues", "$650 per year"],
          ["HOA change fee", "$1,000"],
          ["HOA rental cap", "No, as the listing marks it"],
          ["Taxes", "$2,337 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "Other"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "14355 N 11550 E #153, Mt. Pleasant, UT 84647"],
          ["County", "Sanpete"],
          ["Community", "Not named on the public page. The remarks mention a community reservoir."],
          ["Lot size", "1.00 acre"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot", "Unpaved road, secluded yard, partial auto sprinkler, gradual slope, mountain view, valley view, wooded, partial auto drip"],
          ["Landscape", "Fruit trees, pines, scrub oak"],
          ["Road", "Unpaved. Gated community."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "2022"],
          ["Bedrooms", "6, all on the main floor"],
          ["Bathrooms", "5 on the public header. Floor list: 2 full, 1 three-quarter, and 1 half on the main floor, plus 1 full in the basement."],
          ["Main floor", "3,056 sq ft. Two family rooms, kitchen, bar, formal dining, two laundry rooms."],
          ["Basement", "934 sq ft. 100% finished. Partial."],
          ["Listed total", "3,990 sq ft"],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Features", "Walk-in closet, den, built-in dishwasher, double oven, gas range, freestanding range and oven, vaulted ceilings, granite counters, Silestone counters, theater room, video cameras, smart thermostats"],
          ["Floors", "Carpet, marble, and vinyl (LVP)"],
          ["Windows", "Double pane. Blinds."],
          ["Cooling", "Natural ventilation"],
          ["Heating", "Wood burning, in-floor radiant"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Stone and cement board"],
          ["Roof", "Asphalt shingles"],
          ["Exterior", "Deck, covered, double-pane windows, entry foyer"],
          ["Deck", "2 decks"],
          ["Garage capacity", "2"],
          ["Parking", "Attached, heated, opener, storage above, extra length"],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Water", "Culinary and well. Connected."],
          ["Remarks", "A private community reservoir is mentioned. It is not a water-right field."],
          ["Power", "Connected"],
          ["Gas", "Not available"],
          ["Sewer", "Septic tank"],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["Dues", "$650 per year"],
          ["Change fee", "$1,000"],
          ["Rental cap", "No"],
          ["Amenities", "Gated, snow removal, trash paid. Also electric dryer hookup and gated community."],
        ],
      },
      {
        title: "Included in the sale",
        rows: [["Included", "Dryer, microwave, range, refrigerator, washer"]],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Mt. Pleasant"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
    ],
    steps: [
      "The style field says Other. The public page does not say how the house was built. Confirm that before you assume a loan type.",
      "Confirm the well and the culinary connection, and what the community reservoir is. Gas is not available.",
      "Ask for the HOA documents. Dues are $650 a year, and the change fee is $1,000. The community is not named on the public page.",
    ],
    brokerage: "Century 21 Essentials Realty",
    mapQuery: "14355 N 11550 E, Mt Pleasant, UT 84647",
    sources: [ure("2173571")],
    notes: [],
  },
  {
    mls: "2178113",
    statusLabel: "Active",
    title: "Freedom Ranch, Mt. Pleasant",
    street: "20015 N 12500 E #6",
    town: "Mt. Pleasant",
    stateZip: "UT 84647",
    county: "Sanpete",
    price: 955000,
    beds: 6,
    baths: "4",
    sqft: 3963,
    acres: "5.86",
    kind: "Single family",
    hook: "1994 house on 5.86 acres in Freedom Ranch, a 16-lot gated community. The listing includes a shop, a barn, a well, and water right 65-4017.",
    summary: [
      "MLS #2178113 asks $955,000 for a 1994 house at 20015 N 12500 E #6, Mt. Pleasant, Sanpete County. The remarks name it Freedom Ranch, a gated community of 16 lots.",
      "The public header counts 6 bedrooms, 4 baths, and 3,963 sq ft. The floor list is 1 bedroom on the main floor, 4 upstairs, and 1 in the basement. Baths are 2 full on the main floor, 1 full upstairs, and 1 three-quarter in the basement. The remarks say each of the four upstairs bedrooms has a loft. The basement is 95% finished, with its own entrance. The remarks say it could be used as an apartment.",
      "Horse property. The remarks mention a barn, a corral (the listing spells it coral), fields, and a shop of nearly 2,000 sq ft with three bay doors. Water right 65-4017 for 2 acre-feet is included, plus 1 share of North Creek water through the HOA, as the remarks state it. The field to the north is HOA open space, per the remarks.",
    ],
    facts: [
      ["Asking price", "$955,000"],
      ["Acreage", "5.86 acres"],
      ["Water", "Culinary, irrigation, owned rights, shares, and a well. Right 65-4017 for 2 acre-feet is in the remarks."],
      ["Access", "Cul-de-sac. Unpaved road. Gated. 16 lots, per the remarks."],
    ],
    pillars: [
      {
        title: "Land",
        copy: "5.86 acres. Cul-de-sac, partial fence, unpaved road, flat, mountain and valley views. Partial landscaping, mature trees, and pines. Partial manual sprinkler. Horse property. Cedar, cement board, and other wood. Asphalt shingle roof, pitched. Two decks. No zoning field is published on the public listing page.",
      },
      {
        title: "Water",
        copy: "Water fields: culinary, irrigation, owned rights, shares, and a well. Water is connected. The remarks state water right 65-4017 for 2 acre-feet is included, and 1 share of North Creek water through the HOA is included. HOA water is also mentioned in the remarks. Sewer is a septic tank.",
      },
      {
        title: "Utilities and access",
        copy: "Power is connected. A gas utility field is not listed. Heat is forced air and propane. The remarks mention two 1,000-gallon propane tanks. Cooling is central air, electric. Garage capacity is 8, attached and detached. The road is unpaved. The community is gated.",
      },
    ],
    improvements: [
      ["Main floor", "1,721 sq ft. One bedroom, two full baths, family room, kitchen, bar, semiformal dining, and laundry. The remarks describe this as the primary suite level."],
      ["Upper floor", "1,121 sq ft. Four bedrooms and one full bath. The remarks say each of those bedrooms has a loft."],
      ["Basement", "1,121 sq ft, 95% finished, with an entrance and a walkout. One bedroom, one three-quarter bath, a family room, and laundry. Separate entrance."],
      ["Shop and grounds", "The remarks describe a shop of nearly 2,000 sq ft, a 6-inch monolithic slab, insulation, a vapor barrier, plumbing for radiant floor heat, and three bay doors, the main one about 12 feet wide by 16 feet tall. Barn, corral, fire pit, and two decks are also in the remarks or the feature list."],
      ["Garage", "Capacity 8. Attached and detached, extra height and width, heated, opener, uncovered parking, RV parking, extra length, workshop."],
    ],
    specGroups: [
      {
        title: "Price and status",
        rows: [
          ["List price", "$955,000"],
          ["Status", "Active"],
          ["Days on UtahRealEstate.com", "58, as of November 12, 2026"],
          ["MLS #", "2178113"],
          ["HOA dues", "$50 per month"],
          ["HOA rental cap", "No, as the listing marks it"],
          ["HOA change fee", "Not listed"],
          ["Taxes", "$1,906 per year, from the tax figure on the public listing calculator"],
          ["Type", "Single family"],
          ["Style", "2-story"],
        ],
      },
      {
        title: "Land, zoning, and access",
        rows: [
          ["Address", "20015 N 12500 E #6, Mt. Pleasant, UT 84647"],
          ["County", "Sanpete"],
          ["Community", "Freedom Ranch. The remarks say 16 lots, gated."],
          ["Lot size", "5.86 acres"],
          ["Zoning", "Not published on the public listing page"],
          ["Lot", "Cul-de-sac, partial fence, unpaved road, partial manual sprinkler, flat, mountain view, valley view"],
          ["Landscape", "Partial landscaping, mature trees, pines"],
          ["Use", "Horse property. The remarks mention a barn, a corral, and fields. The field to the north is HOA open space, per the remarks."],
          ["Road", "Unpaved. Cul-de-sac. Gated."],
        ],
      },
      {
        title: "Size and rooms",
        rows: [
          ["Year built", "1994"],
          ["Bedrooms", "6. One on the main floor, four upstairs, one in the basement."],
          ["Bathrooms", "4 on the public header. Floor list: 2 full on the main floor, 1 full upstairs, 1 three-quarter in the basement."],
          ["Upper floor", "1,121 sq ft"],
          ["Main floor", "1,721 sq ft. Family room, kitchen, bar, semiformal dining, laundry."],
          ["Basement", "1,121 sq ft. 95% finished. Entrance, full, walkout. Family room and laundry."],
          ["Listed total", "3,963 sq ft"],
          ["Shop, in the remarks", "Nearly 2,000 sq ft. Not part of the 3,963 sq ft house total."],
        ],
      },
      {
        title: "Interior",
        rows: [
          ["Features", "Primary bath, separate tub and shower, walk-in closet, built-in dishwasher, disposal, French doors, gas log, great room, jetted tub, gas oven, gas range, freestanding range and oven, granite counters, video doorbell"],
          ["Floors", "Carpet, tile, and slate. The remarks say the carpet is new."],
          ["Windows", "Double pane. Blinds, full coverings, plantation shutters."],
          ["Cooling", "Central air, electric"],
          ["Heating", "Forced air, propane"],
        ],
      },
      {
        title: "Exterior, parking, and construction",
        rows: [
          ["Construction", "Cedar, cement board, other wood"],
          ["Roof", "Asphalt shingles, pitched"],
          ["Exterior", "Basement entrance, deck, covered, double-pane windows, horse property, outbuildings, outdoor lighting, covered patio, open porch, walkout, open patio"],
          ["Deck", "2 decks"],
          ["Garage capacity", "8"],
          ["Parking", "Attached, detached, extra height, extra width, heated, opener, uncovered, RV parking, extra length, workshop"],
          ["Shop, in the remarks", "Nearly 2,000 sq ft, 6-inch monolithic slab, insulation, vapor barrier, plumbing for radiant floor heat, three bay doors, main door about 12 by 16 feet"],
        ],
      },
      {
        title: "Water and utilities",
        rows: [
          ["Water fields", "Culinary, irrigation, owned rights, shares, and well. Connected."],
          ["Remarks", "HOA water, plus the property's own well. Water right 65-4017 for 2 acre-feet included. 1 share of North Creek water through the HOA included. Two 1,000-gallon propane tanks."],
          ["Power", "Connected"],
          ["Gas", "Not listed as a utility field. Heat is propane."],
          ["Sewer", "Septic tank"],
        ],
      },
      {
        title: "HOA",
        rows: [
          ["Dues", "$50 per month"],
          ["Rental cap", "No"],
          ["Change fee", "Not listed"],
          ["Amenities", "Gated, pets permitted, snow removal. Also cable TV wired, electric and gas dryer hookups."],
          ["Lots", "16, per the remarks"],
        ],
      },
      {
        title: "Included in the sale",
        rows: [
          ["Included", "Alarm system, fireplace equipment, microwave, refrigerator, video doorbell"],
          ["Remarks", "Water right 65-4017 and 1 North Creek HOA share, as stated above"],
        ],
      },
      {
        title: "Schools, designated",
        rows: [
          ["Elementary", "Mt. Pleasant"],
          ["Middle", "North Sanpete"],
          ["High", "North Sanpete"],
          ["District", "North Sanpete"],
        ],
      },
    ],
    steps: [
      "Get water right 65-4017 and the North Creek share in writing. Confirm both transfer, and how HOA water and the well split the use.",
      "Walk the shop, the barn, the septic, and the basement entrance. The shop size is in the remarks, not in the square-footage total.",
      "Read the HOA documents for 16 lots. Dues are $50 a month. The field to the north is described as HOA open space.",
    ],
    brokerage: "Unity Group Real Estate LLC",
    mapQuery: "20015 N 12500 E, Mt Pleasant, UT 84647",
    sources: [ure("2178113")],
    notes: [
      "The remarks spell the corral as coral. Shop size, the water-right number, and the 16-lot count are from the remarks.",
    ],
  },
];

export function listingByMls(mls: string): PortfolioListing {
  const listing = listings.find((item) => item.mls === mls);
  if (!listing) throw new Error(`Unknown MLS ${mls}`);
  return listing;
}
