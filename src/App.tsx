import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { TheExperience } from './components/TheExperience';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { SanctuaryRitualsSection } from './components/SanctuaryRitualsSection';
import { Footer } from './components/Footer';
import { MenuPage } from './pages/MenuPage';

const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation */}
      <Navbar onReserveClick={() => scrollTo('rituals')} />

      <main>
        {/* Section B — Hero */}
        <Hero onDiscoverStory={() => scrollTo('story')} />

        {/* Section C — Brand Story */}
        <BrandStory />

        {/* Section D — The Experience (with all authentic user photos) */}
        <TheExperience
          onExploreMenu={() => scrollTo('menu')}
          onReserveClick={() => scrollTo('rituals')}
        />

        {/* Section E — Curated Best Sellers Menu Section */}
        <MenuSection />

        {/* Section F — Gallery */}
        <GallerySection />

        {/* Section G — Location */}
        <LocationSection />

        {/* Section H — Sanctuary Rituals & Visit Guide (Replaces legacy rigid reservation form) */}
        <SanctuaryRitualsSection />
      </main>

      {/* Section I — Footer */}
      <Footer />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#F2EFE8] text-[#171512] font-sans selection:bg-[#4A2C19] selection:text-[#FAF9F5]">
        {/* Subtle organic handmade paper texture across the entire page */}
        <div className="paper-texture-overlay" aria-hidden="true" />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
