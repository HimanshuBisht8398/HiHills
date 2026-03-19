export type SpiritualYatraDay = {
  title: string;
  details: string;
};

export type SpiritualYatraPackage = {
  slug: string;
  heading: string;
  imgSrc: string;
  paragraph: string;
  price: string;
  bestTime: string;
  tag?: string;
  route: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: SpiritualYatraDay[];
};

export const SPIRITUAL_YATRA_PACKAGES: SpiritualYatraPackage[] = [
  {
    slug: "uttarakhand-char-dham-yatra",
    heading: "Uttrakhand Char Dham Yatra.",
    imgSrc: "/images/aboutus/chardham.png",
    paragraph:
      "Experience the sacred Char Dham Yatra in the serene mountains of Uttarakhand with a spiritually rich journey to Kedarnath, Badrinath, Gangotri, and Yamunotri.",
    price: "₹15,000",
    bestTime: "April to June, September to November",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or helicopter charges", "special pujas", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Barkot", details: "Begin the yatra with a drive to Barkot and settle into the stay." },
      { title: "Day 2: Yamunotri darshan", details: "Travel to Janki Chatti and complete the Yamunotri temple visit." },
      { title: "Day 3: Barkot to Uttarkashi", details: "Drive to Uttarkashi and prepare for the Gangotri section." },
      { title: "Day 4: Gangotri darshan", details: "Visit Gangotri temple and return to the halt point." },
      { title: "Day 5: Uttarkashi to Guptkashi", details: "Travel toward the Kedarnath base region." },
      { title: "Day 6: Kedarnath yatra", details: "Proceed to Gaurikund and continue onward to Kedarnath for darshan." },
      { title: "Day 7: Return to Guptkashi", details: "Descend from Kedarnath and return to the base region." },
      { title: "Day 8: Guptkashi to Badrinath", details: "Drive onward toward the Badrinath dham route." },
      { title: "Day 9: Badrinath and Mana visit", details: "Attend darshan and cover nearby sacred spots if time allows." },
      { title: "Day 10: Return to Haridwar", details: "Complete the yatra with the final drive back." },
    ],
  },
  {
    slug: "uttarakhand-do-dham-yatra",
    heading: "Uttrakhand Do Dham Yatra.",
    imgSrc: "/images/aboutus/chardham.png",
    paragraph:
      "The Do Dham Yatra is a deeply spiritual Garhwal pilgrimage with scenic valleys, sacred shrines, and guided support throughout the route.",
    price: "₹10,000",
    bestTime: "April to June, September to November",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or helicopter charges", "special puja charges", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Guptkashi", details: "Drive to the Kedarnath base region and check in." },
      { title: "Day 2: Kedarnath yatra", details: "Proceed to Gaurikund and continue to Kedarnath for darshan." },
      { title: "Day 3: Return to base", details: "Descend and return to Guptkashi or nearby stay point." },
      { title: "Day 4: Drive to Badrinath", details: "Continue the route through Garhwal toward Badrinath." },
      { title: "Day 5: Badrinath darshan", details: "Visit Badrinath temple and nearby sacred sites." },
      { title: "Day 6: Return journey", details: "Drive back toward Haridwar and conclude the yatra." },
    ],
  },
  {
    slug: "adi-kailash-om-parvat-yatra",
    heading: "Adi Kailash & Om Parvat Yatra.",
    imgSrc: "/images/aboutus/AdiOm.jpg",
    paragraph:
      "Journey to the Chhota Kailash region and the miraculous Om Parvat zone with raw Himalayan beauty, remote culture, and spiritual significance.",
    price: "₹12,000",
    bestTime: "May to October",
    route: "Kathgodam ⇄ Kathgodam",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["permits beyond package scope", "medical expenses", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Kathgodam to Pithoragarh", details: "Begin the long mountain drive into Kumaon." },
      { title: "Day 2: Pithoragarh to Dharchula", details: "Proceed toward the border region and complete local formalities if required." },
      { title: "Day 3: Dharchula to higher halt point", details: "Continue deeper into the route and acclimatize." },
      { title: "Day 4: Adi Kailash visit", details: "Visit the sacred Adi Kailash area and nearby spiritual landmarks." },
      { title: "Day 5: Om Parvat viewpoint", details: "Cover the Om Parvat side excursion as weather and permissions allow." },
      { title: "Day 6: Begin return", details: "Descend back toward lower Kumaon." },
      { title: "Day 7: Return to Kathgodam", details: "Complete the journey back." },
    ],
  },
  {
    slug: "panch-kedar-yatra",
    heading: "Panch Kedar Yatra.",
    imgSrc: "/images/aboutus/Panch-Kedar-Yatra.png",
    paragraph:
      "Visit the five sacred Shiva temples of the Panch Kedar circuit through some of the most beautiful meadows, valleys, and ridges of Garhwal.",
    price: "₹18,000",
    bestTime: "April to June, September to November",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["porter or pony charges", "personal trekking gear", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Guptkashi", details: "Drive toward the Garhwal temple circuit and rest overnight." },
      { title: "Day 2: Kedarnath route", details: "Cover the Kedarnath portion of the yatra with darshan and stay." },
      { title: "Day 3: Return and transfer", details: "Descend and move toward the next Kedar route point." },
      { title: "Day 4: Tungnath / Madhyamaheshwar sector", details: "Continue the circuit with temple visits as per route plan." },
      { title: "Day 5: Rudranath side", details: "Reach the next temple region through trek and road combination." },
      { title: "Day 6: Kalpeshwar and nearby darshan", details: "Cover the remaining Kedar points included in the itinerary." },
      { title: "Day 7: Return to Haridwar", details: "Complete the pilgrimage drive back." },
    ],
  },
  {
    slug: "panch-badri-yatra",
    heading: "Panch Badri Yatra.",
    imgSrc: "/images/aboutus/panch-badri.webp",
    paragraph:
      "Explore the five holy abodes of Lord Vishnu across Uttarakhand, combining devotion, mountain travel, and rich temple heritage.",
    price: "₹14,000",
    bestTime: "April to June, September to November",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["special puja charges", "entry fees outside itinerary", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Joshimath", details: "Drive into the Alaknanda valley and halt for the night." },
      { title: "Day 2: Adi Badri and onward route", details: "Begin covering the Panch Badri circuit points included in the package." },
      { title: "Day 3: Yogdhyan and Vriddha Badri sector", details: "Continue temple visits with local travel support." },
      { title: "Day 4: Badrinath darshan", details: "Visit the main Badrinath shrine and nearby sacred locations." },
      { title: "Day 5: Bhavishya Badri side", details: "Cover the remaining circuit point as per weather and road conditions." },
      { title: "Day 6: Return to Haridwar", details: "Descend back after finishing the temple circuit." },
    ],
  },
  {
    slug: "panch-prayag-darshan",
    heading: "Panch Prayag Darshan.",
    imgSrc: "/images/aboutus/panch-prayag.jpg",
    paragraph:
      "Witness the five sacred river confluences of the Alaknanda system, each representing a deeply revered Himalayan prayag.",
    price: "₹8,000",
    bestTime: "April to June, September to November",
    route: "Haridwar ⇄ Haridwar",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["special rituals", "personal expenses", "extra sightseeing costs", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Devprayag side", details: "Start the prayag route with the first major confluence visit." },
      { title: "Day 2: Rudraprayag and Karnaprayag", details: "Continue upstream and cover more sacred confluences." },
      { title: "Day 3: Nandprayag and Vishnuprayag", details: "Visit the upper prayags and nearby temples." },
      { title: "Day 4: Return journey", details: "Drive back toward Haridwar after completing the darshan circuit." },
    ],
  },
  {
    slug: "amarnath-yatra",
    heading: "Amarnath Yatra.",
    imgSrc: "/images/aboutus/amarnath-yatra.webp",
    paragraph:
      "Embark on a challenging but deeply rewarding pilgrimage to the Amarnath Cave in Kashmir to witness the naturally occurring ice Shiva Lingam.",
    price: "₹20,000",
    bestTime: "July to August",
    route: "Jammu / Srinagar ⇄ Jammu / Srinagar",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["helicopter upgrades", "medical expenses", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Arrival in Jammu or Srinagar", details: "Reach the arrival city and transfer to the yatra base arrangement." },
      { title: "Day 2: Transfer to Pahalgam or Baltal", details: "Move to the designated base route and rest for the pilgrimage." },
      { title: "Day 3: Amarnath darshan", details: "Proceed to the holy cave for darshan through the selected route." },
      { title: "Day 4: Return to base camp", details: "Descend and travel back to the lower halt point." },
      { title: "Day 5: Departure", details: "Transfer to onward destination after breakfast." },
    ],
  },
  {
    slug: "vaishno-devi-yatra",
    heading: "Vaishno Devi Yatra.",
    imgSrc: "/images/aboutus/vaishno-devi.avif",
    paragraph:
      "Seek blessings of Mata Rani at the Trikuta Mountains in Katra with a devotional journey filled with chants, energy, and sacred cave darshan.",
    price: "₹5,000",
    bestTime: "Year-round (best in spring and autumn)",
    route: "Jammu ⇄ Jammu",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["helicopter or pony charges", "special darshan passes", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Arrival in Katra", details: "Reach Katra, check in, and prepare for the yatra." },
      { title: "Day 2: Vaishno Devi darshan", details: "Begin the trek or optional local transport route to the Bhawan for darshan." },
      { title: "Day 3: Return and departure", details: "Descend back to Katra and continue to Jammu for onward travel." },
    ],
  },
];

export const getSpiritualYatraBySlug = (slug: string) =>
  SPIRITUAL_YATRA_PACKAGES.find((item) => item.slug === slug);
