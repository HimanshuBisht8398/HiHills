export type TrekSeason = "winter" | "summer" | "rainy";

export type TrekDay = {
  title: string;
  details: string;
};

export type Trek = {
  slug: string;
  season: TrekSeason;
  name: string;
  price: string;
  days: string;
  route: string;
  img: string;
  tag: string;
  overview: string;
  altitude: string;
  bestTime: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: TrekDay[];
};

export const TREKS: Trek[] = [
  {
    slug: "kedarkantha",
    season: "winter",
    name: "Kedarkantha Trek",
    price: "6,500",
    days: "5N/6D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/Treks/Kedarkantha.webp",
    tag: "Group",
    overview:
      "One of the most loved winter treks in Uttarakhand, Kedarkantha offers pine forests, snow camps, and a rewarding summit with panoramic Himalayan views.",
    altitude: "12,500 ft",
    bestTime: "December to April",
    inclusions: [
      "Pickup and drop from Dehradun",
      "Accommodation in guesthouse and camps",
      "All meals during the trek",
      "Experienced trek leader and local guides",
      "Permits, forest fees, and basic first aid",
    ],
    exclusions: [
      "Personal trekking gear and clothing",
      "Any meals during road transit",
      "Porter or mule charges",
      "Travel insurance and medical expenses",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Sankri",
        details:
          "Drive through Mussoorie, Purola, and Mori to reach Sankri. Check in, rest, and meet the trek leader for a short briefing.",
      },
      {
        title: "Day 2: Sankri to Juda Ka Talab",
        details:
          "Start the trek through dense pine forests and snowy trails. Reach Juda Ka Talab campsite and settle in for the night.",
      },
      {
        title: "Day 3: Juda Ka Talab to Kedarkantha Base Camp",
        details:
          "Climb gradually above the tree line with beautiful ridge views. Arrive at base camp by afternoon and prepare for summit push.",
      },
      {
        title: "Day 4: Summit Kedarkantha and descend to Hargaon",
        details:
          "Begin before sunrise for the summit attempt. Enjoy 360-degree mountain views, then descend carefully to Hargaon campsite.",
      },
      {
        title: "Day 5: Hargaon to Sankri",
        details:
          "Trek down through forest sections back to Sankri. Freshen up and enjoy a relaxed evening after the summit day.",
      },
      {
        title: "Day 6: Sankri to Dehradun",
        details:
          "After breakfast, drive back to Dehradun with scenic views of the Tons valley along the way.",
      },
    ],
  },
  {
    slug: "tungnath",
    season: "winter",
    name: "Tungnath & Chandrashila",
    price: "5,500",
    days: "2N/3D",
    route: "Rishikesh ⇄ Rishikesh",
    img: "/images/Treks/Chandrashila.jpg",
    tag: "Group",
    overview:
      "A short Himalayan getaway that combines the highest Shiva temple in the world with an iconic summit viewpoint at Chandrashila.",
    altitude: "13,100 ft",
    bestTime: "October to March",
    inclusions: [
      "Transport from Rishikesh to base and return",
      "Stay in guesthouse or camps",
      "Breakfast and dinner",
      "Trek guide and support staff",
      "Permits and basic first aid",
    ],
    exclusions: [
      "Lunch and personal snacks",
      "Pony, porter, or palki charges",
      "Personal expenses",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Chopta",
        details:
          "Drive through Devprayag and Ukhimath to reach Chopta. Enjoy evening views of the Chaukhamba range and rest early.",
      },
      {
        title: "Day 2: Trek to Tungnath and Chandrashila",
        details:
          "Trek to Tungnath Temple and continue to Chandrashila summit for sunrise or daytime mountain views. Return to Chopta for the night.",
      },
      {
        title: "Day 3: Chopta to Rishikesh",
        details:
          "After breakfast, start the return drive to Rishikesh with comfort stops en route.",
      },
    ],
  },
  {
    slug: "khaliya-top",
    season: "winter",
    name: "Khaliya Top Trek",
    price: "8,500",
    days: "3N/4D",
    route: "Munsiyari ⇄ Munsiyari",
    img: "/images/Treks/Khaliyatop.webp",
    tag: "Group",
    overview:
      "A scenic snow trek near Munsiyari known for meadows, forests, and uninterrupted views of the Panchachuli peaks.",
    altitude: "11,500 ft",
    bestTime: "December to March",
    inclusions: [
      "Stay in homestay and camps",
      "All vegetarian meals during the trek",
      "Local guide and support staff",
      "Camping equipment",
      "Permits and first aid support",
    ],
    exclusions: [
      "Travel to Munsiyari",
      "Personal winter gear",
      "Meals before arrival and after departure",
      "Porter charges",
      "Emergency evacuation cost",
    ],
    itinerary: [
      {
        title: "Day 1: Arrive in Munsiyari",
        details:
          "Reach Munsiyari and check in to your stay. Spend the evening acclimatizing and enjoying Panchachuli views.",
      },
      {
        title: "Day 2: Munsiyari to Khaliya Top campsite",
        details:
          "Begin the trek through forest stretches and open slopes. Reach the campsite and witness sunset over the Himalayan ranges.",
      },
      {
        title: "Day 3: Explore Khaliya ridge and return",
        details:
          "Climb higher viewpoints around Khaliya Top for expansive snow-covered landscapes. Descend back to Munsiyari by evening.",
      },
      {
        title: "Day 4: Departure from Munsiyari",
        details:
          "Enjoy breakfast and check out for your onward journey.",
      },
    ],
  },
  {
    slug: "dayara-bugyal",
    season: "winter",
    name: "Dayara Bugyal Trek",
    price: "7,500",
    days: "3N/4D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/Treks/Dayara-Bugyal.jpg",
    tag: "Group",
    overview:
      "A beginner-friendly meadow trek that turns into a snowy wonderland in winter, with wide ridgelines and classic campsite views.",
    altitude: "12,100 ft",
    bestTime: "December to March",
    inclusions: [
      "Transport from Dehradun and back",
      "Homestay and camp accommodation",
      "Meals during the trek",
      "Guide, permits, and first aid",
      "Camping gear",
    ],
    exclusions: [
      "Personal expenses",
      "Trek equipment rental",
      "Meals during road journey",
      "Insurance or rescue expenses",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Raithal",
        details:
          "Drive from Dehradun to Raithal village. Meet the crew, check in, and enjoy a village walk in the evening.",
      },
      {
        title: "Day 2: Raithal to Gui campsite",
        details:
          "Trek through oak and rhododendron forests to reach Gui. Settle into camp and enjoy the mountain sunset.",
      },
      {
        title: "Day 3: Gui to Dayara Bugyal and back",
        details:
          "Climb to the vast meadow of Dayara Bugyal for wide Himalayan views. Return to Raithal after spending time on the ridge.",
      },
      {
        title: "Day 4: Raithal to Dehradun",
        details:
          "Drive back to Dehradun after breakfast, marking the end of the trek.",
      },
    ],
  },
  {
    slug: "gulabi-kantha",
    season: "winter",
    name: "Gulabi Kantha Trek",
    price: "8,900",
    days: "4N/5D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/Treks/Gulabikantha.webp",
    tag: "Group",
    overview:
      "An offbeat winter trail with forest camps, open ridges, and dramatic views of Bandarpoonch, Kala Nag, and Swargarohini peaks.",
    altitude: "13,000 ft",
    bestTime: "December to February",
    inclusions: [
      "Dehradun to base transport",
      "Homestay and tent stay",
      "Meals during the trek",
      "Certified trek guide",
      "Permits and basic safety gear",
    ],
    exclusions: [
      "Backpack offloading",
      "Personal medication",
      "Travel to Dehradun",
      "Extra hotel stay due to delays",
      "Any item not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Hanuman Chatti",
        details:
          "Drive to Hanuman Chatti via Mussoorie and Yamunotri road. Overnight in a guesthouse.",
      },
      {
        title: "Day 2: Hanuman Chatti to Seema Thatch",
        details:
          "Trek through forest and shepherd trails to reach Seema Thatch campsite. Enjoy a peaceful evening in the meadow.",
      },
      {
        title: "Day 3: Seema Thatch to Gulabi Kantha base",
        details:
          "Gain altitude steadily with broader mountain views opening up. Camp near the high meadow zone.",
      },
      {
        title: "Day 4: Summit stretch and descend",
        details:
          "Reach the main viewpoint of Gulabi Kantha and take in the snowy panorama. Descend to Hanuman Chatti by evening.",
      },
      {
        title: "Day 5: Hanuman Chatti to Dehradun",
        details:
          "Drive back to Dehradun after breakfast.",
      },
    ],
  },
  {
    slug: "kuari-pass",
    season: "winter",
    name: "Kuari Pass Trek",
    price: "9,500",
    days: "5N/6D",
    route: "Rishikesh ⇄ Rishikesh",
    img: "/images/Treks/Kauripass.webp",
    tag: "Group",
    overview:
      "A classic Lord Curzon trail offering oak forests, camps in alpine clearings, and big views of Nanda Devi, Dronagiri, and Kamet.",
    altitude: "12,516 ft",
    bestTime: "December to March",
    inclusions: [
      "Transport from Rishikesh",
      "Accommodation in lodge and camps",
      "Meals from Day 1 dinner to Day 6 breakfast",
      "Guide and trek crew",
      "Permits and camping gear",
    ],
    exclusions: [
      "Lunch during road travel",
      "Personal porter",
      "Personal clothing and equipment",
      "Travel insurance",
      "Emergency evacuation",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Joshimath",
        details:
          "Drive along the Alaknanda valley to Joshimath. Check in and rest for the next day.",
      },
      {
        title: "Day 2: Joshimath to Dhak and trek to Gulling",
        details:
          "Drive to Dhak village and start trekking through villages and forest. Reach Gulling campsite by evening.",
      },
      {
        title: "Day 3: Gulling to Khullara",
        details:
          "Trek deeper into oak and rhododendron forest while gaining altitude gradually. Camp at Khullara under the stars.",
      },
      {
        title: "Day 4: Khullara to Kuari Pass and back",
        details:
          "Attempt Kuari Pass early and enjoy majestic views of the Garhwal giants. Return to camp after the summit viewpoint.",
      },
      {
        title: "Day 5: Khullara to Joshimath",
        details:
          "Descend to Dhak and drive back to Joshimath. Relax at the hotel in the evening.",
      },
      {
        title: "Day 6: Joshimath to Rishikesh",
        details:
          "Drive back to Rishikesh with breakfast and comfort stops on the route.",
      },
    ],
  },
  {
    slug: "brahmatal",
    season: "winter",
    name: "Brahmatal Trek",
    price: "8,500",
    days: "5N/6D",
    route: "Kathgodam ⇄ Kathgodam",
    img: "/images/Treks/Brahmataal.jpg",
    tag: "Group",
    overview:
      "A true winter favorite with frozen lakes, oak forests, snow ridges, and excellent summit views of Trishul and Nanda Ghunti.",
    altitude: "12,250 ft",
    bestTime: "December to March",
    inclusions: [
      "Pickup and drop from Kathgodam",
      "Guesthouse and camp stay",
      "All trek meals",
      "Trek guide and support team",
      "Permits, gaiters, and first aid",
    ],
    exclusions: [
      "Meals during transit",
      "Personal backpack offloading",
      "Personal expenses or tips",
      "Insurance and rescue",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kathgodam to Lohajung",
        details:
          "Drive through Kausani-side mountain roads to reach Lohajung. Overnight stay and briefing.",
      },
      {
        title: "Day 2: Lohajung to Bekaltal",
        details:
          "Trek through oak forest to the beautiful Bekaltal campsite. Spend the evening near the forest lake.",
      },
      {
        title: "Day 3: Bekaltal to Brahmatal",
        details:
          "Climb steadily above the forest and cross snow patches to reach Brahmatal. Camp with scenic mountain views.",
      },
      {
        title: "Day 4: Brahmatal summit ridge and return",
        details:
          "Explore the summit ridge and viewpoint with close looks at Trishul and Nanda Ghunti. Return to camp afterward.",
      },
      {
        title: "Day 5: Brahmatal to Lohajung",
        details:
          "Descend through the forest back to Lohajung and stay overnight.",
      },
      {
        title: "Day 6: Lohajung to Kathgodam",
        details:
          "Drive back to Kathgodam after breakfast.",
      },
    ],
  },
  {
    slug: "hamta-pass",
    season: "winter",
    name: "Hampta Pass Trek",
    price: "9,000",
    days: "4N/5D",
    route: "Manali ⇄ Manali",
    img: "/images/Treks/Hamptapass.webp",
    tag: "Group",
    overview:
      "A dramatic crossover trek from lush Kullu valleys to stark Lahaul terrain, popular for varied landscapes and exciting pass crossing.",
    altitude: "14,100 ft",
    bestTime: "June to October",
    inclusions: [
      "Manali to base transfers",
      "Tents and camping equipment",
      "All meals during the trek",
      "Guide and kitchen staff",
      "Permits and safety equipment",
    ],
    exclusions: [
      "Travel to Manali",
      "Personal trekking gear",
      "Buffer day expenses",
      "Insurance and medical costs",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Manali to Jobra and trek to Chika",
        details:
          "Drive to Jobra and begin the trek through forest and meadows. Camp at Chika beside a mountain stream.",
      },
      {
        title: "Day 2: Chika to Balu Ka Ghera",
        details:
          "Follow the valley trail with river crossings and broad mountain views. Reach the high campsite at Balu Ka Ghera.",
      },
      {
        title: "Day 3: Cross Hampta Pass and descend to Shea Goru",
        details:
          "Trek to the pass early and witness the sudden shift from green valleys to barren Lahaul terrain. Descend to Shea Goru camp.",
      },
      {
        title: "Day 4: Shea Goru to Chhatru and return to Manali",
        details:
          "Descend to Chhatru and drive back toward Manali. If road conditions allow, enjoy views of the Chandra river valley.",
      },
      {
        title: "Day 5: Departure from Manali",
        details:
          "After breakfast, check out for your onward journey.",
      },
    ],
  },
  {
    slug: "nag-tibba",
    season: "winter",
    name: "Nag Tibba Trek",
    price: "7,000",
    days: "4N/5D",
    route: "Pantwari ⇄ Pantwari",
    img: "/images/Treks/Naag-tibba.webp",
    tag: "Weekend",
    overview:
      "A popular beginner-friendly winter trek near Dehradun with forest trails, snow patches, and beautiful summit views of the greater Himalayas.",
    altitude: "9,915 ft",
    bestTime: "October to March",
    inclusions: [
      "Transport from Dehradun to base and back",
      "Camp or guesthouse stay",
      "Breakfast, dinner, and trek meals",
      "Guide and support staff",
      "Permits and first aid support",
    ],
    exclusions: [
      "Personal trekking gear",
      "Lunch and snacks during transit",
      "Porter or mule charges",
      "Insurance and medical expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Pantwari",
        details:
          "Drive to Pantwari village, meet the trek team, and prepare for the short mountain trek ahead.",
      },
      {
        title: "Day 2: Pantwari to base camp",
        details:
          "Trek gradually through forest and open ridges to reach the campsite. Enjoy sunset views if weather is clear.",
      },
      {
        title: "Day 3: Nag Tibba summit and return",
        details:
          "Head to the summit early, enjoy the Himalayan panorama, and descend back to camp or the base village.",
      },
      {
        title: "Day 4: Return to Dehradun",
        details:
          "After breakfast, drive back to Dehradun and conclude the trek.",
      },
      {
        title: "Day 5: Buffer or departure support",
        details:
          "Package duration may include travel flexibility or an additional stay based on departure timing.",
      },
    ],
  },
  {
    slug: "pangarchulla",
    season: "winter",
    name: "Pangarchulla Trek",
    price: "8,500",
    days: "5N/6D",
    route: "Joshimath ⇄ Joshimath",
    img: "/images/Treks/pangarchulla.jpg",
    tag: "Summit",
    overview:
      "A thrilling summit-focused trek near Auli and Joshimath, known for steep climbs, ridge walking, and outstanding views of Nanda Devi and Dronagiri.",
    altitude: "15,069 ft",
    bestTime: "March to April, October to December",
    inclusions: [
      "Joshimath local transfers",
      "Hotel and camp stay",
      "Meals during the trek",
      "Experienced trek guide",
      "Permits and safety support",
    ],
    exclusions: [
      "Travel to Joshimath",
      "Technical or personal trekking gear",
      "Porter charges",
      "Insurance and rescue expenses",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrive in Joshimath",
        details:
          "Reach Joshimath, check in, and rest while the team briefs you about the summit route and conditions.",
      },
      {
        title: "Day 2: Joshimath to Khullara",
        details:
          "Drive to the roadhead and trek through forest sections to reach Khullara campsite.",
      },
      {
        title: "Day 3: Khullara acclimatization and ridge walk",
        details:
          "Spend the day acclimatizing and exploring higher sections of the ridge to prepare for summit day.",
      },
      {
        title: "Day 4: Pangarchulla summit attempt",
        details:
          "Start early for the summit push and enjoy wide Himalayan views before descending carefully to camp.",
      },
      {
        title: "Day 5: Return to Joshimath",
        details:
          "Descend to the base point and drive back to Joshimath for an overnight stay.",
      },
      {
        title: "Day 6: Departure",
        details:
          "Check out after breakfast for your onward journey.",
      },
    ],
  },
  {
    slug: "triund",
    season: "winter",
    name: "Triund Trek",
    price: "4,500",
    days: "2N/3D",
    route: "McLeod Ganj ⇄ McLeod Ganj",
    img: "/images/Treks/Triund.jpg",
    tag: "Himachal",
    overview:
      "A scenic Himalayan short trek above McLeod Ganj with easy access, panoramic ridge views, and a classic camping experience.",
    altitude: "9,350 ft",
    bestTime: "September to December, March to June",
    inclusions: [
      "Local trek support",
      "Camp stay or guesthouse",
      "Meals during the trek",
      "Guide assistance",
      "Basic first aid support",
    ],
    exclusions: [
      "Travel to McLeod Ganj",
      "Personal expenses and café bills",
      "Porter services",
      "Insurance",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Arrive in McLeod Ganj",
        details:
          "Reach McLeod Ganj, check in, and spend the evening exploring the hill town and café circuit.",
      },
      {
        title: "Day 2: Trek to Triund",
        details:
          "Begin the trek from McLeod Ganj or Gallu Devi area, climb to Triund ridge, and enjoy an overnight stay with mountain views.",
      },
      {
        title: "Day 3: Descend and departure",
        details:
          "Watch sunrise from the ridge, descend to McLeod Ganj, and continue for onward travel.",
      },
    ],
  },
  {
    slug: "roopkund",
    season: "summer",
    name: "Roopkund Trek",
    price: "11,500",
    days: "7N/8D",
    route: "Kathgodam ⇄ Kathgodam",
    img: "/images/wework/Roopkund-Jheel-Uttarakhand.jpg",
    tag: "High Altitude",
    overview:
      "A legendary high-altitude trek famous for mystery, alpine meadows, and dramatic mountain scenery near Roopkund and Junargali.",
    altitude: "15,750 ft",
    bestTime: "May to June, September to October",
    inclusions: [
      "Kathgodam pickup and drop",
      "Hotel and campsite accommodation",
      "All meals during trek days",
      "Certified trek leader and local staff",
      "Permits and camping equipment",
    ],
    exclusions: [
      "Personal trek gear and footwear",
      "Meals during road transit",
      "Porter and mule services",
      "Insurance and evacuation charges",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kathgodam to Lohajung",
        details:
          "Drive through the Kumaon hills to Lohajung. Check in and rest after the long mountain journey.",
      },
      {
        title: "Day 2: Lohajung to Didna village",
        details:
          "Begin the trek with a descent to the river and a climb to Didna village. Enjoy local village hospitality.",
      },
      {
        title: "Day 3: Didna to Ali Bugyal",
        details:
          "Trek through forest to emerge into expansive alpine meadows. Camp at Ali Bugyal with sunset views.",
      },
      {
        title: "Day 4: Ali Bugyal to Patar Nachauni",
        details:
          "Continue across the meadow ridge toward higher camps. The trail opens big views of Trishul and Nanda Ghunti.",
      },
      {
        title: "Day 5: Patar Nachauni to Bhagwabasa",
        details:
          "Move into high-altitude rocky terrain and reach Bhagwabasa. Rest well for the summit approach.",
      },
      {
        title: "Day 6: Roopkund exploration and return",
        details:
          "Start early for Roopkund and the surrounding ridge, weather permitting. Descend back to Patar Nachauni or lower camp.",
      },
      {
        title: "Day 7: Descend to Lohajung",
        details:
          "Trek down through meadows and village trails to Lohajung for the final overnight stay.",
      },
      {
        title: "Day 8: Lohajung to Kathgodam",
        details:
          "Drive back to Kathgodam after breakfast.",
      },
    ],
  },
  {
    slug: "pindari-glacier",
    season: "summer",
    name: "Pindari Glacier Trek",
    price: "9,000",
    days: "6N/7D",
    route: "Kathgodam ⇄ Kathgodam",
    img: "/images/wework/Pindari.avif",
    tag: "Glacier",
    overview:
      "A rewarding Kumaon trek with remote villages, river valleys, and a close approach to the magnificent Pindari Glacier snout.",
    altitude: "12,300 ft",
    bestTime: "April to June, September to October",
    inclusions: [
      "Kathgodam transport",
      "Guesthouse accommodation",
      "Breakfast, dinner, and trek meals",
      "Guide and support team",
      "Permits and first aid support",
    ],
    exclusions: [
      "Lunch at roadside stops",
      "Personal porter",
      "Travel insurance",
      "Any personal expenses",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kathgodam to Khati region",
        details:
          "Drive toward the Bageshwar side and continue to the trek base area. Overnight in a guesthouse.",
      },
      {
        title: "Day 2: Trek to Khati village",
        details:
          "Begin the gradual trek through river valley trails and traditional settlements. Reach Khati, the last inhabited village on the route.",
      },
      {
        title: "Day 3: Khati to Dwali",
        details:
          "Trek along the Pindar river through forest and bridge crossings. Overnight stay at Dwali.",
      },
      {
        title: "Day 4: Dwali to Phurkia",
        details:
          "Climb higher through a narrow valley with changing mountain scenery. Reach Phurkia and rest for the glacier day.",
      },
      {
        title: "Day 5: Visit Zero Point and return to Dwali",
        details:
          "Trek to the Pindari Glacier viewpoint in the morning. Return to Dwali after spending time near Zero Point.",
      },
      {
        title: "Day 6: Dwali to Khati",
        details:
          "Descend back along the familiar river trail to Khati village.",
      },
      {
        title: "Day 7: Return to Kathgodam",
        details:
          "Drive back to Kathgodam after breakfast.",
      },
    ],
  },
  {
    slug: "rupinn-pass",
    season: "summer",
    name: "Rupin Pass Trek",
    price: "15,500",
    days: "7N/8D",
    route: "Dehradun ⇄ Shimla",
    img: "/images/wework/Rupinpass.jpg",
    tag: "Cross-Over",
    overview:
      "A spectacular crossover trek loaded with hanging villages, waterfalls, snow bridges, and a dramatic pass crossing into Himachal.",
    altitude: "15,250 ft",
    bestTime: "May to June, September",
    inclusions: [
      "Transport from Dehradun to base camp",
      "Accommodation in guesthouse and camps",
      "Meals during the trek",
      "Trek leader, guides, and staff",
      "Permits and safety equipment",
    ],
    exclusions: [
      "Return travel from Shimla onward",
      "Personal equipment rental",
      "Offloading charges",
      "Insurance and evacuation",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Dhaula",
        details:
          "Drive to the quiet village of Dhaula via Mori and Netwar. Overnight in a guesthouse.",
      },
      {
        title: "Day 2: Dhaula to Sewa",
        details:
          "Trek through villages and forest sections with Rupin river views. Stay near Sewa village.",
      },
      {
        title: "Day 3: Sewa to Jhaka",
        details:
          "Pass through hanging villages and cross impressive cliff-side trails. Reach Jhaka, known as the hanging village.",
      },
      {
        title: "Day 4: Jhaka to Dhanderas Thatch",
        details:
          "Trek through broad valleys and arrive near the famous Rupin waterfall. Camp at Dhanderas Thatch.",
      },
      {
        title: "Day 5: Dhanderas Thatch to Upper Waterfall camp",
        details:
          "Gain altitude steadily over boulder and snow sections. Reach the high camp for the pass attempt.",
      },
      {
        title: "Day 6: Cross Rupin Pass to Ronti Gad",
        details:
          "Start early to cross Rupin Pass and descend into the Sangla side. Camp at Ronti Gad after a long but thrilling day.",
      },
      {
        title: "Day 7: Ronti Gad to Sangla roadhead and transfer",
        details:
          "Descend to the roadhead and continue by vehicle toward Sangla or nearby transit point.",
      },
      {
        title: "Day 8: Drive to Shimla",
        details:
          "Travel to Shimla and conclude the trek.",
      },
    ],
  },
  {
    slug: "buran-ghati",
    season: "summer",
    name: "Buran Ghati Trek",
    price: "14,000",
    days: "6N/7D",
    route: "Shimla ⇄ Shimla",
    img: "/images/wework/BuranGhati.jpeg",
    tag: "Adventure",
    overview:
      "A diverse trek in Himachal with ancient villages, flower meadows, glacial lakes, and an exhilarating pass descent.",
    altitude: "15,000 ft",
    bestTime: "May to June, September to October",
    inclusions: [
      "Shimla to base transfers",
      "All meals during the trek",
      "Guesthouse and tent stay",
      "Trek guide and climbing support",
      "Permits and technical safety gear",
    ],
    exclusions: [
      "Travel to Shimla",
      "Personal trek equipment",
      "Porter services",
      "Travel insurance",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Shimla to Janglik",
        details:
          "Drive to Janglik village and settle into a homestay. Explore the old wooden homes in the evening.",
      },
      {
        title: "Day 2: Janglik to Dayara meadows",
        details:
          "Trek through forests and streams to reach the first big meadow camp. Enjoy sunset over the ridges.",
      },
      {
        title: "Day 3: Dayara to Litham",
        details:
          "Continue through alpine terrain toward Litham. The valley begins to open up with snow peaks around.",
      },
      {
        title: "Day 4: Acclimatization to Chandranahan Lake area",
        details:
          "Hike to the Chandranahan side for acclimatization and return to camp. Rest and prepare for pass day.",
      },
      {
        title: "Day 5: Litham to Dhunda",
        details:
          "Move to the high camp below Buran Ghati. Final gear check and early rest for the next day.",
      },
      {
        title: "Day 6: Cross Buran Ghati and descend",
        details:
          "Cross the pass and descend on snow or scree depending on conditions. Reach the lower valley camp after a demanding day.",
      },
      {
        title: "Day 7: Return to Shimla",
        details:
          "Descend to the roadhead and drive back to Shimla.",
      },
    ],
  },
  {
    slug: "har-ki-dun-summer",
    season: "summer",
    name: "Har Ki Dun Valley",
    price: "9,500",
    days: "6N/7D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/wework/har-ki-dun-trek.jpg",
    tag: "Ancient Culture",
    overview:
      "A cultural valley trek through old Himalayan villages, riverside camps, and beautiful views of Swargarohini and Black Peak.",
    altitude: "11,700 ft",
    bestTime: "April to June, September to November",
    inclusions: [
      "Dehradun transport",
      "Homestay and campsite stay",
      "Meals during the trek",
      "Guide and permits",
      "Basic first aid and support staff",
    ],
    exclusions: [
      "Personal snacks and bottled drinks",
      "Backpack offloading",
      "Insurance and emergency costs",
      "Personal medications",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Sankri",
        details:
          "Drive from Dehradun to Sankri with scenic mountain stops. Overnight stay in the base village.",
      },
      {
        title: "Day 2: Sankri to Pauni Garaat",
        details:
          "Drive to Taluka and start trekking along the Supin river. Reach the riverside campsite at Pauni Garaat.",
      },
      {
        title: "Day 3: Pauni Garaat to Kalkattiyadhar",
        details:
          "Pass through Osla village and continue deeper into the valley. Camp amid wide grasslands and mountain views.",
      },
      {
        title: "Day 4: Explore Har Ki Dun and return",
        details:
          "Trek to Har Ki Dun valley viewpoint and spend time soaking in the amphitheater-like panorama. Return to camp for the night.",
      },
      {
        title: "Day 5: Kalkattiyadhar to Pauni Garaat",
        details:
          "Descend gradually through village trails and forest stretches back to Pauni Garaat.",
      },
      {
        title: "Day 6: Pauni Garaat to Sankri",
        details:
          "Trek back to Taluka and drive to Sankri. Relax after the final walking day.",
      },
      {
        title: "Day 7: Sankri to Dehradun",
        details:
          "Drive back to Dehradun and conclude the trip.",
      },
    ],
  },
  {
    slug: "kedartal",
    season: "summer",
    name: "Kedartal Trek",
    price: "12,500",
    days: "6N/7D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/wework/kedarTal.jpeg",
    tag: "Emerald Lake",
    overview:
      "A demanding high-altitude trek leading to the pristine Kedartal lake below the towering Thalay Sagar massif.",
    altitude: "15,500 ft",
    bestTime: "May to June, September to October",
    inclusions: [
      "Dehradun to Gangotri transport",
      "Guesthouse and camps",
      "Meals during the trek",
      "Guide, permits, and support staff",
      "Safety and first aid kit",
    ],
    exclusions: [
      "Personal technical gear",
      "Porter charges",
      "Travel insurance",
      "Temple or personal expenses",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Gangotri",
        details:
          "Drive via Uttarkashi to Gangotri and rest at the guesthouse for acclimatization.",
      },
      {
        title: "Day 2: Gangotri acclimatization",
        details:
          "Spend the day acclimatizing around Gangotri and preparing for the trek. Short walks help with altitude adjustment.",
      },
      {
        title: "Day 3: Gangotri to Bhoj Kharak",
        details:
          "Begin the steep ascent through rocky trails and sparse vegetation. Camp at Bhoj Kharak.",
      },
      {
        title: "Day 4: Bhoj Kharak to Kedar Kharak",
        details:
          "Continue on exposed sections with big views of Thalay Sagar. Reach Kedar Kharak camp by afternoon.",
      },
      {
        title: "Day 5: Visit Kedartal and return",
        details:
          "Trek to the emerald lake of Kedartal early in the day. Spend time at the lake and return to Kedar Kharak.",
      },
      {
        title: "Day 6: Descend to Gangotri",
        details:
          "Carefully descend back to Gangotri and stay overnight in a guesthouse.",
      },
      {
        title: "Day 7: Gangotri to Dehradun",
        details:
          "Drive back to Dehradun after breakfast.",
      },
    ],
  },
  {
    slug: "bali-pass",
    season: "summer",
    name: "Bali Pass Trek",
    price: "16,500",
    days: "7N/8D",
    route: "Dehradun ⇄ Rishikesh",
    img: "/images/wework/Bali-Pass-Trek-Travel-Blog.webp",
    tag: "Technical",
    overview:
      "A challenging crossover connecting Har Ki Dun to Yamunotri, known for remote camps, glacier terrain, and a serious high pass crossing.",
    altitude: "16,200 ft",
    bestTime: "May to June, September to October",
    inclusions: [
      "Road transfer from Dehradun",
      "Guesthouse and tent accommodation",
      "All meals during the trek",
      "Experienced trek leader and technical team",
      "Permits and safety gear",
    ],
    exclusions: [
      "Technical clothing and gear rental",
      "Personal porter",
      "Insurance and rescue",
      "Extra hotel due to delays",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Sankri",
        details:
          "Drive to Sankri and rest for the high-altitude expedition ahead.",
      },
      {
        title: "Day 2: Sankri to Seema",
        details:
          "Drive to Taluka and trek to Seema through forest and village trails.",
      },
      {
        title: "Day 3: Seema to Ruinsara Tal",
        details:
          "Trek deeper into the valley and reach the beautiful campsite near Ruinsara lake.",
      },
      {
        title: "Day 4: Ruinsara Tal to Odari",
        details:
          "Gain altitude steadily and move to the high camp at Odari. Rest early for the demanding days ahead.",
      },
      {
        title: "Day 5: Odari to Bali col base",
        details:
          "Continue through moraine and snow terrain toward the upper camp. Final acclimatization and gear checks follow.",
      },
      {
        title: "Day 6: Cross Bali Pass to Yamunotri side",
        details:
          "Start very early to cross Bali Pass and descend carefully to the lower campsite. This is the toughest day of the trek.",
      },
      {
        title: "Day 7: Descend to Janki Chatti",
        details:
          "Walk down to Janki Chatti and transfer to the hotel or transit point.",
      },
      {
        title: "Day 8: Return to Rishikesh",
        details:
          "Drive back and conclude the trek.",
      },
    ],
  },
  {
    slug: "gaumukh-tapovan",
    season: "summer",
    name: "Gaumukh Tapovan",
    price: "13,500",
    days: "5N/6D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/wework/Gaumukh.jpeg",
    tag: "Spiritual",
    overview:
      "A sacred high-altitude journey to the source of the Ganga and the stunning meadows of Tapovan beneath Shivling peak.",
    altitude: "14,640 ft",
    bestTime: "May to June, September to October",
    inclusions: [
      "Transport from Dehradun",
      "Guesthouse and campsite stay",
      "All meals during the trek",
      "Guide and permits",
      "Basic camping gear and first aid",
    ],
    exclusions: [
      "Personal equipment",
      "Porter services",
      "Medical or rescue expense",
      "Temple donations or personal spends",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Gangotri",
        details:
          "Drive to Gangotri and check in for the night. Spend some time near the temple and river.",
      },
      {
        title: "Day 2: Gangotri to Chirbasa",
        details:
          "Start the trek on a well-defined trail along the Bhagirathi river. Camp or stay near Chirbasa.",
      },
      {
        title: "Day 3: Chirbasa to Bhojbasa",
        details:
          "Continue trekking through the broad valley toward Bhojbasa. Rest well before the glacier approach.",
      },
      {
        title: "Day 4: Gaumukh visit and climb to Tapovan",
        details:
          "Visit Gaumukh and then continue to Tapovan across glacier terrain with guide support. Camp in the meadow below Shivling.",
      },
      {
        title: "Day 5: Tapovan to Gangotri",
        details:
          "Descend via Bhojbasa and continue to Gangotri. Overnight stay in a guesthouse.",
      },
      {
        title: "Day 6: Gangotri to Dehradun",
        details:
          "Drive back after breakfast.",
      },
    ],
  },
  {
    slug: "valley-of-flowers",
    season: "rainy",
    name: "Valley of Flowers Trek",
    price: "9,500",
    days: "5N/6D",
    route: "Rishikesh ⇄ Rishikesh",
    img: "/images/Treks/Valleyofflowers.jpg",
    tag: "Seasonal",
    overview:
      "A UNESCO World Heritage trail bursting with monsoon blooms, waterfalls, and soft green landscapes in the heart of Chamoli.",
    altitude: "14,100 ft",
    bestTime: "July to September",
    inclusions: [
      "Transport from Rishikesh",
      "Hotel and guesthouse stay",
      "Breakfast and dinner",
      "Guide and permits",
      "Basic first aid support",
    ],
    exclusions: [
      "Lunch and snacks during hikes",
      "Pony or helicopter charges",
      "Personal expenses",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Joshimath/Pipalkoti",
        details:
          "Drive through the Alaknanda valley and halt for the night near Joshimath or Pipalkoti.",
      },
      {
        title: "Day 2: Drive to Govindghat and trek to Ghangaria",
        details:
          "Continue to Govindghat and begin the climb to Ghangaria. Check in and rest after the long day.",
      },
      {
        title: "Day 3: Explore Valley of Flowers",
        details:
          "Spend the day walking through the valley amid monsoon blossoms and waterfalls. Return to Ghangaria by evening.",
      },
      {
        title: "Day 4: Hemkund or local acclimatization walk",
        details:
          "Depending on the package, visit Hemkund Sahib or enjoy a relaxed day around Ghangaria. Overnight stay at Ghangaria.",
      },
      {
        title: "Day 5: Ghangaria to Govindghat and drive down",
        details:
          "Descend back to Govindghat and continue driving toward Joshimath or Pipalkoti.",
      },
      {
        title: "Day 6: Return to Rishikesh",
        details:
          "Drive back to Rishikesh and conclude the trek.",
      },
    ],
  },
  {
    slug: "hemkund-sahib",
    season: "rainy",
    name: "Hemkund Sahib Trek",
    price: "8,500",
    days: "4N/5D",
    route: "Rishikesh ⇄ Rishikesh",
    img: "/images/Treks/hemkundsahib.jpeg",
    tag: "Pilgrimage",
    overview:
      "A sacred monsoon journey to the high-altitude Sikh shrine of Hemkund Sahib, surrounded by peaks and alpine flora.",
    altitude: "15,200 ft",
    bestTime: "June to September",
    inclusions: [
      "Road transport from Rishikesh",
      "Guesthouse stay",
      "Breakfast and dinner",
      "Trip coordinator",
      "Permits and first aid support",
    ],
    exclusions: [
      "Lunch and tea/snacks",
      "Pony or palki charges",
      "Personal expenses",
      "Insurance",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Joshimath/Pipalkoti",
        details:
          "Drive to the halt point in Chamoli district and stay overnight.",
      },
      {
        title: "Day 2: Govindghat to Ghangaria",
        details:
          "Drive to Govindghat and trek up to Ghangaria. Check in and rest.",
      },
      {
        title: "Day 3: Hemkund Sahib visit",
        details:
          "Start early for the steep trek to Hemkund Sahib. Spend time at the gurudwara and lake before returning to Ghangaria.",
      },
      {
        title: "Day 4: Descend and drive down",
        details:
          "Trek back to Govindghat and continue the drive toward the lower halt point.",
      },
      {
        title: "Day 5: Return to Rishikesh",
        details:
          "Complete the road journey back to Rishikesh.",
      },
    ],
  },
  {
    slug: "har-ki-dun",
    season: "rainy",
    name: "Har Ki Dun Trek",
    price: "9,900",
    days: "6N/7D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/Treks/HarKiDun.jpg",
    tag: "Group",
    overview:
      "During monsoon, Har Ki Dun turns deeply green with dramatic clouds, lively rivers, and rich village landscapes across the Supin valley.",
    altitude: "11,700 ft",
    bestTime: "July to September",
    inclusions: [
      "Dehradun to Sankri transfers",
      "Homestay and camp stay",
      "Meals during the trek",
      "Guide and permits",
      "First aid and support crew",
    ],
    exclusions: [
      "Personal rain gear",
      "Travel insurance",
      "Backpack offloading",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Sankri",
        details:
          "Drive to Sankri and check in for the night after the long mountain road journey.",
      },
      {
        title: "Day 2: Sankri to Pauni Garaat",
        details:
          "Drive to Taluka and trek beside the river to the campsite.",
      },
      {
        title: "Day 3: Pauni Garaat to Kalkattiyadhar",
        details:
          "Continue through Osla village and lush monsoon valley scenery to the upper camp.",
      },
      {
        title: "Day 4: Har Ki Dun valley excursion",
        details:
          "Visit the main valley viewpoint and return to camp. Monsoon clouds often create dramatic changing light.",
      },
      {
        title: "Day 5: Kalkattiyadhar to Pauni Garaat",
        details:
          "Descend through the same green valley and camp lower down.",
      },
      {
        title: "Day 6: Pauni Garaat to Sankri",
        details:
          "Trek back and drive to Sankri for the final overnight stay.",
      },
      {
        title: "Day 7: Sankri to Dehradun",
        details:
          "Drive back to Dehradun after breakfast.",
      },
    ],
  },
  {
    slug: "nag-tibba-monsoon",
    season: "rainy",
    name: "Nag Tibba Monsoon Hike",
    price: "3,500",
    days: "1N/2D",
    route: "Dehradun ⇄ Dehradun",
    img: "/images/Treks/NagTibba.webp",
    tag: "Weekend",
    overview:
      "A quick weekend trek near Dehradun with forest trails, open camps, and a rewarding summit view when skies are clear.",
    altitude: "9,915 ft",
    bestTime: "July to September",
    inclusions: [
      "Transport from Dehradun",
      "Camp stay and meals",
      "Guide and permits",
      "Basic camping equipment",
      "First aid support",
    ],
    exclusions: [
      "Personal trekking items",
      "Rainwear and poncho",
      "Personal expenses",
      "Insurance",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Dehradun to Pantwari and trek to camp",
        details:
          "Drive to Pantwari and begin the trek through village paths and forest. Reach camp by evening and enjoy dinner under the clouds.",
      },
      {
        title: "Day 2: Summit Nag Tibba and return to Dehradun",
        details:
          "Trek to Nag Tibba top early in the morning and descend back to Pantwari. Drive to Dehradun afterward.",
      },
    ],
  },
  {
    slug: "hampta-pass-monsoon",
    season: "rainy",
    name: "Hampta Pass Trek",
    price: "9,500",
    days: "4N/5D",
    route: "Manali ⇄ Manali",
    img: "/images/Treks/Hamptapass.webp",
    tag: "Top Seller",
    overview:
      "Monsoon is one of the best times for Hampta Pass, when Kullu’s green valley contrasts beautifully with the arid Lahaul side.",
    altitude: "14,100 ft",
    bestTime: "July to September",
    inclusions: [
      "Manali local transfers",
      "Tents, meals, and camping gear",
      "Guide and support staff",
      "Permits and safety equipment",
      "First aid support",
    ],
    exclusions: [
      "Travel to Manali",
      "Personal gear and clothing",
      "Insurance",
      "Extra stay due to weather",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Manali to Chika",
        details:
          "Drive to Jobra and trek to Chika, following streams and meadow trails.",
      },
      {
        title: "Day 2: Chika to Balu Ka Ghera",
        details:
          "Continue up the valley with river crossings and changing weather patterns. Camp at Balu Ka Ghera.",
      },
      {
        title: "Day 3: Cross Hampta Pass to Shea Goru",
        details:
          "Summit the pass and descend into the stark Lahaul landscape. Camp at Shea Goru.",
      },
      {
        title: "Day 4: Shea Goru to Chhatru and drive to Manali",
        details:
          "Descend to Chhatru and drive back toward Manali.",
      },
      {
        title: "Day 5: Departure from Manali",
        details:
          "Check out after breakfast for your onward travel.",
      },
    ],
  },
  {
    slug: "bhrigu-lake",
    season: "rainy",
    name: "Bhrigu Lake Trek",
    price: "6,500",
    days: "3N/4D",
    route: "Manali ⇄ Manali",
    img: "/images/Treks/BhriguLake.jpeg",
    tag: "Alpine Lake",
    overview:
      "A short and visually rich trek from Manali that rises quickly into rolling grasslands and the high alpine Bhrigu Lake basin.",
    altitude: "14,100 ft",
    bestTime: "June to September",
    inclusions: [
      "Manali local transport",
      "Tents and meals",
      "Guide and permits",
      "Camping equipment",
      "First aid support",
    ],
    exclusions: [
      "Travel to Manali",
      "Personal clothing and shoes",
      "Insurance",
      "Porter charges",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Manali to Gulaba and trek to camp",
        details:
          "Drive to Gulaba and trek upward through green slopes to the campsite.",
      },
      {
        title: "Day 2: Camp to Bhrigu Lake and back",
        details:
          "Visit Bhrigu Lake and spend time enjoying the sweeping views of the Pir Panjal and Kullu valley. Return to camp.",
      },
      {
        title: "Day 3: Descend to Gulaba and return to Manali",
        details:
          "Trek down to the roadhead and drive to Manali. Final overnight stay if included.",
      },
      {
        title: "Day 4: Departure from Manali",
        details:
          "Check out after breakfast.",
      },
    ],
  },
  {
    slug: "ali-bedni-bugyal",
    season: "rainy",
    name: "Ali Bedni Bugyal",
    price: "10,500",
    days: "5N/6D",
    route: "Rishikesh ⇄ Rishikesh",
    img: "/images/Treks/Alibedni.webp",
    tag: "Meadows",
    overview:
      "A grand meadow trek with rolling ridges, campsite views of Trishul, and wide monsoon grasslands stretching to the horizon.",
    altitude: "12,550 ft",
    bestTime: "July to September",
    inclusions: [
      "Transport from Rishikesh",
      "Guesthouse and camp stay",
      "All trek meals",
      "Guide, permits, and support crew",
      "Camping equipment",
    ],
    exclusions: [
      "Personal rain gear",
      "Backpack offloading",
      "Insurance and rescue",
      "Any personal purchases",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Lohajung",
        details:
          "Drive through mountain roads to Lohajung and rest overnight.",
      },
      {
        title: "Day 2: Lohajung to Didna",
        details:
          "Trek down and up through village trails to Didna village. Overnight stay in camp or homestay.",
      },
      {
        title: "Day 3: Didna to Ali Bugyal",
        details:
          "Climb through forest and emerge into one of the largest meadows in the region. Camp at Ali Bugyal.",
      },
      {
        title: "Day 4: Ali to Bedni Bugyal and back",
        details:
          "Explore the rolling meadow ridge toward Bedni. Return to camp with sunset views on the grasslands.",
      },
      {
        title: "Day 5: Descend to Lohajung",
        details:
          "Trek back via Didna and reach Lohajung by evening.",
      },
      {
        title: "Day 6: Lohajung to Rishikesh",
        details:
          "Drive back after breakfast.",
      },
    ],
  },
  {
    slug: "kheerganga-monsoon",
    season: "rainy",
    name: "Kheerganga Monsoon Trek",
    price: "7,500",
    days: "2N/3D",
    route: "Rishikesh ⇄ Rishikesh",
    img: "/images/Treks/Kheerganga.jpg",
    tag: "Hot Springs",
    overview:
      "A popular Parvati Valley escape with forest walks, waterfalls, mountain cafés, and the famous hot springs at Kheerganga.",
    altitude: "9,700 ft",
    bestTime: "May to September",
    inclusions: [
      "Transport from pickup point",
      "Camp or guesthouse stay",
      "Breakfast and dinner",
      "Guide support",
      "Basic first aid",
    ],
    exclusions: [
      "Lunch and café expenses",
      "Personal clothing and gear",
      "Insurance",
      "Any sightseeing outside itinerary",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Travel to Barshaini",
        details:
          "Reach the Parvati Valley base area and settle into the stay. Spend the evening exploring nearby cafés and the riverfront.",
      },
      {
        title: "Day 2: Trek to Kheerganga",
        details:
          "Trek through forest and waterfalls to reach Kheerganga. Relax at the campsite and enjoy the mountain atmosphere.",
      },
      {
        title: "Day 3: Descend and departure",
        details:
          "After sunrise and breakfast, descend back to Barshaini and continue onward.",
      },
    ],
  },
  {
    slug: "vasuki-tal",
    season: "rainy",
    name: "Vasuki Tal Trek",
    price: "11,000",
    days: "4N/5D",
    route: "Rishikesh ⇄ Rishikesh",
    img: "/images/Treks/Vasuki-Tal-Uttarakhand.jpg",
    tag: "Glacial Lake",
    overview:
      "A spiritual and scenic high-altitude trek beyond Kedarnath to the pristine glacial lake of Vasuki Tal.",
    altitude: "13,780 ft",
    bestTime: "June to September",
    inclusions: [
      "Transport from Rishikesh",
      "Guesthouse and camp accommodation",
      "Meals during trek days",
      "Guide and permits",
      "Basic first aid support",
    ],
    exclusions: [
      "Pony, porter, or helicopter costs",
      "Temple donations and personal spends",
      "Insurance",
      "Personal trekking gear",
      "Anything not listed in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Guptkashi/Sonprayag",
        details:
          "Drive to the Kedarnath base region and stay overnight.",
      },
      {
        title: "Day 2: Trek to Kedarnath",
        details:
          "Reach Gaurikund and begin the climb to Kedarnath. Overnight near the temple area.",
      },
      {
        title: "Day 3: Kedarnath to Vasuki Tal and return",
        details:
          "Start early for the high-altitude trek to Vasuki Tal. Return to Kedarnath after spending time at the lake.",
      },
      {
        title: "Day 4: Descend to Sonprayag",
        details:
          "Trek back down from Kedarnath and stay near the base region.",
      },
      {
        title: "Day 5: Return to Rishikesh",
        details:
          "Drive back after breakfast.",
      },
    ],
  },
];

export const getTreksBySeason = (season: TrekSeason) =>
  TREKS.filter((trek) => trek.season === season);

export const getTrekBySlug = (slug: string) =>
  TREKS.find((trek) => trek.slug === slug);
