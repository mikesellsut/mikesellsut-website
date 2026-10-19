// Free tools under /tools/. Used by the /tools/ hub page and the
// ToolsCallout block on Home, Selling, Land, Cabins and Buying Rural.
export interface SiteTool {
  slug: string;
  name: string;
  blurb: string;
  cta: string;
}

export const tools: SiteTool[] = [
  {
    slug: "home-price",
    name: "What's My Home or Land Worth?",
    blurb: "A rough asking-price range for a home, cabin or land in Central Utah. Not an appraisal, just a starting point before real comps.",
    cta: "Get a rough price range",
  },
  {
    slug: "land-checklist",
    name: "Rural Land Checklist",
    blurb: "Water rights, wells, septic, access and zoning. The things to check before you buy or list land out here.",
    cta: "Open the checklist",
  },
  {
    slug: "cabin-cost",
    name: "Cabin & Land Cost Calculator",
    blurb: "Monthly payment plus rough well, septic and power costs, so the land price isn't the only number you look at.",
    cta: "Run the numbers",
  },
  {
    slug: "seller-net",
    name: "Seller Net Proceeds Estimator",
    blurb: "What you might walk away with after the payoff, commission and closing costs. A ballpark, not a title company net sheet.",
    cta: "Estimate my net",
  },
  {
    slug: "loan-chooser",
    name: "USDA vs FHA vs Conventional Chooser",
    blurb: "Six quick questions to see which loan type usually fits a rural Utah property, and what to watch for.",
    cta: "Find my loan type",
  },
];
