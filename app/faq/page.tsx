import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import QA_DATA from '@/data/qa-data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | ZeroBugLabs',
  description:
    'Frequently asked questions about ZeroBugLabs web & mobile app development, QA test automation (Selenium, Playwright, Cypress), US timezone overlap, pricing plans, and project deliverables.',
  alternates: {
    canonical: 'https://zerobuglabs.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | ZeroBugLabs',
    description:
      'Clear answers to questions about our software development, QA testing plans, US business hours overlap, deliverables, and automated testing.',
    url: 'https://zerobuglabs.com/faq',
    siteName: 'ZeroBugLabs',
    images: [
      {
        url: '/previews/desktop.png',
        width: 1200,
        height: 630,
        alt: 'ZeroBugLabs FAQ',
      },
    ],
  },
};

export default function FAQPage() {
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
        name: 'FAQ',
        item: 'https://zerobuglabs.com/faq',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <a className="skip" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* FAQ Dedicated Hero */}
        <section
          style={{
            padding: 'clamp(120px, 16vh, 180px) var(--space-1) clamp(40px, 6vh, 80px)',
            background: 'var(--color-2)',
            borderBottom: '1px solid color-mix(in srgb, var(--color-1) 12%, transparent)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', padding: 0 }}>
                <li>
                  <Link href="/" className="m-link-2" style={{ fontSize: '14px', color: 'var(--color-5)' }}>
                    Home
                  </Link>
                </li>
                <li style={{ color: 'var(--color-5)', fontSize: '14px' }}>/</li>
                <li style={{ fontSize: '14px', color: 'var(--color-3)', fontWeight: 600 }}>FAQ</li>
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
              Frequently Asked Questions
            </span>

            <h1 className="m-text-3" style={{ maxWidth: '900px', marginBottom: '24px' }}>
              Fair questions.<br />Honest answers<span className="m-dot" aria-hidden="true"></span>
            </h1>

            <p className="m-text-5" style={{ maxWidth: '720px', color: 'var(--color-5)' }}>
              Everything you need to know about our web &amp; mobile app engineering, software QA automation, US timezone collaboration, flat-rate pricing, and test deliverables.
            </p>
          </div>
        </section>

        {/* FAQ List Section */}
        <section id="faq" data-8b-section="faq" aria-labelledby="faq-title" style={{ borderTop: 0 }}>
          <div className="faq__head">
            <h2 className="m-text-4" id="faq-title">
              Common Questions<span className="m-dot" aria-hidden="true"></span>
            </h2>
            <p className="m-text faq__lead">
              Click on any topic to explore answers about scope, test coverage, retesting policies, and automated delivery.
            </p>
          </div>
          <div className="faq__list">
            {QA_DATA.faq.map((item, index) => (
              <details key={index} className="faq__item" open={index === 0}>
                <summary className="m-text-7">
                  {item.q}
                  <span className="faq__mark" aria-hidden="true"></span>
                </summary>
                <p className="m-text faq__answer">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
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
              Have a project or unique questions?
            </span>
            <h2 className="m-text-4" style={{ marginBottom: '16px', color: 'var(--color-2)' }}>
              Let's discuss your product &amp; QA goals<span className="m-dot" aria-hidden="true"></span>
            </h2>
            <p
              className="m-text"
              style={{
                color: 'color-mix(in srgb, var(--color-2) 75%, transparent)',
                maxWidth: '580px',
                margin: '0 auto 32px',
              }}
            >
              Whether you need dedicated QA engineers with US timezone overlap or custom web &amp; mobile development, we reply to all inquiries within two business days.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a className="m-btn" href="/#contact">
                <span className="m-btn__label">Discuss Your Project</span>
              </a>
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
