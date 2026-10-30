import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import type { MenuItem } from '../config/business';
import { X, Search, Printer } from 'lucide-react';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onItemSelect?: (item: MenuItem) => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = BUSINESS_CONFIG.menuCategories.filter(c => c.id !== 'all');

  const filteredItems = BUSINESS_CONFIG.menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171512]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#F2EFE8] border border-[#8A5D2B]/40 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Header - Editorial Menu Cover Header */}
        <div className="bg-[#FAF9F5] border-b border-[#8A5D2B]/25 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#8A5D2B] font-medium mb-1">
              <span>{BUSINESS_CONFIG.brand.since}</span>
              <span>•</span>
              <span>PANCAWATI, BOGOR</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#352115] tracking-wide">
              {BUSINESS_CONFIG.brand.name}
            </h2>
            <p className="text-xs text-[#4A2C19]/75 italic font-serif mt-0.5">
              The Complete Botanical &amp; Highland Café Menu
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              aria-label="Print or save PDF menu"
              className="p-2 border border-[#8A5D2B]/30 hover:border-[#8A5D2B] text-[#4A2C19] hover:bg-[#E5E0D6] transition-colors rounded-none flex items-center gap-1.5 text-xs uppercase tracking-wider"
              title="Print menu"
            >
              <Printer className="w-3.5 h-3.5 text-[#8A5D2B]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 border border-[#8A5D2B]/30 hover:border-[#8A5D2B] text-[#4A2C19] hover:bg-[#E5E0D6] transition-colors"
              aria-label="Close full menu modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#E5E0D6]/60 border-b border-[#8A5D2B]/20 p-4 sm:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors border ${
                activeCategory === 'all'
                  ? 'bg-[#4A2C19] text-[#FAF9F5] border-[#4A2C19]'
                  : 'bg-[#FAF9F5] text-[#352115] border-[#8A5D2B]/30 hover:border-[#8A5D2B]'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors border ${
                  activeCategory === cat.id
                    ? 'bg-[#4A2C19] text-[#FAF9F5] border-[#4A2C19]'
                    : 'bg-[#FAF9F5] text-[#352115] border-[#8A5D2B]/30 hover:border-[#8A5D2B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A5D2B]" />
            <input
              type="text"
              placeholder="Search coffee or dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-1.5 bg-[#FAF9F5] border border-[#8A5D2B]/30 text-xs text-[#352115] focus:outline-hidden focus:border-[#4A2C19]"
            />
          </div>
        </div>

        {/* Scrollable Menu Catalog */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-12">
          {activeCategory === 'all' && !searchQuery ? (
            // Grouped by Category in Authentic Editorial Style
            categories.map((category) => {
              const items = BUSINESS_CONFIG.menuItems.filter(i => i.category === category.id);
              if (items.length === 0) return null;

              return (
                <div key={category.id} className="space-y-6">
                  {/* Category Title Header with Hairline Rules */}
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#8A5D2B]" />
                    <h3 className="font-display text-xl sm:text-2xl text-[#4A2C19] uppercase tracking-widest">
                      {category.label}
                    </h3>
                    <span className="grow h-[1px] bg-[#8A5D2B]/20" />
                  </div>

                  {/* Two-column menu grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="group border-b border-[#8A5D2B]/15 pb-4">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="font-display text-base text-[#352115] group-hover:text-[#8A5D2B] transition-colors font-medium">
                            {item.name}
                          </h4>
                          <span className="font-sans text-sm font-semibold text-[#8A5D2B] shrink-0">
                            {item.priceFormatted}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[#171512]/75 font-light leading-relaxed">
                          {item.description}
                        </p>
                        {item.tag && (
                          <span className="inline-block mt-2 text-[9px] uppercase tracking-wider text-[#8A5D2B] font-medium px-2 py-0.5 bg-[#E5E0D6]/60 border border-[#8A5D2B]/25">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Filtered or Search View
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group border-b border-[#8A5D2B]/15 pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-base text-[#352115] group-hover:text-[#8A5D2B] transition-colors font-medium">
                      {item.name}
                    </h4>
                    <span className="font-sans text-sm font-semibold text-[#8A5D2B] shrink-0">
                      {item.priceFormatted}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#171512]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-wider text-[#4A2C19]/60 font-sans">
                      {item.categoryLabel}
                    </span>
                    {item.tag && (
                      <span className="text-[9px] uppercase tracking-wider text-[#8A5D2B] font-medium px-2 py-0.5 bg-[#E5E0D6]/60 border border-[#8A5D2B]/25">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-[#4A2C19]/60 text-sm">
              No menu selections match your search.
            </div>
          )}
        </div>

        {/* Modal Footer Notes */}
        <div className="bg-[#FAF9F5] border-t border-[#8A5D2B]/20 p-4 sm:px-8 text-center text-[11px] text-[#4A2C19]/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>* All prices are in Indonesian Rupiah (IDR), inclusive of government hospitality taxes.</span>
          <span className="italic font-serif">Aranya Coffee and Forest — Pancawati, Bogor</span>
        </div>
      </div>
    </div>
  );
};
