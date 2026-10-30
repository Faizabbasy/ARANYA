import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';
import type { MenuItem } from '../config/business';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Filter only the verified best seller items
  const bestSellers = BUSINESS_CONFIG.menuItems.filter((item) => item.isPopular);

  const filterTabs = [
    { id: 'all', label: 'All Best Sellers' },
    { id: 'coffee', label: 'Coffee & Brew' },
    { id: 'beverages', label: 'Tea & Non-Coffee' },
    { id: 'food', label: 'Dining & Snacks' },
  ];

  const filteredItems = bestSellers.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'coffee') return item.category === 'coffee-base' || item.category === 'manual-brew';
    if (activeFilter === 'beverages') return item.category === 'traditional-drink' || item.category === 'non-coffee';
    if (activeFilter === 'food') return item.category === 'main-course' || item.category === 'dessert-snack';
    return true;
  });

  const [activeItem, setActiveItem] = useState<MenuItem>(filteredItems[0] || bestSellers[0]);

  const spotlightItem =
    filteredItems.find((i) => i.id === activeItem?.id) || filteredItems[0] || bestSellers[0];

  return (
    <section id="menu" className="relative py-24 md:py-36 bg-[#F2EFE8] text-[#171512] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-[#8A5D2B] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#8A5D2B]" />
              <span>GUEST FAVORITES &amp; SIGNATURES</span>
            </span>
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#352115] tracking-tight">
            Curated Best Sellers
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A2C19]/80 font-light max-w-xl mx-auto leading-relaxed">
            The most cherished coffee creations, heritage herbal remedies, and comforting dishes beloved by our guests.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8A5D2B] font-serif italic">
            <span>Signature Selections</span>
            <span>•</span>
            <span>IDR 25,000 – 50,000</span>
          </div>
        </div>

        {/* Best Seller Sub-Category Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-14 md:mb-20 gap-2 sm:gap-3 scrollbar-none border-b border-[#8A5D2B]/20">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  const firstOfFilter = bestSellers.find((i) => {
                    if (tab.id === 'all') return true;
                    if (tab.id === 'coffee') return i.category === 'coffee-base' || i.category === 'manual-brew';
                    if (tab.id === 'beverages') return i.category === 'traditional-drink' || i.category === 'non-coffee';
                    if (tab.id === 'food') return i.category === 'main-course' || i.category === 'dessert-snack';
                    return true;
                  });
                  if (firstOfFilter) setActiveItem(firstOfFilter);
                }}
                className={`px-4 sm:px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium whitespace-nowrap transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#352115] font-semibold'
                    : 'text-[#4A2C19]/65 hover:text-[#352115]'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8A5D2B] animate-fade-in" />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Best Seller Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Spotlight Hero Plate for Selected Item */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="border border-[#8A5D2B]/30 p-3 sm:p-4 bg-[#FAF9F5] shadow-xs">
              <div className="aspect-4/5 overflow-hidden bg-[#E5E0D6] relative">
                {spotlightItem && (
                  <img
                    key={spotlightItem.id}
                    src={spotlightItem.image}
                    alt={spotlightItem.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 animate-fade-in"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-[#171512]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Card on Image */}
                {spotlightItem && (
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F5]/95 backdrop-blur-xs p-4 border border-[#8A5D2B]/30 shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-[#8A5D2B] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#8A5D2B]" />
                        <span>{spotlightItem.tag || 'BEST SELLER'}</span>
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#8A5D2B]">
                        {spotlightItem.priceFormatted}
                      </span>
                    </div>
                    <h4 className="font-display text-lg text-[#352115] mt-1 font-medium">
                      {spotlightItem.name}
                    </h4>
                    <p className="text-[11px] text-[#4A2C19]/80 font-light mt-1 line-clamp-2">
                      {spotlightItem.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Subtle Editorial Stamp below image */}
            <div className="mt-4 px-2 flex items-center justify-between text-[11px] text-[#4A2C19]/70 uppercase tracking-widest font-sans">
              <span>GUEST CHOICE FAVORITE</span>
              <span>100% ETHICAL TERROIR</span>
            </div>
          </div>

          {/* Best Seller Typographic List */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="border-b border-[#8A5D2B]/25 pb-4 flex items-center justify-between">
              <h3 className="font-display text-2xl sm:text-3xl text-[#4A2C19] uppercase tracking-wider">
                Signature Menu
              </h3>
              <span className="text-xs uppercase tracking-widest text-[#8A5D2B] font-serif italic">
                {filteredItems.length} SELECTIONS
              </span>
            </div>

            {/* Items List with Clean Price Lines & Caramel Bronze accents */}
            <div className="divide-y divide-[#8A5D2B]/15 space-y-6 pt-2">
              {filteredItems.map((item) => {
                const isSelected = spotlightItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className={`pt-6 first:pt-0 group cursor-pointer transition-all duration-200 ${
                      isSelected ? 'translate-x-1.5' : 'hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <h4
                          className={`font-display text-lg sm:text-xl font-normal transition-colors ${
                            isSelected
                              ? 'text-[#8A5D2B] font-medium'
                              : 'text-[#352115] group-hover:text-[#8A5D2B]'
                          }`}
                        >
                          {item.name}
                        </h4>
                        {item.tag && (
                          <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-[#8A5D2B]/30 text-[#8A5D2B] bg-[#E5E0D6]/40 font-medium font-sans">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      
                      <span className="font-sans text-base sm:text-lg font-semibold text-[#8A5D2B] shrink-0 tracking-tight">
                        {item.priceFormatted}
                      </span>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-[#171512]/75 font-light leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Explore Full Dedicated Menu Page CTA */}
            <div className="pt-8 border-t border-[#8A5D2B]/25 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#FAF9F5] p-6 border border-[#8A5D2B]/20">
              <div className="text-left">
                <span className="block text-xs uppercase tracking-widest text-[#4A2C19] font-medium">
                  LOOKING FOR ALL SELECTIONS?
                </span>
                <span className="text-xs text-[#4A2C19]/70 mt-0.5 block">
                  Explore manual brews, traditional warm tonics, mocktails, and full culinary mains on our dedicated menu page.
                </span>
              </div>

              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#4A2C19] hover:bg-[#352115] text-[#FAF9F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm shrink-0"
              >
                <span>VIEW FULL MENU PAGE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
