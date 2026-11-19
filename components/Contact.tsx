'use client';

import { useState } from 'react';
import QA_DATA from '@/data/qa-data';

export default function Contact() {
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const company = (formData.get('company') as string)?.trim() || 'N/A';
    const topic = (formData.get('topic') as string) || 'Discuss Project';
    const appType = (formData.get('app_type') as string) || 'Custom Website';
    const framework = (formData.get('framework') as string) || 'Modern Web';
    const scope = (formData.get('scope') as string) || 'One-Time Trial';
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !message || !email.includes('@')) {
      setStatus({
        type: 'error',
        message: 'Please provide your name, a valid email, and details about your project needs.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const endpoint = QA_DATA.formConfig.formspreeEndpoint || `https://formsubmit.co/ajax/${QA_DATA.agency.email}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Full Name': name,
          'Work Email': email,
          'Company or Product': company,
          'What Can We Help With': topic,
          'Application Type': appType,
          'Preferred Framework / Tech': framework,
          'Expected Scope & Timeline': scope,
          'Project Details & Goals': message,
          _subject: `New Inquiry from ${name}${company !== 'N/A' ? ` (${company})` : ''} - ZeroBugLabs`,
          _replyto: email,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === 'true' || data?.success === true || response.status === 200)) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will review your inquiry and reply within two business days.'
        });
        form.reset();
      } else {
        throw new Error(data?.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus({
        type: 'error',
        message: `There was an issue sending your inquiry. Please email us directly at ${QA_DATA.agency.email}.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-8b-section="contact" aria-labelledby="contact-title">
      <h2 className="m-text-3 contact__title" id="contact-title" style={{ '--len': 10 } as React.CSSProperties}>
        <span className="contact__voice">Let's talk</span>
        <span className="m-dot" aria-hidden="true"></span>
      </h2>
      <div className="contact__grid">
        <div className="contact__info">
          <p className="m-text-5 contact__lead">
            Tell us about your application, testing priorities, or release timeline. We review every inquiry and reply within two business days.
          </p>
          <a className="contact__mail" href={`mailto:${QA_DATA.agency.email}`}>
            <span>{QA_DATA.agency.email}</span>
          </a>
          <div className="contact__places" style={{ marginTop: '20px' }}>
            <div>
              <p className="m-text-7" style={{ marginBottom: '6px' }}>US &amp; Global Remote</p>
              <p className="m-text" style={{ color: 'color-mix(in srgb, var(--color-2) 80%, transparent)', lineHeight: 1.5 }}>
                Operating with dedicated US time zone overlap (EST, CST, PST). Collaborating with US startups, engineering leaders, and global product teams.
              </p>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <div className="contact__pair">
            <label className="m-text-6">
              Full name
              <input className="m-field" name="name" type="text" autoComplete="name" placeholder="Alex Morgan" required />
            </label>
            <label className="m-text-6">
              Work email
              <input className="m-field" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required />
            </label>
          </div>
          <div className="contact__pair">
            <label className="m-text-6">
              Company or product
              <input className="m-field" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." />
            </label>
            <label className="m-text-6">
              What can we help with?
              <select className="m-field" name="topic" id="contact-topic" defaultValue="Discuss Project">
                <option value="Discuss Project">Discuss Your Project</option>
                <option value="Website Development">Custom Website &amp; Web Development</option>
                <option value="Mobile App Development">Mobile App Development (Android &amp; iOS)</option>
                <option value="Trial QA Plan ($149)">Trial QA Plan ($149)</option>
                <option value="Monthly Basic Plan">Monthly Basic Plan ($299 / $449)</option>
                <option value="Monthly Pro Plan">Monthly Pro Plan ($699 / $899)</option>
                <option value="Monthly Growth Plan">Monthly Growth Plan ($1,299 / $1,699)</option>
                <option value="Game Testing & Mechanics">Game Testing &amp; Mechanics Validation</option>
              </select>
            </label>
          </div>
          <div className="contact__pair">
            <label className="m-text-6">
              Application type
              <select className="m-field" name="app_type" defaultValue="Custom Website">
                <option value="Custom Website">Custom Business / Clinic / Portal Website</option>
                <option value="Web Application">Web Application / SaaS</option>
                <option value="Mobile App">Mobile App (iOS / Android)</option>
                <option value="Game (Mobile / Desktop / WebGL)">Game (Mobile / Desktop / WebGL)</option>
                <option value="API & Backend">API &amp; Backend Services</option>
                <option value="Cross-Platform">Cross-Platform</option>
              </select>
            </label>
            <label className="m-text-6">
              Preferred framework / tech
              <select className="m-field" name="framework" defaultValue="Full-Stack Web (React/Next.js/HTML/CSS)">
                <option value="Full-Stack Web (React/Next.js/HTML/CSS)">Modern Web (React / Next.js / HTML5 / CSS3)</option>
                <option value="Mobile (React Native/Flutter/Android/iOS)">Mobile (React Native / Flutter / Android Native)</option>
                <option value="Playwright">Playwright</option>
                <option value="Cypress">Cypress</option>
                <option value="Selenium">Selenium</option>
                <option value="Manual QA only">Manual QA only</option>
                <option value="Need guidance">Need guidance / Open to recommendations</option>
              </select>
            </label>
          </div>
          <div className="contact__pair">
            <label className="m-text-6" style={{ gridColumn: '1 / -1' }}>
              Expected scope &amp; timeline
              <select className="m-field" name="scope" defaultValue="One-Time Trial">
                <option value="One-Time Trial">One-Time Trial Assessment</option>
                <option value="Ongoing Monthly QA">Ongoing Monthly QA &amp; Regression</option>
                <option value="Pre-launch Sprint">Pre-launch Regression Sprint</option>
                <option value="Test Automation">Test Automation Implementation</option>
              </select>
            </label>
          </div>
          <label className="m-text-6">
            Project details &amp; goals
            <textarea 
              className="m-field" 
              name="message" 
              rows={3} 
              required 
              placeholder="Describe your product, current testing needs, or upcoming release timelines..."
            />
          </label>
          <div className="contact__actions">
            <button className="m-btn" type="submit" disabled={isSubmitting}>
              <span className="m-btn__label">{isSubmitting ? 'Sending...' : 'Send message'}</span>
            </button>
            {status.message && (
              <p 
                className="m-text contact__status" 
                role="status" 
                aria-live="polite"
                style={{ color: status.type === 'error' ? '#f87171' : '#34d399' }}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
