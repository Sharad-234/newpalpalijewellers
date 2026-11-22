// Hero.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import shopConfig from '../config/shopConfig';
import './Hero.css';

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const scope = root.current;
    if (!scope) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero__eyebrow', { y: 30, opacity: 0, duration: 0.7 })
        .from('.hero__title-line', { y: 80, opacity: 0, duration: 1, stagger: 0.12 }, '-=0.4')
        .from('.hero__subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero__cta-row > *', { y: 30, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.5')
        .from('.hero__stats > *', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('.hero__scroll', { opacity: 0, duration: 0.8 }, '-=0.3');

      // Subtle parallax on scroll
      gsap.to('.hero__bg', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: scope,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
      gsap.to('.hero__content', {
        yPercent: -10,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: scope,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="hero">
      <div className="hero__bg-wrap">
        <div
          className="hero__bg slow-zoom"
          style={{ backgroundImage: `url('/images/hero/lastbanner.png')` }}
          aria-hidden="true"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__vignette" aria-hidden="true" />
      </div>

      {/* Rotating ring decorations */}
      <div className="hero__ring hero__ring--outer rotate-slow" aria-hidden="true" />
      <div className="hero__ring hero__ring--inner rotate-slow-rev" aria-hidden="true" />

      <div className="container-x hero__content">
        <div className="hero__eyebrow section-tag">
          <span className="gold-divider" />
          Est. {shopConfig.established} · Bhaluwang, Dang, Nepal
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Tradition</span>
          <span className="hero__title-line">Crafted in</span>
          <span className="hero__title-line gold-text">Elegance</span>
        </h1>

        <p className="hero__subtitle body-lead">
          “परम्पराको पहिचान, विश्वासको गहना।”
          <br />
          न्यु पाल्पाली सुन चाँदी पसल
        </p>

        <div className="hero__cta-row">
          <a href="#collection" className="btn-gold">Explore the Collection</a>
          <a href="#contact" className="btn-outline">Visit the Shop</a>
        </div>

        <div className="hero__stats">
          {shopConfig.stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <div className="hero__stat-value gold-text">{s.value}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
