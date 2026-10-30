import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Phone, MapPin, ArrowUp, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#352115] text-[#FAF9F5] border-t border-[#BDA17D]/30 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Closing Statement in Grand Bodoni Editorial Serif */}
        <div className="pb-16 border-b border-[#BDA17D]/25 text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#BDA17D] font-medium block mb-4">
            SANCTUARY IN PANCAWATI
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-[#FAF9F5] leading-tight">
            Find Your Moment. <br />
            <span className="italic font-normal text-[#BDA17D]">Stay a Little Longer.</span>
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#BDA17D]/40" />
            <Compass className="w-4 h-4 text-[#BDA17D]" />
            <span className="w-12 h-[1px] bg-[#BDA17D]/40" />
          </div>
        </div>

        {/* Middle Navigation & Information Columns */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-[#BDA17D]/20">
          {/* Brand Wordmark & Philosophy (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-display text-2xl tracking-[0.2em] font-semibold text-[#FAF9F5] block">
                {BUSINESS_CONFIG.brand.name}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#BDA17D] font-sans font-medium block mt-1">
                PANCAWATI, BOGOR • {BUSINESS_CONFIG.brand.since}
              </span>
            </div>
            <p className="text-xs text-[#FAF9F5]/70 font-light leading-relaxed max-w-sm">
              A nature-inspired coffee destination tucked among whispering pines. Where ethically sourced Indonesian beans, European café warmth, and mindful tranquility converge.
            </p>
            <div className="pt-2 text-xs text-[#BDA17D] font-serif italic">
              "Where Every Moment Becomes Meaningful."
            </div>
          </div>

          {/* Navigation Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#BDA17D] font-medium block">
              DISCOVER
            </span>
            <ul className="space-y-2.5 text-xs text-[#FAF9F5]/80 uppercase tracking-widest font-sans">
              <li>
                <a href="#hero" className="hover:text-[#BDA17D] transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#BDA17D] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#BDA17D] transition-colors">Experience</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#BDA17D] transition-colors">Menu Repertoire</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#BDA17D] transition-colors">Moments Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#BDA17D] transition-colors">Location &amp; Visit</a>
              </li>
              <li>
                <a href="#rituals" className="hover:text-[#BDA17D] transition-colors">Sanctuary Rituals &amp; Guide</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#BDA17D] font-medium block">
              HOURS OF SANCTUARY
            </span>
            <div className="text-xs text-[#FAF9F5]/80 space-y-2 font-light">
              <div>
                <span className="block text-[#BDA17D] font-medium uppercase text-[10px] tracking-wider">
                  Monday – Thursday
                </span>
                <span>10:00 – 21:00 WIB</span>
              </div>
              <div>
                <span className="block text-[#BDA17D] font-medium uppercase text-[10px] tracking-wider">
                  Friday
                </span>
                <span>10:00 – 22:00 WIB</span>
              </div>
              <div>
                <span className="block text-[#BDA17D] font-medium uppercase text-[10px] tracking-wider">
                  Saturday – Sunday
                </span>
                <span>08:00 – 22:00 WIB</span>
              </div>
            </div>
          </div>

          {/* Physical Address & Social Connections (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#BDA17D] font-medium block">
              SANCTUARY CODES
            </span>
            <div className="text-xs text-[#FAF9F5]/75 space-y-2 font-light">
              <p className="leading-relaxed">
                {BUSINESS_CONFIG.location.address}
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href={BUSINESS_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#FAF9F5] hover:text-[#BDA17D] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#BDA17D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>{BUSINESS_CONFIG.contact.instagramHandle}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#FAF9F5] hover:text-[#BDA17D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#BDA17D]" />
                  <span>{BUSINESS_CONFIG.contact.whatsappDisplay}</span>
                </a>
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#FAF9F5] hover:text-[#BDA17D] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#BDA17D]" />
                  <span>Google Maps Destination</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F5]/60 font-light">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brand.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-[#BDA17D]/70">
              Designed with timeless craftsmanship
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#FAF9F5]/80 hover:text-[#BDA17D] transition-colors uppercase tracking-widest"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
