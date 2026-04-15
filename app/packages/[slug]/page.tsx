import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Bus, Calendar, CheckCircle2, MapPin, Sparkles, XCircle } from "lucide-react";

import OpenContactButton from "@/app/components/Treks/OpenContactButton";
import {
  ensureCoreInclusions,
  getCoreInclusionHighlights,
} from "@/app/components/shared/inclusion-highlights";
import { SITE_NAME, SITE_URL } from "@/app/lib/site-config";
import { POPULAR_PACKAGES, getPopularPackageBySlug } from "../package-data";

type PackagePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return POPULAR_PACKAGES.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: PackagePageProps): Metadata {
  const item = getPopularPackageBySlug(params.slug);

  if (!item) {
    return {
      title: `Package Not Found | ${SITE_NAME}`,
    };
  }

  const packageName = item.heading.replace(/\.$/, "");
  const title = `${packageName} Package from Haridwar`;
  const description = `${item.overview} Duration: ${item.duration}. Route: ${item.route}.`;
  const url = `${SITE_URL}/packages/${item.slug}`;

  return {
    title,
    description,
    keywords: [
      packageName,
      `${packageName} package`,
      `${packageName} tour package`,
      "Uttarakhand tour packages",
      "Haridwar travel package",
      "Hi Hills Travels",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: item.imgSrc, alt: packageName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [item.imgSrc],
    },
  };
}

export default function PackagePage({ params }: PackagePageProps) {
  const item = getPopularPackageBySlug(params.slug);

  if (!item) notFound();

  const detailInclusions = ensureCoreInclusions(item.inclusions);
  const highlightBadges = getCoreInclusionHighlights(detailInclusions);

  return (
    <main className="bg-slate-50 pb-20">
      <section className="relative overflow-hidden bg-[#1A2B49] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_34%),linear-gradient(135deg,_rgba(249,115,22,0.18),_transparent_45%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-20">
          <div className="relative z-10">
            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-orange-200 transition hover:text-white">
              <ArrowLeft size={16} />
              Back to home
            </Link>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
              Popular Package
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">{item.heading}</h1>
            <p className="mt-4 text-lg text-slate-200">{item.heading2}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Price</p>
                <p className="mt-2 text-xl font-bold text-white">{item.price}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Duration</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.duration}</p>
              </div>
              {/* <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Route</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.route}</p>
              </div> */}
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Season</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.bestSeason.replace("Best Season: ", "")}</p>
              </div>
            </div>

            <div className="mt-8">
              <OpenContactButton
                destination={item.heading}
                label="Book This Package"
                className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              />
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative h-[280px] overflow-hidden rounded-[28px] border border-white/10 shadow-2xl md:h-full md:min-h-[440px]">
              <Image src={item.imgSrc} alt={item.heading} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-100 md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-100 p-3 text-orange-600">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Day-wise Itinerary</h2>
                <p className="text-sm text-slate-500">A simple day-by-day plan for this package.</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {item.itinerary.map((day, index) => (
                <div key={day.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-200 hover:bg-white">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1A2B49] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{day.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{day.details}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {highlightBadges.map((highlight) => (
                          <span
                            key={highlight.key}
                            className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700"
                          >
                            {highlight.label} Included
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-bold text-slate-900">Quick Info</h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <Calendar size={18} className="text-orange-500" />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin size={18} className="text-orange-500" />
                  <span>{item.route}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Calendar size={18} className="text-orange-500" />
                  <span>{item.bestSeason}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Bus size={18} className="text-orange-500" />
                  <span>Transport arranged as per itinerary</span>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {highlightBadges.map((highlight) => (
                  <span
                    key={highlight.key}
                    className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700"
                  >
                    {highlight.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={22} />
                <h2 className="text-xl font-bold text-slate-900">Inclusions</h2>
              </div>
              <div className="mt-5 space-y-3">
                {detailInclusions.map((inc) => (
                  <div key={inc} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-600" />
                    <span className="capitalize">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <XCircle className="text-rose-500" size={22} />
                <h2 className="text-xl font-bold text-slate-900">Exclusions</h2>
              </div>
              <div className="mt-5 space-y-3">
                {item.exclusions.map((exc) => (
                  <div key={exc} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                    <XCircle size={18} className="mt-1 shrink-0 text-rose-500" />
                    <span className="capitalize">{exc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
