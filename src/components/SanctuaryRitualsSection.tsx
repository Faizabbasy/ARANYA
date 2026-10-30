import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { CloudFog, Sun, Moon, Wifi, Heart, Thermometer, Car, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';

export const SanctuaryRitualsSection: React.FC = () => {
  const rituals = [
    {
      time: '08:00 – 11:30',
      period: 'MORNING RITUAL',
      title: 'The Mountain Mist & Quiet Solitude',
      description:
        'Crisp 20°C highland air, dew on pine needles, and gentle quiet. The morning hours are ideal for solitary journaling, peaceful reading, and a slow-poured V60 single origin.',
      idealFor: 'Creative focus, solitary reflection, morning brew',
      recommendedItem: 'V60 Specialty Single Origin & Hot Croffle',
      icon: CloudFog,
    },
    {
      time: '12:00 – 16:00',
      period: 'MIDDAY CANOPY',
      title: 'Sun-Dappled Canopy & Highland Dining',
      description:
        'Sunlight filters through towering 30-meter pines while cool breezes sweep the open pavilion. A welcoming setting for shared meals, conversation, and chilled iced drinks.',
      idealFor: 'Casual gatherings, wholesome lunch, work from forest',
      recommendedItem: 'Nasi Goreng Kambing Rempah & Artisan Matcha',
      icon: Sun,
    },
    {
      time: '16:30 – 21:00',
      period: 'TWILIGHT LANTERNS',
      title: 'Amber Glow & Warm Heritage Tonics',
      description:
        'As dusk descends on Mount Pangrango, Edison fairy lights cast a warm amber glow over the stone steps. The mountain air turns brisk, inviting warm cups of ginger and spiced coconut milk.',
      idealFor: 'Intimate conversations, evening chill, date nights',
      recommendedItem: 'Wedang Jahe Rempah & Rujak Cireng Crispy',
      icon: Moon,
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      title: 'Work-from-Forest Ready',
      desc: 'Stable Wi-Fi and power outlets available in the semi-indoor glasshouse pavilion.',
    },
    {
      icon: Heart,
      title: 'Pet Friendly Outdoors',
      desc: 'Leashed pets are welcome across the pine forest terrace and natural gravel grounds.',
    },
    {
      icon: Thermometer,
      title: 'Highland Mountain Climate',
      desc: 'Average temperatures sit at 20°C–24°C. We suggest bringing a light jacket or knitwear.',
    },
    {
      icon: Car,
      title: 'Scenic Access & Parking',
      desc: 'Paved hillside road suited for all cars & motorbikes with dedicated on-site parking.',
    },
  ];

  const waNumberClean = BUSINESS_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const waInquiryUrl = `https://wa.me/${waNumberClean}?text=${encodeURIComponent(
    'Halo Aranya Coffee & Forest, saya ingin bertanya seputar kunjungan / reservasi area untuk acara intimate. Boleh dibantu informasinya?'
  )}`;

  return (
    <section id="rituals" className="relative py-24 md:py-36 bg-[#4A2C19] text-[#FAF9F5] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-[#352115]/60 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#8A5D2B]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#BDA17D]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-[#BDA17D] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#BDA17D]" />
              <span>A DAY AT ARANYA • PANCAWATI HIGHLANDS</span>
            </span>
            <span className="w-8 h-[1px] bg-[#BDA17D]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF9F5] tracking-tight">
            Three Rituals. <br />
            <span className="italic font-light text-[#BDA17D]">One Living Forest.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F2EFE8]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you arrive to catch the morning mist filtering through the pine canopy or linger until the fairy lights flicker at dusk, every hour reveals a different cadence of nature.
          </p>
        </div>

        {/* 3 Editorial Ritual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {rituals.map((ritual, idx) => {
            const Icon = ritual.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#352115]/85 border border-[#BDA17D]/30 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#BDA17D] hover:-translate-y-1 group"
              >
                <div>
                  {/* Top Bar with Time & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#BDA17D]/25 mb-6">
                    <span className="text-xs font-mono text-[#BDA17D] tracking-wider">
                      {ritual.time}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#4A2C19] border border-[#BDA17D]/35 flex items-center justify-center text-[#BDA17D] group-hover:bg-[#8A5D2B] group-hover:text-[#FAF9F5] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#BDA17D]/80 font-sans block mb-2 font-medium">
                    {ritual.period}
                  </span>

                  <h3 className="font-display text-2xl text-[#FAF9F5] font-normal leading-snug mb-4">
                    {ritual.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F2EFE8]/75 font-light leading-relaxed mb-6">
                    {ritual.description}
                  </p>
                </div>

                {/* Bottom Signature Pairing recommendation */}
                <div className="pt-6 border-t border-[#BDA17D]/20 space-y-2 text-[11px]">
                  <div className="text-[#BDA17D] uppercase tracking-wider font-medium">
                    Curated Pairing:
                  </div>
                  <div className="text-[#FAF9F5]/90 font-serif italic">
                    {ritual.recommendedItem}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visitor Amenities & Practical Guidance Grid */}
        <div className="bg-[#352115]/90 border border-[#BDA17D]/30 p-8 sm:p-12 mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#BDA17D] font-medium block mb-2">
              SANCTUARY AMENITIES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#FAF9F5]">
              Thoughtful Comforts for Every Visitor
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 border border-[#BDA17D]/40 bg-[#4A2C19] flex items-center justify-center text-[#BDA17D]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base text-[#FAF9F5] font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F2EFE8]/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Private Gatherings & WhatsApp Concierge Callout */}
        <div className="bg-[#FAF9F5] text-[#171512] border border-[#BDA17D]/60 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A5D2B] font-semibold block">
              INTIMATE GATHERINGS &amp; INQUIRIES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#352115]">
              Planning a Gathering or Private Photoshoot?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A2C19]/80 font-light leading-relaxed">
              Aranya welcomes family gatherings, community meetups, and creative brand photography beneath the pine canopy. Connect directly with our host desk on WhatsApp for space arrangements and curated menus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={waInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>
            <a
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 border border-[#8A5D2B]/40 hover:bg-[#E5E0D6] text-[#352115] text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

