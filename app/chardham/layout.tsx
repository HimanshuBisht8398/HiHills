import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export const metadata: Metadata = {
  title: 'Char Dham Yatra & Do Dham Packages',
  description:
    'Book Char Dham Yatra (Badrinath, Kedarnath) and Do Dham packages. Helicopter options, fixed departures, and custom itineraries. Expert Haridwar-based travel agency.',
  keywords: [
    'Char Dham Yatra',
    'Badrinath Kedarnath package',
    'Do Dham helicopter',
    'Char Dham tour from Haridwar',
    'Kedarnath Badrinath tour',
  ],
  openGraph: {
    title: 'Char Dham Yatra & Do Dham Packages | Hi Hills',
    description:
      'Book Char Dham Yatra and Do Dham packages. Helicopter options and custom itineraries.',
    url: `${SITE_URL}/chardham`,
  },
  alternates: { canonical: `${SITE_URL}/chardham` },
};

export default function ChardhamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
