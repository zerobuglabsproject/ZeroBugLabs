'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import QA_DATA from '@/data/qa-data';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header id="navigation" className="nav" data-8b-section="navigation">
      <Link className="nav__brand" href="/" aria-label={`${QA_DATA.agency.name}, back to homepage`}>
        {QA_DATA.agency.name}<span className="m-dot" aria-hidden="true"></span>
      </Link>
      <nav className="nav__links" aria-label="Main">
        <ul>
          <li><Link className="m-link-2" href="/work">Work</Link></li>
          <li><Link className="m-link-2" href="/apps">Apps</Link></li>
          <li><Link className="m-link-2" href="/services">Services</Link></li>
          <li><Link className="m-link-2" href="/reviews">Reviews</Link></li>
          <li><Link className="m-link-2" href="/process">Process</Link></li>
          <li><Link className="m-link-2" href="/pricing">Pricing</Link></li>
          <li><Link className="m-link-2" href="/faq">FAQ</Link></li>
        </ul>
      </nav>
      <Link className="m-btn nav__cta" href="/contact">
        <span className="m-btn__label">Discuss Your Project</span>
      </Link>
      <button 
        className="m-btn-2 nav__menu" 
        type="button" 
        aria-expanded={isMenuOpen} 
        aria-controls="menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="m-btn__label">Menu</span>
      </button>

      <div 
        className="menu" 
        id="menu" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Menu" 
        data-lenis-prevent 
        hidden={!isMenuOpen}
        style={{ display: isMenuOpen ? 'flex' : 'none' }}
      >
        <div className="menu__top">
          <button 
            className="m-icon menu__close" 
            type="button" 
            aria-label="Close the menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg>
          </button>
        </div>
        <ul className="menu__list">
          <li><Link href="/work" onClick={() => setIsMenuOpen(false)}>Work<span className="m-dot" aria-hidden="true"></span></Link></li>
          <li><Link href="/apps" onClick={() => setIsMenuOpen(false)}>Apps<span className="m-dot" aria-hidden="true"></span></Link></li>
          <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services<span className="m-dot" aria-hidden="true"></span></Link></li>
          <li><Link href="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews<span className="m-dot" aria-hidden="true"></span></Link></li>
          <li><Link href="/process" onClick={() => setIsMenuOpen(false)}>Process<span className="m-dot" aria-hidden="true"></span></Link></li>
          <li><Link href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing<span className="m-dot" aria-hidden="true"></span></Link></li>
          <li><Link href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ<span className="m-dot" aria-hidden="true"></span></Link></li>
          <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact<span className="m-dot" aria-hidden="true"></span></Link></li>
        </ul>
        <p className="m-text menu__foot">{QA_DATA.agency.email} · Web &amp; Mobile App Development &amp; QA</p>
      </div>
    </header>
  );
}
