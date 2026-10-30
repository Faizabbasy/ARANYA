import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { MapPin, Navigation, Clock, Check, Copy, Car, Mountain } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Check if currently open according to Western Indonesian Time (WIB, UTC+7)
  const getOpenStatus = () => {
    const now = new Date();
    // UTC offset for WIB is UTC+7
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const wibTime = new Date(utc + 3600000 * 7);
    const day = wibTime.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = wibTime.getHours();
    const minutes = wibTime.getMinutes();
    const currentTimeVal = hours + minutes / 60;

    let openTime = 10;
    let closeTime = 21;

    if (day === 5) {
      // Friday
      openTime = 10;
      closeTime = 22;
    } else if (day === 0 || day === 6) {
      // Sat or Sun
      openTime = 8;
      closeTime = 22;
    }

    const isOpen = currentTimeVal >= openTime && currentTimeVal < closeTime;
    return {
      isOpen,
      timeString: wibTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    };
  };

  const status = getOpenStatus();

  return (
    <section id="location" className="relative py-24 md:py-36 bg-[#E5E0D6] text-[#171512] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-[#8A5D2B]">
              PANCAWATI HIGHLANDS
            </span>
            <span className="w-8 h-[1px] bg-[#8A5D2B]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#352115] tracking-tight">
            Find Your Way to Aranya.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A2C19]/80 font-light max-w-xl mx-auto leading-relaxed">
            Perched at 850m elevation in the quiet pine hills of Pancawati, Bogor.
          </p>
        </div>

        {/* Main Content Grid: Information + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Business Details & Practical Guidance */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#FAF9F5] p-8 sm:p-10 border border-[#8A5D2B]/30 shadow-xs">
            <div className="space-y-6">
              {/* Live Status Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-[#8A5D2B]/20">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      status.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-[#8A5D2B]'
                    }`}
                  />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#352115]">
                    {status.isOpen ? 'Open Today' : 'Closed for the Evening'}
                  </span>
                </div>
                <span className="text-[11px] text-[#4A2C19]/70 font-mono">
                  {status.timeString} WIB
                </span>
              </div>

              {/* Verified Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#8A5D2B]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-sans">
                    PHYSICAL DESTINATION
                  </span>
                </div>
                <h3 className="font-display text-xl text-[#352115] font-normal">
                  {BUSINESS_CONFIG.brand.name}
                </h3>
                <p className="text-sm text-[#171512]/80 leading-relaxed font-light">
                  {BUSINESS_CONFIG.location.address}
                </p>

                {/* Copy Address Button */}
                <button
                  onClick={handleCopyAddress}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#8A5D2B] hover:text-[#4A2C19] font-medium uppercase tracking-wider transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Hours */}
              <div className="space-y-3 pt-4 border-t border-[#8A5D2B]/20">
                <div className="flex items-center gap-2 text-[#8A5D2B]">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-sans">
                    OPERATING SCHEDULE
                  </span>
                </div>
                <div className="text-xs space-y-1.5 text-[#352115]/90 font-light">
                  <div className="flex justify-between">
                    <span>Monday – Thursday:</span>
                    <span className="font-medium">10:00 – 21:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-medium">10:00 – 22:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday – Sunday:</span>
                    <span className="font-medium">08:00 – 22:00 WIB</span>
                  </div>
                </div>
              </div>

              {/* Price Range & Elevation */}
              <div className="pt-4 border-t border-[#8A5D2B]/20 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#8A5D2B]">
                    AVERAGE SPEND
                  </span>
                  <span className="font-medium text-[#352115] mt-0.5 block">
                    {BUSINESS_CONFIG.location.priceRange}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#8A5D2B]">
                    ELEVATION
                  </span>
                  <span className="font-medium text-[#352115] mt-0.5 block">
                    850m Highland Cool
                  </span>
                </div>
              </div>

              {/* Road Advice */}
              <div className="p-4 bg-[#E5E0D6]/60 border border-[#8A5D2B]/20 text-xs text-[#4A2C19]/85 space-y-1.5">
                <div className="flex items-center gap-1.5 font-medium uppercase tracking-wider text-[10px] text-[#352115]">
                  <Car className="w-3.5 h-3.5 text-[#8A5D2B]" />
                  <span>Road &amp; Transit Guidance</span>
                </div>
                <p className="font-light leading-relaxed">
                  The route passes picturesque hillside pine groves. Roads are accessible for all passenger vehicles and motorcycles. On-site shaded parking is provided.
                </p>
              </div>
            </div>

            {/* Get Directions CTA Button */}
            <div className="pt-6 border-t border-[#8A5D2B]/20">
              <a
                href={BUSINESS_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#4A2C19] hover:bg-[#352115] text-[#FAF9F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm text-center"
              >
                <Navigation className="w-4 h-4 text-[#BDA17D] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Embed with Luxury Frame */}
          <div className="lg:col-span-7 relative flex flex-col">
            <div className="w-full h-full min-h-[420px] lg:min-h-full border border-[#8A5D2B]/30 bg-[#FAF9F5] p-3 shadow-xs flex flex-col">
              <div className="relative w-full grow overflow-hidden bg-[#E5E0D6] border border-[#8A5D2B]/20">
                <iframe
                  title="Verified Location of Aranya Coffee and Forest in Pancawati Bogor"
                  src={BUSINESS_CONFIG.location.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '440px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-25 contrast-105"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="pt-3 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-[#4A2C19]/80 uppercase tracking-widest gap-2">
                <span className="flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-[#8A5D2B]" />
                  <span>Mount Salak &amp; Pangrango Foothills</span>
                </span>
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A5D2B] hover:text-[#352115] underline decoration-[#8A5D2B]/40 transition-colors"
                >
                  View Large Satellite Map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

