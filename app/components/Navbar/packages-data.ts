export type PackageLink = {
  title: string
  href: string
}

export type PackageCategory = {
  title: string
  eyebrow: string
  description: string
  accent: string
  items: PackageLink[]
}

export const packagesData: PackageCategory[] = [
  {
    title: "Char Dham",
    eyebrow: "Spiritual Trails",
    description: "Pilgrimage journeys with classic dham routes and helicopter options.",
    accent: "from-amber-500/15 via-orange-500/10 to-white",
    items: [
      { title: "Char Dham Yatra 2026", href: "/spiritual-yatra/uttarakhand-char-dham-yatra" },
      { title: "Char Dham Yatra (9N)", href: "/spiritual-yatra/uttarakhand-char-dham-yatra" },
      { title: "Char Dham by Helicopter", href: "/chardham/badrinath-heli" },
      { title: "Do Dham Yatra (Badrinath–Kedarnath)", href: "/spiritual-yatra/do-dham/kedarnath-badrinath" },
      { title: "Do Dham by Helicopter", href: "/spiritual-yatra/do-dham/kedarnath-badrinath" },
      { title: "Panch Kedar Yatra", href: "/spiritual-yatra/panch-kedar" },
      { title: "Aadi Kailash & Om Paradham Yatra", href: "/spiritual-yatra/aadi-kailash-om-paradham" },
    ],
  },
  {
    title: "Tours",
    eyebrow: "Hill Escapes",
    description: "Short scenic getaways, safari plans, and family-friendly tours.",
    accent: "from-sky-500/15 via-cyan-500/10 to-white",
    items: [
      { title: "Jim Corbett Safari", href: "/adventure/jungle-safari-corbett" },
      { title: "Mussoorie Rishikesh Tour", href: "/districts/dehradun" },
      { title: "Best Nainital Kausani", href: "/districts/nainital" },
      { title: "Auli Tour Packages", href: "/adventure/skiing-auli" },
      { title: "Sri Badrinath Ji Yatra", href: "/packages/badrinath" },
      { title: "Sri Kedarnath Ji Yatra", href: "/packages/kedarnath" },
    ],
  },
  {
    title: "Treks",
    eyebrow: "Mountain Routes",
    description: "Popular Himalayan treks with nature views, temples, and bugyals.",
    accent: "from-emerald-500/15 via-lime-500/10 to-white",
    items: [
      { title: "Valley of Flowers", href: "/treks/valley-of-flowers" },
      { title: "Gomukh Trek", href: "/treks/gaumukh-tapovan" },
      { title: "Dayara Bugyal", href: "/treks/dayara-bugyal" },
      { title: "Dodital Trek", href: "/treks/dayara-bugyal" },
      { title: "Kunjapuri Trek", href: "/spiritual-places/rishikesh" },
      { title: "Chopta Trek", href: "/treks/tungnath" },
    ],
  },
]
