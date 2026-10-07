// Approved seller FAQ — shared by the homepage ("Common Questions") and /selling.
// Both the visible accordion and the FAQPage JSON-LD on each page are built
// from this list, so the schema always matches what's on the page.
export interface SellerFaqItem {
  question: string;
  answer: string;
}

export const sellerFaq: SellerFaqItem[] = [
  {
    question: "What does it cost to sell a home in Central Utah?",
    answer:
      "Typical seller costs are agent commission, title insurance, and closing fees — exact numbers depend on price and what’s negotiated. I give you a net-proceeds estimate before we list so you know what you’ll walk away with.",
  },
  {
    question: "How do you price a rural home, cabin, or land parcel when comps are thin?",
    answer:
      "In Juab, Sanpete, Sevier, and Millard, the nearest true comp can be months old or a different lot. I walk the property and price from what drives value here — access, water, outbuildings, condition — not just an online estimate. Appraiser background means fewer surprises when the buyer’s appraisal lands.",
  },
  {
    question: "Should I list high and negotiate down?",
    answer:
      "In a thinner rural market, overpricing usually means the listing sits and buyers assume something’s wrong. Accurate day-one pricing consistently beats start-high.",
  },
  {
    question: "How long do homes vs land/cabins take to sell?",
    answer:
      "Well-priced homes in good condition often sell in about 30–90 days. Land and cabins can take longer — smaller buyer pool, financing quirks. Price and condition matter more than hoping rates drop.",
  },
  {
    question: "Why use an agent who’s also a certified residential appraiser?",
    answer:
      "Most agents estimate from recent sales. On hard-to-value Central Utah property I support the number the way an appraiser would, so sellers don’t overreach and buyers don’t overpay.",
  },
];
