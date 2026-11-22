// App.jsx — assembles all sections in the order requested.
// Sections: Navbar · Hero · About · JewelleryCollection (auto slider) ·
// Gallery · Contact · Footer · FloatingWhatsApp · ScrollToTop
//
// Removed per request:
//   - Featured Collection
//   - Why Choose Us
//   - Visit Our Store (location/contact merged into Get in Touch)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import JewelleryCollection from './components/JewelleryCollection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <JewelleryCollection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
