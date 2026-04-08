import React from "react";
import Link from "next/link";
import { packagesData } from "./packages-data";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#about-us', current: true },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'Why Choose Us?', href: '#faq-section', current: false },
    { name: 'Popular packages', href: '#blog-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    const [isPackagesOpen, setIsPackagesOpen] = React.useState(false);

    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                            <button
                                type="button"
                                onClick={() => setIsPackagesOpen((prev) => !prev)}
                                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-black transition hover:bg-slate-50"
                            >
                                <div>
                                    <p className="text-base font-medium">
                                        Packages
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-600">
                                        {packagesData.reduce((count, section) => count + section.items.length, 0)}
                                    </span>
                                    <span className={`text-sm text-slate-400 transition-transform duration-300 ${isPackagesOpen ? "rotate-180" : ""}`}>
                                        ▾
                                    </span>
                                </div>
                            </button>

                            {isPackagesOpen && (
                                <div className="space-y-3 border-t border-slate-200 bg-slate-50 p-4">
                                    {packagesData.map((section) => (
                                        <details
                                            key={section.title}
                                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                        >
                                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
                                                <div>
                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                                                        {section.eyebrow}
                                                    </p>
                                                    <p className="mt-1 text-sm font-semibold text-slate-900">
                                                        {section.title}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-600">
                                                        {section.items.length}
                                                    </span>
                                                    <span className="text-slate-300">+</span>
                                                </div>
                                            </summary>

                                            <div className="border-t border-slate-100 px-3 py-3">
                                                <p className="px-1 pb-3 text-xs leading-5 text-slate-500">
                                                    {section.description}
                                                </p>
                                                <div className="space-y-2">
                                                    {section.items.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                                                        >
                                                            <span className="pr-3">{item.title}</span>
                                                            <span className="text-slate-300">→</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="mt-4"></div>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
