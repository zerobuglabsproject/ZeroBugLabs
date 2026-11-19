import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Capabilities from '@/components/Capabilities';

export const metadata: Metadata = {
  title: 'Engineering & Software QA Services | ZeroBugLabs',
  description:
    'Full-service web development, mobile app engineering, manual QA, API validation, game testing, and test automation (Selenium, Playwright, Cypress) for US and global teams.',
  alternates: {
    canonical: 'https://zerobuglabs.com/services',
  },
  openGraph: {
    title: 'Software Development & QA Services | ZeroBugLabs',
    description:
      'Web and mobile app engineering, manual QA, API validation, and test automation with Selenium, Playwright, and Cypress.',
    url: 'https://zerobuglabs.com/services',
    siteName: 'ZeroBugLabs',
    images: [
      {
        url: '/previews/desktop.png',
        width: 1200,
        height: 630,
        alt: 'ZeroBugLabs Services and Capabilities',
      },
    ],
  },
};

export default function ServicesPage() {
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
        name: 'Services',
        item: 'https://zerobuglabs.com/services',
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
        {/* Services Dedicated Hero */}
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
                <li style={{ fontSize: '14px', color: 'var(--color-3)', fontWeight: 600 }}>Services</li>
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
              Our Core Capabilities
            </span>

            <h1 className="m-text-3" style={{ maxWidth: '900px', marginBottom: '24px' }}>
              Built for speed.<br />Tested for perfection<span className="m-dot" aria-hidden="true"></span>
            </h1>

            <p className="m-text-5" style={{ maxWidth: '720px', color: 'var(--color-5)' }}>
              From custom React and Next.js applications to automated CI/CD regression suites and real mobile device audits, discover our 8 core engineering &amp; software QA capabilities.
            </p>
          </div>
        </section>

        {/* Capabilities Component */}
        <Capabilities />

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
              Ready to elevate your software quality?<span className="m-dot" aria-hidden="true"></span>
            </h2>
            <p
              className="m-text"
              style={{
                color: 'color-mix(in srgb, var(--color-2) 75%, transparent)',
                maxWidth: '580px',
                margin: '0 auto 32px',
              }}
            >
              Discuss your technology stack and testing goals with our lead engineering team.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="m-btn" href="/contact">
                <span className="m-btn__label">Discuss Your Project</span>
              </Link>
              <Link
                className="m-btn-2"
                href="/pricing"
                style={{ background: 'transparent', color: 'var(--color-2)', border: '1px solid color-mix(in srgb, var(--color-2) 20%, transparent)' }}
              >
                <span className="m-btn__label">View Pricing Plans</span>
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
