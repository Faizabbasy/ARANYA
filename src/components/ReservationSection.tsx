import React, { useState } from 'react';
import { BUSINESS_CONFIG, buildReservationWhatsAppUrl } from '../config/business';
import { Calendar, Users, MessageSquare, Send, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10:00 – 12:00)',
    guests: '2 Guests',
    seatingArea: 'Pine Canopy Terrace (Outdoor)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedVoucher, setSubmittedVoucher] = useState<{
    url: string;
    code: string;
  } | null>(null);

  // Tomorrow as standard default minimum date
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'WhatsApp number should contain at least 8 digits.';
    }
    if (!formData.date) {
      errs.date = 'Please select a reservation date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = buildReservationWhatsAppUrl(formData);
    const reservationCode = 'ARN-' + Math.floor(100000 + Math.random() * 900000);

    setSubmittedVoucher({
      url: waUrl,
      code: reservationCode,
    });

    // Auto-open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="relative py-24 md:py-36 bg-[#4A2C19] text-[#F2EFE8] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-radial from-[#352115]/50 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#8A5D2B]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#BDA17D]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-[#BDA17D]">
                TABLE INQUIRIES &amp; RESERVATIONS
              </span>
              <span className="w-8 h-[1px] bg-[#BDA17D]" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF9F5] tracking-tight">
              Your Table Awaits.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#F2EFE8]/80 font-light max-w-lg mx-auto leading-relaxed">
              Make time for good coffee, good company, and meaningful moments.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#BDA17D] font-mono">
              <span>Direct WhatsApp Concierge: {BUSINESS_CONFIG.contact.whatsappDisplay}</span>
            </div>
          </div>

          {/* Form Container or Success Slip */}
          {submittedVoucher ? (
            <div className="bg-[#FAF9F5] text-[#171512] border border-[#BDA17D]/60 p-8 sm:p-12 shadow-2xl animate-fade-in">
              <div className="text-center max-w-md mx-auto space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#8A5D2B] mx-auto" />
                <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#8A5D2B] font-semibold">
                  RESERVATION REQUEST DISPATCHED
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#352115]">
                  Thank you, {formData.fullName}.
                </h3>
                <p className="text-xs text-[#4A2C19]/80 font-light leading-relaxed">
                  Your reservation inquiry reference is <strong className="font-mono text-[#352115]">{submittedVoucher.code}</strong>.
                  A WhatsApp message has been initiated to our hostess desk.
                </p>

                <div className="my-6 p-4 bg-[#E5E0D6]/60 border border-[#8A5D2B]/30 text-left text-xs space-y-1.5 text-[#352115]">
                  <div className="flex justify-between">
                    <span className="text-[#4A2C19]/70">Date:</span>
                    <span className="font-medium">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4A2C19]/70">Time:</span>
                    <span className="font-medium">{formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4A2C19]/70">Guests:</span>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4A2C19]/70">Seating:</span>
                    <span className="font-medium">{formData.seatingArea}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={submittedVoucher.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => setSubmittedVoucher(null)}
                    className="py-3 px-6 border border-[#8A5D2B]/40 hover:bg-[#E5E0D6] text-[#352115] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#352115]/80 backdrop-blur-sm border border-[#BDA17D]/30 p-8 sm:p-12 shadow-2xl space-y-8"
            >
              {/* Row 1: Full Name & WhatsApp Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#BDA17D] mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Raden Adrian"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#4A2C19]/60 border border-[#BDA17D]/35 px-4 py-3 text-sm text-[#FAF9F5] placeholder-[#FAF9F5]/30 focus:outline-hidden focus:border-[#BDA17D] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-300 font-light">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#BDA17D] mb-2 font-medium">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#BDA17D]/60" />
                    <input
                      type="tel"
                      placeholder="e.g. 0812 3456 7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#4A2C19]/60 border border-[#BDA17D]/35 pl-10 pr-4 py-3 text-sm text-[#FAF9F5] placeholder-[#FAF9F5]/30 focus:outline-hidden focus:border-[#BDA17D] transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-300 font-light">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Date, Time Slot, and Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#BDA17D] mb-2 font-medium">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#BDA17D]/60 pointer-events-none" />
                    <input
                      type="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#4A2C19]/60 border border-[#BDA17D]/35 pl-10 pr-4 py-3 text-sm text-[#FAF9F5] focus:outline-hidden focus:border-[#BDA17D] transition-colors [color-scheme:dark]"
                    />
                  </div>
                  {errors.date && (
                    <p className="mt-1 text-xs text-rose-300 font-light">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#BDA17D] mb-2 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#4A2C19] border border-[#BDA17D]/35 px-4 py-3 text-sm text-[#FAF9F5] focus:outline-hidden focus:border-[#BDA17D] transition-colors"
                  >
                    <option value="Morning (08:00 – 11:00)">Morning Coffee (08:00 – 11:00)</option>
                    <option value="Lunch / Afternoon (12:00 – 15:00)">Lunch &amp; Siesta (12:00 – 15:00)</option>
                    <option value="Golden Hour (15:30 – 18:00)">Golden Hour &amp; Mist (15:30 – 18:00)</option>
                    <option value="Twilight / Evening (18:30 – 21:00)">Twilight Lanterns (18:30 – 21:00)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#BDA17D] mb-2 font-medium">
                    Party Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#BDA17D]/60 pointer-events-none" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#4A2C19] border border-[#BDA17D]/35 pl-10 pr-4 py-3 text-sm text-[#FAF9F5] focus:outline-hidden focus:border-[#BDA17D] transition-colors"
                    >
                      <option value="1 Guest">1 Guest (Solo sanctuary)</option>
                      <option value="2 Guests">2 Guests (Couple / Pair)</option>
                      <option value="3 - 4 Guests">3 – 4 Guests (Small table)</option>
                      <option value="5 - 8 Guests">5 – 8 Guests (Family gathering)</option>
                      <option value="9+ Group">9+ Guests (Private group)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Seating Preference */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#BDA17D] mb-2 font-medium">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Pine Canopy Terrace (Outdoor)',
                    'Glasshouse Pavilion (Semi-Indoor)',
                    'Sunken Gravel Lounge',
                  ].map((area) => (
                    <label
                      key={area}
                      className={`flex items-center gap-3 p-3 border text-xs cursor-pointer transition-colors ${
                        formData.seatingArea === area
                          ? 'border-[#BDA17D] bg-[#8A5D2B]/30 text-[#FAF9F5]'
                          : 'border-[#BDA17D]/25 bg-[#4A2C19]/30 text-[#FAF9F5]/70 hover:border-[#BDA17D]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="seatingArea"
                        value={area}
                        checked={formData.seatingArea === area}
                        onChange={() => setFormData({ ...formData, seatingArea: area })}
                        className="accent-[#8A5D2B]"
                      />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Notes / Special Requests */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#BDA17D] mb-2 font-medium">
                  Special Notes or Dietary Preferences (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#BDA17D]/60 pointer-events-none" />
                  <textarea
                    rows={3}
                    placeholder="e.g. Celebrating an anniversary, need a quiet corner table with electric outlet..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#4A2C19]/60 border border-[#BDA17D]/35 pl-10 pr-4 py-3 text-sm text-[#FAF9F5] placeholder-[#FAF9F5]/30 focus:outline-hidden focus:border-[#BDA17D] transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#BDA17D]/25">
                <div className="flex items-center gap-2 text-xs text-[#BDA17D]/90">
                  <ShieldCheck className="w-4 h-4 text-[#BDA17D]" />
                  <span>Immediate confirmation via verified WhatsApp concierge.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#8A5D2B] hover:bg-[#FAF9F5] text-[#FAF9F5] hover:text-[#352115] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>REQUEST A RESERVATION</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

