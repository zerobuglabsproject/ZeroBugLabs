import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us — Discuss Your Project | ZeroBugLabs',
  description:
    'Get in touch with ZeroBugLabs. Tell us about your web platform, mobile app, or QA testing priorities. Operating remotely across US time zones with 2-day reply guarantee.',
  alternates: {
    canonical: 'https://zerobuglabs.com/contact',
  },
  openGraph: {
    title: 'Contact ZeroBugLabs — Web Development & Software QA',
    description:
      'Discuss your project, testing scope, or release timeline. Direct email: contact.zerobuglabs@gmail.com.',
    url: 'https://zerobuglabs.com/contact',
    siteName: 'ZeroBugLabs',
    images: [
      {
        url: '/previews/desktop.png',
        width: 1200,
        height: 630,
        alt: 'Contact ZeroBugLabs',
      },
    ],
  },
};

export default function ContactPage() {
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
        name: 'Contact',
        item: 'https://zerobuglabs.com/contact',
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
        {/* Contact Dedicated Hero */}
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
                <li style={{ fontSize: '14px', color: 'var(--color-3)', fontWeight: 600 }}>Contact</li>
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
              Start the Conversation
            </span>

            <h1 className="m-text-3" style={{ maxWidth: '900px', marginBottom: '24px' }}>
              Let's build &amp; test<br />something great<span className="m-dot" aria-hidden="true"></span>
            </h1>

            <p className="m-text-5" style={{ maxWidth: '720px', color: 'var(--color-5)' }}>
              Tell us about your software application, testing priorities, or release timeline. We review every inquiry and reply within two business days.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />
      </main>
      <Footer />
      <SmoothScroll />
    </>
  );
}
