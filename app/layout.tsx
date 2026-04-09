import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import WhatsappChatButton from './components/WhatsappChatButton';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hihills.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hi Hills — Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
    template: '%s | Hi Hills',
  },
  description:
    'Premier Haridwar-based travel agency for Uttarakhand tour packages, Char Dham Yatra, Himalayan treks, jeep safaris & handpicked stays. Expert-led, safe & customized itineraries.',
  keywords: [
    'Uttarakhand tours',
    'Char Dham Yatra',
    'Haridwar travel agency',
    'Himalayan treks',
    'Badrinath Kedarnath package',
    'winter treks India',
    'jeep safari Corbett',
    'Uttarakhand hotels',
    'Rishikesh adventure',
  ],
  authors: [{ name: 'Hi Hills', url: SITE_URL }],
  creator: 'Hi Hills',
  publisher: 'Hi Hills',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Hi Hills',
    title: 'Hi Hills — Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
    description:
      'Premier Haridwar-based travel agency for Uttarakhand tour packages, Char Dham Yatra, Himalayan treks, jeep safaris & handpicked stays.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Hi Hills — Uttarakhand Tours & Char Dham Yatra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hi Hills — Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
    description:
      'Premier Haridwar-based travel agency for Uttarakhand tours, Char Dham Yatra, treks & jeep safaris.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification IDs when you have them:
    // google: 'your-google-verification-id',
    // yandex: 'your-yandex-verification-id',
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'Travel',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Hi Hills',
      url: SITE_URL,
      description:
        'Premier Haridwar-based travel agency for Uttarakhand tour packages, Char Dham Yatra, Himalayan treks, jeep safaris and handpicked stays.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Haridwar',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Hi Hills',
      description: 'Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/treks?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1A2B49" />
        <meta name="geo.region" content="IN-UT" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:w-auto focus:h-auto focus:p-4 focus:m-0 focus:overflow-visible focus:bg-blue focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <Navbar />
        {children}
        <WhatsappChatButton />
        <Footer />
      </body>
    </html>
  );
}
