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
    const phone = (formData.get('phone') as string)?.trim();
    const countryCode = (formData.get('country_code') as string) || '+1';
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

      const fullPhone = phone ? `${countryCode} ${phone}` : 'Not provided';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Full Name': name,
          'Work Email': email,
          'Phone Number': fullPhone,
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

      const isConfirmedSuccess =
        response.ok &&
        (data?.success === 'true' || data?.success === true || data?.ok === true);

      if (isConfirmedSuccess) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will review your inquiry and reply within two business days.'
        });

        // Trigger GA4 Conversion Event once via direct gtag.js after backend confirmation
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Lead Inquiry',
            event_label: topic,
            project_type: topic,
            app_type: appType,
            scope: scope
          });
        }

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
              Phone number <span style={{ opacity: 0.6, fontSize: '13px', fontWeight: 400 }}>(optional)</span>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <select
                  name="country_code"
                  className="m-field"
                  style={{
                    width: '130px',
                    flexShrink: 0,
                    cursor: 'pointer',
                    paddingRight: '6px'
                  }}
                  defaultValue="+1"
                  aria-label="Country calling code"
                >
                  <optgroup label="Popular" style={{ color: '#0d0c11', background: '#ffffff' }}>
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+1">🇨🇦 +1 (CA)</option>
                    <option value="+91">🇮🇳 +91 (IN)</option>
                    <option value="+61">🇦🇺 +61 (AU)</option>
                    <option value="+49">🇩🇪 +49 (DE)</option>
                    <option value="+33">🇫🇷 +33 (FR)</option>
                    <option value="+971">🇦🇪 +971 (AE)</option>
                    <option value="+65">🇸🇬 +65 (SG)</option>
                  </optgroup>
                  <optgroup label="All Countries (A-Z)" style={{ color: '#0d0c11', background: '#ffffff' }}>
                    <option value="+93">🇦🇫 +93 Afghanistan</option>
                    <option value="+355">🇦🇱 +355 Albania</option>
                    <option value="+213">🇩🇿 +213 Algeria</option>
                    <option value="+376">🇦🇩 +376 Andorra</option>
                    <option value="+244">🇦🇴 +244 Angola</option>
                    <option value="+54">🇦🇷 +54 Argentina</option>
                    <option value="+374">🇦🇲 +374 Armenia</option>
                    <option value="+61">🇦🇺 +61 Australia</option>
                    <option value="+43">🇦🇹 +43 Austria</option>
                    <option value="+994">🇦🇿 +994 Azerbaijan</option>
                    <option value="+973">🇧🇭 +973 Bahrain</option>
                    <option value="+880">🇧🇩 +880 Bangladesh</option>
                    <option value="+375">🇧🇾 +375 Belarus</option>
                    <option value="+32">🇧🇪 +32 Belgium</option>
                    <option value="+501">🇧🇿 +501 Belize</option>
                    <option value="+229">🇧🇯 +229 Benin</option>
                    <option value="+975">🇧🇹 +975 Bhutan</option>
                    <option value="+591">🇧🇴 +591 Bolivia</option>
                    <option value="+387">🇧🇦 +387 Bosnia</option>
                    <option value="+267">🇧🇼 +267 Botswana</option>
                    <option value="+55">🇧🇷 +55 Brazil</option>
                    <option value="+673">🇧🇳 +673 Brunei</option>
                    <option value="+359">🇧🇬 +359 Bulgaria</option>
                    <option value="+855">🇰🇭 +855 Cambodia</option>
                    <option value="+237">🇨🇲 +237 Cameroon</option>
                    <option value="+1">🇨🇦 +1 Canada</option>
                    <option value="+56">🇨🇱 +56 Chile</option>
                    <option value="+86">🇨🇳 +86 China</option>
                    <option value="+57">🇨🇴 +57 Colombia</option>
                    <option value="+506">🇨🇷 +506 Costa Rica</option>
                    <option value="+385">🇭🇷 +385 Croatia</option>
                    <option value="+357">🇨🇾 +357 Cyprus</option>
                    <option value="+420">🇨🇿 +420 Czechia</option>
                    <option value="+45">🇩🇰 +45 Denmark</option>
                    <option value="+1809">🇩🇴 +1-809 Dominican Rep.</option>
                    <option value="+593">🇪🇨 +593 Ecuador</option>
                    <option value="+20">🇪🇬 +20 Egypt</option>
                    <option value="+372">🇪🇪 +372 Estonia</option>
                    <option value="+251">🇪🇹 +251 Ethiopia</option>
                    <option value="+358">🇫🇮 +358 Finland</option>
                    <option value="+33">🇫🇷 +33 France</option>
                    <option value="+995">🇬🇪 +995 Georgia</option>
                    <option value="+49">🇩🇪 +49 Germany</option>
                    <option value="+233">🇬🇭 +233 Ghana</option>
                    <option value="+30">🇬🇷 +30 Greece</option>
                    <option value="+502">🇬🇹 +502 Guatemala</option>
                    <option value="+852">🇭🇰 +852 Hong Kong</option>
                    <option value="+36">🇭🇺 +36 Hungary</option>
                    <option value="+354">🇮🇸 +354 Iceland</option>
                    <option value="+91">🇮🇳 +91 India</option>
                    <option value="+62">🇮🇩 +62 Indonesia</option>
                    <option value="+964">🇮🇶 +964 Iraq</option>
                    <option value="+353">🇮🇪 +353 Ireland</option>
                    <option value="+972">🇮🇱 +972 Israel</option>
                    <option value="+39">🇮🇹 +39 Italy</option>
                    <option value="+1876">🇯🇲 +1-876 Jamaica</option>
                    <option value="+81">🇯🇵 +81 Japan</option>
                    <option value="+962">🇯🇴 +962 Jordan</option>
                    <option value="+7">🇰🇿 +7 Kazakhstan</option>
                    <option value="+254">🇰🇪 +254 Kenya</option>
                    <option value="+965">🇰🇼 +965 Kuwait</option>
                    <option value="+371">🇱🇻 +371 Latvia</option>
                    <option value="+961">🇱🇧 +961 Lebanon</option>
                    <option value="+370">🇱🇹 +370 Lithuania</option>
                    <option value="+352">🇱🇺 +352 Luxembourg</option>
                    <option value="+60">🇲🇾 +60 Malaysia</option>
                    <option value="+356">🇲🇹 +356 Malta</option>
                    <option value="+230">🇲🇺 +230 Mauritius</option>
                    <option value="+52">🇲🇽 +52 Mexico</option>
                    <option value="+373">🇲🇩 +373 Moldova</option>
                    <option value="+377">🇲🇨 +377 Monaco</option>
                    <option value="+976">🇲🇳 +976 Mongolia</option>
                    <option value="+212">🇲🇦 +212 Morocco</option>
                    <option value="+977">🇳🇵 +977 Nepal</option>
                    <option value="+31">🇳🇱 +31 Netherlands</option>
                    <option value="+64">🇳🇿 +64 New Zealand</option>
                    <option value="+234">🇳🇬 +234 Nigeria</option>
                    <option value="+47">🇳🇴 +47 Norway</option>
                    <option value="+968">🇴🇲 +968 Oman</option>
                    <option value="+92">🇵🇰 +92 Pakistan</option>
                    <option value="+507">🇵🇦 +507 Panama</option>
                    <option value="+595">🇵🇾 +595 Paraguay</option>
                    <option value="+51">🇵🇪 +51 Peru</option>
                    <option value="+63">🇵🇭 +63 Philippines</option>
                    <option value="+48">🇵🇱 +48 Poland</option>
                    <option value="+351">🇵🇹 +351 Portugal</option>
                    <option value="+974">🇶🇦 +974 Qatar</option>
                    <option value="+40">🇷🇴 +40 Romania</option>
                    <option value="+250">🇷🇼 +250 Rwanda</option>
                    <option value="+966">🇸🇦 +966 Saudi Arabia</option>
                    <option value="+381">🇷🇸 +381 Serbia</option>
                    <option value="+65">🇸🇬 +65 Singapore</option>
                    <option value="+421">🇸🇰 +421 Slovakia</option>
                    <option value="+386">🇸🇮 +386 Slovenia</option>
                    <option value="+27">🇿🇦 +27 South Africa</option>
                    <option value="+82">🇰🇷 +82 South Korea</option>
                    <option value="+34">🇪🇸 +34 Spain</option>
                    <option value="+94">🇱🇰 +94 Sri Lanka</option>
                    <option value="+46">🇸🇪 +46 Sweden</option>
                    <option value="+41">🇨🇭 +41 Switzerland</option>
                    <option value="+886">🇹🇼 +886 Taiwan</option>
                    <option value="+255">🇹🇿 +255 Tanzania</option>
                    <option value="+66">🇹🇭 +66 Thailand</option>
                    <option value="+216">🇹🇳 +216 Tunisia</option>
                    <option value="+90">🇹🇷 +90 Turkey</option>
                    <option value="+256">🇺🇬 +256 Uganda</option>
                    <option value="+380">🇺🇦 +380 Ukraine</option>
                    <option value="+971">🇦🇪 +971 UAE</option>
                    <option value="+44">🇬🇧 +44 UK</option>
                    <option value="+1">🇺🇸 +1 USA</option>
                    <option value="+598">🇺🇾 +598 Uruguay</option>
                    <option value="+998">🇺🇿 +998 Uzbekistan</option>
                    <option value="+58">🇻🇪 +58 Venezuela</option>
                    <option value="+84">🇻🇳 +84 Vietnam</option>
                    <option value="+260">🇿🇲 +260 Zambia</option>
                    <option value="+263">🇿🇼 +263 Zimbabwe</option>
                  </optgroup>
                </select>
                <input
                  className="m-field"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 000-0000"
                  style={{ flex: 1 }}
                />
              </div>
            </label>
          </div>
          <div className="contact__pair">
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
                <option value="Dedicated QA Partnership (3 Months – Custom Quote)">Dedicated QA Partnership (3 Months – Custom Quote)</option>
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
                <option value="Dedicated QA Partnership (3 Months)">3 Months Dedicated QA Partnership</option>
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
