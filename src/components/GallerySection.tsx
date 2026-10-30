import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'nature', label: 'Forest & Interior' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'coffee', label: 'Coffee & Brew' },
    { id: 'atmosphere', label: 'Atmosphere' },
  ];

  const filteredItems = BUSINESS_CONFIG.galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-[#F2EFE8] text-[#171512] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#8A5D2B]/20 pb-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#8A5D2B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-[#8A5D2B]">
                CURATED ARCHIVE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#352115] tracking-tight">
              Moments at Aranya.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-xs sm:text-sm text-[#4A2C19]/80 font-light leading-relaxed">
              A visual anthology documenting the morning mist, cedar wood architecture, and quiet conversations under the pine canopy.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 border ${
                activeFilter === filter.id
                  ? 'bg-[#4A2C19] text-[#FAF9F5] border-[#4A2C19]'
                  : 'bg-[#FAF9F5] text-[#352115] border-[#8A5D2B]/25 hover:border-[#8A5D2B]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Masonry-style Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            // Apply varied aspect ratios and spans for organic editorial rhythm
            const isWide = index === 0 || index === 5;
            const isTall = index === 3;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`relative group cursor-pointer overflow-hidden border border-[#8A5D2B]/25 bg-[#FAF9F5] p-2 transition-transform duration-500 hover:-translate-y-1 ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#E5E0D6] ${
                    isTall ? 'aspect-3/4' : isWide ? 'aspect-16/9' : 'aspect-4/3'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />

                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#171512]/80 via-[#171512]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#FAF9F5]" />

                  {/* Overlay Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FAF9F5] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#BDA17D] font-medium">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-display text-xl text-[#FAF9F5] mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FAF9F5]/80 font-light mt-1 max-w-md line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Corner Expand Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#171512]/60 backdrop-blur-xs flex items-center justify-center text-[#FAF9F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimalist Bottom Caption bar visible on mobile */}
                <div className="md:hidden pt-3 px-2 flex items-center justify-between text-[11px] text-[#4A2C19]/80 font-sans uppercase tracking-wider">
                  <span>{item.title}</span>
                  <span className="text-[#8A5D2B]">{item.categoryLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#171512]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-[#FAF9F5]/70 hover:text-[#FAF9F5] p-2 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden border border-[#BDA17D]/30 bg-black">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-[#FAF9F5] flex items-center justify-center hover:bg-[#8A5D2B] transition-colors"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-[#FAF9F5] flex items-center justify-center hover:bg-[#8A5D2B] transition-colors"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Caption & Metadata */}
            <div className="w-full mt-4 flex items-center justify-between text-[#FAF9F5] text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#BDA17D]">
                  {filteredItems[activeLightboxIndex].categoryLabel}
                </span>
                <h4 className="font-display text-lg text-[#FAF9F5]">
                  {filteredItems[activeLightboxIndex].title}
                </h4>
                <p className="text-xs text-[#FAF9F5]/70 font-light mt-0.5">
                  {filteredItems[activeLightboxIndex].subtitle}
                </p>
              </div>
              <div className="text-right text-[#FAF9F5]/60 font-sans tracking-widest text-[11px]">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
