import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { ArrowRight } from 'lucide-react';

interface TheExperienceProps {
  onExploreMenu: () => void;
  onReserveClick: () => void;
}

export const TheExperience: React.FC<TheExperienceProps> = ({ onExploreMenu, onReserveClick }) => {
  const { features } = BUSINESS_CONFIG;

  return (
    <section id="experience" className="relative py-24 md:py-36 bg-[#E5E0D6] text-[#171512] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-[#8A5D2B]">
              THE THREE PILLARS
            </span>
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#352115] tracking-tight">
            An Experience to Remember.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A2C19]/80 font-light max-w-xl mx-auto leading-relaxed">
            Curated sensory encounters that harmonize Indonesian highland nature with European café refinement.
          </p>
        </div>

        {/* 3 Asymmetric Editorial Compositions */}
        <div className="space-y-24 md:space-y-36">
          {/* Feature 01: THE NATURE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image (Col 7) */}
            <div className="lg:col-span-7 relative group">
              <div className="border border-[#8A5D2B]/35 p-3 bg-[#FAF9F5]/70 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                <div className="aspect-4/3 sm:aspect-16/11 overflow-hidden bg-[#D5CFCE]">
                  <img
                    src={features[0].image}
                    alt={features[0].title}
                    className="w-full h-full object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-104"
                  />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -top-4 -left-4 bg-[#352115] text-[#FAF9F5] px-4 py-2 text-xs font-display tracking-widest uppercase border border-[#BDA17D]/40 shadow-md">
                Aranya Pavilion • 850m ASL
              </div>
            </div>

            {/* Copy (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl sm:text-5xl font-light text-[#8A5D2B]/80">
                  {features[0].number}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#4A2C19]/70 font-medium">
                  SANCTUARY
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#352115] font-normal leading-tight">
                {features[0].title}
              </h3>

              <div className="w-16 h-[1px] bg-[#8A5D2B]" />

              <p className="text-base text-[#171512]/85 font-light leading-relaxed">
                {features[0].description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {features[0].highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#4A2C19]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A5D2B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 02: THE COFFEE (Inverted Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Copy (Col 5) - Order 2 on mobile, Order 1 on Desktop */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl sm:text-5xl font-light text-[#8A5D2B]/80">
                  {features[1].number}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#4A2C19]/70 font-medium">
                  CRAFTSMANSHIP
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#352115] font-normal leading-tight">
                {features[1].title}
              </h3>

              <div className="w-16 h-[1px] bg-[#8A5D2B]" />

              <p className="text-base text-[#171512]/85 font-light leading-relaxed">
                {features[1].description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {features[1].highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#4A2C19]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A5D2B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onExploreMenu}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#4A2C19] hover:text-[#8A5D2B] transition-colors border-b border-[#4A2C19] hover:border-[#8A5D2B] pb-1 group"
                >
                  <span>BROWSE COFFEE SELECTION</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Image (Col 7) - Order 1 on mobile, Order 2 on Desktop */}
            <div className="lg:col-span-7 relative group order-1 lg:order-2">
              <div className="border border-[#8A5D2B]/35 p-3 bg-[#FAF9F5]/70 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                <div className="aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#D5CFCE]">
                  <img
                    src={features[1].image}
                    alt={features[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#FAF9F5] text-[#352115] px-4 py-2 text-xs font-display tracking-widest uppercase border border-[#8A5D2B]/40 shadow-md">
                Artisan Coffee &amp; Matcha
              </div>
            </div>
          </div>

          {/* Feature 03: THE MOMENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image (Col 7) */}
            <div className="lg:col-span-7 relative group">
              <div className="border border-[#8A5D2B]/35 p-3 bg-[#FAF9F5]/70 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                <div className="aspect-4/3 sm:aspect-16/11 overflow-hidden bg-[#D5CFCE]">
                  <img
                    src={features[2].image}
                    alt={features[2].title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-104"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#352115] text-[#FAF9F5] px-4 py-2 text-xs font-display tracking-widest uppercase border border-[#BDA17D]/40 shadow-md">
                Forest Toast • Teman Ngopi
              </div>
            </div>

            {/* Copy (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl sm:text-5xl font-light text-[#8A5D2B]/80">
                  {features[2].number}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#4A2C19]/70 font-medium">
                  HOSPITALITY
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#352115] font-normal leading-tight">
                {features[2].title}
              </h3>

              <div className="w-16 h-[1px] bg-[#8A5D2B]" />

              <p className="text-base text-[#171512]/85 font-light leading-relaxed">
                {features[2].description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {features[2].highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#4A2C19]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A5D2B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onReserveClick}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#4A2C19] hover:text-[#8A5D2B] transition-colors border-b border-[#4A2C19] hover:border-[#8A5D2B] pb-1 group"
                >
                  <span>EXPLORE FOREST RITUALS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

