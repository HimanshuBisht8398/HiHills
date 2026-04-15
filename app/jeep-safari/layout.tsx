import { Metadata } from 'next';
import { SITE_URL } from '../lib/site-config';

export const metadata: Metadata = {
  title: 'Jeep Safari Packages — Corbett, Rajaji & More',
  description:
    'Book jeep safari packages: Jim Corbett, Rajaji National Park, Paldwani and overnight safaris. Safe, guided wildlife tours in Uttarakhand.',
  keywords: [
    'Jim Corbett jeep safari',
    'Rajaji National Park safari',
    'Corbett safari package',
    'Uttarakhand jeep safari',
  ],
  openGraph: {
    title: 'Jeep Safari Packages | Hi Hills',
    description: 'Book jeep safaris in Corbett, Rajaji and more. Guided wildlife tours.',
    url: `${SITE_URL}/jeep-safari`,
  },
  alternates: { canonical: `${SITE_URL}/jeep-safari` },
};

export default function JeepSafariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
