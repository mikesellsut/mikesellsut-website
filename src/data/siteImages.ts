// Scenic photos used on area, county, and blog pages (files live in public/images/areas/).
// `alt` is used wherever the image appears. `credit` feeds the /photo-credits page.
// Every third-party photo here was resized for the web ("modified: resized").

export interface SiteImageCredit {
  title: string;
  author: string;
  license: string;
  licenseUrl?: string;
  sourceUrl?: string;
  modified?: string;
}

export interface SiteImage {
  src: string;
  alt: string;
  credit?: SiteImageCredit;
}

export const siteImages: SiteImage[] = [
  {
    src: "/images/areas/ephraim-main-street-roys.jpg",
    alt: "Main Street in Ephraim, Utah at night, with the neon sign of Roy's Pizza on a historic brick storefront",
    credit: { title: "Ephraim Main Street at night", author: "Photo by Jackson", license: "All rights reserved", modified: "resized" },
  },
  {
    src: "/images/areas/manti-valley-temple-hill.jpg",
    alt: "Manti, Utah and the Sanpete Valley seen from the Manti Temple hill",
    credit: { title: "Manti Valley", author: "Ricardo630", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Manti_Valley.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/spring-city-main-street-store.jpg",
    alt: "Historic Schofield's General Merchandise building on Main Street in Spring City, Utah, with its painted Lil Squirt mural",
    credit: { title: "Spring City Main Street store", author: "Mike Price", license: "All rights reserved", modified: "resized" },
  },
  {
    src: "/images/areas/mt-pleasant-evening.jpg",
    alt: "Evening panorama of Mt. Pleasant, Utah and the Wasatch Plateau",
    credit: { title: "Mount pleasant evening", author: "Talshiarr (English Wikipedia)", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mount_pleasant_evening.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/nephi-mount-nebo.jpg",
    alt: "Mount Nebo rising above homes in Nephi, Utah",
    credit: { title: "Nephi, Utah (6905710906)", author: "5of7", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Nephi,_Utah_(6905710906).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/richfield-valley.jpg",
    alt: "Red rock and juniper hills above the Sevier Valley near Richfield, Utah",
    credit: { title: "Richfield - panoramio", author: "On^ste82", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Richfield_-_panoramio.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-palisade-reservoir.jpg",
    alt: "Palisade Reservoir near Sterling in Sanpete County, Utah",
    credit: { title: "Palisade Reservoir - panoramio", author: "runt35", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Palisade_Reservoir_-_panoramio.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/juab-yuba-reservoir.jpg",
    alt: "Early morning over Yuba Reservoir along State Route 28 between Gunnison and Levan, Utah",
    credit: { title: "Early Morning over Yuba Reservoir, State Route 28 Between Gunnison and Levan, Utah (11560478535)", author: "Ken Lund", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Early_Morning_over_Yuba_Reservoir,_State_Route_28_Between_Gunnison_and_Levan,_Utah_(11560478535).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/millard-fillmore-courthouse.jpg",
    alt: "Millard County Courthouse on Main Street in Fillmore, Utah",
    credit: { title: "Millard County Courthouse, Fillmore", author: "Mike Price", license: "All rights reserved", modified: "resized" },
  },
  {
    src: "/images/areas/sevier-monroe-mountain-fall.jpg",
    alt: "Golden fall aspens on Monroe Mountain in the Fishlake National Forest, Sevier County, Utah",
    credit: { title: "Fall color on the Fishlake National Forest (11738249856)", author: "Intermountain Forest Service, USDA Region 4", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fall_color_on_the_Fishlake_National_Forest_(11738249856).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/sevier-koosharem-reservoir.jpg",
    alt: "Koosharem Reservoir in Sevier County, Utah, seen from State Route 24",
    credit: { title: "View across Koosharem Reservoir from Utah State Route 24", author: "Famartin", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:2013-09-23_17_14_40_View_across_Koosharem_Reservoir_from_Utah_State_Route_24.JPG", modified: "resized" },
  },
  {
    src: "/images/areas/ephraim-canyon-wildflowers.jpg",
    alt: "Summer wildflowers in a mountain meadow in Ephraim Canyon on the Manti-La Sal National Forest, Sanpete County, Utah",
    credit: { title: "Rainbow of Wildflowers (11825739695)", author: "Intermountain Region, U.S. Forest Service", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rainbow_of_Wildflowers_(11825739695).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/nephi-barn.jpg",
    alt: "Weathered wooden barn and fresh-cut hay field outside Nephi, Utah, with foothills behind",
    credit: { title: "Nephi, Utah 9-2011 (6842535927)", author: "inkknife_2000", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Nephi,_Utah_9-2011_(6842535927).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/millard-fillmore-territorial-statehouse.jpg",
    alt: "The historic red sandstone Territorial Statehouse in Fillmore, Millard County, Utah, under a clear blue sky",
    credit: { title: "Territorial Statehouse, Fillmore", author: "Mike Price", license: "All rights reserved", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-sagebrush-foothills.jpg",
    alt: "Open sagebrush rangeland below juniper-covered foothills in western Sanpete County, Utah",
    credit: { title: "Sanpete County foothills", author: "Mike Price", license: "All rights reserved", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-us89-farmland.jpg",
    alt: "Historic U.S. Highway 89 running through open farmland in Sanpete County, Utah",
    credit: { title: "US 89 Sanpete County", author: "Ken Lund", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:US_89_Sanpete_County.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/sevier-salina-main-street.jpg",
    alt: "Historic brick storefronts along Main Street in downtown Salina, Sevier County, Utah, with hills behind",
    credit: { title: "Salina, Utah", author: "Quintin Soloviev", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Salina,_Utah.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-fairview-main-street.jpg",
    alt: "Quiet Main Street (U.S. 89) through the small town of Fairview in Sanpete County, Utah",
    credit: { title: "Fairview, Utah (4)", author: "Ken Lund", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fairview,_Utah_(4).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-gunnison-main-street.jpg",
    alt: "Historic brick buildings on Main Street in Gunnison, Sanpete County, Utah",
    credit: { title: "Gunnison, Utah", author: "Ken Lund", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gunnison,_Utah.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/millard-scipio-historic-home.jpg",
    alt: "The historic Thuesen-Petersen house, a two-story brick farmhouse in Scipio, Millard County, Utah",
    credit: { title: "Thuesen-Petersen House Scipio Utah", author: "Ntsimp", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Thuesen-Petersen_House_Scipio_Utah.jpeg", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-fountain-green-historic-home.jpg",
    alt: "The historic Hans Peter Olsen house, a pioneer home with a white picket fence in Fountain Green, Sanpete County, Utah",
    credit: { title: "Olsen House Fountain Green Utah", author: "Ntsimp", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Olsen_House_Fountain_Green_Utah.jpeg", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-moroni-valley-pano.jpg",
    alt: "Green pasture and farm fields outside Moroni in the Sanpete Valley, Utah, with mountains on the horizon",
    credit: { title: "Moroni pano", author: "Talshiarr (English Wikipedia)", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Moroni_pano.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/millard-delta-aerial-farms.jpg",
    alt: "Aerial view of farm fields and rural home sites around Delta, Millard County, Utah",
    credit: { title: "Delta, Utah (7186835150)", author: "Ken Lund", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Delta,_Utah_(7186835150).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-moroni-faux-house.jpg",
    alt: "The historic Jabez Faux house, a two-story stone home with a porch in Moroni, Sanpete County, Utah",
    credit: { title: "Faux House Moroni Utah", author: "Ntsimp", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Faux_House_Moroni_Utah.jpeg", modified: "resized" },
  },
  {
    src: "/images/areas/sevier-monroe-canyon-entrance.jpg",
    alt: "Rocky cliffs and sagebrush hills at the entrance to Monroe Canyon near Monroe, Sevier County, Utah",
    credit: { title: "Entrance to Monroe Canyon dyeclan.com - panoramio", author: "The Dye Clan", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Entrance_to_Monroe_Canyon_dyeclan.com_-_panoramio.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/utah-county-utah-lake-timpanogos.jpg",
    alt: "Utah Lake and Mount Timpanogos seen from Utah Lake State Park in Provo, Utah County",
    credit: { title: "Utah Lake State Park & Mount Timpanogos - panoramio (5)", author: "Roman Eugeniusz", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Utah_Lake_State_Park_%26_Mount_Timpanogos_-_panoramio_(5).jpg", modified: "resized" },
  },
  {
    src: "/images/areas/juab-valley-pasture-sr28.jpg",
    alt: "Open fenced pasture in the southern Juab Valley along State Route 28 near Levan, Juab County, Utah, with the Valley Mountains behind",
    credit: { title: "Valley Mountains from SR-28, Juab County, Utah, Nov 20", author: "An Errant Knight", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Valley_Mountains_from_SR-28,_Juab_County,_Utah,_Nov_20.jpg", modified: "resized" },
  },
  {
    src: "/images/areas/sanpete-spring-city-crawforth-farmstead.jpg",
    alt: "The historic limestone Charles Crawforth farmhouse under large shade trees in evening light in Spring City, Sanpete County, Utah",
    credit: { title: "Charles Crawforth Farmstead in June", author: "Aminglish", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Charles_Crawforth_Farmstead_in_June.jpg", modified: "resized" },
  },
];

const bySrc = new Map(siteImages.map((i) => [i.src, i]));

/** Descriptive alt text for a known site photo, or the fallback. */
export const imageAlt = (src: string | undefined, fallback: string): string =>
  (src && bySrc.get(src)?.alt) || fallback;
