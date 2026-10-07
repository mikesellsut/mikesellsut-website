// Current listings shown on /listings.
//
// To add a listing: drop its web-sized photos into src/assets/listings/
// (01 = hero), then add an entry below. To take one down, delete its entry
// (and its photos). Leave mlsUrl empty until the public UtahRealEstate.com
// page exists — the "View on MLS" button only appears when it's set.
//
// Public-facing facts only: town/subdivision, never a street address.

export type ListingStatus = "Active" | "Under Contract" | "Sold";

export interface ListingPhoto {
  /** File name inside src/assets/listings/ */
  file: string;
  alt: string;
}

export interface Listing {
  id: string;
  title: string;
  status: ListingStatus;
  type: string;
  price: number;
  beds?: number;
  baths?: number;
  acres?: number;
  town: string;
  subdivision?: string;
  blurb: string;
  mlsNumber?: string;
  mlsUrl?: string;
  /** First photo is the hero image. */
  photos: ListingPhoto[];
}

export const listings: Listing[] = [
  {
    id: "holiday-oaks-cabin",
    title: "Off-Grid Cabin on 10 Gated Acres",
    status: "Active",
    type: "Cabin",
    price: 439000,
    beds: 3,
    baths: 1,
    acres: 10,
    town: "Fountain Green",
    subdivision: "Holiday Oaks Estates",
    mlsNumber: "2186458",
    mlsUrl: "https://www.utahrealestate.com/2186458",
    blurb:
      "Silo-style off-grid cabin on 10 gated acres in Holiday Oaks Estates near Fountain Green — 3 bedrooms, 1 bath, solar with generator backup, an owned water tank, septic, a wraparound deck, and camper pads.",
    photos: [
      { file: "warnock-holiday-oaks-cabin-01.jpg", alt: "Silo-style cabin with a wraparound deck among trees on 10 acres in Holiday Oaks Estates, Fountain Green" },
      { file: "warnock-holiday-oaks-cabin-02.jpg", alt: "Aerial view of the Holiday Oaks Estates cabin and its surrounding wooded acreage" },
      { file: "warnock-holiday-oaks-cabin-03.jpg", alt: "Cabin living room with a curved sofa and a wall of windows overlooking the valley" },
      { file: "warnock-holiday-oaks-cabin-04.jpg", alt: "Cabin kitchen and dining area with wood floors" },
      { file: "warnock-holiday-oaks-cabin-05.jpg", alt: "Aerial view of the wooded 10-acre cabin parcel near Fountain Green" },
      { file: "warnock-holiday-oaks-cabin-06.jpg", alt: "Curved window wall and seating inside the silo-style cabin" },
    ],
  },
  {
    id: "pine-ridge-lot",
    title: "Build-Ready 6.09-Acre Recreational Lot",
    status: "Under Contract",
    type: "Land",
    price: 269000,
    acres: 6.09,
    town: "Mt. Pleasant",
    subdivision: "Pine Ridge Estates",
    mlsNumber: "2186368",
    mlsUrl: "https://www.utahrealestate.com/2186368",
    blurb:
      "Build-ready recreational lot in gated Pine Ridge Estates near Mt. Pleasant — engineered septic installed, culinary water to on-site spigots, a leveled cabin/RV pad, and gravel access among mature pines. Power available at the street; seasonal vehicle access roughly April–November.",
    photos: [
      { file: "pre10-chesworth-land-01.jpg", alt: "Aerial view of the 6.09-acre Pine Ridge Estates lot with its gravel drive and leveled pad among mature pines" },
      { file: "pre10-chesworth-land-02.jpg", alt: "Aerial view of the gravel access loop winding through pines on the Pine Ridge Estates lot" },
      { file: "pre10-chesworth-land-03.jpg", alt: "Overhead view of the cleared cabin/RV pad on the Mt. Pleasant recreational lot" },
      { file: "pre10-chesworth-land-04.jpg", alt: "Leveled building pad with a stand of mature pines at Pine Ridge Estates" },
      { file: "pre10-chesworth-land-05.jpg", alt: "Graded gravel pad and tree line on the Pine Ridge Estates lot" },
      { file: "pre10-chesworth-land-06.jpg", alt: "Gravel access road bordered by evergreens on the Mt. Pleasant recreational lot" },
    ],
  },
  {
    id: "gooseberry-canyon-land",
    title: "5 Acres Above 9,000 Feet",
    status: "Active",
    type: "Land",
    price: 139900,
    acres: 5,
    town: "Fairview",
    subdivision: "Gooseberry Canyon Estates",
    blurb:
      "Two contiguous parcels totaling 5 acres above 9,000 feet in gated Gooseberry Canyon Estates near Fairview — mature aspen and evergreen, with a flatter lower site for a cabin or staging area. Off-grid recreational land (solar, well or hauled water, propane, septic); primarily summer access.",
    mlsNumber: "2171846",
    mlsUrl: "https://www.utahrealestate.com/2171846",
    photos: [
      { file: "gooseberry-land-01.jpg", alt: "Forested mountain land with a gravel road and distant ridgeline at Gooseberry Canyon Estates near Fairview" },
      { file: "gooseberry-land-03.jpg", alt: "Aerial view of aspen and evergreen cover on the 5-acre Gooseberry Canyon parcels" },
      { file: "gooseberry-land-04.jpg", alt: "Aerial view of the gravel road through Gooseberry Canyon Estates" },
      { file: "gooseberry-land-05.jpg", alt: "Aerial view of forest and open meadows around Gooseberry Canyon Estates" },
      { file: "gooseberry-land-06.jpg", alt: "Overhead drone view of aspen and open ground on the Gooseberry Canyon parcels" },
    ],
  },
];
