import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/#hero' },
    { label: 'OUR STORY', href: '/#story' },
    { label: 'EXPERIENCE', href: '/#experience' },
    { label: 'BEST SELLERS', href: '/#menu' },
    { label: 'FULL MENU', href: '/menu', isPage: true },
    { label: 'GALLERY', href: '/#gallery' },
    { label: 'LOCATION', href: '/#location' },
    { label: 'RITUALS', href: '/#rituals' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F2EFE8]/95 backdrop-blur-md py-3.5 shadow-xs border-b border-[#BDA17D]/30'
            : 'bg-linear-to-b from-[#171512]/60 via-[#171512]/30 to-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-hidden"
          >
            <span
              className={`font-display text-2xl md:text-3xl tracking-[0.2em] font-medium transition-colors duration-300 ${
                isScrolled ? 'text-[#352115]' : 'text-[#FAF9F5]'
              }`}
            >
              {BUSINESS_CONFIG.brand.shortName}
            </span>
            <span
              className={`text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-sans font-medium transition-colors duration-300 ${
                isScrolled ? 'text-[#8A5D2B]' : 'text-[#FAF9F5]/80'
              }`}
            >
              COFFEE &amp; FOREST
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => {
              if (link.isPage) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-[11px] xl:text-xs tracking-[0.22em] uppercase font-medium transition-all duration-200 relative py-1 hover:text-[#8A5D2B] px-2 py-0.5 border ${
                      location.pathname === '/menu'
                        ? 'border-[#8A5D2B] text-[#8A5D2B]'
                        : isScrolled
                        ? 'border-[#8A5D2B]/30 text-[#4A2C19] hover:border-[#8A5D2B]'
                        : 'border-[#FAF9F5]/40 text-[#FAF9F5] hover:border-[#FAF9F5]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] xl:text-xs tracking-[0.22em] uppercase font-medium transition-all duration-200 relative py-1 hover:text-[#8A5D2B] ${
                    isScrolled ? 'text-[#352115]' : 'text-[#FAF9F5]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A5D2B] transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onReserveClick}
              className={`text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium px-5 md:px-6 py-2.5 transition-all duration-300 border flex items-center gap-2 group cursor-pointer ${
                isScrolled
                  ? 'border-[#4A2C19] text-[#4A2C19] hover:bg-[#4A2C19] hover:text-[#FAF9F5]'
                  : 'border-[#FAF9F5]/70 text-[#FAF9F5] hover:bg-[#FAF9F5] hover:text-[#352115]'
              }`}
            >
              <span>PLAN YOUR VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#352115]' : 'text-[#FAF9F5]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#171512]/60 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-xs bg-[#F2EFE8] border-l border-[#BDA17D]/30 shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#BDA17D]/30 mb-8">
              <div>
                <span className="font-display text-xl tracking-[0.2em] text-[#352115] font-semibold">
                  {BUSINESS_CONFIG.brand.shortName}
                </span>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#8A5D2B]">
                  PANCAWATI, BOGOR
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#352115] hover:text-[#8A5D2B]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => {
                if (link.isPage) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-display text-lg tracking-[0.1em] text-[#8A5D2B] font-semibold py-1 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-[#8A5D2B] font-sans tracking-normal">★</span>
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-lg tracking-[0.1em] text-[#352115] hover:text-[#8A5D2B] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#8A5D2B]/50 font-sans tracking-normal">→</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#BDA17D]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full text-center text-xs tracking-[0.2em] uppercase font-medium bg-[#4A2C19] text-[#FAF9F5] py-3.5 hover:bg-[#352115] transition-colors shadow-sm mb-4"
            >
              PLAN YOUR VISIT
            </button>
            <div className="text-center text-[10px] text-[#4A2C19]/70 tracking-widest uppercase">
              {BUSINESS_CONFIG.hours.summary.split('•')[0]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
