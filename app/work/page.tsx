import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Work from '@/components/Work';
import QA_DATA from '@/data/qa-data';

export const metadata: Metadata = {
  title: 'Selected Work & Web Development Portfolio | ZeroBugLabs',
  description:
    'Explore web platforms and custom applications engineered and tested by ZeroBugLabs. Built for speed, high conversion, responsive mobile viewports, and clean code.',
  alternates: {
    canonical: 'https://zerobuglabs.com/work',
  },
  openGraph: {
    title: 'Selected Work & Web Portfolio | ZeroBugLabs',
    description:
      'Explore live websites and web applications engineered, developed, and tested by ZeroBugLabs.',
    url: 'https://zerobuglabs.com/work',
    siteName: 'ZeroBugLabs',
    images: [
      {
        url: '/previews/desktop.png',
        width: 1200,
        height: 630,
        alt: 'ZeroBugLabs Selected Work',
      },
    ],
  },
};

export default function WorkPage() {
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
        name: 'Work',
        item: 'https://zerobuglabs.com/work',
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
        {/* Work Dedicated Hero */}
        <section
          style={{
            padding: 'clamp(120px, 16vh, 180px) var(--space-1) clamp(30px, 5vh, 60px)',
            background: 'var(--color-2)',
            borderBottom: '1px solid color-mix(in srgb, var(--color-1) 12%, transparent)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', padding: 0 }}>
                <li>
                  <Link href="/" className="m-link-2" style={{ fontSize: '14px', color: 'var(--color-5)' }}>
                    Home
                  </Link>
                </li>
                <li style={{ color: 'var(--color-5)', fontSize: '14px' }}>/</li>
                <li style={{ fontSize: '14px', color: 'var(--color-3)', fontWeight: 600 }}>Work</li>
              </ol>
            </nav>

            <span
              className="m-badge"
              style={{
                display: 'inline-block',
                marginBottom: '16px',
                background: 'color-mix(in srgb, var(--color-3) 14%, transparent)',
                color: 'var(--color-3)',
                padding: '6px 14px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Case Studies &amp; Portfolio
            </span>

            <h1 className="m-text-3" style={{ maxWidth: '900px', marginBottom: '24px' }}>
              Selected work.<br />Engineered for speed<span className="m-dot" aria-hidden="true"></span>
            </h1>

            <p className="m-text-5" style={{ maxWidth: '720px', color: 'var(--color-5)' }}>
              From custom healthcare portals to high-traffic news platforms and educational publishing networks, we engineer responsive web experiences with built-in QA excellence.
            </p>
          </div>
        </section>

        {/* Work Showcase */}
        <Work />

        {/* Bottom CTA */}
        <section
          style={{
            padding: 'clamp(60px, 8vh, 100px) var(--space-1)',
            background: 'var(--color-1)',
            color: 'var(--color-2)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="m-text-4" style={{ marginBottom: '16px', color: 'var(--color-2)' }}>
              Have a web project in mind?<span className="m-dot" aria-hidden="true"></span>
            </h2>
            <p
              className="m-text"
              style={{
                color: 'color-mix(in srgb, var(--color-2) 75%, transparent)',
                maxWidth: '580px',
                margin: '0 auto 32px',
              }}
            >
              Let's engineer a blazing fast website or web application tailored for your business goals.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="m-btn" href="/contact">
                <span className="m-btn__label">Discuss Your Project</span>
              </Link>
              <Link
                className="m-btn-2"
                href="/apps"
                style={{ background: 'transparent', color: 'var(--color-2)', border: '1px solid color-mix(in srgb, var(--color-2) 20%, transparent)' }}
              >
                <span className="m-btn__label">View Mobile Apps</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SmoothScroll />
    </>
  );
}
