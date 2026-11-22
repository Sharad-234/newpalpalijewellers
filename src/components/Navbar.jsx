// Navbar.jsx
import { useEffect, useRef, useState } from 'react';
import shopConfig from '../config/shopConfig';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="container-x navbar__inner">
        <a href="#home" className="navbar__brand" onClick={(e) => { e.preventDefault(); handleNav('#home'); }}>
          <img src={shopConfig.logo} alt={shopConfig.logoAlt} className="navbar__logo" />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">{shopConfig.name}</span>
            <span className="navbar__brand-est">Est. {shopConfig.established} · Nepal</span>
          </span>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link link-underline ${active === link.href ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={shopConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="navbar__cta btn-gold">
          <WhatsAppIcon /> Enquire
        </a>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={active === link.href ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={shopConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-gold navbar__drawer-cta">
              <WhatsAppIcon /> WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.93 9.93 0 0 0-8.5 15.13L2 22l5.02-1.31A9.96 9.96 0 1 0 12.04 2Zm0 18.22c-1.62 0-3.2-.43-4.58-1.25l-.33-.19-2.98.78.8-2.91-.21-.35A8.17 8.17 0 1 1 12.04 20.22Zm4.49-6.12c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.13-.16.24-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.43.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.03 0 1.19.87 2.35 1 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}
