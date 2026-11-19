'use client';

import QA_DATA from '@/data/qa-data';

export default function Footer() {
  return (
    <footer id="footer" data-8b-section="footer">
      <p className="m-text-2 footer__bye" style={{ '--len': 3 } as React.CSSProperties}>
        <span className="footer__word">Bye</span>
        <span className="footer__period" aria-hidden="true">
          <span className="footer__aperture">
            <img 
              className="footer__img" 
              src="https://images.unsplash.com/photo-1754738381783-f9a2847bfef2?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MXx8cHVycGxlJTIwYWJzdHJhY3QlMjAzZCUyMHNoYXBlfGVufDF8Mnx8fDE3OTEyMDk2Mjd8MA&auto=format&fit=crop&w=1200&h=1200&q=68" 
              width={1200} 
              height={1200} 
              alt="" 
              style={{ background: '#590ca6' }}
            />
            <span className="footer__tint"></span>
          </span>
        </span>
      </p>
      <div className="footer__grid">
        <nav className="footer__col" aria-label="Footer">
          <p className="m-text-6 footer__label">Explore</p>
          <a className="m-link-2" href="#work">Work</a>
          <a className="m-link-2" href="#again">Applications</a>
          <a className="m-link-2" href="#capabilities">Services</a>
          <a className="m-link-2" href="#reviews">Reviews (5★)</a>
          <a className="m-link-2" href="#method">Approach</a>
          <a className="m-link-2" href="#pricing">Pricing</a>
          <a className="m-link-2" href="#faq">FAQ</a>
        </nav>
        <div className="footer__col">
          <p className="m-text-6 footer__label">Talk</p>
          <a className="m-link-2" href={`mailto:${QA_DATA.agency.email}`}>{QA_DATA.agency.email}</a>
          <span className="m-text-6" style={{ color: 'var(--color-5)', marginTop: '4px', display: 'inline-block' }}>
            US Hours · EST / CST / PST
          </span>
        </div>
        <div className="footer__col">
          <p className="m-text-6 footer__label">Follow</p>
          <a className="m-link-2" href={QA_DATA.agency.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="m-link-2" href={QA_DATA.agency.social.threads} target="_blank" rel="noopener noreferrer">Threads</a>
          <a className="m-link-2" href={QA_DATA.agency.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="m-link-2" href={QA_DATA.agency.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="m-link-2" href={QA_DATA.agency.social.twitter} target="_blank" rel="noopener noreferrer">Twitter / X</a>
        </div>
      </div>
      <div className="footer__legal m-text-6">
        <p>© 2026 {QA_DATA.agency.name}</p>
        <p>Serving US &amp; Global Teams</p>
      </div>
    </footer>
  );
}
