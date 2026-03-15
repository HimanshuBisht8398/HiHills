import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export const metadata: Metadata = {
  title: 'Treks by Season — Winter, Summer & Monsoon',
  description:
    'Himalayan treks by season: winter treks (Kedarkantha, Tungnath), summer and monsoon treks. Expert-led group departures and custom itineraries from Haridwar.',
  keywords: [
    'winter treks India',
    'Kedarkantha trek',
    'Tungnath Chandrashila',
    'summer treks Uttarakhand',
    'monsoon treks Himalayas',
  ],
  openGraph: {
    title: 'Treks by Season | Hi Hills',
    description: 'Winter, summer and monsoon Himalayan treks. Group departures and custom trips.',
    url: `${SITE_URL}/treks`,
  },
  alternates: { canonical: `${SITE_URL}/treks` },
};

export default function TreksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
