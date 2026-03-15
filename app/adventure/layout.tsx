import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export const metadata: Metadata = {
  title: 'Adventure Activities — Rafting, Trekking & Camping',
  description:
    'Adventure packages in Uttarakhand: river rafting Rishikesh, Chopta camping, Tungnath trek, Kedarkantha, rock climbing. Curated for all experience levels.',
  keywords: [
    'Rishikesh river rafting',
    'Chopta camping',
    'Tungnath trek',
    'Kedarkantha trek',
    'adventure activities Uttarakhand',
  ],
  openGraph: {
    title: 'Adventure Activities & Packages | Hi Hills',
    description: 'River rafting, trekking, camping and adventure packages in Uttarakhand.',
    url: `${SITE_URL}/adventure`,
  },
  alternates: { canonical: `${SITE_URL}/adventure` },
};

export default function AdventureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
