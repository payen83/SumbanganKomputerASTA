import React from 'react';
import { LiveProgressCard } from './LiveProgressCard';
import { PosterCard } from './PosterCard';
import { Sparkles, Shield, Heart, MonitorCheck, Printer, Award } from 'lucide-react';

interface HeroProps {
  collectedAmount: number;
  donorCount: number;
  onOpenDonateModal: () => void;
  onSelectPackage: (packageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  collectedAmount,
  donorCount,
  onOpenDonateModal,
  onSelectPackage,
}) => {
  const scrollToBudget = () => {
    document.getElementById('pecahan-bajet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-8 pb-16 sm:pt-12 sm:pb-20">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/50 via-amber-50/30 to-transparent pointer-events-none -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Label */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Kempen Rasmi Tabung Pembangunan ICT 2026</span>
            <span className="text-slate-300">·</span>
            <span className="text-[#002B66] font-bold">SEMESTA Raub & ASTA Tradition</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1">
              <Shield size={14} className="text-emerald-600" />
              Sumbangan Telus Beraudit
            </span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span className="hidden sm:flex items-center gap-1">
              <Award size={14} className="text-amber-500" />
              E-Resit Rasmi Segera
            </span>
          </div>
        </div>

        {/* Main Headlines */}
        <div className="max-w-3xl mb-8">
          <div className="inline-block bg-[#F5A623] text-slate-950 font-black text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3">
            PROGRAM SUMBANGAN
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#002B66] leading-[1.08]">
            SET KOMPUTER UNTUK{' '}
            <span className="text-[#B91C1C] block sm:inline">MAKMAL KOMPUTER SEMESTA</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            Memperkasa pembelajaran digital anak-anak Sekolah Menengah Sains Tengku Abdullah (SEMESTA), Raub melalui kemudahan teknologi moden dan berkualiti demi melahirkan generasi saintis, jurutera perisian, dan cendekiawan berdaya saing global.
          </p>
        </div>

        {/* Two-Column Grid: Live Progress on left, Digital Poster on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Progress & Fast Infaq Options (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <LiveProgressCard
              collectedAmount={collectedAmount}
              donorCount={donorCount}
              onOpenDonateModal={onOpenDonateModal}
              onScrollToBudget={scrollToBudget}
            />

            {/* Quick Infaq Buttons */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pilih Amaun Pantas (Sekali Klik)
                </span>
                <span className="text-xs text-amber-700 font-semibold">Resit segera disediakan</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  onClick={() => onSelectPackage('pkg-infaq-ikhlas')}
                  className="p-3 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-left group"
                >
                  <span className="text-xs font-bold text-slate-800 block group-hover:text-amber-800">Infaq Kasih</span>
                  <span className="text-lg font-black text-[#002B66] font-mono">RM 50</span>
                </button>
                <button
                  onClick={() => onSelectPackage('pkg-infaq-ikhlas')}
                  className="p-3 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-left group"
                >
                  <span className="text-xs font-bold text-slate-800 block group-hover:text-amber-800">Jariah Budi</span>
                  <span className="text-lg font-black text-[#002B66] font-mono">RM 100</span>
                </button>
                <button
                  onClick={() => onSelectPackage('pkg-ram-ssd')}
                  className="p-3 rounded-xl border border-blue-200 bg-blue-50/40 hover:bg-blue-50 transition-all text-left group"
                >
                  <span className="text-xs font-bold text-blue-900 block">Amal Ihsan</span>
                  <span className="text-lg font-black text-blue-900 font-mono">RM 350</span>
                </button>
                <button
                  onClick={() => onSelectPackage('pkg-pc-half')}
                  className="p-3 rounded-xl border border-amber-300 bg-amber-50/60 hover:bg-amber-100/60 transition-all text-left group"
                >
                  <span className="text-xs font-bold text-amber-900 block">1/2 Unit PC</span>
                  <span className="text-lg font-black text-[#B91C1C] font-mono">RM 1,799</span>
                </button>
              </div>

              {/* Emotional quote bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-600">
                <Heart size={16} className="text-red-500 fill-red-500 shrink-0" />
                <p className="italic">
                  “Apabila mati anak Adam, terputuslah amalannya kecuali tiga perkara: sedekah jariah, ilmu yang bermanfaat, dan anak soleh yang mendoakannya.” (HR Muslim)
                </p>
              </div>
            </div>

            {/* Quick target feature tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <div className="p-2.5 rounded-lg bg-blue-100 text-[#002B66]">
                  <MonitorCheck size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">30 Set Desktop ACER Veriton 2000</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Intel Core i3-14100, 8GB DDR5, 512GB SSD, Monitor ACER 23.8" 144Hz, Windows 11 Home & Office Home 2024 (3 Tahun Jaminan Onsite).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900">
                  <Printer size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">5 Unit Pencetak CANON PIXMA G3010</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Sistem Ink Tank AIO (Cetak, Imbas, Salin) dengan Wi-Fi & 3 Tahun Jaminan Onsite CANON Malaysia untuk modul peperiksaan murid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Poster Card Replica (5 cols on lg) */}
          <div className="lg:col-span-5">
            <PosterCard onOpenDonateModal={onOpenDonateModal} />
          </div>
        </div>
      </div>
    </section>
  );
};
