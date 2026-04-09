"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { packagesData, type PackageLink } from "./packages-data";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Drawerdata: React.FC<Props> = ({ setIsOpen }) => {
  const [isPackagesOpen, setIsPackagesOpen] = React.useState(false);
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const handleNavClick = () => setIsOpen(false);

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  const renderPackageLinks = (items: PackageLink[]) =>
    items.map((item) => (
      <Link
        key={item.title}
        href={item.href}
        onClick={handleNavClick}
        className="group/item flex items-center justify-between rounded-2xl border border-transparent bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
      >
        <span className="pr-4">{item.title}</span>
        <span className="text-base text-slate-300 transition group-hover/item:translate-x-1 group-hover/item:text-orange-500">
          →
        </span>
      </Link>
    ));

  return (
    <div className="h-screen w-full max-w-sm overflow-y-auto bg-white">
      
      {/* NORMAL NAV LINKS */}
      <div className="space-y-2 px-5 pt-4">
        <Link href="#about-us" onClick={handleNavClick} className="block py-2 text-base font-medium text-slate-800">
          About Us
        </Link>
        <Link href="#services-section" onClick={handleNavClick} className="block py-2 text-base font-medium text-slate-800">
          Services
        </Link>
        <Link href="#faq-section" onClick={handleNavClick} className="block py-2 text-base font-medium text-slate-800">
          Why Choose Us?
        </Link>
        <Link href="#blog-section" onClick={handleNavClick} className="block py-2 text-base font-medium text-slate-800">
          Popular packages
        </Link>
        <Link href="#testimonial-section" onClick={handleNavClick} className="block py-2 text-base font-medium text-slate-800">
          Testimonial
        </Link>
      </div>

      {/* PACKAGES BUTTON */}
      <div className="mt-4 px-5">
        <button
          onClick={() => setIsPackagesOpen((s) => !s)}
          className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-slate-300 hover:bg-slate-50"
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-base font-semibold text-slate-900">Packages</span>
          </div>
          <span
            className={`text-sm text-slate-400 transition-transform ${
              isPackagesOpen ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>
      </div>

      {/* PACKAGES CONTENT */}
      {isPackagesOpen && (
        <div className="mt-4 space-y-4 px-4 pb-6">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.28)]">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-5">
              <div className="max-w-[220px]">
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
                    Curated Uttarakhand Journeys
                  </p>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Find your next escape by vibe or destination.
                </h3>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-2xl font-bold text-slate-900">
                  {packagesData.reduce((count, section) => count + section.items.length, 0)}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  Experiences
                </span>
              </div>
            </div>

            <div className="space-y-4 p-4">
              {packagesData.map((section) => (
                <div
                  key={section.title}
                  className={`overflow-hidden rounded-[24px] border border-slate-100 bg-gradient-to-b p-4 ${section.accent}`}
                >
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <div className="min-w-0">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                        {section.eyebrow}
                      </p>
                      <div className="mb-2 flex items-center gap-2">
                        <h4 className="text-lg font-bold tracking-tight text-slate-900">
                          {section.title}
                        </h4>
                        <span className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-500 shadow-sm ring-1 ring-slate-200">
                          {section.items.length} TOURS
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-500">
                        {section.description}
                      </p>
                    </div>

                    <span
                      className={`mt-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-500 shadow-sm transition-transform ${
                        openSection === section.title ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {openSection === section.title && (
                    <div className="space-y-1.5 pt-4">
                      {renderPackageLinks(section.items)}
                      <div className="pt-3">
                        <span className="text-[11px] font-bold text-orange-600 underline underline-offset-4">
                          View All {section.title}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTACT BUTTON */}
      <div className="px-5 pb-6">
        <button
          onClick={() => {
            window.dispatchEvent(new Event("openContactForm"));
            setIsOpen(false);
          }}
          className="w-full bg-black text-white py-3 rounded-xl font-medium"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Drawerdata;
