// shopConfig.js
// Centralised shop information for New Palpali Sun Chadi Pasal.
// Update values here and they propagate across the entire website.

export const shopConfig = {
  name: 'New Palpali Sun Chadi Pasal',
  tagline: 'Tradition Crafted in Elegance',
  established: 2068,
  experience: '60+ Years of Heritage',
  location: {
    address: 'Bhaluwang, Dang, Nepal',
    shortAddress: 'Bhaluwang, Dang',
    region: 'Lumbini Province, Nepal',
    mapEmbedQuery: 'Bhaluwang, Dang, Nepal',
    mapLink: 'https://maps.app.goo.gl/RySKMT4nGJLSjKUC9',
  },
  contact: {
    phone: '+977 9763647743',
    whatsapp: '9763647743',
    whatsappHref: 'https://wa.me/9763647743',
   
  },
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/@bishapkhati0',
  },
  hours: [
    { day: 'Sunday – Friday', time: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', time: 'off' },
  ],
  stats: [
    { value: '14+', label: 'Years of Heritage' },
    { value: '4000+', label: 'Pieces Crafted' },
    { value: '9', label: 'Signature Collections' },
    { value: '4000+', label: 'Happy ' },
  ],
  // Brand logo is intentionally a placeholder image (per request — do not use the
  // user's actual logo). Edit this path to swap with the real brand logo later.
  logo: '/images/topbanner.png',
  logoAlt: 'New Palpali Sun Chadi Pasal emblem',
};

export default shopConfig;
