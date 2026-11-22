// Footer.jsx — kept as in the original design
import shopConfig from '../config/shopConfig';
import './Footer.css';

const FOOTER_LINKS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Collection', href: '#collection' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Gallery', href: '#gallery' },
      { label: 'Get in Touch', href: '#contact' },
      { label: 'WhatsApp', href: shopConfig.contact.whatsappHref },
      { label: 'Visit Bhaluwang', href: shopConfig.location.mapLink },
    ],
  },
  {
    title: 'Our Collection',
    links: [
      { label: 'Gold Jewellery', href: '#collection' },
      { label: 'Silver & Traditional', href: '#collection' },
      { label: 'Wedding Sets', href: '#collection' },
      { label: 'Custom Designs', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container-x footer__inner">
          {/* Brand block */}
          <div className="footer__brand">
            <img src={shopConfig.logo} alt={shopConfig.logoAlt} className="footer__logo" />
            <h3 className="footer__name">{shopConfig.name}</h3>
            <p className="footer__tagline">“{shopConfig.tagline}”</p>
            <p className="footer__text">
            Your trusted destination for gold, silver, and traditional Nepali jewellery in Bhaluwang, Dang.
            </p>
            <div className="footer__social">
              <a href={shopConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href={shopConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href={shopConfig.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.4 2.1 1.6 3.5 3.7 3.8v2.5c-1.3.1-2.5-.3-3.7-.9v5.6c0 3.4-2.5 5.6-5.6 5.6-3 0-5.4-2.4-5.4-5.4 0-2.9 2.2-5.1 5.1-5.3v2.6c-.1 0-.3 0-.4.1-1.4.3-2.3 1.6-2 3 .3 1.5 1.6 2.4 3 2.1 1.3-.3 2.2-1.4 2.2-2.8V3h3.1z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__list">
                {col.links.map((l, i) => (
                  <li key={`${col.title}-${i}`}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="footer__link link-underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Visit block */}
          <div className="footer__visit">
            <h4 className="footer__col-title">Visit the Shop</h4>
            <p className="footer__visit-address">{shopConfig.location.address}</p>
            <p className="footer__visit-region">{shopConfig.location.region}</p>
            <div className="footer__hours">
              {shopConfig.hours.map((h) => (
                <div className="footer__hour" key={h.day}>
                  <span className="footer__hour-day">{h.day}</span>
                  <span className="footer__hour-time">{h.time}</span>
                </div>
              ))}
            </div>
            <a href={shopConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline footer__cta">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container-x footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} {shopConfig.name}. All rights reserved.
          </p>
          <p className="footer__made">
            Developed by  <span className="gold-text">Sharad Gautam</span> 
          </p>
        </div>
      </div>
    </footer>
  );
}
