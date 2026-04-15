import dynamic from "next/dynamic";
import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";
import Dedicated from "./components/Dedicated/index";
import Digital from "./components/Digital/index";

const SpiritualPlacePage = dynamic(() => import("./components/SpritualYatra/page"), {
  loading: () => <SectionPlaceholder title="Loading spiritual journeys" />,
});
const Wework = dynamic(() => import("./components/Wework/index"), {
  loading: () => <SectionPlaceholder title="Loading featured places" />,
});
const Wintertrek = dynamic(() => import("./components/Wework/Wintertrek"), {
  loading: () => <SectionPlaceholder title="Loading seasonal treks" />,
});
const Adveture = dynamic(() => import("./components/Wework/Adveture"), {
  loading: () => <SectionPlaceholder title="Loading adventure trips" />,
});
const Ourteam = dynamic(() => import("./components/Ourteam/index"), {
  loading: () => <SectionPlaceholder title="Loading destinations" />,
});
const Articles = dynamic(() => import("./components/Articles/index"), {
  loading: () => <SectionPlaceholder title="Loading popular packages" />,
});
const FAQ = dynamic(() => import("./components/FAQ/index"), {
  loading: () => <SectionPlaceholder title="Loading FAQs" />,
});
const Testimonials = dynamic(() => import("./components/Testimonials/index"), {
  ssr: false,
  loading: () => <SectionPlaceholder title="Loading guest reviews" />,
});
const Insta = dynamic(() => import("./components/Insta/index"), {
  ssr: false,
  loading: () => <SectionPlaceholder title="Loading photo memories" />,
});

export const metadata = {
  title: "Uttarakhand Tours, Char Dham Yatra & Himalayan Treks",
  description:
    "Hi Hills — Premier Haridwar-based travel agency for Uttarakhand tour packages, Char Dham Yatra, Himalayan treks, jeep safaris & handpicked stays. Expert-led, safe & customized.",
};

function SectionPlaceholder({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="h-5 w-40 rounded-full bg-slate-200" />
        <div className="mt-4 h-10 max-w-xl rounded-2xl bg-slate-200" />
        <div className="mt-4 h-4 max-w-2xl rounded-full bg-slate-100" />
        <div className="mt-8 h-64 rounded-3xl bg-slate-100" />
        <p className="mt-6 text-sm font-medium text-slate-500">{title}</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <Digital />
      <Banner />
      <Aboutus />
      <Dedicated />

      <div className="homepage-deferred">
        <SpiritualPlacePage />
      </div>
      <div className="homepage-deferred">
        <Wework />
      </div>
      <div className="homepage-deferred">
        <Wintertrek />
      </div>
      <div className="homepage-deferred">
        <Adveture />
      </div>
      <div className="homepage-deferred">
        <Ourteam />
      </div>
      <div className="homepage-deferred">
        <Articles />
      </div>
      <div className="homepage-deferred">
        <FAQ />
      </div>
      <div className="homepage-deferred">
        <Testimonials />
      </div>
      <div className="homepage-deferred">
        <Insta />
      </div>
    </main>
  );
}
