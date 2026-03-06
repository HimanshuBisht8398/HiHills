import Image from "next/image";

interface Props {
  params: { season: string };
}

export async function generateMetadata({ params }: Props) {
  const season = params.season;
  return { title: `${season} Treks — HI HILLS` };
}

export default function SeasonPage({ params }: Props) {
  const { season } = params;

  const map: Record<
    string,
    {
      title: string;
      img?: string;
      intro: string[];
      itinerary: { day: string; details: string[] }[];
    }
  > = {
    winter: {
      title: "Kedarkantha Trek Complete Guide",
      img: "/images/wework/Kedarnath.jpg",
      intro: [
        "Our mission has always been to ensure that no trekker steps into the Himalayas without the right perspective. A journey to Kedarkantha is not just a checklist of summit photos or a walk through a winter wonderland; it is a serious commitment to the high-altitude outdoors. While its snow-draped pine forests and 360-degree Himalayan views are breathtaking, the mountain demands respect and readiness.",
        "This section serves as your definitive manual for the Kedarkantha Trek. We have distilled years of mountain experience into this guide—moving past the social media highlights to give you a clear, honest picture of the trail’s terrain, its unpredictable winter weather, and its physical requirements.",
        "We want you to be more than just a visitor to the Ton’s Valley—we want you to be a prepared, responsible trekker who understands the rhythm of the mountains. Whether it’s navigating the steep final ascent or practicing 'Leave No Trace' at the Juda Ka Talab campsite, this guide is designed to help you step onto the snow with confidence and purpose."
      ],
      itinerary: [
        {
          day: "Day 1: Pickup from Dehradun to Sankri Basecamp",
          details: [
            "Drive via Mussoorie, Purola, Mori",
            "Distance: 190 km | Duration: 8-9 hours",
            "Overnight stay at hotel",
          ],
        },
        {
          day: "Day 2: Trek from Sankri to Juda Ka Talab",
          details: [
            "Distance: 5 km | Trek time: 4-5 hours",
            "Altitude: 8,858 ft",
            "Overnight stay in camps",
          ],
        },
        {
          day: "Day 3: Trek to Kedarkantha Base Camp",
          details: [
            "Distance: 3 km | Trek time: 2-3 hours",
            "Altitude: 10,498 ft",
            "Overnight stay in camps",
          ],
        },
        {
          day: "Day 4: Summit Day and Return",
          details: [
            "Total trek distance: 11 km",
            "Summit altitude: 12,500 ft",
            "Trek down to Hargaon camp",
          ],
        },
        {
          day: "Day 5: Return to Dehradun",
          details: [
            "Distance: 4.5 km | Trek time: 2-3 hours",
            "Drive back to Dehradun",
          ],
        },
      ],
    },
  };

  const data = map[season] || map["winter"];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6">{data.title}</h1>

        {/* Red Divider */}
        <div className="w-32 h-1 bg-red-600 mb-8"></div>

        {/* Intro Paragraphs */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-12">
          {data.intro.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Image */}
        {data.img && (
          <div className="relative w-full h-80 rounded-xl overflow-hidden mb-12">
            <Image
              src={data.img}
              alt={data.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        {/* Short Itinerary Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">📍</span>
          <h2 className="text-2xl font-semibold">Short Itinerary</h2>
        </div>

        <div className="w-full h-[1px] bg-red-500 mb-10"></div>

        {/* Itinerary List */}
        <div className="space-y-10">
          {data.itinerary.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">
                {item.day}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}