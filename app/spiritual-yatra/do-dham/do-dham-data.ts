export type DoDhamComboDay = {
  title: string;
  details: string;
};

export type DoDhamCombo = {
  slug: string;
  name: string;
  subtitle: string;
  imgSrc: string;
  price: string;
  duration: string;
  route: string;
  bestTime: string;
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: DoDhamComboDay[];
};

export const DO_DHAM_COMBOS: DoDhamCombo[] = [
  {
    slug: "kedarnath-badrinath",
    name: "Kedarnath + Badrinath Do Dham",
    subtitle: "Most popular Garhwal Do Dham circuit",
    imgSrc: "/images/aboutus/KedarnathBarinath.webp",
    price: "₹15,000 / person",
    duration: "6N/7D",
    route: "Haridwar ⇄ Haridwar",
    bestTime: "May to October",
    overview:
      "A classic Do Dham pilgrimage covering Kedarnath and Badrinath with temple darshan, scenic mountain drives, and a smooth spiritual route through Garhwal.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or helicopter charges", "special puja charges", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Guptkashi", details: "Drive to the Kedarnath base region and check in for overnight stay." },
      { title: "Day 2: Guptkashi to Kedarnath", details: "Proceed to Gaurikund and continue to Kedarnath for darshan and stay." },
      { title: "Day 3: Kedarnath to Guptkashi", details: "Morning darshan followed by descent and return to the base region." },
      { title: "Day 4: Guptkashi to Badrinath", details: "Drive through the Garhwal route toward Badrinath and check in." },
      { title: "Day 5: Badrinath darshan", details: "Attend darshan and visit Mana or nearby sacred points if time permits." },
      { title: "Day 6: Badrinath to Rudraprayag side", details: "Begin the return drive with a scenic overnight halt." },
      { title: "Day 7: Return to Haridwar", details: "Complete the journey back to Haridwar." },
    ],
  },
  {
    slug: "kedarnath-gangotri",
    name: "Kedarnath + Gangotri Do Dham",
    subtitle: "Shiva and Ganga spiritual circuit",
    imgSrc: "/images/aboutus/Gangotri.webp",
    price: "On Request",
    duration: "6N/7D",
    route: "Haridwar ⇄ Haridwar",
    bestTime: "May to October",
    overview:
      "A spiritually rich route combining the sacred source of Ganga at Gangotri with the powerful Himalayan shrine of Kedarnath.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or helicopter charges", "special rituals", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Uttarkashi", details: "Drive into the Bhagirathi valley and stay overnight in Uttarkashi." },
      { title: "Day 2: Gangotri darshan", details: "Visit Gangotri temple and spend time at the sacred riverbank before returning or staying nearby." },
      { title: "Day 3: Uttarkashi to Guptkashi", details: "Drive across the Garhwal route toward the Kedarnath base region." },
      { title: "Day 4: Kedarnath yatra", details: "Proceed from Gaurikund to Kedarnath for darshan and stay." },
      { title: "Day 5: Return to base", details: "Descend from Kedarnath and travel back to Guptkashi." },
      { title: "Day 6: Guptkashi to Rudraprayag/Devprayag side", details: "Begin the return drive with a lower halt." },
      { title: "Day 7: Return to Haridwar", details: "Complete the final drive back." },
    ],
  },
  {
    slug: "kedarnath-yamunotri",
    name: "Kedarnath + Yamunotri Do Dham",
    subtitle: "Temple and source-route pilgrimage",
    imgSrc: "/images/aboutus/Yamunotri.webp",
    price: "On Request",
    duration: "6N/7D",
    route: "Haridwar ⇄ Haridwar",
    bestTime: "May to October",
    overview:
      "A balanced Do Dham yatra pairing the Yamunotri pilgrimage route with the sacred Kedarnath dham journey.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or palki charges", "special pujas", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Barkot", details: "Drive to Barkot and prepare for the Yamunotri section." },
      { title: "Day 2: Yamunotri darshan", details: "Travel to Janki Chatti and complete the temple visit before returning to Barkot." },
      { title: "Day 3: Barkot to Guptkashi", details: "Long but scenic transfer toward the Kedarnath base route." },
      { title: "Day 4: Kedarnath yatra", details: "Proceed to Kedarnath for darshan and overnight stay." },
      { title: "Day 5: Return to Guptkashi", details: "Descend and return to the base region." },
      { title: "Day 6: Guptkashi to Rishikesh side", details: "Start the return road journey with a lower halt point." },
      { title: "Day 7: Reach Haridwar", details: "Conclude the yatra with the final drive." },
    ],
  },
  {
    slug: "badrinath-gangotri",
    name: "Badrinath + Gangotri Do Dham",
    subtitle: "Vishnu dham and Ganga origin route",
    imgSrc: "/images/aboutus/Badrinath_Temple.jpg",
    price: "On Request",
    duration: "6N/7D",
    route: "Haridwar ⇄ Haridwar",
    bestTime: "May to October",
    overview:
      "A graceful Do Dham combination that joins Badrinath's spiritual depth with the divine river source at Gangotri.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["special puja charges", "entry fees beyond itinerary", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Uttarkashi", details: "Begin the route with a drive toward Uttarkashi." },
      { title: "Day 2: Gangotri darshan", details: "Cover Gangotri temple and associated local sacred points." },
      { title: "Day 3: Uttarkashi to Joshimath side", details: "Transfer through the mountain route toward the Badrinath side." },
      { title: "Day 4: Badrinath darshan", details: "Visit Badrinath temple and Mana-side sacred attractions if time permits." },
      { title: "Day 5: Badrinath local and return leg", details: "Spend some additional time in the dham region and begin return travel." },
      { title: "Day 6: Lower halt point", details: "Stay en route while descending back toward Haridwar." },
      { title: "Day 7: Return to Haridwar", details: "Complete the pilgrimage drive." },
    ],
  },
  {
    slug: "badrinath-yamunotri",
    name: "Badrinath + Yamunotri Do Dham",
    subtitle: "Alaknanda and Yamuna sacred route",
    imgSrc: "/images/aboutus/chardham.png",
    price: "On Request",
    duration: "6N/7D",
    route: "Haridwar ⇄ Haridwar",
    bestTime: "May to October",
    overview:
      "A scenic pilgrimage linking the Badrinath temple route with the devotional trek to Yamunotri.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony charges", "special pujas", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Barkot", details: "Drive to Barkot and stay overnight." },
      { title: "Day 2: Yamunotri darshan", details: "Visit Yamunotri via Janki Chatti and return to Barkot." },
      { title: "Day 3: Barkot to Joshimath side", details: "Travel across the Garhwal route toward Badrinath." },
      { title: "Day 4: Badrinath darshan", details: "Attend temple darshan and visit local sacred places." },
      { title: "Day 5: Badrinath to Rudraprayag side", details: "Begin return drive with en route halt." },
      { title: "Day 6: Continue return journey", details: "Proceed toward Haridwar with scenic stops." },
      { title: "Day 7: Reach Haridwar", details: "Conclude the package." },
    ],
  },
  {
    slug: "gangotri-yamunotri",
    name: "Gangotri + Yamunotri Do Dham",
    subtitle: "Source temples of Ganga and Yamuna",
    imgSrc: "/images/aboutus/Gangotriyumnotri.webp",
    price: "On Request",
    duration: "5N/6D",
    route: "Haridwar ⇄ Haridwar",
    bestTime: "May to October",
    overview:
      "A meaningful Do Dham pilgrimage focused on the sacred origins of India’s two most revered rivers, Ganga and Yamuna.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or palki charges", "special pujas", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Barkot", details: "Drive to Barkot and rest overnight." },
      { title: "Day 2: Yamunotri darshan", details: "Visit Yamunotri temple and return to the halt point." },
      { title: "Day 3: Barkot to Uttarkashi", details: "Travel to Uttarkashi and prepare for the Gangotri route." },
      { title: "Day 4: Gangotri darshan", details: "Drive to Gangotri, attend darshan, and return or stay as planned." },
      { title: "Day 5: Uttarkashi to lower halt point", details: "Begin the return journey toward Haridwar." },
      { title: "Day 6: Reach Haridwar", details: "Complete the Do Dham route." },
    ],
  },
];

export const getDoDhamComboBySlug = (slug: string) =>
  DO_DHAM_COMBOS.find((item) => item.slug === slug);
