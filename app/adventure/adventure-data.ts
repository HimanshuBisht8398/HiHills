export type AdventureDay = {
  title: string;
  details: string;
};

export type AdventurePackage = {
  slug: string;
  name: string;
  price: string;
  days: string;
  pickup: string;
  img: string;
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: AdventureDay[];
};

export const ADVENTURE_PACKAGES: AdventurePackage[] = [
  {
    slug: "river-rafting",
    name: "River Rafting Package",
    price: "2,500",
    days: "1N/2D",
    pickup: "Tapovan / Shivpuri",
    img: "/images/wework/Rafting.jpeg",
    overview:
      "An energetic Rishikesh getaway with guided river rafting, riverside stay, and a compact adventure experience for beginners and thrill seekers alike.",
    inclusions: [
      "Rafting session with certified guide",
      "Safety gear including helmet and life jacket",
      "One-night stay as per package",
      "Basic meals during the trip",
      "Local coordination and activity support",
    ],
    exclusions: [
      "Travel to Rishikesh pickup point",
      "Personal expenses and shopping",
      "Video or photo charges",
      "Insurance and medical expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival and riverside check-in",
        details:
          "Reach the Rishikesh pickup point, check in to camp or stay, and attend a short safety briefing for the next day.",
      },
      {
        title: "Day 2: Rafting session and departure",
        details:
          "Transfer to the rafting start point, complete the guided rafting stretch, and depart after freshening up.",
      },
    ],
  },
  {
    slug: "jungle-safari-corbett",
    name: "Jungle Safari in Corbett",
    price: "3,500",
    days: "1N/2D",
    pickup: "Ramnagar",
    img: "/images/wework/JungleSafari.avif",
    overview:
      "A compact wildlife adventure around Corbett with an organized safari experience, local stay, and easy pickup from Ramnagar.",
    inclusions: [
      "Jeep safari slot as per availability",
      "Forest permit and guide support",
      "One-night stay",
      "Breakfast and dinner",
      "Pickup support from Ramnagar",
    ],
    exclusions: [
      "Travel to Ramnagar",
      "Camera fees if applicable",
      "Personal expenses",
      "Extra safari rounds",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival in Ramnagar",
        details:
          "Arrive at Ramnagar, check in to your stay, and receive your safari timing and zone information.",
      },
      {
        title: "Day 2: Jungle safari and departure",
        details:
          "Head for the scheduled safari with guide assistance, then return for checkout and onward travel.",
      },
    ],
  },
  {
    slug: "paragliding",
    name: "Paragliding",
    price: "2,500",
    days: "1N/2D",
    pickup: "Naukuchiatal",
    img: "/images/wework/Paragliding.jpeg",
    overview:
      "A scenic flying experience over the Kumaon hills with trained pilots, safety support, and a short, memorable adventure itinerary.",
    inclusions: [
      "Tandem paragliding session",
      "Pilot and safety briefing",
      "Basic safety equipment",
      "Local coordination support",
      "Pickup guidance at activity point",
    ],
    exclusions: [
      "Travel to Naukuchiatal",
      "Video and photo charges",
      "Meals unless mentioned separately",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival and activity briefing",
        details:
          "Reach the pickup point, complete a short orientation, and settle in if your package includes a stay.",
      },
      {
        title: "Day 2: Paragliding experience and departure",
        details:
          "Proceed to the launch site, complete the tandem flying session with the pilot, and depart after the activity.",
      },
    ],
  },
  {
    slug: "jet-skiing-tehri",
    name: "Jet skiing in Tehri",
    price: "800",
    days: "1N/1D",
    pickup: "Tehri Lake",
    img: "/images/wework/Jetskee.jpg",
    overview:
      "A fast-paced watersport experience at Tehri Lake with instructor support and safety gear included.",
    inclusions: [
      "Jet ski ride session",
      "Life jacket and safety support",
      "Instructor guidance",
      "Activity coordination at the lake",
    ],
    exclusions: [
      "Travel to Tehri Lake",
      "Meals and refreshments",
      "Extra ride rounds",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival, ride, and departure",
        details:
          "Arrive at Tehri Lake, complete the safety briefing, enjoy the jet ski ride, and depart after the activity.",
      },
    ],
  },
  {
    slug: "bungee-jumping-rishikesh",
    name: "Bungee Jumping in Rishikesh",
    price: "3,700",
    days: "1N/1D",
    pickup: "Mohanchatti",
    img: "/images/wework/bungee-jumping.webp",
    overview:
      "A signature thrill activity in Rishikesh with professional jump operations, safety checks, and certificate-based completion.",
    inclusions: [
      "One bungee jump slot",
      "Professional jump crew and equipment",
      "Safety briefing",
      "Completion certificate",
      "Local activity coordination",
    ],
    exclusions: [
      "Travel to Mohanchatti",
      "Video and photo charges",
      "Meals",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Reporting, jump, and departure",
        details:
          "Report at the activity point, complete the medical and safety checks, attempt the jump, and depart afterward.",
      },
    ],
  },
  {
    slug: "zipline-rishikesh",
    name: "Zipline in Rishikesh",
    price: "1,800",
    days: "1N/1D",
    pickup: "Mohanchatti",
    img: "/images/wework/Zipline.jpeg",
    overview:
      "A quick but exciting aerial adventure in Rishikesh with trained staff and standard safety equipment.",
    inclusions: [
      "Zipline activity session",
      "Harness and safety setup",
      "Guide support at the activity point",
      "Basic activity coordination",
    ],
    exclusions: [
      "Travel to Mohanchatti",
      "Meals",
      "Video or photo charges",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival, activity, and departure",
        details:
          "Reach the activity point, complete the safety setup, enjoy the zipline experience, and depart after completion.",
      },
    ],
  },
  {
    slug: "hot-air-balloon-ramnagar",
    name: "Hot Air Balloon in Ramnagar",
    price: "3,500",
    days: "1N/2D",
    pickup: "Ramnagar",
    img: "/images/wework/Hotairbaloon.jpg",
    overview:
      "A gentle aerial adventure over the plains and forest-edge landscape near Ramnagar with guided balloon operations.",
    inclusions: [
      "Hot air balloon ride",
      "Pilot and ground crew support",
      "Safety briefing",
      "Pickup assistance as per package",
      "Basic local coordination",
    ],
    exclusions: [
      "Travel to Ramnagar",
      "Meals unless mentioned separately",
      "Personal expenses",
      "Photo and video charges",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival and stay",
        details:
          "Reach Ramnagar, check in if your package includes a stay, and receive timing details for the balloon ride.",
      },
      {
        title: "Day 2: Balloon ride and departure",
        details:
          "Proceed to the launch area for the guided hot air balloon experience, then return and depart.",
      },
    ],
  },
  {
    slug: "skiing-auli",
    name: "Skiing in Auli",
    price: "2,000",
    days: "1N/2D",
    pickup: "Auli Base Camp",
    img: "/images/wework/SnowSkii.jpeg",
    overview:
      "A winter sports package in Auli with slope access, basic ski support, and a short stay in the mountain region.",
    inclusions: [
      "Ski session with instructor",
      "Basic ski equipment",
      "One-night stay as per package",
      "Meals during the stay",
      "Local activity coordination",
    ],
    exclusions: [
      "Travel to Auli",
      "Cable car or chairlift charges unless specified",
      "Advanced equipment rental",
      "Personal expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival in Auli",
        details:
          "Reach Auli base area, check in, and get a short introduction to the slope and equipment.",
      },
      {
        title: "Day 2: Ski session and departure",
        details:
          "Enjoy the guided ski session on the training slope and leave after checkout.",
      },
    ],
  },
  {
    slug: "camping-rishikesh",
    name: "Camping in Rishikesh",
    price: "1,500",
    days: "1N/2D",
    pickup: "Shivpuri",
    img: "/images/wework/Camping.avif",
    overview:
      "A relaxed outdoor escape by the Ganga with tent stay, bonfire atmosphere, and a simple overnight adventure format.",
    inclusions: [
      "Tent accommodation",
      "Breakfast and dinner",
      "Bonfire and camp access",
      "Local host assistance",
      "Basic campsite amenities",
    ],
    exclusions: [
      "Travel to Shivpuri",
      "Adventure add-on activities",
      "Personal expenses",
      "Lunch and café spending",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival and camp experience",
        details:
          "Reach the campsite, check in, enjoy riverside leisure time, and spend the evening with dinner and bonfire.",
      },
      {
        title: "Day 2: Breakfast and departure",
        details:
          "Wake up at the campsite, have breakfast, and depart after checkout.",
      },
    ],
  },
];

export const getAdventurePackageBySlug = (slug: string) =>
  ADVENTURE_PACKAGES.find((pkg) => pkg.slug === slug);
