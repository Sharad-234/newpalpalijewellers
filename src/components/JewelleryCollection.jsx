// JewelleryCollection.jsx
// Auto-sliding row of 8 circular image boxes, each representing one jewellery category.
// The track is duplicated to make the marquee loop seamlessly without any visible gap.
import { useEffect, useRef, useState } from 'react';
import { jewelleryCategories } from '../data/jewelleryData';
import './JewelleryCollection.css';

export default function JewelleryCollection() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [activeId, setActiveId] = useState(null);

  // Pause the marquee when an item is hovered (so a user can read its description).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (paused) {
      track.style.animationPlayState = 'paused';
    } else {
      track.style.animationPlayState = 'running';
    }
  }, [paused]);

  return (
    <section id="collection" className="collection section-pad">
      <div className="container-x collection__head">
        <div data-reveal>
          <span className="section-tag">
            <span className="gold-divider" /> Our Collection
          </span>
          <h2 className="heading-lg mt-4">
            Discover <span className="gold-text">Our Jewellery</span>
          </h2>
          <p className="body-lead mt-5 max-w-2xl">
           Explore our beautiful collection of gold, silver, and traditional Nepali jewellery for every special occasion
          </p>
        </div>
      </div>

      <div
        className="collection__marquee"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Jewellery collection — auto sliding"
      >
        <div className="collection__track" ref={trackRef}>
          {/* Original items */}
          {[...jewelleryCategories, ...jewelleryCategories].map((item, idx) => {
            const realIdx = idx % jewelleryCategories.length;
            const isActive = activeId === `${realIdx}-${Math.floor(idx / jewelleryCategories.length)}`;
            return (
              <button
                type="button"
                key={`${realIdx}-${idx}`}
                className={`collection__item ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveId(`${realIdx}-${Math.floor(idx / jewelleryCategories.length)}`)}
                onFocus={() => setActiveId(`${realIdx}-${Math.floor(idx / jewelleryCategories.length)}`)}
                onMouseLeave={() => setActiveId(null)}
                onBlur={() => setActiveId(null)}
                aria-label={`${item.name} — ${item.description}`}
              >
                <div className="collection__circle">
                  <div className="collection__ring" />
                  <div
                    className="collection__img"
                    style={{ backgroundImage: `url('${item.image}')` }}
                    role="img"
                    aria-label={item.alt}
                  />
                  <div className="collection__overlay" />
                  <span className="collection__badge">{String(realIdx + 1).padStart(2, '0')}</span>
                </div>
                <div className="collection__meta">
                  <span className="collection__nepali">{item.nepali}</span>
                  <span className="collection__name">{item.name}</span>
                  <span className="collection__desc">{item.description}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    
       
       
  
    </section>
  );
}
