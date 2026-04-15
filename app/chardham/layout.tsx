import { Metadata } from 'next';
import { SITE_URL } from '../lib/site-config';

export const metadata: Metadata = {
  title: 'Char Dham Yatra Packages from Haridwar',
  description:
    'Browse Char Dham and Do Dham Yatra packages from Haridwar with Hi Hills Travels, including Kedarnath, Badrinath, and helicopter options.',
  keywords: [
    'Char Dham Yatra',
    'Char Dham Yatra package from Haridwar',
    'Badrinath Kedarnath package',
    'Do Dham helicopter',
    'Char Dham tour from Haridwar',
    'Kedarnath Badrinath tour',
  ],
  openGraph: {
    title: 'Char Dham Yatra Packages from Haridwar | Hi Hills',
    description:
      'Browse Char Dham and Do Dham Yatra packages from Haridwar, including Kedarnath, Badrinath, and helicopter options.',
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
