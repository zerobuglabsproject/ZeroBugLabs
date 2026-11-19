import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import QA_DATA from '@/data/qa-data';

export const viewport: Viewport = {
  themeColor: '#09080e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zerobuglabs.com'),
  title: {
    default: 'ZeroBugLabs — Web & Mobile App Development, QA & Test Automation',
    template: '%s | ZeroBugLabs',
  },
  description:
    'ZeroBugLabs is an engineering and software QA agency. We build modern responsive websites, native Android & iOS mobile apps, and engineer automated test suites with Selenium, Playwright, and Cypress.',
  keywords: [
    'ZeroBugLabs',
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
  authors: [{ name: 'ZeroBugLabs Team', url: 'https://zerobuglabs.com' }],
  creator: 'ZeroBugLabs',
  publisher: 'ZeroBugLabs',
  category: 'technology',
  alternates: {
    canonical: 'https://zerobuglabs.com',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://zerobuglabs.com',
    title: 'ZeroBugLabs — Web & Mobile App Development, QA & Test Automation',
    description:
      'We engineer modern responsive websites, native Android & iOS mobile apps, and help teams build dependable automated test suites and bug-free releases.',
    siteName: 'ZeroBugLabs',
    locale: 'en_US',
    images: [
      {
        url: '/previews/desktop.png',
        width: 1200,
        height: 630,
        alt: 'ZeroBugLabs Web & Mobile App Development, QA & Test Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeroBugLabs — Web & Mobile App Development, QA & Test Automation',
    description:
      'We engineer modern responsive websites, native Android & iOS mobile apps, and help teams build dependable automated test suites and bug-free releases.',
    images: ['/previews/desktop.png'],
    creator: '@zerobuglabs',
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
    name: 'ZeroBugLabs',
    url: 'https://zerobuglabs.com',
    logo: 'https://zerobuglabs.com/favicon.svg',
    image: 'https://zerobuglabs.com/previews/desktop.png',
    description:
      'Full-service web development, mobile app engineering, and software quality assurance agency providing custom web apps, native mobile apps, and automated QA test suites.',
    email: QA_DATA.agency.email,
    sameAs: [
      'https://www.instagram.com/contact.zerobuglabs/',
      'https://www.threads.com/@contact.zerobuglabs',
      'https://www.facebook.com/profile.php?id=61596914450357',
      'https://github.com/zerobuglabsproject',
    ],
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
    name: 'ZeroBugLabs',
    url: 'https://zerobuglabs.com',
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MLKFLBLV');
            `,
          }}
        />

        {/* Google Analytics (GA4 - G-8MS7SQRVX4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8MS7SQRVX4"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8MS7SQRVX4', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

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
      <body className="m-text">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLKFLBLV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
