import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';
import { ArrowDown, Compass } from 'lucide-react';

interface HeroProps {
  onDiscoverStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverStory }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#171512]"
    >
      {/* Background Image with Authentic Atmospheric Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85"
          alt="Golden morning sunlight streaming through tall pine trees in Pancawati, Bogor"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:14s]"
        />
        {/* Editorial Multi-layer Gradient: Warm Espresso & Deep Chocolate Tones */}
        <div className="absolute inset-0 bg-linear-to-t from-[#171512] via-[#352115]/65 to-[#171512]/45" />
        <div className="absolute inset-0 bg-[#4A2C19]/35 mix-blend-multiply" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 md:py-36">
        <div className="max-w-3xl">
          {/* Eyebrow with hairline rule */}
          <div className="flex items-center gap-3.5 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-[#BDA17D]" />
            <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#BDA17D]">
              {BUSINESS_CONFIG.brand.heroEyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FAF9F5] leading-[1.08] tracking-tight mb-8">
            Where Nature <br />
            <span className="italic font-light text-[#E5E0D6]">Meets Every Sip.</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#F2EFE8]/90 font-light leading-relaxed max-w-2xl mb-10 md:mb-12">
            {BUSINESS_CONFIG.brand.heroDescription}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onDiscoverStory}
              className="px-8 py-4 bg-[#8A5D2B] hover:bg-[#FAF9F5] text-[#FAF9F5] hover:text-[#352115] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 text-center shadow-lg"
            >
              DISCOVER ARANYA
            </button>
            <Link
              to="/menu"
              className="px-8 py-4 border border-[#FAF9F5]/40 hover:border-[#FAF9F5] bg-black/20 hover:bg-[#FAF9F5]/10 text-[#FAF9F5] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 text-center backdrop-blur-xs flex items-center justify-center"
            >
              EXPLORE OUR MENU
            </Link>
          </div>
        </div>

        {/* Asymmetrical Bottom Metadata */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-[#BDA17D]/25 flex flex-col md:flex-row md:items-end justify-between gap-6 text-[#FAF9F5]/80">
          <div className="flex items-center gap-3">
            <Compass className="w-4 h-4 text-[#BDA17D]" />
            <div>
              <span className="block text-[11px] uppercase tracking-[0.25em] text-[#BDA17D] font-medium">
                COORDINATES
              </span>
              <span className="text-xs tracking-wider text-[#FAF9F5]/90">
                {BUSINESS_CONFIG.brand.since} • {BUSINESS_CONFIG.location.district}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-left md:text-right">
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#BDA17D] font-medium">
                SANCTUARY
              </span>
              <span className="text-xs text-[#FAF9F5]/90 tracking-wide">
                Highland Pine Forest • 850m ASL
              </span>
            </div>

            <a
              href="#story"
              aria-label="Scroll to our story"
              className="hidden md:flex w-10 h-10 border border-[#FAF9F5]/30 rounded-full items-center justify-center text-[#FAF9F5]/70 hover:text-[#FAF9F5] hover:border-[#FAF9F5] transition-colors"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
