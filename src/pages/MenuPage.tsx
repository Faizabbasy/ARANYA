import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';
import { ArrowLeft, Search, Printer, Phone, Compass } from 'lucide-react';

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = BUSINESS_CONFIG.menuCategories.filter((c) => c.id !== 'all');

  const filteredItems = BUSINESS_CONFIG.menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-[#F2EFE8] text-[#171512] font-sans selection:bg-[#4A2C19] selection:text-[#FAF9F5]">
      {/* Paper texture overlay */}
      <div className="paper-texture-overlay" aria-hidden="true" />

      {/* Top Editorial Navbar */}
      <header className="sticky top-0 z-40 bg-[#F2EFE8]/95 backdrop-blur-md border-b border-[#BDA17D]/30 py-4 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#4A2C19] hover:text-[#8A5D2B] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO SANCTUARY</span>
          </Link>

          <Link to="/" className="text-center focus:outline-hidden">
            <span className="font-display text-xl sm:text-2xl tracking-[0.2em] font-medium text-[#352115] block">
              {BUSINESS_CONFIG.brand.shortName}
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase font-sans text-[#8A5D2B] block -mt-0.5">
              COFFEE &amp; FOREST
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              aria-label="Print Menu"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-[#8A5D2B]/30 hover:border-[#8A5D2B] text-xs uppercase tracking-wider text-[#4A2C19] hover:bg-[#E5E0D6] transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#8A5D2B]" />
              <span>PRINT / PDF</span>
            </button>
            <Link
              to="/#reservation"
              className="text-[11px] uppercase tracking-[0.18em] font-medium px-4 sm:px-5 py-2 bg-[#4A2C19] hover:bg-[#352115] text-[#FAF9F5] transition-colors shadow-xs"
            >
              RESERVE
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 bg-[#E5E0D6]/70 border-b border-[#8A5D2B]/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-[#8A5D2B]">
              THE COMPLETE COMPENDIUM • PANCAWATI HIGHLANDS
            </span>
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal text-[#352115] tracking-tight">
            The Aranya Menu.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#4A2C19]/80 font-light max-w-2xl mx-auto leading-relaxed">
            A thoughtful repertoire of slow-crafted coffee, single-origin manual brews, warming Sundanese heritage remedies, and comforting highland cuisine.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8A5D2B] font-serif italic">
            <span>Verified Pancawati Recipes</span>
            <span>•</span>
            <span>Price Range: IDR 25,000 – 50,000</span>
            <span>•</span>
            <span>Freshly Crafted to Order</span>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Search Bar */}
      <div className="sticky top-[73px] z-30 bg-[#F2EFE8]/95 backdrop-blur-md border-b border-[#8A5D2B]/20 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all border ${
                selectedCategory === 'all'
                  ? 'bg-[#4A2C19] text-[#FAF9F5] border-[#4A2C19]'
                  : 'bg-[#FAF9F5] text-[#352115] border-[#8A5D2B]/25 hover:border-[#8A5D2B]'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? 'bg-[#4A2C19] text-[#FAF9F5] border-[#4A2C19]'
                    : 'bg-[#FAF9F5] text-[#352115] border-[#8A5D2B]/25 hover:border-[#8A5D2B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A5D2B]" />
            <input
              type="text"
              placeholder="Search coffee or dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAF9F5] border border-[#8A5D2B]/30 text-xs text-[#352115] placeholder-[#4A2C19]/40 focus:outline-hidden focus:border-[#4A2C19] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Menu Catalog */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-20">
        {selectedCategory === 'all' && !searchQuery ? (
          // Grouped by Category in Authentic European Café Style
          categories.map((category) => {
            const items = BUSINESS_CONFIG.menuItems.filter((i) => i.category === category.id);
            if (items.length === 0) return null;

            return (
              <section key={category.id} className="space-y-8">
                {/* Section Title with Fine Bronze Hairline Rules */}
                <div className="flex items-center gap-4 border-b border-[#8A5D2B]/30 pb-3">
                  <span className="w-8 h-[2px] bg-[#8A5D2B]" />
                  <h2 className="font-display text-2xl sm:text-3xl text-[#4A2C19] uppercase tracking-wider font-normal">
                    {category.label}
                  </h2>
                  <span className="grow h-[1px] bg-[#8A5D2B]/20" />
                  <span className="text-xs uppercase tracking-widest text-[#8A5D2B] font-serif italic">
                    {items.length} SELECTIONS
                  </span>
                </div>

                {/* Two-Column Typographic Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="group border-b border-[#8A5D2B]/15 pb-6 hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-display text-lg sm:text-xl text-[#352115] group-hover:text-[#8A5D2B] transition-colors font-medium">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-[#8A5D2B]/30 text-[#8A5D2B] bg-[#E5E0D6]/50 font-medium font-sans">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <span className="font-sans text-base font-semibold text-[#8A5D2B] shrink-0">
                          {item.priceFormatted}
                        </span>
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-[#171512]/75 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          // Filtered Search Results
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group border-b border-[#8A5D2B]/15 pb-6 hover:translate-x-1 transition-transform duration-200"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display text-lg sm:text-xl text-[#352115] group-hover:text-[#8A5D2B] transition-colors font-medium">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-[#8A5D2B]/30 text-[#8A5D2B] bg-[#E5E0D6]/50 font-medium font-sans">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-sans text-base font-semibold text-[#8A5D2B] shrink-0">
                    {item.priceFormatted}
                  </span>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-[#171512]/75 font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#4A2C19]/60 font-sans">
                  <span>Category: {item.categoryLabel}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#4A2C19]/70 space-y-3">
            <Compass className="w-8 h-8 text-[#8A5D2B] mx-auto opacity-60" />
            <h3 className="font-display text-xl text-[#352115]">No selections found</h3>
            <p className="text-xs text-[#4A2C19]/60 font-light max-w-sm mx-auto">
              No menu items match "{searchQuery}". Try searching for Americano, V60, Matcha, or Soto Betawi.
            </p>
          </div>
        )}
      </main>

      {/* Bottom Reservation Callout Banner */}
      <section className="bg-[#4A2C19] text-[#FAF9F5] py-16 px-6 sm:px-8 border-t border-[#BDA17D]/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#BDA17D] font-medium block">
            VISIT PANCAWATI HIGHLANDS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#FAF9F5]">
            Savor These Selections in Person.
          </h2>
          <p className="text-sm text-[#F2EFE8]/80 font-light max-w-lg mx-auto leading-relaxed">
            Surrounded by cool mountain breezes, rustling pine canopies, and warm hospitality.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#reservation"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#8A5D2B] hover:bg-[#FAF9F5] text-[#FAF9F5] hover:text-[#352115] text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center shadow-lg"
            >
              RESERVE A TABLE
            </Link>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#FAF9F5]/40 hover:border-[#FAF9F5] text-[#FAF9F5] text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#BDA17D]" />
              <span>WHATSAPP CONCIERGE</span>
            </a>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#352115] text-[#FAF9F5]/70 py-8 px-6 sm:px-8 border-t border-[#BDA17D]/20 text-xs text-center flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <div>
          © {new Date().getFullYear()} {BUSINESS_CONFIG.brand.name}. Pancawati, Bogor — Indonesia.
        </div>
        <Link to="/" className="text-[#BDA17D] hover:underline uppercase tracking-widest text-[11px]">
          Return to Sanctuary Home →
        </Link>
      </footer>
    </div>
  );
};
