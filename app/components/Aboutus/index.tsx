import Image from "next/image";
import Link from "next/link";

type ServiceCard = {
  heading: string;
  imgSrc: string;
  paragraph: string;
  href: string;
  cta: string;
};

const services: ServiceCard[] = [
  {
    heading: "Cab Services",
    imgSrc: "/images/aboutus/Transportation.png",
    paragraph:
      "Reliable airport pickups, intercity travel and local transport planned for comfortable mountain travel.",
    href: "/cab-services",
    cta: "Explore cars",
  },
  {
    heading: "Adventure Activities",
    imgSrc: "/images/aboutus/Adventure.png",
    paragraph:
      "River rafting, hot air ballooning, boating and other guided experiences with safety in focus.",
    href: "/adventure",
    cta: "See adventures",
  },
  {
    heading: "Treks",
    imgSrc: "/images/aboutus/Trek.png",
    paragraph:
      "Season-based Himalayan treks with local guidance, clear itineraries and comfortable support.",
    href: "/treks",
    cta: "View treks",
  },
  {
    heading: "Hotel Booking",
    imgSrc: "/images/aboutus/Hotel.png",
    paragraph:
      "Handpicked stays across Uttarakhand for pilgrimages, family trips and short mountain breaks.",
    href: "/hotels",
    cta: "See stays",
  },
  {
    heading: "Jeep Safari",
    imgSrc: "/images/aboutus/Junglesafari.png",
    paragraph:
      "Wildlife and scenic safari bookings for travellers who want a more adventurous day in the hills.",
    href: "/jeep-safari",
    cta: "Book safari",
  },
  {
    heading: "Homestays",
    imgSrc: "/images/aboutus/HomeStay.png",
    paragraph:
      "Peaceful local stays that bring you closer to mountain life, slower travel and authentic hospitality.",
    href: "/homestays",
    cta: "See homestays",
  },
];

export default function Aboutus() {
  return (
    <section id="services-section" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1A2B49]">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Everything you need for a smooth Uttarakhand trip.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We trimmed the old auto-slider here so the page stays faster and your
            visitors can scan services immediately.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <Link
              key={item.heading}
              href={item.href}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#1A2B49] hover:shadow-xl"
            >
              <Image
                src={item.imgSrc}
                alt={item.heading}
                width={84}
                height={84}
                sizes="84px"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-900">{item.heading}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.paragraph}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-orange-600 transition group-hover:text-[#1A2B49]">
                {item.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
