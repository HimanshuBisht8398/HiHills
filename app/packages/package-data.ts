export type PopularPackageDay = {
  title: string;
  details: string;
};

export type PopularPackage = {
  slug: string;
  heading: string;
  heading2: string;
  price: string;
  duration: string;
  bestSeason: string;
  imgSrc: string;
  route: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: PopularPackageDay[];
  overview: string;
};

export const POPULAR_PACKAGES: PopularPackage[] = [
  {
    slug: "kedarnath",
    heading: "Kedarnath Dham",
    heading2: "Spiritual Himalayan Journey",
    price: "5000/person",
    duration: "5 Days / 4 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/wework/Kedarnath.jpg",
    route: "Haridwar ⇄ Haridwar",
    overview: "A sacred Himalayan pilgrimage to Kedarnath with scenic drives, temple darshan, and a complete yatra experience from Haridwar to Haridwar.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["helicopter or pony charges", "personal expenses", "special puja charges", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Guptkashi", details: "Drive through the Garhwal valleys and check in near the Kedarnath base region." },
      { title: "Day 2: Guptkashi to Kedarnath", details: "Proceed to Gaurikund and begin the trek or optional local transfer toward Kedarnath." },
      { title: "Day 3: Kedarnath darshan", details: "Attend morning darshan and spend time near the temple complex and surrounding viewpoints." },
      { title: "Day 4: Return to base region", details: "Descend to Gaurikund and drive back to Guptkashi or nearby stay point." },
      { title: "Day 5: Return to Haridwar", details: "Drive back after breakfast and conclude the yatra." },
    ],
  },
  {
    slug: "badrinath",
    heading: "Badrinath Dham",
    heading2: "Sacred Vishnu Temple",
    price: "5000/person",
    duration: "5 Days / 4 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Badrinath_Temple.jpg",
    route: "Haridwar ⇄ Haridwar",
    overview: "A devotional journey to Badrinath with comfortable halts, darshan, and visits to nearby spiritual landmarks in the Garhwal Himalayas.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["personal expenses", "special puja charges", "entry fees outside itinerary", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Joshimath", details: "Drive via Devprayag and Rudraprayag toward the Badrinath route and stay near Joshimath." },
      { title: "Day 2: Joshimath to Badrinath", details: "Proceed to Badrinath, check in, and attend darshan depending on arrival time." },
      { title: "Day 3: Badrinath local visit", details: "Visit Mana Village and nearby sacred points before returning to the hotel." },
      { title: "Day 4: Badrinath to Joshimath", details: "Drive back and enjoy a relaxed evening halt." },
      { title: "Day 5: Joshimath to Haridwar", details: "Return drive after breakfast." },
    ],
  },
  {
    slug: "kedarnath-badrinath",
    heading: "Kedarnath & Badrinath",
    heading2: "Do Dham Yatra",
    price: "12000/person",
    duration: "7 Days / 6 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/KedarnathBarinath.webp",
    route: "Haridwar ⇄ Haridwar",
    overview: "A complete Do Dham pilgrimage covering Kedarnath and Badrinath with planned travel, darshan, and overnight halts across the Garhwal circuit.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or helicopter charges", "special darshan charges", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Guptkashi", details: "Drive to the Kedarnath base region and rest for the next day." },
      { title: "Day 2: Kedarnath trek", details: "Travel to Gaurikund and continue to Kedarnath for overnight stay." },
      { title: "Day 3: Kedarnath to Guptkashi", details: "Morning darshan followed by descent and drive back." },
      { title: "Day 4: Guptkashi to Badrinath", details: "Drive across the Garhwal circuit toward Badrinath." },
      { title: "Day 5: Badrinath sightseeing", details: "Attend darshan and visit Mana-side points if time and weather permit." },
      { title: "Day 6: Return journey", details: "Begin the descent toward lower halt point." },
      { title: "Day 7: Reach Haridwar", details: "Complete the route and return to Haridwar." },
    ],
  },
  {
    slug: "gangotri",
    heading: "Gangotri Dham",
    heading2: "Origin of Holy Ganga",
    price: "6000/person",
    duration: "5 Days / 4 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Gangotri.webp",
    route: "Haridwar ⇄ Haridwar",
    overview: "A spiritual road journey to Gangotri, the revered origin of the Ganga, with temple darshan and scenic stays through the Bhagirathi valley.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["personal expenses", "special rituals", "lunch during transit", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Uttarkashi", details: "Drive into the Bhagirathi valley and halt for the night." },
      { title: "Day 2: Uttarkashi to Gangotri", details: "Continue to Gangotri and attend temple darshan after arrival." },
      { title: "Day 3: Gangotri local day", details: "Spend time at the temple, riverbank, and nearby sacred points." },
      { title: "Day 4: Return to Uttarkashi", details: "Drive back and rest overnight." },
      { title: "Day 5: Return to Haridwar", details: "Complete the road journey back." },
    ],
  },
  {
    slug: "yamunotri",
    heading: "Yamunotri Dham",
    heading2: "Source of Yamuna River",
    price: "6000/person",
    duration: "5 Days / 4 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Yamunotri.webp",
    route: "Haridwar ⇄ Haridwar",
    overview: "A classic Yamunotri pilgrimage package with road travel, temple trek, and comfortable halts designed for a smooth spiritual journey.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony or palki charges", "personal expenses", "special puja charges", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Barkot", details: "Drive to Barkot through the lower Himalayan route." },
      { title: "Day 2: Yamunotri darshan", details: "Proceed to Janki Chatti and trek to the temple for darshan." },
      { title: "Day 3: Barkot local halt", details: "Relax or include nearby local sightseeing depending on package pace." },
      { title: "Day 4: Descend toward Haridwar side", details: "Begin the return road journey." },
      { title: "Day 5: Reach Haridwar", details: "Complete the final drive." },
    ],
  },
  {
    slug: "gangotri-yamunotri",
    heading: "Gangotri & Yamunotri Dham",
    heading2: "Source of Yamuna River",
    price: "6000/person",
    duration: "5 Days / 4 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Gangotriyumnotri.webp",
    route: "Haridwar ⇄ Haridwar",
    overview: "A dual dham pilgrimage to Gangotri and Yamunotri with guided travel, temple visits, and overnight stays across Uttarakhand's sacred valleys.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony charges", "special pujas", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Barkot", details: "Drive to Barkot and rest overnight." },
      { title: "Day 2: Yamunotri excursion", details: "Visit Yamunotri and return to the stay point." },
      { title: "Day 3: Barkot to Uttarkashi", details: "Travel across valleys to Uttarkashi." },
      { title: "Day 4: Gangotri darshan", details: "Drive to Gangotri and return or stay depending on package flow." },
      { title: "Day 5: Return journey", details: "Descend toward Haridwar." },
    ],
  },
  {
    slug: "adi-kailash-om-parvat",
    heading: "Adi Kailash & Om Parvat",
    heading2: "Spiritual Expedition to Adi Kailash & Om Parvat",
    price: "6000/person",
    duration: "6 Days / 5 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/AdiOm.jpg",
    route: "Kathgodam ⇄ Kathgodam",
    overview: "A high-altitude spiritual expedition to Adi Kailash and Om Parvat featuring remote mountain routes, sacred sights, and deep Himalayan landscapes.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["permits beyond package scope", "medical costs", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Kathgodam to Pithoragarh", details: "Begin the long road journey toward the eastern Himalayas." },
      { title: "Day 2: Pithoragarh to Dharchula", details: "Proceed toward the high border region and complete permit formalities if required." },
      { title: "Day 3: Dharchula sector exploration", details: "Continue deeper into the route with mountain halts and acclimatization." },
      { title: "Day 4: Adi Kailash darshan", details: "Visit the Adi Kailash region and sacred nearby points." },
      { title: "Day 5: Om Parvat side excursion", details: "Explore the Om Parvat viewpoint as conditions allow." },
      { title: "Day 6: Return leg", details: "Begin the descent back toward lower districts." },
    ],
  },
  {
    slug: "rudranath-spiritual-trek",
    heading: "Rudranath Temple",
    heading2: "The Toughest & Most Beautiful Kedar",
    price: "₹ 13,500 / person",
    bestSeason: "Best Season: May - Oct",
    duration: "5 Days / 4 Nights",
    imgSrc: "/images/aboutus/Rudranath.jpeg",
    route: "Haridwar ⇄ Sagar Village ⇄ Rudranath ⇄ Haridwar",
    overview: 
      "A journey to the 'Ekanan' (Face) of Lord Shiva. This 5-day trek takes you through the lush rhododendron forests and high-altitude alpine meadows (Bugyals) of the Garhwal Himalayas to the only Kedar where the face of the Lord is worshipped.",
    inclusions: [
      "4 Nights accommodation (1N Sagar, 2N Alpine Camps, 1N Gopeshwar)",
      "MAP Plan (Healthy Breakfast and Dinner for trekking energy)",
      "Private Vehicle for Haridwar to Haridwar transfers",
      "Certified Mountain Guide and Forest Permits",
      "Basic First Aid and Oxygen Cylinder for the group"
    ],
    exclusions: [
      "Pony or porter charges for personal luggage",
      "Personal trekking gear (Shoes, Poles, Raincoats)",
      "Lunch and energy snacks/electrolytes",
      "Travel insurance or emergency evacuation"
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Sagar Village (The Base)",
        details:
          "Pick up from Haridwar. Drive via the holy confluences of Devprayag and Rudraprayag. Reach Sagar Village (near Gopeshwar) by evening. Check into a local homestay, meet your guide for a trek briefing, and prepare your gear. Overnight stay in Sagar."
      },
      {
        title: "Day 2: Sagar Village to Luty Bugyal / Panar Bugyal",
        details:
          "Start the 10km steep ascent early in the morning. Trek through dense forests of Oak and Rhododendron. Reach the high-altitude meadow of Panar Bugyal ($3,400m$), offering spectacular views of Trishul and Nanda Devi peaks. Overnight stay in Alpine tents."
      },
      {
        title: "Day 3: Panar Bugyal to Rudranath Temple Darshan",
        details:
          "Trek 8km across the ridge through Pitradhar (The Point of Ancestors). Reach the ancient cave temple of Rudranath. Take a holy dip in the Narad Kund and attend the evening Aarti. Witness the sunset over the Chaukhamba peaks. Overnight stay in basic guesthouse/tents near the temple."
      },
      {
        title: "Day 4: Rudranath to Sagar & Drive to Gopeshwar",
        details:
          "After morning Darshan, begin the long descent back to Sagar Village. The downhill trek is physically demanding but offers different perspectives of the valley. Once at the base, drive to Gopeshwar. Visit the historic Gopinath Temple (the winter seat of Rudranath). Overnight stay in Gopeshwar."
      },
      {
        title: "Day 5: Gopeshwar to Haridwar Departure",
        details:
          "After breakfast, begin the return drive. Stop at the scenic Karnaprayag (Confluence of Alaknanda & Pindar rivers). Reach Haridwar Railway Station by evening (6:00 PM - 7:00 PM) for your onward journey."
      }
    ],
},
  {
    slug: "tungnath",
    heading: "Tungnath Temple",
    heading2: "Spiritual Expedition to Tungnath Temple",
    price: "6000/person",
    duration: "3 Days / 2 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/wework/Tungnath.jpeg",
    route: "Haridwar ⇄ Haridwar",
    overview: "A short spiritual escape to Tungnath with mountain drives, an easy temple trek, and serene Himalayan views around Chopta.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony charges", "personal expenses", "special pujas", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Chopta", details: "Drive to Chopta and check in for the night." },
      { title: "Day 2: Tungnath trek", details: "Trek to Tungnath Temple, spend time for darshan, and return to Chopta." },
      { title: "Day 3: Return to Haridwar", details: "Drive back after breakfast." },
    ],
  },
  {
    slug: "madhyamaheshwar",
    heading: "Madhyamaheshwar Temple",
    heading2: "Spiritual Expedition to Madhyamaheshwar Temple",
    price: "6000/person",
    duration: "5 Days / 4 Nights",
    bestSeason: "Best Season: May - Oct",
    imgSrc: "/images/aboutus/Madmaheshwar.jpg",
    route: "Haridwar ⇄ Haridwar",
    overview: "A rewarding spiritual trek to Madhyamaheshwar combining scenic mountain trails, temple darshan, and peaceful overnight halts in the highlands.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["porter charges", "personal trek gear", "personal expenses", "insurance"],
    itinerary: [
      { title: "Day 1: Haridwar to Ransi sector", details: "Drive to the trek base area and stay overnight." },
      { title: "Day 2: Trek to camp", details: "Begin the trek and move to an intermediate halt." },
      { title: "Day 3: Reach Madhyamaheshwar", details: "Continue the climb and visit the temple for darshan." },
      { title: "Day 4: Descend to base", details: "Retrace the route and halt near the roadhead." },
      { title: "Day 5: Return to Haridwar", details: "Drive back and conclude the package." },
    ],
  },
  {
    slug: "panchachuli-base-camp",
    heading: "Panchachuli Base Camp",
    heading2: "Journey to the Five Peaks of Kumaon",
    price: "15000/person",
    duration: "6 Days / 5 Nights",
    bestSeason: "Best Season: May - June, Sept - Oct",
    imgSrc: "/images/aboutus/Panchachuli-Base-Camp.jpg",
    route: "Kathgodam ⇄ Kathgodam",
    overview: "An adventurous Kumaon expedition to Panchachuli Base Camp with valley trekking, mountain panoramas, and immersive Himalayan camping.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["personal trek gear", "porter charges", "insurance", "personal expenses"],
    itinerary: [
      { title: "Day 1: Kathgodam to Munsiyari", details: "Drive deep into Kumaon and stay overnight in Munsiyari." },
      { title: "Day 2: Munsiyari to base village", details: "Proceed to the trek start point and begin walking to the first camp." },
      { title: "Day 3: Trek deeper into valley", details: "Move toward the Panchachuli base route with river and glacier views." },
      { title: "Day 4: Base camp exploration", details: "Reach the viewpoint/base camp area and enjoy the mountain panorama." },
      { title: "Day 5: Descent", details: "Begin the return trek to the roadhead." },
      { title: "Day 6: Return to Kathgodam", details: "Complete the drive back." },
    ],
  },
  {
    slug: "valley-of-flowers",
    heading: "Valley of Flowers",
    heading2: "Explore the Blooming Paradise of the Himalayas",
    price: "8000/person",
    duration: "6 Days / 5 Nights",
    bestSeason: "Best Season: July - Aug",
    imgSrc: "/images/aboutus/Valleyofflowers.jpg",
    route: "Rishikesh ⇄ Rishikesh",
    overview: "A seasonal Himalayan getaway to the Valley of Flowers with scenic drives, meadow trails, and a vibrant monsoon bloom experience.",
    inclusions: ["meals", "stay", "transport", "guide"],
    exclusions: ["pony charges", "personal expenses", "entry fees beyond package", "insurance"],
    itinerary: [
      { title: "Day 1: Rishikesh to Joshimath side", details: "Drive through the Alaknanda valley and stay near Joshimath or Pipalkoti." },
      { title: "Day 2: Govindghat to Ghangaria", details: "Drive to Govindghat and trek to Ghangaria." },
      { title: "Day 3: Valley of Flowers visit", details: "Spend the day exploring the valley and return to Ghangaria." },
      { title: "Day 4: Optional Hemkund or rest day", details: "Depending on package flow, visit Hemkund Sahib or relax locally." },
      { title: "Day 5: Return route", details: "Descend to Govindghat and drive toward lower halt point." },
      { title: "Day 6: Return to Rishikesh", details: "Complete the journey back." },
    ],
  },
];

export const getPopularPackageBySlug = (slug: string) =>
  POPULAR_PACKAGES.find((item) => item.slug === slug);
