// Contact.jsx
// Get-in-touch section with social icons (Facebook, Instagram, TikTok) and a location card.
// No backend — the enquiry form is a no-op mailto: launcher; it just composes a
// WhatsApp/email message and opens it in the user's default client.
import { useRef, useState } from 'react';
import shopConfig from '../config/shopConfig';
import useGsapReveal from '../hooks/useGsapReveal';
import './Contact.css';

export default function Contact() {
  const root = useRef(null);
  useGsapReveal(root);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello ${shopConfig.name},%0A%0A${form.message || 'I would like to enquire about your jewellery.'}%0A%0AName: ${form.name || '—'}%0APhone: ${form.phone || '—'}`;
    const url = `${shopConfig.contact.whatsappHref}?text=${encodeURIComponent(text).replace(/%2520/g, '%20')}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="contact" ref={root} className="contact section-pad">
      <div className="container-x contact__grid">
        {/* Left: Get in touch */}
        <div className="contact__left" data-reveal>
          <span className="section-tag">
            <span className="gold-divider" /> Get in Touch
          </span>
          <h2 className="heading-lg mt-4">
            Visit or <span className="gold-text">Message Us</span>
          </h2>
          <p className="body-lead mt-5 max-w-md">
            Drop by the shop, send us a message, or follow our work online. We answer
            WhatsApp enquiries the same day, and we are always happy to share photos of
            pieces currently in stock.
          </p>

          {/* Social row */}
          <div className="contact__socials">
            <a
              className="contact__social"
              href={shopConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
              <span className="contact__social-label">Facebook</span>
            </a>
            <a
              className="contact__social"
              href={shopConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
              <span className="contact__social-label">Instagram</span>
            </a>
            <a
              className="contact__social"
              href={shopConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon />
              <span className="contact__social-label">TikTok</span>
            </a>
          </div>

          {/* Location card */}
          <div className="contact__location">
            <div className="contact__location-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact__location-body">
              <span className="contact__location-label">Our Location</span>
              <a
                href={shopConfig.location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__location-address link-underline"
              >
                {shopConfig.location.address}
              </a>
              <span className="contact__location-region">{shopConfig.location.region}</span>
            </div>
          </div>

          {/* Direct contact */}
          <div className="contact__direct">
            <a href={`tel:${shopConfig.contact.phoneHref}`} className="contact__direct-item link-underline">
              <span className="contact__direct-label">Call</span>
              <span className="contact__direct-value">{shopConfig.contact.phone}</span>
            </a>
          </div>
        </div>

        {/* Right: Enquiry form */}
        <div className="contact__right" data-reveal>
          <div className="contact__form-card">
            <div className="contact__form-deco" aria-hidden="true" />
            <h3 className="contact__form-title">Send an Enquiry</h3>
            <p className="contact__form-text">
              Fill in a few details and we will get back to you on WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="contact__form">
              <label className="contact__field">
                <span className="contact__field-label">Your Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Eg. Sita Sharma"
                  required
                  className="contact__input"
                />
              </label>
              <label className="contact__field">
                <span className="contact__field-label">Phone / WhatsApp</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+977 ..."
                  className="contact__input"
                />
              </label>
              <label className="contact__field">
                <span className="contact__field-label">Message</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="I am interested in a gold Sitaahaar for my daughter's wedding…"
                  rows={4}
                  className="contact__textarea"
                />
              </label>
              <button type="submit" className="btn-gold contact__submit">
                Send via WhatsApp
              </button>
           
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Icons --- */
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.4 2.1 1.6 3.5 3.7 3.8v2.5c-1.3.1-2.5-.3-3.7-.9v5.6c0 3.4-2.5 5.6-5.6 5.6-3 0-5.4-2.4-5.4-5.4 0-2.9 2.2-5.1 5.1-5.3v2.6c-.1 0-.3 0-.4.1-1.4.3-2.3 1.6-2 3 .3 1.5 1.6 2.4 3 2.1 1.3-.3 2.2-1.4 2.2-2.8V3h3.1z"/>
    </svg>
  );
}
