import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export const metadata: Metadata = {
  title: 'Handpicked Stays — Hotels & Homestays in Uttarakhand',
  description:
    'Handpicked hotels and homestays: Nainital, Almora, Haridwar, Rishikesh, Kedarnath base. From luxury resorts to cozy mountain homestays.',
  keywords: [
    'hotels in Uttarakhand',
    'Nainital resorts',
    'Rishikesh riverside stay',
    'Kedarnath base hotel',
    'Almora homestay',
  ],
  openGraph: {
    title: 'Handpicked Stays in Uttarakhand | Hi Hills',
    description: 'Hotels and homestays across Nainital, Rishikesh, Haridwar and more.',
    url: `${SITE_URL}/hotels`,
  },
  alternates: { canonical: `${SITE_URL}/hotels` },
};

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
