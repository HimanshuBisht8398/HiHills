"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

type Itinerary = {
  title: string;
  img?: string;
  days: string[];
  inclusions?: string[];
    highlights?: string[];
};

const ITINERARIES: Record<string, Itinerary> = {
  dehradun: {
    title: "Dehradun - The Ultimate Doon & Queen of Hills Itinerary",
    days: [
      "Day 1: Arrival & Heritage — Pickup from Dehradun Railway Station/Airport. Check-in and visit the Forest Research Institute (FRI) and Tapkeshwar Mahadev Temple. Evening at Mindrolling Monastery and local cafes.",
      "Day 2: Nature's Wonders — Explore Robber's Cave (Guchhupani) and the medicinal springs of Sahastradhara. Afternoon visit to Malsi Deer Park. Overnight stay in Dehradun.",
      "Day 3: Mussoorie Day Trip — Drive to Mussoorie. Visit Kempty Falls, Mussoorie Lake, and Gun Hill. Spend the evening walking the Mall Road before returning to Dehradun.",
      "Day 4: Offbeat & Departure — Visit Lacchiwala Nature Park for a morning dip and the Kalinga War Memorial. Drop-off at Dehradun Railway Station/Airport for your departure.",
    ],
    highlights: [
      "Explore the iconic Forest Research Institute campus",
      "Adventure at Robber’s Cave and Sahastradhara springs",
      "Full-day excursion to Mussoorie – Queen of Hills",
      "Visit Tapkeshwar Mahadev Temple",
      "Peaceful walk at Mindrolling Monastery",
      "Relaxation at Lacchiwala Nature Park"
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },

  nainital: {
    title: "Nainital - The Enchanting Lake District Experience",
    days: [
      "Day 1: Arrival & Lake Charms — Pickup from Kathgodam Railway Station or Pantnagar Airport. Drive to Nainital, check-in, and enjoy a peaceful boat ride on Naini Lake. Visit the sacred Naina Devi Temple and walk the Mall Road in the evening.",
      "Day 2: Peaks & Caves — Head to Snow View Point via the aerial ropeway for Himalayan vistas. Visit the Eco Cave Gardens, Tiffin Top (Dorothy's Seat), and the High Altitude Zoo. Overnight stay in Nainital.",
      "Day 3: The Lake Tour — A full-day excursion to the surrounding emerald lakes: Bhimtal (with its island cafe), Sattal (the cluster of seven lakes), and Naukuchiatal (the nine-cornered lake). Optional paragliding at Naukuchiatal.",
      "Day 4: Spiritual Departure — Visit the famous Kainchi Dham Ashram (Neem Karoli Baba). Enjoy some final shopping at the Tibetan Market before being dropped off at Kathgodam Railway Station or Pantnagar Airport for departure.",
    ],
    highlights: [
      "Boat ride on the scenic Naini Lake",
      "Visit sacred Naina Devi Temple",
      "Snow View Point ropeway Himalayan views",
      "Explore Bhimtal, Sattal & Naukuchiatal lakes",
      "Visit famous Kainchi Dham Ashram",
      "Shopping at Mall Road & Tibetan Market"
    ],
    inclusions: ["transport", "hotel", "meals", "sightseeing"]
  },

  almora: {
    title: "Almora - Cultural Heart & Spiritual Highs",
    days: [
      "Day 1: Arrival & The Cosmic Ridge — Pickup from Kathgodam Station/Pantnagar Airport. Drive to Almora and visit the famous Kasar Devi Temple, known for its unique magnetic energy. Spend the evening walking along Crank’s Ridge (Hippie Hill) for a panoramic Himalayan sunset.",
      "Day 2: The Temple of Bells & Ancient Art — Morning visit to Chitai Golu Devta Temple, where thousands of bells tell stories of justice. Later, explore the 200-year-old Lala Bazaar and the Govind Vallabh Pant Museum to see Kumaoni artifacts and history.",
      "Day 3: Heritage & Wildlife — Drive to the 9th-century Katarmal Sun Temple, the second most important sun temple in India. In the afternoon, head to Binsar Wildlife Sanctuary for a trek to Zero Point for 360-degree mountain views. Stay overnight in Binsar or Almora.",
      "Day 4: Jageshwar Dham & Departure — Visit the magnificent Jageshwar Dham, a cluster of 124 ancient stone temples nestled in a cedar forest. After exploring the museum here, drive back for your drop-off at Kathgodam Station/Pantnagar Airport."
    ],
    highlights: [
      "Visit Kasar Devi Temple – famous cosmic energy zone",
      "Explore Chitai Golu Devta Temple of bells",
      "Trek to Zero Point in Binsar Wildlife Sanctuary",
      "Explore 9th century Katarmal Sun Temple",
      "Visit ancient Jageshwar temple complex",
      "Shopping at heritage Lala Bazaar"
    ],
    inclusions: ["transport", "hotel", "meals", "guide"]
  },

  bageshwar: {
    title: "Bageshwar - The Sacred Confluence & Ancient Temples",
    days: [
      "Day 1: Arrival & The Tiger Lord — Pickup from Kathgodam Station/Pantnagar Airport. Drive to Bageshwar city. Visit the iconic Bagnath Temple at the confluence of Saryu and Gomti rivers. Evening at the Sangam Ghat to witness the Saryu Aarti.",
      "Day 2: Katyuri Heritage — Drive to the 9th-century Baijnath Temple complex, located in the beautiful Katyuri Valley. Explore the ancient stone shrines and feed the fish in the holy Gomti River. Afternoon visit to the nearby Gauri Udiyar cave temple.",
      "Day 3: Tea Gardens & Peaks — Visit Vijaypur (Bijepur) to stroll through its sprawling tea gardens established during the British era. Hike up to Kanda Peak or visit the local Kanda market and Kalika Devi Temple for panoramic views of Nanda Devi and Trishul peaks.",
      "Day 4: Spiritual Exploration & Departure — Visit the Chandika Devi Temple and the scenic Vijaypur village once more for souvenir shopping (Kumaoni organic tea). Final drop-off at Kathgodam Railway Station/Pantnagar Airport for your journey back."
    ],
    highlights: [
      "Visit Bagnath Temple at Saryu–Gomti confluence",
      "Explore Baijnath ancient temple complex",
      "Scenic tea gardens of Vijaypur",
      "Panoramic views of Nanda Devi & Trishul peaks",
      "Spiritual experience at Chandika Devi Temple",
      "Explore caves at Gauri Udiyar Temple"
    ],
    inclusions: ["transport", "hotel", "meals", "trekking"]
  },

  pithoragarh: {
    title: "Pithoragarh - Little Kashmir & The Gateway to Kailash",
    days: [
      "Day 1: Arrival & Historic Heights — Pickup from Tanakpur/Kathgodam. Drive to Pithoragarh town. Visit the historic Pithoragarh Fort (London Fort) for a glimpse into Gorkha history and enjoy the sunset from Chandak Hill, offering a 360-degree view of the Soar Valley.",
      "Day 2: Munsiyari - The Land of Five Peaks — Drive to Munsiyari. Visit the Birthi Falls on the way. Once in Munsiyari, visit the Nanda Devi Temple and witness the breathtaking sunset over the Panchachuli Peaks.",
      "Day 3: Sacred Borders & Valleys — Explore the Askot Musk Deer Sanctuary or take a short trek to Thamri Kund. Visit the Jhulaghat suspension bridge at the Indo-Nepal border. Experience the local culture with a traditional Choliya dance performance in the evening.",
      "Day 4: Spiritual Echoes & Departure — Visit the Mostamanu Temple and Narayan Ashram if time permits. Shop for local hand-knotted carpets (Thulmas) before your final drop-off at Tanakpur/Kathgodam for departure."
    ],
    highlights: [
      "Visit historic Pithoragarh (London) Fort",
      "Sunset views from Chandak Hill",
      "Explore Munsiyari – gateway to Panchachuli peaks",
      "Scenic Birthi Falls stop",
      "Visit Indo-Nepal border at Jhulaghat",
      "Explore Askot Musk Deer Sanctuary"
    ],
    inclusions: ["transport", "hotel", "meals", "trekking"]
  },
  champawat: {
    title: "Champawat - The Land of Kurmavatar & Ancient Kings",
    img: "/images/districts/champawat.jpg",
    days: [
      "Day 1: Arrival & The Marvel of Stone — Pickup from Tanakpur Railway Station. Drive to Champawat. Visit the 10th-century Baleshwar Temple, famous for its intricate stone carvings. Evening at the ancient Nagnath Temple to witness local Kumaoni architecture.",
      "Day 2: Tea Estates & Spiritual Echoes — Visit the scenic Lohaghat town nearby. Explore the lush green tea gardens of Abbott Mount and visit the historic Advaita Ashrama (Mayavati Ashram) for a peaceful meditation session amidst cedar forests.",
      "Day 3: The Fortress & Hilltop Views — Explore the ruins of Banasur Ka Qila (Fort), offering a majestic view of the Himalayan peaks. Later, visit the Reetha Sahib Gurudwara, a major pilgrimage site famous for its 'sweet reethas' (soapnuts).",
      "Day 4: Divine Confluence & Departure — Drive to the hilltop Kranteshwar Mahadev Temple for a final panoramic view of the district. Visit the local market for copper-ware souvenirs before being dropped off at Tanakpur Railway Station for your departure."
    ],
    highlights: [
      "Visit 10th-century Baleshwar Temple carvings",
      "Explore Abbott Mount & serene Mayavati Ashram",
      "Hike to the historic Banasur Ka Qila (Fort)",
      "Pilgrimage to Guru Nanak Reetha Sahib Gurudwara",
      "Panoramic views from Kranteshwar Mahadev Temple",
      "Explore the spiritual town of Lohaghat"
    ],
    inclusions: ["transport", "hotel", "meals", "guide"],
  },
  "udham-singh-nagar": {
    title: "Udham Singh Nagar - The Gateway to the Terai",
    img: "/images/districts/us-nagar.jpg",
    days: [
      "Day 1: Arrival & Spiritual Serenity — Pickup from Pantnagar Airport or Rudrapur Railway Station. Drive to Nanakmatta and visit the magnificent Gurudwara Nanakmatta Sahib and the nearby Nanak Sagar Dam for sunset views. Overnight stay in Rudrapur.",
      "Day 2: Historical Ruins & Sacred Lakes — Head to Kashipur to explore the ancient ruins of the Drona Sagar Lake, believed to be associated with Guru Dronacharya. Visit the Chaiti Devi Temple, a major Shakti Peeth, and the remains of the old Kashipur Fort.",
      "Day 3: Agricultural Wonders & Greenery — Visit the G.B. Pant University of Agriculture & Technology in Pantnagar, the birthplace of the Green Revolution in India. Explore the vast experimental farms and the scenic Giri Sarovar lake for a relaxing afternoon picnic.",
      "Day 4: Local Markets & Departure — Spend the morning shopping for high-quality local grains and handicrafts in the Rudrapur market. Visit the Atariya Temple before your final drop-off at Pantnagar Airport or Rudrapur Railway Station for departure."
    ],
    highlights: [
      "Visit the holy Gurudwara Shri Nanakmatta Sahib",
      "Explore the ancient Drona Sagar Lake ruins",
      "Boating and sunset at Nanak Sagar Dam",
      "Visit the historic Chaiti Devi Temple Shakti Peeth",
      "Tour of the prestigious Pantnagar University farms",
      "Relaxation at the scenic Giri Sarovar lake"
    ],
    inclusions: ["transport", "hotel", "meals", "sightseeing"],
  },
  haridwar: {
    title: "Haridwar - The Gateway to the Gods",
    img: "/images/districts/haridwar.jpg",
    days: [
      "Day 1: Arrival & The Holy Dip — Pickup from Haridwar Railway Station or Jolly Grant Airport. Check-in and head to Har Ki Pauri. Take a holy dip in the Ganges and witness the world-famous evening Ganga Aarti. Explore the local Bara Bazaar for traditional souvenirs.",
      "Day 2: Hilltop Temples & Ropeways — Take the 'Udan Khatola' (ropeway) to Mansa Devi Temple and Chandi Devi Temple on the opposite hill. Visit the Maya Devi Temple and the Daksh Mahadev Temple in Kankhal, rich with mythological history.",
      "Day 3: Ashrams & Spiritual Learning — Spend the morning at Shanti Kunj Ashram, a center for spiritual and social awakening. Later, visit Bharat Mata Mandir, a unique multi-storey temple dedicated to Mother India, and the Patanjali Yogpeeth for an insight into Ayurveda.",
      "Day 4: Wildlife & Departure — Morning safari at Chilla Range (Rajaji National Park) to spot wild elephants. Visit the Bhimgoda Barrage for a scenic view before your final drop-off at Haridwar Railway Station or Jolly Grant Airport."
    ],
    highlights: [
      "Witness the divine evening Ganga Aarti at Har Ki Pauri",
      "Ropeway rides to Mansa Devi and Chandi Devi Temples",
      "Explore the ancient Daksh Mahadev Temple in Kankhal",
      "Visit Shanti Kunj Ashram and Bharat Mata Mandir",
      "Nature safari at Rajaji National Park",
      "Spiritual tour of Patanjali Yogpeeth"
    ],
    inclusions: ["transport", "hotel", "meals", "sightseeing"],
  },
  chamoli: {
    title: "Chamoli - The Abode of Gods & Alpine Wonders",
    img: "/images/districts/chamoli.jpg",
    days: [
      "Day 1: Arrival & The Sacred Confluence — Pickup from Rishikesh/Haridwar. Drive to Joshimath, the winter seat of Badrinath. Visit the ancient Shankaracharya Math and Narsingh Temple. Evening drive to Badrinath and attend the divine evening Aarti at the main temple.",
      "Day 2: The Last Village & Holy Dips — Explore Mana, the last Indian village, and visit Vyas Gufa and the Bhim Pul. Take a holy dip in the Tapt Kund natural thermal springs. Spend the afternoon at the Shri Badarinath Dham exploring the temple architecture.",
      "Day 3: Ski Slopes & Himalayan Views — Head to Auli via the famous ropeway (cable car) from Joshimath. Enjoy a trek to Gorson Bugyal for 360-degree views of Nanda Devi and Trishul peaks. Visit the Auli artificial lake and enjoy the high-altitude mountain cafes.",
      "Day 4: Highest Shiva Temple & Departure — Drive to Chopta and trek to the 12,000 ft high Shri Tungnath Temple, the highest Shiva temple in the world. Witness the spectacular views from Chandrashila before your final drop-off at Rishikesh/Haridwar for departure."
    ],
    highlights: [
      "Darshan at the sacred Shri Badarinath Dham",
      "Ropeway ride to Auli - India's premier ski resort",
      "Visit Mana Village – the last village of India",
      "Trek to Tungnath, the world's highest Shiva temple",
      "Explore the ancient Shankaracharya Math in Joshimath",
      "Relax in the natural hot springs of Tapt Kund"
    ],
    inclusions: ["transport", "hotel", "meals", "trekking"],
  },
  uttarkashi: {
    title: "Uttarkashi - The Kashi of the North & Source of Ganga",
    img: "/images/districts/uttarkashi.jpg",
    days: [
      "Day 1: Arrival & Spiritual Core — Pickup from Dehradun/Rishikesh. Drive to Uttarkashi town. Visit the ancient Kashi Vishwanath Temple and the massive Shakti Temple (famous for its 6-meter high trident). Evening walk by the Bhagirathi River at the Ghats.",
      "Day 2: Gangotri & The Holy Source — A full-day excursion to Gangotri Dham. Visit the Harsil Valley on the way (often called the Mini Switzerland of India). Take a holy dip in the Bhagirathi and attend the Aarti at the Gangotri Temple before returning to Uttarkashi.",
      "Day 3: High Meadows & Bugyals — Head to Barsu village and embark on a short trek to Dayara Bugyal, one of the most breathtaking alpine meadows in Asia. Enjoy panoramic views of the Bandarpoonch and Kalanag peaks. Overnight stay in a local homestay or camp.",
      "Day 4: Lake Exploration & Departure — Visit the sacred Maneri Dam and the nearby Nachiketa Tal (a short forest trek). Explore the local Nehru Institute of Mountaineering (NIM) museum before your final drop-off at Dehradun/Rishikesh for departure."
    ],
    highlights: [
      "Visit the sacred Gangotri Dham - source of River Ganga",
      "Darshan at the ancient Kashi Vishwanath Temple",
      "Explore the scenic Harsil Valley & apple orchards",
      "Trek to the breathtaking Dayara Bugyal meadows",
      "Visit the historic Nehru Institute of Mountaineering",
      "Explore the unique Shakti Temple and its giant trident"
    ],
    inclusions: ["transport", "hotel", "meals", "trekking"],
  },
  pauri: {
    title: "Pauri - The Jewel of Garhwal & Scenic Vistas",
    img: "/images/districts/pauri.jpg",
    days: [
      "Day 1: Arrival & Sunset Ridges — Pickup from Kotdwar Railway Station or Jolly Grant Airport. Drive to Pauri town. Visit the Kandoliya Devta Temple and enjoy a breathtaking sunset from the Chaukhamba View Point, offering a 180-degree view of the snow-capped peaks.",
      "Day 2: Pine Forests & Quiet Trails — Drive to Khirsu, a tranquil hill station surrounded by dense Oak and Deodar forests. Explore the scenic nature trails and visit the ancient Jwalpa Devi Temple, a powerful Shakti Peeth located on the banks of the Nawalika River.",
      "Day 3: Heritage & High Peaks — Visit the historic Kyunkaleshwar Mahadev Temple, an 8th-century shrine dedicated to Lord Shiva. Spend the afternoon at Nag Devta Temple and the nearby organic tea gardens. Evening at leisure to enjoy the cool mountain breeze.",
      "Day 4: Spiritual Exploration & Departure — Visit the Siddhbali Temple in Kotdwar (on the way down), a famous shrine dedicated to Lord Hanuman. Explore the local Pauri market for authentic Garhwali spices before your final drop-off at Kotdwar Railway Station or Jolly Grant Airport."
    ],
    highlights: [
      "Panoramic 180-degree views from Chaukhamba View Point",
      "Explore the peaceful pine forests of Khirsu",
      "Visit the 8th-century Kyunkaleshwar Mahadev Temple",
      "Darshan at the sacred Jwalpa Devi & Siddhbali Temples",
      "Nature walks through Oak and Deodar groves",
      "Visit the hilltop Kandoliya Devta Temple"
    ],
    inclusions: ["transport", "hotel", "meals", "sightseeing"],
  },
  tehri: {
    title: "Tehri Garhwal - The Adventure & Spiritual Hub",
    img: "/images/districts/tehri.jpg",
    days: [
      "Day 1: Arrival & The Giant Dam — Pickup from Dehradun/Rishikesh. Drive to New Tehri. Spend the afternoon at the massive Tehri Dam reservoir. Enjoy water sports like jet skiing, banana boat rides, and paragliding over the emerald waters. Evening walk at the New Tehri market.",
      "Day 2: High Altitudes & Eco Parks — Drive to Dhanaulti. Visit the Amber and Dhara Eco Parks, famous for their lush deodar forests. Explore the 'Potato Farm' for sunset views and enjoy the peaceful, misty atmosphere of this high-altitude ridge.",
      "Day 3: Shrines in the Clouds — Embark on a morning trek to the Surkanda Devi Temple (located at 9,000+ ft), accessible by a scenic ropeway or a short hike. Later, visit the quiet hamlet of Kanatal for apple orchards and nature trails before returning to New Tehri.",
      "Day 4: Ancient Ruins & Departure — Visit the historic town of Chamba for local handicrafts. Explore the Old Tehri viewpoints (overlooking the submerged city) and the Dobra-Chanti Suspension Bridge (India's longest motorable bridge) before your final drop-off at Dehradun/Rishikesh."
    ],
    highlights: [
      "Water sports and boating at the massive Tehri Dam",
      "Ropeway ride to the hilltop Surkanda Devi Temple",
      "Walk across the iconic Dobra-Chanti Suspension Bridge",
      "Explore the misty deodar forests of Dhanaulti Eco Park",
      "Panoramic Himalayan views from Kanatal and Chamba",
      "Experience New Tehri – India’s planned hill city"
    ],
    inclusions: ["transport", "hotel", "meals", "adventure"],
  },
  rudraprayag: {
    title: "Rudraprayag - The Confluence & The Sacred Peaks",
    img: "/images/districts/rudraprayag.jpg",
    days: [
      "Day 1: Arrival & The Holy Confluence — Pickup from Rishikesh/Haridwar. Drive to Rudraprayag town. Visit the Rudranath Temple at the Sangam (confluence) and explore the Koteshwar Mahadev Temple, an ancient cave shrine on the banks of the Alaknanda.",
      "Day 2: The Gateway to the Skies — Drive to Guptkashi. Visit the ancient Vishwanath Temple and Ardhnareshwar Temple. Later, drive to Kalimath, a powerful Shakti Peeth dedicated to Goddess Kali, nestled in a scenic valley.",
      "Day 3: The Kedarnath Pilgrimage — Embark on the 16km trek (or take a helicopter) from Gaurikund to Shri Kedarnath Jyotirlinga Temple. Attend the evening Aarti at the temple, one of the 12 Jyotirlingas, surrounded by the snowy Kedar massif.",
      "Day 4: High Meadows & Departure — Descend from Kedarnath to Gaurikund. On the way back, visit the Dhari Devi Temple (the guardian deity of the Char Dham) before your final drop-off at Rishikesh/Haridwar for departure."
    ],
    highlights: [
      "Darshan at the sacred Shri Kedarnath Jyotirlinga Temple",
      "Explore the ancient Koteshwar Mahadev cave temple",
      "Visit the powerful Shakti Peeth at Shree kalimata Temple Kalimath",
      "Witness the Sangam of Alaknanda and Mandakini rivers",
      "Visit the ancient Vishwanath Temple in Guptkashi",
      "Darshan at the guardian Dhari Devi Temple"
    ],
    inclusions: ["transport", "hotel", "meals", "trekking"],
  },
};

export default function DistrictItineraryPage() {
  const params = useParams() as { district?: string };
  const slug = (params?.district || "").toLowerCase();
  const data = ITINERARIES[slug];

  const openContact = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("openContactForm", { detail: { district: slug } })
      );
    }
  };

  if (!data) {
    return (
      <main className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-3xl font-bold mb-4">
          Itinerary not found for "{params?.district}"
        </h1>
        <button
          onClick={openContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Contact Us
        </button>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

      {/* HERO IMAGE */}
      <div className="relative h-[220px] w-full overflow-hidden">

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
            {data.title}
          </h1>

        </div>

      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">

        {/* DISTRICT NAME */}
        <p className="text-center text-gray-500 mb-12 text-lg capitalize">
          District: {slug.replace(/-/g, " ")}
        </p>
        {/* HIGHLIGHTS */}
{data.highlights && (
  <div className="mb-14">

    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Package Highlights
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">

      {data.highlights.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 bg-white border shadow-sm rounded-xl p-4"
        >
          <span className="text-blue-600 text-xl">✔</span>

          <p className="text-gray-700">{item}</p>

        </div>
      ))}

    </div>

  </div>
)}
        {/* INCLUSIONS */}
        {data.inclusions && (
<>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Package Inclusions
        </h2>

        {/* INCLUSIONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {data.inclusions.map((item) => (
            <div
              key={item}
              className="bg-white border shadow-md px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2"
            >
              {item === "transport" && <>🚗 Pickup & Drop</>}
              {item === "hotel" && <>🏨 3★ Hotel Stay</>}
              {item === "meals" && <>🍳 Breakfast Included</>}
              {item === "guide" && <>🧭 Local Guide</>}
            </div>
          ))}
        </div>
      </>
        )}

        {/* ITINERARY ACCORDION */}
        <div className="space-y-6">

          {data.days.map((text, idx) => (

            <Disclosure key={idx}>

              {({ open }) => (

                <div className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition">

                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5">

                    <span className="text-xl font-semibold text-gray-800">
                      Day {idx + 1}
                    </span>

                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180" : ""
                      } transition-transform duration-300 h-6 w-6 text-blue-600`}
                    />

                  </Disclosure.Button>

                  <Disclosure.Panel className="px-6 pb-6 text-gray-600 leading-relaxed">

                    {text}

                  </Disclosure.Panel>

                </div>

              )}

            </Disclosure>

          ))}

        </div>

        {/* BOOK BUTTON */}
        <div className="flex justify-center mt-16">

          <button
            onClick={openContact}
            className="bg-blue-600 hover:bg-blue-700  px-8 py-4 rounded-xl shadow-lg text-lg font-semibold"
          >
            Book This Itinerary
          </button>

        </div>

      </div>

    </main>
  );
}