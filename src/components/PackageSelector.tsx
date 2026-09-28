import React from 'react';
import { DONATION_PACKAGES } from '../data/campaignData';
import { Heart, Sparkles, Check, ArrowRight } from 'lucide-react';

interface PackageSelectorProps {
  onSelectPackage: (packageId: string) => void;
  onOpenDonateModal: () => void;
}

export const PackageSelector: React.FC<PackageSelectorProps> = ({ onSelectPackage, onOpenDonateModal }) => {
  return (
    <section id="pakej-sumbangan" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#002B66] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Sparkles size={14} className="text-amber-500" />
            <span>Pilihan Tajaan Berperingkat</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Pilih Pakej Infaq & Penajaan Makmal Komputer
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilihlah mana-mana pakej mengikut keselesaan dan kemampuan anda. Setiap penyumbang layak menerima E-Resit Rasmi dan Sijil Penghargaan Kempen.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DONATION_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between relative ${
                pkg.popular
                  ? 'bg-white border-2 border-amber-400 shadow-xl ring-4 ring-amber-400/10'
                  : 'bg-white border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular / Special Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug mt-1">
                  {pkg.name}
                </h3>
                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-black text-[#002B66] font-mono">
                    RM {pkg.amount.toLocaleString('ms-MY')}
                  </span>
                  {pkg.id === 'pkg-custom' && (
                    <span className="text-xs text-slate-500 block mt-1">
                      (Boleh diubah mengikut hasrat anda)
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {pkg.description}
                </p>

                {/* Impact Highlight */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700 mb-6">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{pkg.impactLabel}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectPackage(pkg.id)}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  pkg.popular
                    ? 'bg-[#B91C1C] hover:bg-red-800 text-white shadow-md shadow-red-700/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>Pilih Pakej Ini</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Custom open amount callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600">
            Ingin menyumbang amaun pilihan sendiri atau atas nama syarikat korporat?{' '}
            <button
              onClick={onOpenDonateModal}
              className="font-bold text-[#002B66] underline hover:text-blue-800"
            >
              Klik di sini untuk mengisi amaun pilihan anda.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
