export type SpiritualPlaceDay = {
  title: string;
  details: string;
};

export type SpiritualPlace = {
  slug: string;
  profession: string;
  price: string;
  duration: string;
  route: string;
  imgSrc: string;
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: SpiritualPlaceDay[];
};

export const SPIRITUAL_PLACES: SpiritualPlace[] = [
  {
    slug: "rishikesh",
    profession: "Rishikesh",
    price: "5,000",
    duration: "2 Days",
    route: "Rishikesh - Neelkanth - Rishikesh",
    imgSrc: "/images/wework/Rishikesh.jpg",
    overview:
      "A spiritual break around yoga capital Rishikesh with temple visits, Ganga aarti, and a peaceful excursion to Neelkanth Mahadev.",
    inclusions: [
      "Hotel accommodation",
      "Breakfast and dinner",
      "Local sightseeing assistance",
      "Pickup and drop as per itinerary",
      "Driver allowance and parking",
    ],
    exclusions: [
      "Personal expenses and shopping",
      "Lunch and snacks",
      "Adventure activities",
      "VIP darshan or special puja charges",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival in Rishikesh",
        details:
          "Check in and begin local sightseeing with Ram Jhula, Laxman Jhula area, Triveni Ghat, and evening Ganga aarti.",
      },
      {
        title: "Day 2: Neelkanth Mahadev and departure",
        details:
          "Drive to Neelkanth Mahadev Temple in the morning, spend time for darshan, and return for checkout and departure.",
      },
    ],
  },
  {
    slug: "haridwar",
    profession: "Haridwar",
    price: "4,000",
    duration: "1 Day",
    route: "Haridwar - Rishikesh - Haridwar",
    imgSrc: "/images/wework/Haridwar.jpeg",
    overview:
      "A short sacred circuit covering the spiritual heart of Haridwar with an easy extension toward Rishikesh.",
    inclusions: [
      "Same-day transport",
      "Sightseeing as per itinerary",
      "Driver allowance and parking",
      "Travel assistance",
    ],
    exclusions: [
      "Meals",
      "Personal expenses",
      "Temple donations",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar and Rishikesh darshan",
        details:
          "Visit Har Ki Pauri, Mansa Devi or Chandi Devi area, continue toward Rishikesh for key ghats and temples, then return.",
      },
    ],
  },
  {
    slug: "kedarnath-dham",
    profession: "Kedarnath Dham",
    price: "12,000",
    duration: "5 Days",
    route: "Haridwar - Kedarnath - Haridwar",
    imgSrc: "/images/wework/Kedarnath.jpg",
    overview:
      "A classic Kedarnath yatra covering the sacred shrine, mountain stay, and road journey through the Garhwal valleys.",
    inclusions: [
      "Transport from Haridwar and back",
      "Hotel and guesthouse stay",
      "Breakfast and dinner",
      "Trip coordination",
      "Driver allowance and parking",
    ],
    exclusions: [
      "Pony, palki, porter, or helicopter charges",
      "Lunch and personal snacks",
      "VIP darshan or puja charges",
      "Medical and rescue expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Guptkashi",
        details:
          "Drive through Devprayag and Rudraprayag to reach Guptkashi or nearby stay point.",
      },
      {
        title: "Day 2: Guptkashi to Kedarnath",
        details:
          "Proceed to Gaurikund and begin the trek or take optional local services to Kedarnath. Overnight near the temple area.",
      },
      {
        title: "Day 3: Kedarnath darshan",
        details:
          "Attend morning darshan and spend time around the temple complex and nearby viewpoints.",
      },
      {
        title: "Day 4: Return to Guptkashi",
        details:
          "Descend to Gaurikund and drive back to Guptkashi for overnight stay.",
      },
      {
        title: "Day 5: Guptkashi to Haridwar",
        details:
          "Drive back after breakfast and conclude the yatra.",
      },
    ],
  },
  {
    slug: "badrinath-dham",
    profession: "Badrinath Dham",
    price: "12,000",
    duration: "5 Days",
    route: "Haridwar - Badrinath - Haridwar",
    imgSrc: "/images/wework/Badrinath.webp",
    overview:
      "A sacred journey to Badrinath with temple darshan, mountain roads, and optional stops at key prayags en route.",
    inclusions: [
      "Transport from Haridwar",
      "Hotel accommodation",
      "Breakfast and dinner",
      "Trip coordination",
      "Driver charges and parking",
    ],
    exclusions: [
      "Lunch and refreshments",
      "Special puja charges",
      "Personal expenses",
      "Insurance or emergency costs",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Joshimath",
        details:
          "Drive through the Alaknanda valley and stay overnight at Joshimath or Pipalkoti.",
      },
      {
        title: "Day 2: Joshimath to Badrinath",
        details:
          "Drive to Badrinath, check in, and visit the temple area for darshan depending on arrival time.",
      },
      {
        title: "Day 3: Badrinath local sightseeing",
        details:
          "Attend morning darshan and visit Mana Village, Bhim Pul, and nearby sacred spots if weather permits.",
      },
      {
        title: "Day 4: Return to Joshimath",
        details:
          "Drive back to Joshimath or Pipalkoti for overnight stay.",
      },
      {
        title: "Day 5: Joshimath to Haridwar",
        details:
          "Return drive to Haridwar after breakfast.",
      },
    ],
  },
  {
    slug: "tungnath-temple",
    profession: "Tungnath Temple",
    price: "6,000",
    duration: "3 Days",
    route: "Rishikesh - Tungnath - Rishikesh",
    imgSrc: "/images/wework/Tungnath.jpeg",
    overview:
      "A short spiritual and scenic escape to Tungnath, with a rewarding temple trek and grand Himalayan views.",
    inclusions: [
      "Transport from Rishikesh",
      "Hotel or camp stay",
      "Breakfast and dinner",
      "Trip assistance",
      "Driver allowance and parking",
    ],
    exclusions: [
      "Lunch and snacks",
      "Pony or porter charges",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Chopta",
        details:
          "Drive through the Garhwal hills to Chopta and check in for the night.",
      },
      {
        title: "Day 2: Tungnath darshan and return",
        details:
          "Trek to Tungnath Temple in the morning, enjoy the mountain setting, and return to Chopta.",
      },
      {
        title: "Day 3: Chopta to Rishikesh",
        details:
          "Drive back after breakfast and conclude the trip.",
      },
    ],
  },
  {
    slug: "gangotri",
    profession: "Gangotri",
    price: "10,000",
    duration: "5 Days",
    route: "Haridwar - Gangotri - Haridwar",
    imgSrc: "/images/aboutus/Gangotri.webp",
    overview:
      "A sacred Char Dham route to Gangotri featuring temple darshan, river views, and the spiritual atmosphere of the Bhagirathi valley.",
    inclusions: [
      "Road transport",
      "Hotel and guesthouse stay",
      "Breakfast and dinner",
      "Trip coordination",
      "Driver charges and parking",
    ],
    exclusions: [
      "Lunch and snacks",
      "Temple rituals and donations",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Barkot/Uttarkashi",
        details:
          "Drive toward the upper Garhwal region and halt at a comfortable transit town.",
      },
      {
        title: "Day 2: Transit point to Gangotri",
        details:
          "Continue the scenic drive to Gangotri and attend darshan at the temple.",
      },
      {
        title: "Day 3: Gangotri local visit",
        details:
          "Spend the day around Gangotri temple, Bhagirath Shila, and nearby riverbank areas.",
      },
      {
        title: "Day 4: Return drive",
        details:
          "Drive back to Uttarkashi or lower halt point for overnight stay.",
      },
      {
        title: "Day 5: Return to Haridwar",
        details:
          "Complete the journey back to Haridwar.",
      },
    ],
  },
  {
    slug: "yamunotri",
    profession: "Yamunotri",
    price: "10,000",
    duration: "5 Days",
    route: "Haridwar - Yamunotri - Haridwar",
    imgSrc: "/images/aboutus/Yamunotri.webp",
    overview:
      "A devotional route to Yamunotri combining a road journey through the hills with the final temple trek from Janki Chatti.",
    inclusions: [
      "Road transport",
      "Hotel stay",
      "Breakfast and dinner",
      "Trip support",
      "Driver charges and parking",
    ],
    exclusions: [
      "Pony or palki charges",
      "Lunch and snacks",
      "Temple offerings",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Barkot",
        details:
          "Drive from Haridwar to Barkot and rest overnight.",
      },
      {
        title: "Day 2: Barkot to Yamunotri and back",
        details:
          "Proceed to Janki Chatti and trek to Yamunotri Temple for darshan. Return to Barkot by evening.",
      },
      {
        title: "Day 3: Barkot local rest and sightseeing",
        details:
          "Enjoy a relaxed day or nearby temple visits depending on pace and weather.",
      },
      {
        title: "Day 4: Barkot to Rishikesh/Haridwar side",
        details:
          "Begin the return drive and halt lower down in the hills.",
      },
      {
        title: "Day 5: Final return",
        details:
          "Complete the drive back to Haridwar.",
      },
    ],
  },
  {
    slug: "kainchi-dham",
    profession: "Kainchi Dham",
    price: "6,000",
    duration: "3 Days",
    route: "Rishikesh - Kainchi Dham - Rishikesh",
    imgSrc: "/images/wework/Kainchi.webp",
    overview:
      "A serene Kumaon spiritual trip centered on the famous Neem Karoli Baba ashram at Kainchi Dham.",
    inclusions: [
      "Transport for the trip",
      "Hotel accommodation",
      "Breakfast and dinner",
      "Driver allowance and parking",
      "Travel assistance",
    ],
    exclusions: [
      "Lunch and snacks",
      "Personal shopping",
      "Special rituals or donations",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Travel to Nainital side",
        details:
          "Drive toward the Kumaon hills and check in at your stay near Nainital or Bhawali.",
      },
      {
        title: "Day 2: Kainchi Dham visit",
        details:
          "Visit Kainchi Dham for darshan and spend peaceful time in the ashram surroundings. Return to hotel later in the day.",
      },
      {
        title: "Day 3: Return journey",
        details:
          "Travel back after breakfast and conclude the trip.",
      },
    ],
  },
  {
    slug: "panch-kedar",
    profession: "Panch Kedar",
    price: "15,000",
    duration: "7 Days",
    route: "Haridwar - Panch Kedar - Haridwar",
    imgSrc: "/images/wework/Nainital.jpg",
    overview:
      "A multi-stop spiritual route inspired by the sacred Panch Kedar circuit across the Garhwal Himalayas.",
    inclusions: [
      "Road transport",
      "Hotel and guesthouse stay",
      "Breakfast and dinner",
      "Trip assistance",
      "Driver charges and parking",
    ],
    exclusions: [
      "Pony, palki, or porter services",
      "Temple donations and puja charges",
      "Lunch and snacks",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Guptkashi",
        details:
          "Drive to the Kedarnath region and settle into the stay.",
      },
      {
        title: "Day 2: Guptkashi and nearby temples",
        details:
          "Visit important local shrines connected with the Panch Kedar route and continue spiritual sightseeing.",
      },
      {
        title: "Day 3: Chopta and Tungnath sector",
        details:
          "Move toward Chopta and visit Tungnath depending on weather and pace.",
      },
      {
        title: "Day 4: Ukhimath and onward travel",
        details:
          "Explore temple towns and continue the circuit with scenic drives across Garhwal.",
      },
      {
        title: "Day 5: Spiritual sightseeing day",
        details:
          "Visit additional sacred points included in the package plan.",
      },
      {
        title: "Day 6: Return toward Rudraprayag/Devprayag side",
        details:
          "Begin descending journey with en route darshan stops.",
      },
      {
        title: "Day 7: Return to Haridwar",
        details:
          "Complete the final drive back to Haridwar.",
      },
    ],
  },
  {
    slug: "kartik-swami-temple",
    profession: "Kartik swami Temple",
    price: "5,000",
    duration: "2 Days",
    route: "Rishikesh - Kartik Swami - Rishikesh",
    imgSrc: "/images/wework/Kartik_swami.jpeg",
    overview:
      "A short spiritual mountain trip to Kartik Swami Temple, known for its scenic ridge walk and peaceful setting.",
    inclusions: [
      "Transport",
      "One-night accommodation",
      "Breakfast and dinner",
      "Driver allowance and parking",
    ],
    exclusions: [
      "Lunch and snacks",
      "Personal expenses",
      "Temple offerings",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Kanakchauri",
        details:
          "Drive to the Kartik Swami base area and stay overnight.",
      },
      {
        title: "Day 2: Temple hike and return",
        details:
          "Walk to Kartik Swami Temple in the morning for darshan and panoramic views, then drive back to Rishikesh.",
      },
    ],
  },
  {
    slug: "patal-bhuvneshwar",
    profession: "Patal Bhuvneshwar",
    price: "6,000",
    duration: "3 Days",
    route: "Rishikesh - Patal Bhuvneshwar - Rishikesh",
    imgSrc: "/images/wework/patal-bhuvaneshwar.webp",
    overview:
      "A mystical cave-temple journey in Kumaon featuring sacred underground formations and quiet hill landscapes.",
    inclusions: [
      "Transport",
      "Hotel stay",
      "Breakfast and dinner",
      "Driver charges and parking",
      "Travel support",
    ],
    exclusions: [
      "Entry fees if applicable",
      "Lunch and snacks",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Travel to Pithoragarh region",
        details:
          "Drive toward the Kumaon hills and halt near Patal Bhuvneshwar.",
      },
      {
        title: "Day 2: Cave temple exploration",
        details:
          "Visit the sacred cave temple with local guidance and spend the day around the spiritual complex.",
      },
      {
        title: "Day 3: Return journey",
        details:
          "Travel back after breakfast.",
      },
    ],
  },
  {
    slug: "jageshwar",
    profession: "Jageshwar",
    price: "7,000",
    duration: "4 Days",
    route: "Rishikesh - Jageshwar - Rishikesh",
    imgSrc: "/images/wework/Jageshwar.avif",
    overview:
      "A peaceful temple circuit in the cedar forests of Jageshwar, one of Kumaon’s most atmospheric spiritual destinations.",
    inclusions: [
      "Round-trip transport",
      "Hotel accommodation",
      "Breakfast and dinner",
      "Sightseeing as per itinerary",
      "Driver charges and parking",
    ],
    exclusions: [
      "Lunch and refreshments",
      "Temple donations",
      "Personal shopping and expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Almora side",
        details:
          "Travel toward Almora and check in for overnight stay.",
      },
      {
        title: "Day 2: Jageshwar temple complex",
        details:
          "Visit the ancient temple cluster of Jageshwar and spend time in the cedar forest setting.",
      },
      {
        title: "Day 3: Local spiritual sightseeing",
        details:
          "Explore nearby temples or scenic spots around Almora and Jageshwar region.",
      },
      {
        title: "Day 4: Return journey",
        details:
          "Drive back after breakfast.",
      },
    ],
  },
  {
    slug: "baijnath-temple",
    profession: "Baijnath Temple",
    price: "5,000",
    duration: "2 Days",
    route: "Rishikesh - Baijnath - Rishikesh",
    imgSrc: "/images/wework/Baijnath-Templ.jpg",
    overview:
      "A short Kumaon temple trip to the ancient Baijnath complex, set beside the serene Gomti river.",
    inclusions: [
      "Transport",
      "One-night stay",
      "Breakfast and dinner",
      "Driver charges",
    ],
    exclusions: [
      "Lunch and snacks",
      "Temple donations",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Travel to Baijnath",
        details:
          "Drive to the Kumaon region and check in near Baijnath for overnight stay.",
      },
      {
        title: "Day 2: Temple visit and return",
        details:
          "Attend darshan at Baijnath Temple, explore the riverside setting, and drive back.",
      },
    ],
  },
  {
    slug: "mukteshwar-mahadev",
    profession: "Mukteshwar Mahadev",
    price: "5,000",
    duration: "2 Days",
    route: "Rishikesh - Mukteshwar - Rishikesh",
    imgSrc: "/images/wework/MukteshwarMahadev.jpg",
    overview:
      "A calm hill retreat around Mukteshwar with temple darshan and expansive Kumaon mountain views.",
    inclusions: [
      "Transport",
      "Hotel stay",
      "Breakfast and dinner",
      "Travel support",
    ],
    exclusions: [
      "Lunch and snacks",
      "Adventure activities",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Travel to Mukteshwar",
        details:
          "Drive into the Kumaon hills and check in near Mukteshwar.",
      },
      {
        title: "Day 2: Temple visit and departure",
        details:
          "Visit Mukteshwar Mahadev Temple and nearby viewpoints before returning.",
      },
    ],
  },
  {
    slug: "dhari-devi-temple",
    profession: "Dhari Devi Temple",
    price: "4,000",
    duration: "1 Day",
    route: "Rishikesh - Dhari Devi - Rishikesh",
    imgSrc: "/images/wework/DhariDevi.webp",
    overview:
      "A same-day spiritual trip to the famous riverside shrine of Dhari Devi on the Srinagar route.",
    inclusions: [
      "Same-day transport",
      "Driver allowance and parking",
      "Travel support",
    ],
    exclusions: [
      "Meals",
      "Personal expenses",
      "Temple donations",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dhari Devi darshan",
        details:
          "Drive to Dhari Devi Temple, attend darshan, spend time along the river setting, and return the same day.",
      },
    ],
  },
  {
    slug: "naina-devi-temple-almora",
    profession: "Naina Devi Temple(Almora)",
    price: "4,000",
    duration: "1 Day",
    route: "Rishikesh - Naina Devi - Rishikesh",
    imgSrc: "/images/wework/nanda-devi-temple.jpeg",
    overview:
      "A simple devotional visit focused on a revered temple stop in the Kumaon region.",
    inclusions: [
      "Transport",
      "Sightseeing as per itinerary",
      "Driver charges",
    ],
    exclusions: [
      "Meals",
      "Temple offerings",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Temple visit and return",
        details:
          "Travel for darshan, spend time at the temple premises, and return after the visit.",
      },
    ],
  },
  {
    slug: "surkunda-devi-temple",
    profession: "Surkunda Devi Temple",
    price: "4,000",
    duration: "1 Day",
    route: "Rishikesh - Surkunda Devi - Rishikesh",
    imgSrc: "/images/wework/surkanda-devi-temple.jpeg",
    overview:
      "A popular hilltop temple outing known for its short climb and sweeping Himalayan views.",
    inclusions: [
      "Transport",
      "Driver charges and parking",
      "Trip support",
    ],
    exclusions: [
      "Meals",
      "Pony or local ride charges",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Surkunda Devi visit",
        details:
          "Drive to the temple base, complete the short climb for darshan and views, and return the same day.",
      },
    ],
  },
  {
    slug: "chitai-golu-ghodkhal-temple",
    profession: "Chitai Golu & Ghodkhal Temple ",
    price: "4,000",
    duration: "1 Day",
    route: "Rishikesh - Chitai Golu - Rishikesh",
    imgSrc: "/images/wework/Chitai-Golu-Devta-Temple.jpg",
    overview:
      "A devotional day route centered on Kumaon’s famous temple traditions, especially the bell-filled Chitai Golu shrine.",
    inclusions: [
      "Transport",
      "Driver charges and parking",
      "Travel assistance",
    ],
    exclusions: [
      "Meals",
      "Temple offerings",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Temple circuit and return",
        details:
          "Travel to the temple circuit, attend darshan, explore the surroundings, and return by evening.",
      },
    ],
  },
  {
    slug: "kasar-devi-temple",
    profession: "Kasar Devi Temple",
    price: "4,000",
    duration: "1 Day",
    route: "Rishikesh - Kasar Devi - Rishikesh",
    imgSrc: "/images/wework/Kasardevi.jpeg",
    overview:
      "A spiritually calm and scenic hilltop visit to Kasar Devi, known for meditation seekers and quiet Himalayan views.",
    inclusions: [
      "Transport",
      "Driver charges",
      "Trip support",
    ],
    exclusions: [
      "Meals",
      "Personal purchases",
      "Temple offerings",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kasar Devi visit",
        details:
          "Drive to Kasar Devi Temple, spend time in the peaceful surroundings, and return after the visit.",
      },
    ],
  },
  {
    slug: "purnagiri",
    profession: "Puniya Giri",
    price: "4,000",
    duration: "1 Day",
    route: "Rishikesh - Puniya Giri - Rishikesh",
    imgSrc: "/images/wework/Purnagiri.jpg",
    overview:
      "A devotional route to the revered Purnagiri shrine, ideal for pilgrims seeking a compact spiritual visit.",
    inclusions: [
      "Transport",
      "Driver charges and parking",
      "Travel support",
    ],
    exclusions: [
      "Meals",
      "Pony or porter services",
      "Temple donations",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Purnagiri darshan",
        details:
          "Travel to the temple zone, complete darshan and associated local movement, then return the same day or by package timing.",
      },
    ],
  },
  {
    slug: "nanda-devi-temple",
    profession: "Nanda Devi Temple",
    price: "4,000",
    duration: "1 Day",
    route: "Rishikesh - Nanda Devi - Rishikesh",
    imgSrc: "/images/wework/Nandadevitemple.avif",
    overview:
      "A compact temple-focused experience around the revered Nanda Devi shrine in the Kumaon region.",
    inclusions: [
      "Transport",
      "Driver charges and parking",
      "Travel support",
    ],
    exclusions: [
      "Meals",
      "Temple offerings",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Nanda Devi temple visit",
        details:
          "Travel for darshan, spend time around the temple area, and return after the visit.",
      },
    ],
  },
];

export const getSpiritualPlaceBySlug = (slug: string) =>
  SPIRITUAL_PLACES.find((place) => place.slug === slug);
