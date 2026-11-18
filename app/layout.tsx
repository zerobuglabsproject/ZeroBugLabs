import type { Metadata, Viewport } from 'next';
import './globals.css';
import QA_DATA from '@/data/qa-data';

export const viewport: Viewport = {
  themeColor: '#09080e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://qabuglabs.com'),
  title: {
    default: 'QABugLabs — Web & Mobile App Development, QA & Test Automation',
    template: '%s | QABugLabs',
  },
  description:
    'QABugLabs is an engineering and software QA agency. We build modern responsive websites, native Android & iOS mobile apps, and engineer automated test suites with Selenium, Playwright, and Cypress.',
  keywords: [
    'QABugLabs',
    'software QA agency',
    'web development company',
    'mobile app development',
    'Android app development',
    'iOS app development',
    'QA test automation',
    'Selenium automation',
    'Playwright testing',
    'Cypress testing',
    'API testing services',
    'mobile application testing',
    'game QA testing',
    'cross-browser testing',
    'manual functional testing',
    'software testing agency',
    'QA consulting',
    'bug free software release',
  ],
  authors: [{ name: 'QABugLabs Team', url: 'https://qabuglabs.com' }],
  creator: 'QABugLabs',
  publisher: 'QABugLabs',
  category: 'technology',
  alternates: {
    canonical: 'https://qabuglabs.com',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://qabuglabs.com',
    title: 'QABugLabs — Web & Mobile App Development, QA & Test Automation',
    description:
      'We engineer modern responsive websites, native Android & iOS mobile apps, and help teams build dependable automated test suites and bug-free releases.',
    siteName: 'QABugLabs',
    locale: 'en_US',
    images: [
      {
        url: '/previews/desktop.png',
        width: 1200,
        height: 630,
        alt: 'QABugLabs Web & Mobile App Development, QA & Test Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QABugLabs — Web & Mobile App Development, QA & Test Automation',
    description:
      'We engineer modern responsive websites, native Android & iOS mobile apps, and help teams build dependable automated test suites and bug-free releases.',
    images: ['/previews/desktop.png'],
    creator: '@qabuglabs',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'QABugLabs',
    url: 'https://qabuglabs.com',
    logo: 'https://qabuglabs.com/favicon.svg',
    image: 'https://qabuglabs.com/previews/desktop.png',
    description:
      'Full-service web development, mobile app engineering, and software quality assurance agency providing custom web apps, native mobile apps, and automated QA test suites.',
    email: QA_DATA.agency.email,
    priceRange: '$149 - $1190',
    areaServed: 'Worldwide',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '6',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development & QA Services',
      itemListElement: QA_DATA.services.map((svc) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: svc.title,
          description: svc.description,
        },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: QA_DATA.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'QABugLabs',
    url: 'https://qabuglabs.com',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="m-text">{children}</body>
    </html>
  );
}
