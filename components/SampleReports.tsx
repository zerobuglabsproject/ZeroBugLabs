'use client';

import { useState, useEffect, useCallback } from 'react';

interface ReportItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  file: string;
  downloadFilename: string;
  thumbnail: string;
  thumbAlt: string;
  note?: string;
}

const REPORTS: ReportItem[] = [
  {
    id: 'sample-qa-report',
    title: 'Sample QA Report: Security, API, Functional and UI Testing',
    description:
      'Eight anonymized findings from real web and mobile QA work. Each finding includes severity, steps to reproduce, actual vs expected result, impact and recommended fix.',
    highlights: ['7 pages', '8 findings', '1 Critical, 2 High, 4 Medium, 1 Low'],
    tags: ['Security', 'API', 'Mobile', 'Manual Testing'],
    file: '/reports/ZeroBugLabs-Sample-QA-Report-Updated.pdf',
    downloadFilename: 'ZeroBugLabs-Sample-QA-Report.pdf',
    thumbnail: '/reports/sample-qa-report-thumb.png',
    thumbAlt: 'ZeroBugLabs Sample QA Report cover page showcasing Security, API, Functional and UI testing findings',
  },
  {
    id: 'healthcare-automation-report',
    title: 'Healthcare Automation Report: Cucumber BDD + Selenium',
    description:
      'A sample automation run on a healthcare patient portal. Includes pass/fail coverage by feature, 6 defects with screenshots, and the Cucumber scenario that caught each one.',
    highlights: ['10 pages', '48 scenarios', '6 defects', '83.3% pass rate'],
    tags: ['Automation', 'Cucumber', 'Selenium', 'Healthcare'],
    file: '/reports/ZeroBugLabs-Healthcare-Automation-Bug-Report.pdf',
    downloadFilename: 'ZeroBugLabs-Healthcare-Automation-Report.pdf',
    thumbnail: '/reports/healthcare-automation-report-thumb.png',
    thumbAlt: 'ZeroBugLabs Healthcare Automation Test Report cover page showcasing Cucumber BDD + Selenium WebDriver execution',
    note: 'Illustrative sample. Screenshots are mock-ups and all patient data is synthetic.',
  },
];

export default function SampleReports() {
  const [activeReport, setActiveReport] = useState<ReportItem | null>(null);

  const closeModal = useCallback(() => {
    setActiveReport(null);
  }, []);

  const handleView = (report: ReportItem) => {
    // On mobile devices, native iframe PDF embedding often fails; open directly in a new tab
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.open(report.file, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveReport(report);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeReport) {
        closeModal();
      }
    };
    if (activeReport) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeReport, closeModal]);

  return (
    <section id="reports" data-8b-section="reports" className="sample-reports-section" aria-labelledby="reports-title">
      <div className="reports-container">
        {/* Section Heading */}
        <div className="reports-head">
          <div className="reports-badge-wrap">
            <span className="reports-pill-accent">Case Deliverables</span>
          </div>
          <h2 className="reports-title" id="reports-title">
            Sample Reports<span className="m-dot" aria-hidden="true"></span>
          </h2>
          <p className="reports-subheading">
            See how we find, document and report bugs.
          </p>
        </div>

        {/* Reports Grid */}
        <div className="reports-grid">
          {REPORTS.map((report) => (
            <article key={report.id} className="report-card" aria-label={report.title}>
              {/* Thumbnail Container (Click to view without any intrusive popup) */}
              <div 
                className="report-thumb-wrap" 
                onClick={() => handleView(report)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleView(report);
                  }
                }}
                aria-label={`Open ${report.title}`}
              >
                <img
                  src={report.thumbnail}
                  alt={report.thumbAlt}
                  loading="lazy"
                  className="report-thumb"
                  width={1024}
                  height={715}
                />
              </div>

              {/* Card Content */}
              <div className="report-card-body">
                {/* Tags */}
                <div className="report-tags" aria-label="Tags">
                  {report.tags.map((tag) => (
                    <span key={tag} className="report-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="report-card-title">{report.title}</h3>

                {/* Description */}
                <p className="report-card-desc">{report.description}</p>

                {/* Highlights as small badges */}
                <div className="report-highlights" aria-label="Report highlights">
                  {report.highlights.map((item, idx) => (
                    <span key={idx} className="report-highlight-badge">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ color: '#10B981', flexShrink: 0 }}>
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>

                {/* Optional Note (Placed above actions so buttons always align at bottom) */}
                {report.note && (
                  <div className="report-card-note">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0, color: '#10B981', opacity: 0.9 }}>
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <span>{report.note}</span>
                  </div>
                )}

                {/* Buttons (Pinned cleanly to bottom) */}
                <div className="report-card-actions">
                  <button
                    type="button"
                    onClick={() => handleView(report)}
                    className="report-btn-primary"
                    aria-label={`View Report: ${report.title}`}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>View Report</span>
                  </button>

                  <a
                    href={report.file}
                    download={report.downloadFilename}
                    className="report-btn-secondary"
                    aria-label={`Download PDF: ${report.title}`}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call-to-Action Banner */}
        <div className="reports-cta-banner">
          <div className="reports-cta-content">
            <h3 className="reports-cta-title">Need a QA partner?</h3>
            <p className="reports-cta-text">
              From manual test execution to full Cucumber, Selenium &amp; Playwright automation suites, we help you ship zero-defect releases on time.
            </p>
          </div>
          <div className="reports-cta-actions">
            <a
              href="mailto:contact.zerobuglabs@gmail.com"
              className="reports-cta-btn"
              aria-label="Contact ZeroBugLabs via email"
            >
              Contact us
            </a>
            <a
              href="https://zerobuglabs.com/"
              className="reports-cta-link"
              aria-label="Visit ZeroBugLabs website"
            >
              https://zerobuglabs.com/
            </a>
          </div>
        </div>
      </div>

      {/* PDF Modal Viewer for Desktop */}
      {activeReport && (
        <div
          className="reports-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`PDF Viewer: ${activeReport.title}`}
          onClick={closeModal}
        >
          <div
            className="reports-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="reports-modal-header">
              <div className="reports-modal-title-wrap">
                <span className="reports-modal-badge">PDF Report</span>
                <h4 className="reports-modal-title">{activeReport.title}</h4>
              </div>
              <div className="reports-modal-header-actions">
                <a
                  href={activeReport.file}
                  download={activeReport.downloadFilename}
                  className="reports-modal-download-btn"
                  title="Download PDF"
                  aria-label="Download PDF"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download</span>
                </a>
                <a
                  href={activeReport.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reports-modal-newtab-btn"
                  title="Open in new tab"
                  aria-label="Open report in new tab"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="reports-modal-close-btn"
                  aria-label="Close PDF viewer (Esc)"
                  title="Close (Esc)"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body / Embedded PDF Viewer */}
            <div className="reports-modal-body">
              <iframe
                src={`${activeReport.file}#view=FitH`}
                title={activeReport.title}
                className="reports-modal-iframe"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Scoped CSS matching exact report branding */}
      <style jsx>{`
        .sample-reports-section {
          padding: clamp(60px, 10vh, 120px) var(--space-1);
          background: #0A111F;
          color: #FFFFFF;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 2;
        }

        .reports-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .reports-head {
          margin-bottom: clamp(36px, 6vw, 64px);
        }

        .reports-badge-wrap {
          margin-bottom: 14px;
        }

        .reports-pill-accent {
          display: inline-block;
          background: rgba(16, 185, 129, 0.12);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
        }

        .reports-title {
          font-family: var(--font-1);
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin: 0 0 16px;
        }

        .reports-subheading {
          font-family: var(--font-2);
          font-size: clamp(17px, 2.2vw, 22px);
          line-height: 1.5;
          color: #94A3B8;
          max-width: 680px;
          margin: 0;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(24px, 3.5vw, 40px);
          margin-bottom: clamp(48px, 7vw, 72px);
          align-items: stretch;
        }

        .report-card {
          background: #0d1527;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.28s ease,
                      box-shadow 0.28s ease;
        }

        .report-card:hover {
          transform: translateY(-5px);
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.7),
                      0 0 30px rgba(16, 185, 129, 0.12);
        }

        .report-thumb-wrap {
          position: relative;
          background: #0A1220;
          overflow: hidden;
          aspect-ratio: 16 / 9.5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
        }

        .report-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.35s ease, filter 0.35s ease;
        }

        .report-thumb-wrap:hover .report-thumb {
          transform: scale(1.02);
          filter: brightness(1.04);
        }

        .report-card-body {
          padding: clamp(24px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .report-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .report-tag-pill {
          display: inline-block;
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 999px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .report-card-title {
          font-family: var(--font-1);
          font-size: clamp(20px, 2.2vw, 24px);
          font-weight: 700;
          line-height: 1.25;
          color: #FFFFFF;
          margin: 0 0 14px;
        }

        .report-card-desc {
          font-family: var(--font-2);
          font-size: 15px;
          line-height: 1.6;
          color: #94A3B8;
          margin: 0 0 20px;
        }

        .report-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .report-highlight-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          color: #E2E8F0;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 8px;
          padding: 6px 11px;
          font-size: 12px;
          font-weight: 500;
        }

        .report-card-note {
          font-family: var(--font-2);
          font-size: 12px;
          line-height: 1.5;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .report-card-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: auto;
        }

        .report-btn-primary {
          flex: 1;
          min-width: 130px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #10B981;
          color: #0A111F;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          text-decoration: none;
        }

        .report-btn-primary:hover {
          background: #34D399;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);
        }

        .report-btn-primary:focus-visible {
          outline: 2px solid #10B981;
          outline-offset: 3px;
        }

        .report-btn-secondary {
          flex: 1;
          min-width: 130px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.18);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 20px;
          border-radius: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .report-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #10B981;
          color: #34D399;
        }

        .report-btn-secondary:focus-visible {
          outline: 2px solid #10B981;
          outline-offset: 3px;
        }

        /* CTA Banner */
        .reports-cta-banner {
          background: linear-gradient(135deg, #0e192e 0%, #0d1527 100%);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 24px;
          padding: clamp(28px, 4vw, 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
        }

        .reports-cta-content {
          max-width: 620px;
        }

        .reports-cta-title {
          font-family: var(--font-1);
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 10px;
        }

        .reports-cta-text {
          font-family: var(--font-2);
          font-size: 15px;
          line-height: 1.6;
          color: #94A3B8;
          margin: 0;
        }

        .reports-cta-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          flex-shrink: 0;
        }

        .reports-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #10B981;
          color: #0A111F;
          font-weight: 700;
          font-size: 15px;
          padding: 13px 28px;
          border-radius: 12px;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }

        .reports-cta-btn:hover {
          background: #34D399;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .reports-cta-btn:focus-visible {
          outline: 2px solid #10B981;
          outline-offset: 3px;
        }

        .reports-cta-link {
          font-family: var(--font-2);
          font-size: 13px;
          color: #94A3B8;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s ease;
        }

        .reports-cta-link:hover {
          color: #10B981;
        }

        /* Modal Viewer */
        .reports-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(5, 10, 20, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.2s ease;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .reports-modal-dialog {
          background: #0A111F;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          width: 100%;
          max-width: 1100px;
          height: 88vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8),
                      0 0 40px rgba(16, 185, 129, 0.15);
          animation: modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
          from {
            transform: translateY(20px) scale(0.98);
          }
          to {
            transform: translateY(0) scale(1);
          }
        }

        .reports-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: #0d1527;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 16px;
        }

        .reports-modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
        }

        .reports-modal-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 4px 8px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .reports-modal-title {
          font-family: var(--font-1);
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .reports-modal-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .reports-modal-download-btn,
        .reports-modal-newtab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          color: #E2E8F0;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .reports-modal-download-btn:hover,
        .reports-modal-newtab-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: #10B981;
          color: #10B981;
        }

        .reports-modal-close-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.1s;
        }

        .reports-modal-close-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #EF4444;
          border-color: rgba(239, 68, 68, 0.4);
        }

        .reports-modal-body {
          flex: 1;
          background: #080d17;
          position: relative;
        }

        .reports-modal-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: #0A111F;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .reports-grid {
            grid-template-columns: 1fr;
          }
          .reports-cta-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .reports-cta-actions {
            align-items: flex-start;
            width: 100%;
          }
          .reports-cta-btn {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .reports-modal-header {
            padding: 12px 16px;
          }
          .reports-modal-download-btn span,
          .reports-modal-newtab-btn span {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
