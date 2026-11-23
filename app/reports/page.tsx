import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import SampleReports from '@/components/SampleReports';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sample QA and Automation Reports | ZeroBugLabs',
  description:
    'Explore real anonymized QA bug reports and Cucumber BDD + Selenium automation test runs from ZeroBugLabs. Comprehensive security, API, functional, UI, and healthcare portal test findings.',
  alternates: {
    canonical: 'https://zerobuglabs.com/reports',
  },
  openGraph: {
    title: 'Sample QA and Automation Reports | ZeroBugLabs',
    description:
      'Download and review real sample QA and Cucumber + Selenium automation reports demonstrating how ZeroBugLabs catches, documents, and reports software defects.',
    url: 'https://zerobuglabs.com/reports',
    siteName: 'ZeroBugLabs',
    images: [
      {
        url: '/reports/sample-qa-report-thumb.png',
        width: 900,
        height: 506,
        alt: 'Sample QA and Automation Reports | ZeroBugLabs',
      },
    ],
  },
};

export default function ReportsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://zerobuglabs.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sample Reports',
        item: 'https://zerobuglabs.com/reports',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <a className="skip" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Breadcrumb Bar */}
        <section
          style={{
            padding: 'clamp(120px, 14vh, 160px) var(--space-1) clamp(24px, 4vh, 40px)',
            background: 'var(--color-2)',
            borderBottom: '1px solid color-mix(in srgb, var(--color-1) 12%, transparent)',
          }}
        >
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: '16px' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                  <Link href="/" className="m-link-2" style={{ fontSize: '14px', color: 'var(--color-5)' }}>
                    Home
                  </Link>
                </li>
                <li style={{ color: 'var(--color-5)', fontSize: '14px' }}>/</li>
                <li style={{ fontSize: '14px', color: 'var(--color-3)', fontWeight: 600 }}>Sample Reports</li>
              </ol>
            </nav>
            <h1 className="m-text-3" style={{ maxWidth: '900px', margin: '0 0 16px' }}>
              Sample QA &amp; Automation Reports<span className="m-dot" aria-hidden="true"></span>
            </h1>
            <p className="m-text-5" style={{ maxWidth: '720px', color: 'var(--color-5)', margin: 0 }}>
              Inspect our real bug documentation standard, severity criteria, steps to reproduce, and automated Cucumber BDD test suite reporting.
            </p>
          </div>
        </section>

        {/* The SampleReports showcase section */}
        <SampleReports />
      </main>
      <Footer />
      <SmoothScroll />
    </>
  );
}
