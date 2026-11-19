import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Pricing from '@/components/Pricing';
import QA_DATA from '@/data/qa-data';

export const metadata: Metadata = {
  title: 'Plans & Pricing | Transparent QA & Development Rates | ZeroBugLabs',
  description:
    'Transparent starting rates in USD for manual testing, QA test automation, and web development. Choose a $149 trial or monthly retainers with US timezone alignment.',
  alternates: {
    canonical: 'https://zerobuglabs.com/pricing',
  },
  openGraph: {
    title: 'Plans & Pricing | ZeroBugLabs',
    description:
      'Predictable rates in USD for software QA testing and web/mobile engineering. 1-time trial audits and flexible monthly retainers.',
    url: 'https://zerobuglabs.com/pricing',
    siteName: 'ZeroBugLabs',
    images: [
      {
        url: '/previews/desktop.png',
        width: 1200,
        height: 630,
        alt: 'ZeroBugLabs Plans and Pricing',
      },
    ],
  },
};

export default function PricingPage() {
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
        name: 'Pricing',
        item: 'https://zerobuglabs.com/pricing',
      },
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Software QA Testing & Test Automation Retainer',
    description:
      'Manual, API, mobile, and automated testing services (Selenium, Playwright, Cypress) for US startups and engineering teams.',
    brand: {
      '@type': 'Brand',
      name: 'ZeroBugLabs',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '149',
      highPrice: '1699',
      offerCount: '4',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <a className="skip" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Pricing Dedicated Hero */}
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
                <li style={{ fontSize: '14px', color: 'var(--color-3)', fontWeight: 600 }}>Pricing</li>
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
              Predictable Flat-Rate Pricing
            </span>

            <h1 className="m-text-3" style={{ maxWidth: '900px', marginBottom: '24px' }}>
              Simple pricing.<br />No hidden fees<span className="m-dot" aria-hidden="true"></span>
            </h1>

            <p className="m-text-5" style={{ maxWidth: '720px', color: 'var(--color-5)' }}>
              Transparent starting rates in USD. Whether you need a quick $149 audit to test our quality or a dedicated monthly QA team with US timezone overlap, we have a plan built for you.
            </p>
          </div>
        </section>

        {/* Pricing Table Component */}
        <Pricing />

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
            <span
              style={{
                display: 'inline-block',
                marginBottom: '14px',
                color: 'var(--color-3)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Need a Custom Plan or Enterprise Scope?
            </span>
            <h2 className="m-text-4" style={{ marginBottom: '16px', color: 'var(--color-2)' }}>
              Let's build a plan tailored to your release cycle<span className="m-dot" aria-hidden="true"></span>
            </h2>
            <p
              className="m-text"
              style={{
                color: 'color-mix(in srgb, var(--color-2) 75%, transparent)',
                maxWidth: '580px',
                margin: '0 auto 32px',
              }}
            >
              Have multiple apps, complex CI/CD test automation pipelines, or need custom hourly bandwidth? We review all project scopes and provide clear quotes within 2 business days.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="m-btn" href="/contact">
                <span className="m-btn__label">Discuss Your Project</span>
              </Link>
              <a
                className="m-btn-2"
                href={`mailto:${QA_DATA.agency.email}`}
                style={{ background: 'transparent', color: 'var(--color-2)', border: '1px solid color-mix(in srgb, var(--color-2) 20%, transparent)' }}
              >
                <span className="m-btn__label">Email Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SmoothScroll />
    </>
  );
}
