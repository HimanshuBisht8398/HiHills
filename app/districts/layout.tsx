import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export const metadata: Metadata = {
  title: 'District-wise Itineraries — Uttarakhand',
  description:
    'Explore Uttarakhand district by district: Dehradun, Nainital, Almora and more. Curated itineraries, day plans and things to do.',
  openGraph: {
    title: 'District-wise Itineraries | Hi Hills',
    url: `${SITE_URL}/districts`,
  },
  alternates: { canonical: `${SITE_URL}/districts` },
};

export default function DistrictsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
