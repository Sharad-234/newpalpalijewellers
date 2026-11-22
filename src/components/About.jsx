// About.jsx
// About the shop.
import { useRef } from 'react';
import useGsapReveal from '../hooks/useGsapReveal';
import './About.css';

export default function About() {
  const root = useRef(null);
  useGsapReveal(root);

  return (
    <section id="about" ref={root} className="about section-pad">
      <div className="container-x">
        <div className="about__grid">
          <div className="about__intro" data-reveal>
            <img
              src="/images/gallery/gallery-4.jpeg"
              alt="New Palpali Sun Chadi Pasal shop"
              className="about__shop-image"
            />
          </div>

          <div className="about__body" data-reveal>
            <h3 className="about__tagline gold-text">Tradition Crafted in Elegance</h3>
            <p className="body-lead">
              <span className="text-cream font-medium">New Palpali Sun Chadi Pasal</span>,  proudly owned and managed by Manoj Khati, is located in Bhaluwang, Dang. Recognized as one of the best jewellery destinations in Dang, we offer a beautiful collection of gold, silver, and traditional Nepali jewellery. We bring together timeless craftsmanship, cultural heritage, and elegant designs to make every occasion special. Your trust and satisfaction are our greatest treasures.
            </p>
            <p className="body-lead">
            न्यू पाल्पाली सुन चाँदी पसल, भालुवाङ, दाङमा अवस्थित, सुन, चाँदी तथा परम्परागत नेपाली गरगहनाहरूको लागि तपाईंको आफ्नै पसल हो। हामी परम्परागत कला, उत्कृष्ट कारीगरी र आकर्षक डिजाइनलाई जोड्दै हरेक विशेष अवसरलाई अझ यादगार बनाउँछौँ। तपाईंको विश्वास र सन्तुष्टि नै हाम्रो अमूल्य सम्पत्ति हो।
            </p>

            <div className="about__features" aria-label="Our values">
              <div className="about__feature">
                <span className="about__feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M24 16.5l2.2 4.5 4.9.7-3.5 3.4.8 4.9-4.4-2.3-4.4 2.3.8-4.9-3.5-3.4 4.9-.7L24 16.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Certified Purity</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M13 34.5c6.5.8 11.8-1.3 15.7-6.3 2.8-3.6 4.4-7.8 6.3-12.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M19.5 31.5c-1.1-4.3.2-8.1 3.8-11.4 2.7-2.5 6-4.3 9.9-5.5-1.2 3.9-3 7.2-5.5 9.9-3.3 3.6-7.1 4.9-11.4 3.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="31.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>Bespoke Design</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M10.5 24.5l13.5-9 13.5 9v12h-27v-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M15.5 22.5h17M18.5 19.5l5.5-3.5 5.5 3.5M18 36.5V25.8M30 36.5V25.8M24 25.8v10.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M15 25.5l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Trusted Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
