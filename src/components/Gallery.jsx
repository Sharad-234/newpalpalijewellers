// Gallery.jsx
// Masonry-style gallery — kept as in the original design.
import { useRef } from 'react';
import { galleryImages } from '../data/jewelleryData';
import useGsapReveal from '../hooks/useGsapReveal';
import './Gallery.css';

export default function Gallery() {
  const root = useRef(null);
  useGsapReveal(root);

  return (
    <section id="gallery" ref={root} className="gallery section-pad">
      <div className="container-x gallery__head">
        <div data-reveal>
          <span className="section-tag">
            <span className="gold-divider" /> OUR GALLERY
          </span>
          <h2 className="heading-lg mt-4">
           A Glimpse<span className="gold-text"> of Our Collection</span>
          </h2>
          <p className="body-lead mt-5 max-w-2xl">
           Explore our beautiful collection of gold, silver, and traditional Nepali jewellery. Discover timeless designs crafted for weddings, celebrations, and everyday elegance
          </p>
        </div>
       
      </div>

      <div className="container-x">
        <div className="gallery__grid" data-reveal>
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className={`gallery__item gallery__item--${img.span}`}
              style={{ '--i': i }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="gallery__caption">{img.alt}</figcaption>
              <div className="gallery__overlay" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
