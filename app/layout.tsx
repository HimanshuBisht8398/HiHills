import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import WhatsappChatButton from './components/WhatsappChatButton';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './lib/site-config';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hi Hills Travels - Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Hi Hills Travels offers Uttarakhand tour packages, Char Dham Yatra, Himalayan treks, spiritual journeys, jeep safaris, and handpicked stays from Haridwar.',
  keywords: [
    'Hi Hills Travels',
    'Hi Hills travel agency',
    'Uttarakhand tour packages',
    'Char Dham Yatra package',
    'Chardham yatra from Haridwar',
    'Kedarnath package',
    'Badrinath package',
    'Do Dham yatra package',
    'Himalayan treks in Uttarakhand',
    'Rishikesh adventure packages',
  ],
  authors: [{ name: 'Hi Hills', url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Hi Hills Travels - Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
    description:
      'Book Uttarakhand tour packages, Char Dham Yatra, treks, spiritual journeys, and adventure trips with Hi Hills Travels.',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: 'Hi Hills Travels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hi Hills Travels - Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
    description:
      'Book Uttarakhand tours, Char Dham Yatra, treks, and adventure packages with Hi Hills Travels.',
    images: [DEFAULT_OG_IMAGE],
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
      name: SITE_NAME,
      url: SITE_URL,
      description:
        'Haridwar-based travel company for Uttarakhand tour packages, Char Dham Yatra, treks, jeep safaris, and spiritual journeys.',
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
      name: SITE_NAME,
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
