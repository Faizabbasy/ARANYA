import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Sparkles, Trees, Coffee } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="relative py-24 md:py-36 bg-[#F2EFE8] text-[#171512] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Eyebrow & Brand Seal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#8A5D2B]/20 pb-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#8A5D2B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#8A5D2B]">
                {BUSINESS_CONFIG.brand.storyEyebrow}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#352115] leading-[1.15]">
              More Than Coffee. <br />
              <span className="italic font-light text-[#8A5D2B]">A Place to Belong.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 text-left md:text-right max-w-xs">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-[#4A2C19]/70 border-b border-[#8A5D2B]/30 pb-1">
              PHILOSOPHY OF MINDFUL SIPPING
            </span>
            <p className="mt-2 text-xs text-[#352115]/75 font-serif italic">
              "Surrounded by whispering pines, time adjusts to its true, unhurried cadence."
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with Fine Frame & Badge */}
          <div className="lg:col-span-7 relative">
            <div className="relative p-2 sm:p-3 border border-[#8A5D2B]/30 bg-[#FAF9F5]">
              <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-1/1 overflow-hidden bg-[#E5E0D6]">
                <img
                  src="/images/aranya-story-clean.jpg"
                  alt="Iconic architectural facade of Aranya Coffee and Forest in Pancawati"
                  className="w-full h-full object-cover object-[center_30%] hover:scale-103 transition-all duration-700"
                />
              </div>

              {/* Editorial Caption Slip */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-t border-[#8A5D2B]/20 text-[11px] text-[#4A2C19]/80 uppercase tracking-widest font-sans">
                <span>MAIN FACADE &amp; TERRACE</span>
                <span>PANCAWATI HIGHLANDS</span>
              </div>
            </div>

            {/* Overlapping Floating Quote Stamp */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 bg-[#352115] text-[#FAF9F5] p-6 max-w-xs shadow-xl border border-[#BDA17D]/40">
              <Sparkles className="w-4 h-4 text-[#BDA17D] mb-3" />
              <p className="font-editorial text-sm italic leading-relaxed text-[#F2EFE8]">
                "Every corner was envisioned to honor the living forest — natural cedar wood, volcanic river stones, and open skies."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Editorial Touchpoints */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 text-[#171512]/85 text-base sm:text-lg leading-relaxed font-light">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-[#4A2C19] first-letter:leading-none">
                {BUSINESS_CONFIG.brand.storyDescription}
              </p>
              <p className="text-sm sm:text-base text-[#352115]/80 leading-relaxed">
                Tucked into the lush contours of Mount Pangrango's foothills, Aranya is designed as an architectural haven where the barrier between cozy human sanctuary and wild botanical splendour dissolves.
              </p>
            </div>

            {/* Editorial Features Strip */}
            <div className="pt-6 border-t border-[#8A5D2B]/20 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 border border-[#8A5D2B]/40 bg-[#FAF9F5] flex items-center justify-center text-[#4A2C19]">
                  <Trees className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#352115]">Pinetree Canopy Retreat</h3>
                  <p className="text-xs text-[#352115]/70 mt-1 leading-normal">
                    Sheltered beneath evergreen pines that naturally cool the atmosphere to a refreshing 20°C–24°C year-round.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 border border-[#8A5D2B]/40 bg-[#FAF9F5] flex items-center justify-center text-[#4A2C19]">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#352115]">Archival Coffee Roasts</h3>
                  <p className="text-xs text-[#352115]/70 mt-1 leading-normal">
                    Carefully selected regional beans roasted to accentuate delicate florals, dried berries, and deep brown sugar tones.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Brand Signature */}
            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="block font-display text-base tracking-widest text-[#4A2C19] uppercase">
                  ARANYA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#8A5D2B] uppercase">
                  Pancawati, Bogor • Indonesia
                </span>
              </div>
              <span className="text-xs font-serif italic text-[#8A5D2B]">
                Since MMXXII
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

