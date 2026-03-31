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
    slug: "rishikesh-spiritual-adventure",
    profession: "Rishikesh",
    price: "7,500 / Person", // Adjusted for 3 days
    duration: "3 Days / 2 Nights",
    route: "Delhi ⇄ Haridwar ⇄ Rishikesh",
    imgSrc: "/images/wework/Rishikesh.jpg",
    overview:
      "A perfect 3-day blend of spiritual peace and Himalayan adventure. From the iconic Ganga Aarti at Triveni Ghat to the heights of Neelkanth Mahadev and the thrills of white-water rafting, experience the best of the Yoga Capital.",
    inclusions: [
      "2 Nights Hotel accommodation (Standard/Deluxe)",
      "Breakfast and Dinner at the hotel",
      "Private AC vehicle for Haridwar & Rishikesh sightseeing",
      "Visit to Neelkanth Mahadev Temple",
      "Driver allowance, toll, and parking charges",
      "Rafting"
    ],
    exclusions: [
      "River Rafting and Bungee Jumping fees",
      "Lunch and personal snacks",
      "Entry tickets to monuments or Beatles Ashram",
      "Laundry or tips",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar Darshan & Arrival in Rishikesh",
        details:
          "Pick up from Delhi/Dehradun. En route visit Haridwar for Mansa Devi and Chandi Devi temples. Reach Rishikesh by evening, check in, and witness the soul-stirring Maha Aarti at Triveni Ghat.",
      },
      {
        title: "Day 2: Adventure, Cafes & Beatles Ashram",
        details:
          "After breakfast, head for River Rafting (Shivpuri to Rishikesh). Afternoon visit to the famous Beatles Ashram and Janki Setu. Spend the evening cafe-hopping near Laxman Jhula or exploring local handicraft markets.",
      },
      {
        title: "Day 3: Neelkanth Mahadev & Departure",
        details:
          "Early morning drive to the sacred Neelkanth Mahadev Temple tucked in the mountains. Return to Rishikesh for a final visit to Vashistha Gufa (meditation cave) before your afternoon departure back to Delhi.",
      },
    ],
},
  {
    slug: "haridwar",
    profession: "Haridwar",
    price: "4,000 / Person",
    duration: "1 Day",
    route: "Delhi-Haridwar",
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
    slug: "kedarnath-dham-yatra",
    profession: "Kedarnath Dham",
    price: " 16,500 / Person",
    duration: "5 Days / 4 Nights",
    route: "Haridwar ⇄ Sonprayag ⇄ Kedarnath",
    imgSrc: "/images/wework/Kedarnath.jpg",
    overview:
      "A soul-stirring pilgrimage to one of the twelve Jyotirlingas. This 5-day journey is designed to give you ample time for the 16km trek from Gaurikund, an overnight stay amidst the Himalayan peaks, and a peaceful morning Darshan at the shrine of Lord Shiva.",
    inclusions: [
      "4 Nights accommodation (Guptkashi/Sonprayag & Kedarnath Top)",
      "MAP Plan (Breakfast and Dinner at hotels/camps)",
      "Private AC vehicle for Haridwar to Sonprayag transfers",
      "Registration assistance for Char Dham Yatra",
      "Driver allowance, Toll, and Parking charges",
    ],
    exclusions: [
      "Helicopter, Pony, or Palki charges for the trek",
      "Lunch and personal snacks",
      "Mandakini Aarti or Special Shringar Puja charges",
      "Travel insurance and medical emergencies",
      "GST 5% extra",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Guptkashi / Phata",
        details:
          "Pick up from Haridwar. Drive along the scenic Mandakini river via Devprayag and Rudraprayag confluences. Check-in at Guptkashi or Phata for an overnight stay to prepare for the trek.",
      },
      {
        title: "Day 2: Sonprayag to Kedarnath (The 16km Trek)",
        details:
          "Early morning drive to Sonprayag. Take the local shuttle to Gaurikund and start the 16km trek to Kedarnath. Reach the temple by evening, witness the evening Aarti, and stay overnight in a guesthouse/camp near the temple.",
      },
      {
        title: "Day 3: Holy Darshan & Exploration",
        details:
          "Early morning 'Abhishek' Darshan of Lord Kedarnath. Spend time exploring the Bhairav Nath Temple and the surrounding snow-capped peaks. After a spiritual morning, start the descent back to Gaurikund/Sonprayag. Overnight stay at Sonprayag/Guptkashi.",
      },
      {
        title: "Day 4: Rest Day & Local Sightseeing",
        details:
          "After the strenuous trek, enjoy a relaxed morning. Visit the ancient Triyuginarayan Temple (the wedding site of Lord Shiva and Parvati) or the Kalimath Temple. Overnight stay at Guptkashi.",
      },
      {
        title: "Day 5: Guptkashi to Haridwar Departure",
        details:
          "After breakfast, begin the return drive to Haridwar. En route, stop at Rishikesh for a brief visit to Laxman Jhula. Drop-off at Haridwar Railway Station/Bus Stand in the evening.",
      },
    ],
},
{
    slug: "badrinath-dham-special",
    profession: "Badrinath Dham",
    price: " 15,500 / Person",
    duration: "5 Days / 4 Nights",
    route: "Haridwar - Joshimath - Badrinath - Haridwar",
    imgSrc: "/images/wework/Badrinath.webp",
    overview:
      "A profound spiritual journey to the abode of Lord Vishnu. This 5-day circuit covers the majestic Badrinath Temple, the border charms of Mana Village, and the sacred river confluences of the Alaknanda valley.",
    inclusions: [
      "4 Nights accommodation (Twin/Triple sharing)",
      "MAP Plan (Breakfast and Dinner at hotels)",
      "Private AC Vehicle for all transfers & sightseeing",
      "Visit to Mana Village and Vyas Gufa",
      "Driver allowance, Toll, and Parking",
    ],
    exclusions: [
      "Any helicopter or pony charges",
      "Lunch and mid-day snacks",
      "Entrance fees for monuments or ropeway in Joshimath",
      "Special Puja or Maha Abhishek charges",
      "GST 5% extra",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Joshimath/Pipalkoti",
        details:
          "Pick up from Haridwar. Drive via Devprayag (Confluence of Alaknanda & Bhagirathi) and Rudraprayag. Reach Joshimath or Pipalkoti by evening. Check-in and rest after the long mountain drive.",
      },
      {
        title: "Day 2: Joshimath to Badrinath (The Holy Abode)",
        details:
          "After breakfast, drive to Badrinath. Check into the hotel. In the evening, take a dip in the Tapt Kund (Natural Hot Springs) and visit the Badrinath Temple for the soul-stirring Swarna Aarti.",
      },
      {
        title: "Day 3: Mana Village Exploration & Local Sightseeing",
        details:
          "Early morning Mahabhishek Darshan (optional). Later, explore Mana Village—the last Indian village before the Tibet border. Visit Bhim Pul, Vyas Gufa, and the origin of the Saraswati River. Overnight stay in Badrinath.",
      },
      {
        title: "Day 4: Badrinath to Rudraprayag/Kirtinagar",
        details:
          "Morning prayers at the temple. Start the return journey. En route, visit Vishnuprayag and Nandprayag. Reach Rudraprayag for an overnight stay at the confluence of the Alaknanda and Mandakini rivers.",
      },
      {
        title: "Day 5: Rudraprayag to Haridwar Departure",
        details:
          "After breakfast, drive back to Haridwar. Stop at the famous Vashistha Gufa near Rishikesh for meditation. Drop-off at Haridwar Railway Station/Bus Stand for your onward journey.",
      },
    ],
},
{
    slug: "tungnath-chandrashila-trek",
    profession: "Tungnath & Chandrashila",
    price: " 14,500 / Person",
    duration: "5 Days / 4 Nights",
    route: "Delhi ⇄ Chopta ⇄ Delhi",
    imgSrc: "/images/wework/Tungnath.jpeg",
    overview:
      "A breathtaking journey to the highest Shiva temple in the world. This 5-day escape takes you through the 'Mini Switzerland of India,' featuring the crystal-clear Deoriatal Lake, the sacred Tungnath Temple, and a spectacular 360-degree Himalayan view from the Chandrashila Summit.",
    inclusions: [
      "4 Nights accommodation (Camps in Chopta & Guesthouse in Sari)",
      "MAP Plan (Breakfast and Dinner at the stay)",
      "Private AC Vehicle for all transfers (Haridwar to Haridwar)",
      "Guided trek to Tungnath and Chandrashila",
      "Forest entry permits and camping charges",
      "Driver allowance, Toll, and Parking",
    ],
    exclusions: [
      "Lunch and personal snacks",
      "Mules or Porters for personal luggage",
      "Trekking gear (can be provided on request)",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Sari Village",
        details:
          "Pick up from Haridwar. Drive via the holy confluences of Devprayag and Rudraprayag. Reach Sari, the base camp for Deoriatal. Overnight stay in a traditional homestay or guesthouse.",
      },
      {
        title: "Day 2: Deoriatal Trek & Transfer to Chopta",
        details:
          "A short 2.3km uphill trek to the emerald Deoriatal Lake. Enjoy the reflection of the Chaukhamba peaks in the water. After lunch, trek back to Sari and drive to Chopta (Mini Switzerland). Overnight in Swiss Tents.",
      },
      {
        title: "Day 3: The Grand Trek: Tungnath & Chandrashila",
        details:
          "Start early for the 3.5km trek to Tungnath (the highest Kedar). After Darshan, continue 1.5km further to the Chandrashila Summit ($4,000m$) for a panoramic view of Nanda Devi, Trishul, and Kedar peaks. Return to Chopta for a bonfire night.",
      },
      {
        title: "Day 4: Exploration of Ukhimath & Omkareshwar",
        details:
          "After the high-altitude trek, enjoy a relaxed morning in the Chopta meadows. Later, drive to Ukhimath to visit the Omkareshwar Temple (the winter seat of Kedarnath and Madhyamaheshwar). Overnight stay in Ukhimath or Chopta.",
      },
      {
        title: "Day 5: Return Drive to Haridwar",
        details:
          "After breakfast, begin the descent back to the plains. Stop at Rishikesh for some local sightseeing or a quick visit to the Ghats. Drop-off at Haridwar Railway Station in the evening.",
      },
    ],
},
{
    slug: "gangotri-dham-yatra",
    profession: "Gangotri Dham",
    price: " 15,000 / Person",
    duration: "5 Days / 4 Nights",
    route: "Haridwar ⇄ Uttarkashi ⇄ Harsil ⇄ Gangotri",
    imgSrc: "/images/aboutus/Gangotri.webp",
    overview:
      "A divine journey to the origin of the Holy Ganga. This 5-day pilgrimage takes you through the stunning Bhagirathi Valley, featuring the apple orchards of Harsil, the healing thermal springs of Gangnani, and the ancient temple of Goddess Ganga at Gangotri.",
    inclusions: [
      "4 Nights accommodation (Uttarkashi & Harsil/Gangotri)",
      "MAP Plan (Breakfast and Dinner at the hotel/guesthouse)",
      "Private AC Vehicle for all transfers from Haridwar",
      "Visit to Harsil Valley and Gangnani Hot Springs",
      "Driver allowance, Toll, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day refreshments",
      "Special Puja or Aarti donation charges",
      "Porters for carrying personal luggage",
      "Entry fees for Gangotri National Park (if trekking to Gaumukh)",
      "GST 5% extra",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Uttarkashi",
        details:
          "Pick up from Haridwar. Drive along the banks of the Bhagirathi river. Stop at the famous Kashi Vishwanath Temple in Uttarkashi for evening Darshan. Overnight stay in Uttarkashi.",
      },
      {
        title: "Day 2: Uttarkashi to Harsil Valley",
        details:
          "After breakfast, drive toward Harsil. Stop at Gangnani to take a holy dip in 'Rishikund' (Natural Hot Springs). Reach the picturesque Harsil Valley, famous for its apple orchards and cedar forests. Overnight stay in Harsil.",
      },
      {
        title: "Day 3: Gangotri Temple Darshan & Exploration",
        details:
          "A short 25km drive to Gangotri Dham. Take a holy dip in the Bhagirathi River and attend the Temple Darshan. Visit Bhagirath Shila and the Gauri Kund waterfalls. Return to Harsil or stay in Gangotri for a peaceful mountain evening.",
      },
      {
        title: "Day 4: Harsil to Uttarkashi / Chamba",
        details:
          "Enjoy a relaxed morning walk in the Harsil meadows or visit the Mukhba Village (the winter seat of Goddess Ganga). Begin the return drive to Uttarkashi or Chamba for an overnight stay.",
      },
      {
        title: "Day 5: Return Drive to Haridwar",
        details:
          "After breakfast, drive back to Haridwar via Tehri Dam (one of the tallest dams in the world). Enjoy the view of the massive Tehri Lake before your final drop-off at Haridwar Railway Station.",
      },
    ],
},
  {
    slug: "yamunotri",
    profession: "Yamunotri",
    price: "14,500 / Person",
    duration: "5 Days",
    route: "Delhi - Yamunotri - Delhi",
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
    slug: "kainchi-dham-spiritual-tour",
    profession: "Kainchi Dham",
    price: " 5,000 / Person",
    duration: "2 Days / 1 Night",
    route: "Delhi ⇄ Bhimtal ⇄ Kainchi Dham",
    imgSrc: "/images/wework/Kainchi.webp",
    overview:
      "A soul-cleansing 2-day pilgrimage from the capital to the world-renowned Neem Karoli Baba Ashram. Experience the profound peace of Kainchi Dham, find your center in the serene hills of Kumaon, and enjoy a peaceful evening by the emerald waters of Bhimtal.",
    inclusions: [
      "1 Night accommodation in Bhimtal/Bhowali (Standard/Deluxe)",
      "Breakfast and Dinner at the hotel",
      "Private AC Sedan/SUV for Delhi to Delhi transfers",
      "Visit to Kainchi Dham and Bhimtal Lake",
      "All Tolls, State Taxes, and Parking charges",
    ],
    exclusions: [
      "Lunch and personal refreshments",
      "Boating charges at Bhimtal/Nainital",
      "Special offerings or donations at the Ashram",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Delhi to Bhimtal & Evening Peace",
        details:
          "Early morning (5:00 AM) departure from Delhi to beat the city traffic. Drive through the scenic plains into the Kumaon foothills. Reach Bhimtal by afternoon. Check-in and spend a relaxing evening boating on Bhimtal Lake or visiting the ancient Bhimeshwar Mahadev Temple. Overnight stay in Bhimtal/Bhowali."
      },
      {
        title: "Day 2: Kainchi Dham Darshan & Return to Delhi",
        details:
          "After an early breakfast, drive to Kainchi Dham. Spend the morning in the divine atmosphere of Neem Karoli Baba's Ashram—meditate, attend the prayers, and soak in the spiritual energy. Post-lunch, begin the return journey to Delhi. Reach the capital by late night (10:00 PM - 11:00 PM) for final drop-off."
      }
    ],
},
{
    slug: "panch-kedar-mahayatra-delhi",
    profession: "Panch Kedar",
    price: " 82,000 / Person",
    duration: "12 Days / 11 Nights",
    route: "Delhi ⇄ Kedarnath ⇄ Madhyamaheshwar ⇄ Tungnath ⇄ Rudranath ⇄ Kalpeshwar",
    imgSrc: "/images/aboutus/Panch-Kedar-Yatra.png", // Updated to a more relevant path if available
    overview:
      "The ultimate 12-day spiritual conquest of the Garhwal Himalayas. This comprehensive Delhi-to-Delhi circuit takes you to all five abodes of Lord Shiva: Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar. Designed for the true seeker, it balances strenuous high-altitude trekking with serene stays in Alpine meadows.",
    inclusions: [
      "11 Nights accommodation (Hotels/Guesthouses/Swiss Tents)",
      "MAP Plan (Breakfast and Dinner throughout the journey)",
      "Private AC Vehicle for Delhi to Delhi transfers (AC off in hills)",
      "Experienced mountain guide for all trekking sectors",
      "All State Taxes, Tolls, and Green Cess",
      "Registration assistance for the Yatra"
    ],
    exclusions: [
      "Pony, Palki, or Porter charges for personal luggage",
      "Helicopter tickets for Kedarnath (if opted)",
      "Lunch and mid-day energy snacks",
      "Personal trekking gear (sticks, raincoats, etc.)",
      "Any medical emergency or evacuation costs",
      "GST 5% extra"
    ],
    itinerary: [
      {
        title: "Day 1: Delhi to Haridwar/Rishikesh",
        details: "Early morning departure from Delhi. Drive 230km to the holy city of Haridwar. Attend the evening Ganga Aarti and overnight stay."
      },
      {
        title: "Day 2: Haridwar to Guptkashi",
        details: "Drive via Devprayag (Confluence of Alaknanda & Bhagirathi) and Rudraprayag. Reach Guptkashi, the gateway to the Mandakini valley. Overnight stay."
      },
      {
        title: "Day 3: Guptkashi to Kedarnath (1st Kedar)",
        details: "Drive to Sonprayag/Gaurikund and start the 16km trek to Kedarnath. Witness the evening Aarti at the Jyotirlinga. Overnight stay near the temple."
      },
      {
        title: "Day 4: Kedarnath to Guptkashi/Ransi",
        details: "After morning Darshan, trek down to Gaurikund. Drive to Ransi village, the base for the next Kedar. Overnight stay in Ransi."
      },
      {
        title: "Day 5: Ransi to Madhyamaheshwar (2nd Kedar)",
        details: "A 16km steady uphill trek to Madhyamaheshwar. Enjoy the stunning view of the Chaukhamba massif from the temple. Overnight stay in local guesthouses."
      },
      {
        title: "Day 6: Madhyamaheshwar to Ukhimath",
        details: "Trek back to Ransi and drive to Ukhimath, the winter seat of Kedarnath. Rest and recover your muscles. Overnight stay in Ukhimath."
      },
      {
        title: "Day 7: Ukhimath to Chopta & Tungnath (3rd Kedar)",
        details: "Drive to Chopta (Mini Switzerland). A 3.5km trek to Tungnath, the highest Shiva temple in the world. Continue to Chandrashila Peak for a 360-degree view. Return to Chopta for the night."
      },
      {
        title: "Day 8: Chopta to Sagar Village (Rudranath Base)",
        details: "Drive to Sagar Village near Gopeshwar. This day is kept light to prepare for the most difficult trek of the circuit: Rudranath. Overnight stay in Sagar."
      },
      {
        title: "Day 9: Sagar Village to Rudranath (4th Kedar)",
        details: "An 18km strenuous trek through the beautiful Pitradhar ridge. Reach Rudranath, where the 'Ekanan' (face) of Lord Shiva is worshipped. Overnight stay in basic camps."
      },
      {
        title: "Day 10: Rudranath to Mandal/Helang",
        details: "Trek back down to Sagar/Mandal. The descent is long but scenic through rhododendron forests. Drive to Helang. Overnight stay."
      },
      {
        title: "Day 11: Helang to Kalpeshwar (5th Kedar) & Rudraprayag",
        details: "Drive and walk a short distance to reach Kalpeshwar, the only Kedar open year-round. After Darshan, begin the return journey. Overnight stay in Rudraprayag."
      },
      {
        title: "Day 12: Rudraprayag to Delhi",
        details: "A long final drive back to Delhi via Rishikesh. Reach the capital by late night for final drop-off at your location."
      }
    ]
},
  {
    slug: "kartik-swami-temple",
    profession: "Kartik swami Temple",
    price: "12,000 / Person",
    duration: "5 Days - 4 Night",
    route: "Delhi - Kartik Swami - Delhi",
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
    duration: "3 Days - 2 Night",
    route: "Delhi - Patal Bhuvneshwar - Delhi",
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
    slug: "jageshwar-dham-kasardevi-spiritual-loop",
    profession: "Jageshwar & Kasar Devi",
    price: " 6,800 / Person",
    duration: "2 Days / 1 Night",
    route: "Delhi ⇄ Dolas Ashram ⇄ Jageshwar Dham ⇄ Kasar Devi",
    imgSrc: "/images/wework/Jageshwar.avif",
    overview:
      "A powerful 2-day spiritual journey from Delhi to the heart of Kumaon. Witness the ancient stone temples of Jageshwar Dham hidden in deep cedar forests, meditate at the high-energy magnetic ridge of Kasar Devi, and find architectural peace at the grand Dolas Ashram.",
    inclusions: [
      "1 Night accommodation in Jageshwar or Almora (Standard/Deluxe)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Sedan/SUV for Delhi to Delhi transfers",
      "Visits to Jageshwar Dham, Dolas Ashram, and Kasar Devi",
      "All Tolls, State Taxes, Fuel, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day refreshments",
      "Personal offerings or specialized Puja services",
      "Anything not mentioned in the inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Delhi to Dolas Ashram & Jageshwar Dham",
        details:
          "Early morning departure (4:00 AM) from Delhi to maximize your time. Drive through the plains into the Kumaon hills. Your first stop is the magnificent Dolas Ashram (Kalyanika), famous for its grand meditative architecture. Later, drive deep into the cedar forests to reach Jageshwar Dham. Attend the evening Aarti at the ancient temple cluster. Overnight stay in Jageshwar/Almora."
      },
      {
        title: "Day 2: Kasar Devi Sunrise & Return to Delhi",
        details:
          "Start your day at Kasar Devi Temple—a world-renowned site for its high electromagnetic energy and peaceful vibes. Visit the 'Crank's Ridge' for panoramic Himalayan views. After a quick stop at the Chitai Golu Devta (Temple of Bells), begin your return journey. Drive back to Delhi, reaching the capital by late night (11:00 PM)."
      }
    ],
},
{
    slug: "jageshwar-bageshwar-kasardevi-circuit-kathgodam",
    profession: "Kumaon Spiritual & Heritage",
    price: "₹ 7,500 / Person",
    duration: "3 Days / 2 Nights",
    route: "Kathgodam ⇄ Dolas Ashram ⇄ Jageshwar ⇄ Bageshwar ⇄ Kasar Devi",
    imgSrc: "/images/wework/Jageshwar.avif",
    overview:
      "A soulful 3-day exploration of Kumaon starting from the foothills of Kathgodam. This journey connects the ancient 'Jyotirlinga' of Jageshwar Dham, the historic riverside temples of Bageshwar and Baijnath, and the high-energy magnetic ridge of Kasar Devi.",
    inclusions: [
      "2 Nights accommodation (1N Jageshwar/Almora, 1N Bageshwar/Kausani)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Vehicle for Kathgodam to Kathgodam transfers",
      "Sightseeing to Dolas Ashram, Jageshwar Dham, Bagnath Temple, and Kasar Devi",
      "Driver allowance, Fuel, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day refreshments",
      "Entry fees to museums or guide charges",
      "Personal offerings or specialized Puja services",
      "Anything not mentioned in the inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kathgodam to Dolas Ashram & Jageshwar Dham",
        details:
          "Pick up from Kathgodam Railway Station. Drive through the winding hills to Dolas Ashram (Kalyanika), an architectural marvel dedicated to meditation and Vedic learning. Later, proceed to the ancient cedar forests of Jageshwar Dham. Witness the evening Aarti at the 124-temple cluster. Overnight stay in Jageshwar or Almora."
      },
      {
        title: "Day 2: Jageshwar to Bageshwar & Baijnath Heritage",
        details:
          "After breakfast, drive to Bageshwar, situated at the holy confluence of the Saryu and Gomti rivers. Visit the historic Bagnath Temple. Continue to the 12th-century stone temple complex at Baijnath. Spend the evening soaking in the tranquil riverside atmosphere or exploring the local Kumaoni markets. Overnight stay in Bageshwar or Kausani."
      },
      {
        title: "Day 3: Kasar Devi Energy & Return to Kathgodam",
        details:
          "Drive back toward the Kasar Devi Ridge—a site world-renowned for its high electromagnetic energy and peace. Visit the 'Crank's Ridge' for panoramic Himalayan views and the nearby Chitai Golu Devta (Temple of Bells). Begin the descent to the plains, reaching Kathgodam Railway Station by evening (5:00 PM - 6:00 PM) for your return train."
      }
    ],
},
{
    slug: "mukteshwar-mahadev-retreat",
    profession: "Mukteshwar Mahadev",
    price: "₹ 6,500 / Person",
    duration: "3 Days / 2 Nights",
    route: "Kathgodam ⇄ Bhimtal ⇄ Mukteshwar ⇄ Kathgodam",
    imgSrc: "/images/wework/MukteshwarMahadev.jpg",
    overview:
      "A serene 3-day high-altitude escape starting from the gateway of Kumaon. Experience the ancient spiritual energy of the 350-year-old Mukteshwar Mahadev Temple, witness the dramatic 'Chauli Ki Jali' cliffs, and enjoy peaceful evenings by the emerald lakes of the Kumaon region.",
    inclusions: [
      "2 Nights accommodation in Mukteshwar (Standard/Deluxe)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Vehicle for Kathgodam to Kathgodam transfers",
      "Sightseeing to Mukteshwar Mahadev, Chauli Ki Jali, and Bhimtal",
      "Driver allowance, Fuel, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day snacks",
      "Adventure activities (Paragliding or Ziplining)",
      "Entry tickets to museums or orchards",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kathgodam to Mukteshwar via Bhimtal",
        details:
          "Pick up from Kathgodam Railway Station. Drive through the 'Lake District' of Kumaon. Stop at Bhimtal for a peaceful break by the lake. Continue the winding climb through oak and rhododendron forests to reach Mukteshwar ($2,171m$). Check-in and enjoy a golden sunset over the Nanda Devi range. Overnight stay in Mukteshwar."
      },
      {
        title: "Day 2: Mukteshwar Mahadev & Adventure Day",
        details:
          "After breakfast, visit the ancient Mukteshwar Mahadev Temple, a site dedicated to Lord Shiva. Explore the nearby 'Chauli Ki Jali'—famous for its dramatic cliffside views and natural rock formations. In the afternoon, visit the IVRI campus or indulge in adventure activities like rock climbing and rappelling. Spend the evening exploring local fruit orchards. Overnight stay in Mukteshwar."
      },
      {
        title: "Day 3: Kainchi Dham & Return to Kathgodam",
        details:
          "Enjoy a final morning view of the Himalayan peaks. Visit the Methodist Church (built in 1917) and the local handicraft center. Begin the descent toward Kathgodam, stopping at the Bhowali fruit market en route. Reach Kathgodam Railway Station by evening (4:00 PM - 5:00 PM) for your return journey."
      }
    ],
},
{
    slug: "dhari-devi-spiritual-confluence",
    profession: "Dhari Devi & Rudraprayag",
    price: "₹ 5,800 / Person",
    duration: "2 Days / 1 Night",
    route: "Rishikesh ⇄ Devprayag ⇄ Dhari Devi ⇄ Rudraprayag",
    imgSrc: "/images/wework/DhariDevi.webp",
    overview:
      "A profound 2-day spiritual journey to the guardian deity of the Himalayas. Witness the mystical Dhari Devi Temple standing amidst the Alaknanda waters, explore the ancient meditation caves of Koteshwar Mahadev, and stand at the holy confluences where the Ganga begins its journey.",
    inclusions: [
      "1 Night accommodation in Rudraprayag/Srinagar (Standard/Deluxe)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Vehicle for Rishikesh to Rishikesh transfers",
      "Visits to Dhari Devi, Koteshwar Mahadev, and Devprayag Sangam",
      "Driver allowance, Fuel, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day refreshments",
      "Personal offerings or specialized Puja services",
      "Anything not mentioned in the inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Rishikesh to Dhari Devi & Rudraprayag",
        details:
          "Pick up from Rishikesh. Drive along the Alaknanda river to reach the sacred Dhari Devi Temple. Experience the divine energy of the Mother Goddess, whose upper half is worshipped here. Later, continue to Rudraprayag to witness the confluence of Alaknanda and Mandakini rivers. Attend the evening Aarti by the river. Overnight stay in Rudraprayag."
      },
      {
        title: "Day 2: Koteshwar Mahadev & Devprayag Return",
        details:
          "After breakfast, visit the Koteshwar Mahadev Temple—an ancient cave on the riverbank where Lord Shiva meditated. Begin the return journey, stopping at Devprayag to witness the magnificent Sangam of Bhagirathi and Alaknanda. Visit the 10,000-year-old Raghunathji Temple before heading back to Rishikesh for evening drop-off."
      }
    ],
},
{
    slug: "nanda-devi-almora-heritage-tour",
    profession: "Nanda Devi Temple (Almora)",
    price: "₹ 5,500 / Person",
    duration: "2 Days / 1 Night",
    route: "Kathgodam ⇄ Almora ⇄ Kasar Devi",
    imgSrc: "/images/wework/nanda-devi-temple.jpeg",
    overview:
      "A deep dive into the cultural heart of Kumaon. This 2-day journey takes you to the historic Nanda Devi Temple in Almora, an architectural marvel of the Chand Dynasty, combined with the high-energy ridges of Kasar Devi and the ancient bells of Chitai Golu Devta.",
    inclusions: [
      "1 Night accommodation in Almora (Standard/Deluxe)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Vehicle for Kathgodam to Kathgodam transfers",
      "Visits to Nanda Devi Temple, Kasar Devi, and Chitai Golu Devta",
      "Driver allowance, Fuel, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day refreshments",
      "Entry fees to local museums",
      "Personal offerings or Puja samagri",
      "Anything not mentioned in the inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kathgodam to Almora Heritage Walk",
        details:
          "Pick up from Kathgodam. Drive through the winding hills to reach Almora, the cultural capital of Kumaon. Visit the 1000-year-old Nanda Devi Temple, famous for its intricate stone carvings and deep spiritual significance to the local hill folk. Spend the evening exploring the historic 200-year-old Lala Bazaar. Overnight stay in Almora."
      },
      {
        title: "Day 2: Kasar Devi Energy & Return to Kathgodam",
        details:
          "After breakfast, drive to the Kasar Devi Temple—a site world-renowned for its unique magnetic energy. Visit Crank's Ridge and the Bright End Corner for Himalayan views. On the way back, stop at the Chitai Golu Devta Temple to witness thousands of bells offered by devotees. Descend to Kathgodam for your evening train/bus departure."
      }
    ],
},
{
    slug: "surkanda-devi-tehri-mussoorie-tour",
    profession: "Surkunda Devi & Tehri Garhwal",
    price: "₹ 12,500 / Person",
    duration: "4 Days / 3 Nights",
    route: "Haridwar ⇄ Dhanaulti ⇄ Surkanda Devi ⇄ Tehri Lake ⇄ Mussoorie",
    imgSrc: "/images/wework/surkanda-devi-temple.jpeg",
    overview:
      "A breathtaking 4-day mountain escape through the 'Fruit Belt' of Garhwal. Witness the 360-degree Himalayan views from the sacred Surkanda Devi Temple, experience the adrenaline of water sports at the massive Tehri Lake, and wander through the mist-covered lanes of Mussoorie and Landour.",
    inclusions: [
      "3 Nights accommodation (1N Dhanaulti/Kanatal, 1N Tehri, 1N Mussoorie)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Vehicle for Haridwar to Haridwar transfers",
      "Visits to Surkanda Devi (via Ropeway/Trek), Tehri Dam, and Kempty Falls",
      "All Tolls, Fuel, and Parking charges",
    ],
    exclusions: [
      "Ropeway tickets for Surkanda Devi",
      "Water sports charges at Tehri Lake",
      "Lunch and personal refreshments",
      "Entry fees to Eco-Parks or Museums",
    ],
    itinerary: [
      {
        title: "Day 1: Haridwar to Dhanaulti / Kanatal",
        details:
          "Pick up from Haridwar. Drive uphill through the scenic Chamba-Mussoorie road. Reach the quiet hamlet of Dhanaulti. Visit the Eco-Park (Amber and Dhara) nestled among deodar trees. Spend a peaceful evening in the cold mountain air. Overnight stay in Dhanaulti or Kanatal."
      },
      {
        title: "Day 2: Surkanda Devi Darshan & Tehri Lake",
        details:
          "After breakfast, drive to Kaddukhal, the base for Surkanda Devi. Take the ropeway or a short 2km trek to the hilltop temple (2,756m). After Darshan, drive down to the massive Tehri Dam. Spend the afternoon enjoying boating or jet-skiing in the emerald-green Tehri Lake. Overnight stay at a floating hut or lakeside resort in Tehri."
      },
      {
        title: "Day 3: Tehri to Mussoorie (The Queen of Hills)",
        details:
          "Enjoy a sunrise over the lake and drive toward Mussoorie. Stop at the majestic Kempty Falls for a refreshing break. Reach Mussoorie by afternoon. Explore the famous Mall Road and visit Gun Hill via ropeway for a sunset view. Overnight stay in Mussoorie."
      },
      {
        title: "Day 4: Landour Exploration & Return to Haridwar",
        details:
          "Visit the quiet, colonial part of Mussoorie—Landour. Walk the 'Gol Chakkar,' visit St. Paul’s Church, and stop at Char Dukan for snacks. Begin the descent toward Haridwar, stopping at the Sahastradhara sulfur springs en route. Reach Haridwar Railway Station by evening for your return journey."
      }
    ],
},
{
    slug: "chitai-golu-ghodakhal-spiritual-tour",
    profession: "Chitai Golu & Ghodakhal Temple",
    price: "₹ 5,800 / Person",
    duration: "2 Days / 1 Night",
    route: "Kathgodam ⇄ Bhimtal ⇄ Bhowali ⇄ Almora ⇄ Kathgodam",
    imgSrc: "/images/wework/Chitai-Golu-Devta-Temple.jpg",
    overview:
      "A deep dive into the unique 'Justice Temples' of Kumaon. This 2-day circuit takes you from the bell-clad Ghodakhal Temple overlooking Bhimtal to the legendary Chitai Golu Devta in Almora. Experience the profound faith of the local people who offer thousands of brass bells to the God of Justice.",
    inclusions: [
      "1 Night accommodation in Almora or Bhimtal (Standard/Deluxe)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Vehicle for Kathgodam to Kathgodam transfers",
      "Visits to Chitai Golu Devta, Ghodakhal Temple, and Kasar Devi",
      "Driver allowance, Fuel, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day refreshments",
      "Boating charges at Bhimtal or Naukuchiatal",
      "Personal offerings or specialized Puja services",
      "Anything not mentioned in the inclusions",
    ],
    itinerary: [
      {
        title: "Day 1: Kathgodam to Ghodakhal & Almora",
        details:
          "Pick up from Kathgodam Railway Station. Drive uphill to the famous Ghodakhal Golu Devta Temple, situated on a hill overlooking the emerald Bhimtal Lake. Witness the thousands of bells and the Sainik School campus nearby. Later, continue the scenic drive to Almora. Reach the historic Chitai Golu Devta Temple, where devotees write letters to God seeking justice. Overnight stay in Almora."
      },
      {
        title: "Day 2: Kasar Devi Energy & Return via Bhimtal",
        details:
          "After breakfast, visit the Kasar Devi Temple—a site world-renowned for its unique magnetic energy and peaceful vibes. Enjoy the panoramic Himalayan views from the ridge. Begin the descent toward Kathgodam, stopping at the Bhowali fruit market and Bhimtal Lake for a peaceful break. Reach Kathgodam Railway Station by evening (5:00 PM - 6:00 PM) for your return journey."
      }
    ],
},
  // {
  //   slug: "kasar-devi-temple",
  //   profession: "Kasar Devi Temple",
  //   price: "4,000",
  //   duration: "1 Day",
  //   route: "Rishikesh - Kasar Devi - Rishikesh",
  //   imgSrc: "/images/wework/Kasardevi.jpeg",
  //   overview:
  //     "A spiritually calm and scenic hilltop visit to Kasar Devi, known for meditation seekers and quiet Himalayan views.",
  //   inclusions: [
  //     "Transport",
  //     "Driver charges",
  //     "Trip support",
  //   ],
  //   exclusions: [
  //     "Meals",
  //     "Personal purchases",
  //     "Temple offerings",
  //     "Anything not listed in inclusions",
  //   ],
  //   itinerary: [
  //     {
  //       title: "Day 1: Kasar Devi visit",
  //       details:
  //         "Drive to Kasar Devi Temple, spend time in the peaceful surroundings, and return after the visit.",
  //     },
  //   ],
  // },
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
    slug: "munsiyari-pithoragarh-nanda-devi-tour",
    profession: "Munsiyari & Pithoragarh",
    price: "₹ 14,500 / Person",
    duration: "4 Nights / 3 Days",
    route: "Kathgodam ⇄ Pithoragarh ⇄ Munsiyari ⇄ Kathgodam",
    imgSrc: "/images/wework/Nandadevitemple.avif",
    overview:
      "A breathtaking journey into the 'Saur Valley' and the snow-clad frontiers of Kumaon. Witness the sacred Nanda Devi Temple of Munsiyari against the backdrop of the Panchachuli peaks, explore the ancient forts of Pithoragarh, and experience the raw beauty of the Milam Valley gateway.",
    inclusions: [
      "4 Nights accommodation (1N Pithoragarh, 2N Munsiyari, 1N Almora/Chaukori)",
      "MAP Plan (Breakfast and Dinner at the hotel)",
      "Private AC Vehicle for Kathgodam to Kathgodam transfers",
      "Sightseeing in Pithoragarh, Munsiyari, and Birthi Falls",
      "All Tolls, Fuel, and Parking charges",
    ],
    exclusions: [
      "Lunch and mid-day snacks",
      "Entry fees to museums or Pithoragarh Fort",
      "Personal trekking guides for Khaliya Top",
      "Anything not mentioned in the inclusions",
    ],
    itinerary: [
      {
        title: "Night 1 & Day 1: Kathgodam to Pithoragarh (The Saur Valley)",
        details:
          "Arrival in Kathgodam. Begin the long scenic drive to Pithoragarh. Visit the Pithoragarh Fort (London Fort) and the ancient Chandak Hill for a bird's-eye view of the valley. Visit the Mostamanu Temple if time permits. Overnight stay in Pithoragarh."
      },
      {
        title: "Day 2: Pithoragarh to Munsiyari via Birthi Falls",
        details:
          "After breakfast, drive toward Munsiyari. En route, stop at the magnificent Birthi Falls—a 126m high waterfall. Reach Munsiyari ($2,200m$) by afternoon. Visit the Nanda Devi Temple, famous for its grand architecture and the stunning view of the 5 peaks of Panchachuli. Overnight stay in Munsiyari."
      },
      {
        title: "Day 3: Munsiyari Local & Khaliya Top Base",
        details:
          "Spend the morning at the Tribal Heritage Museum to learn about the Shauka culture. Drive to the base of Khaliya Top for a short nature walk. Visit the Maheshwari Kund and Darkot Village (famous for Pashmina weaving). Spend a peaceful evening watching the sunset over the Himalayas. Overnight stay in Munsiyari."
      },
      {
        title: "Day 4: Munsiyari to Chaukori / Almora & Return",
        details:
          "Early morning departure. Drive toward Chaukori to see the wide Himalayan range. Continue the descent toward Kathgodam, passing through the pine forests of Almora. Reach Kathgodam Railway Station by late evening (8:00 PM - 9:00 PM) for your return journey."
      }
    ],
},
];

export const getSpiritualPlaceBySlug = (slug: string) =>
  SPIRITUAL_PLACES.find((place) => place.slug === slug);
