// FloatingWhatsApp.jsx
import { useEffect, useState } from 'react';
import shopConfig from '../config/shopConfig';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Pulse the "Chat with us" label every few seconds
  useEffect(() => {
    if (!visible) return;
    let timer;
    const show = () => {
      setShowLabel(true);
      timer = setTimeout(() => {
        setShowLabel(false);
        timer = setTimeout(show, 6000);
      }, 4000);
    };
    timer = setTimeout(show, 1500);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <a
      href={shopConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`floating-wa ${visible ? 'visible' : ''} ${showLabel ? 'show-label' : ''}`}
    >
      <span className="floating-wa__label">Chat with us</span>
      <span className="floating-wa__icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20.52 3.48A11.9 11.9 0 0 0 3.2 19.3L2 22l2.78-.73A11.9 11.9 0 1 0 20.52 3.48Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8.2 7.3c-.24-.53-.49-.54-.72-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.2 3.53 5.42 4.8 2.68 1.05 3.22.84 3.8.79.58-.05 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.6-.95-.85-1.6-1.89-1.79-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56L8.2 7.3Z" fill="currentColor" />
        </svg>
      </span>
    </a>
  );
}
