import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export const metadata: Metadata = {
  title: 'Winter Treks — Kedarkantha, Tungnath, Brahmatal & More',
  description:
    'Winter treks in the Himalayas: Kedarkantha, Tungnath & Chandrashila, Kuari Pass, Brahmatal, Hamta Pass. Group departures and custom trails.',
  openGraph: {
    title: 'Winter Treks | Hi Hills',
    url: `${SITE_URL}/treks/winter`,
  },
  alternates: { canonical: `${SITE_URL}/treks/winter` },
};

export default function WinterTreksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
