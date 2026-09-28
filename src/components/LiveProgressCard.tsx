import React from 'react';
import { CAMPAIGN_TARGET, TOTAL_PCS_TARGET, TOTAL_PRINTERS_TARGET } from '../data/campaignData';
import { Heart, Users, Target, ShieldCheck, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface LiveProgressCardProps {
  collectedAmount: number;
  donorCount: number;
  onOpenDonateModal: () => void;
  onScrollToBudget?: () => void;
}

export const LiveProgressCard: React.FC<LiveProgressCardProps> = ({
  collectedAmount,
  donorCount,
  onOpenDonateModal,
  onScrollToBudget,
}) => {
  const percentage = Math.min(100, Math.round((collectedAmount / CAMPAIGN_TARGET) * 1000) / 10);
  const remainingAmount = Math.max(0, CAMPAIGN_TARGET - collectedAmount);

  // Approximate sponsored units based on progress
  const pcsSponsored = Math.min(TOTAL_PCS_TARGET, Math.floor((collectedAmount / CAMPAIGN_TARGET) * TOTAL_PCS_TARGET));
  const printersSponsored = Math.min(TOTAL_PRINTERS_TARGET, Math.floor((collectedAmount / CAMPAIGN_TARGET) * TOTAL_PRINTERS_TARGET));

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden relative">
      {/* Top Banner strip */}
      <div className="bg-gradient-to-r from-[#002B66] to-[#0B3B7B] text-white px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Kutipan Langsung (Live Sync)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-300">
          <Clock size={13} className="text-amber-400" />
          <span>Kempen Berjalan Aktif</span>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        {/* Main Amount Overview */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <span>Terkumpul Setakat Ini</span>
              <span className="text-emerald-700 font-extrabold text-xs">({percentage}% Terkumpul)</span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002B66] font-mono tracking-tight mt-1">
              RM {collectedAmount.toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          <div className="sm:text-right">
            <span className="text-xs font-semibold text-slate-500 block">Sasaran Keseluruhan</span>
            <span className="text-xl sm:text-2xl font-black text-[#B91C1C] font-mono">
              RM {CAMPAIGN_TARGET.toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
            <span>Kemajuan Dana</span>
            <span className="font-bold text-[#002B66]">{percentage}% Dicapai</span>
          </div>
          <div className="relative w-full h-5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 transition-all duration-1000 shadow relative"
              style={{ width: `${Math.max(4, percentage)}%` }}
            >
              {/* Highlight stripe animation */}
              <div className="absolute inset-0 bg-white/20 w-full h-full skew-x-12 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between text-[11px] text-slate-500 mt-2">
            <span>Baki Diperlukan: <strong className="text-slate-800 font-mono">RM {remainingAmount.toLocaleString('ms-MY')}</strong></span>
            <span>Sasaran Penuh: <strong className="text-slate-800 font-mono">RM 110,935.00</strong></span>
          </div>
        </div>

        {/* Mini Item Target Progress Badges */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3">
            <div className="flex items-center justify-between text-xs text-blue-900 font-bold mb-1">
              <span>Set Komputer</span>
              <span className="text-blue-700 font-mono">{pcsSponsored} / {TOTAL_PCS_TARGET} Unit</span>
            </div>
            <div className="w-full bg-blue-200/60 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-700"
                style={{ width: `${(pcsSponsored / TOTAL_PCS_TARGET) * 100}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-blue-800/80 mt-1 block">
              Sasaran: 30 Set PC Makmal Lengkap
            </span>
          </div>

          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3">
            <div className="flex items-center justify-between text-xs text-amber-950 font-bold mb-1">
              <span>Unit Pencetak</span>
              <span className="text-amber-800 font-mono">{printersSponsored} / {TOTAL_PRINTERS_TARGET} Unit</span>
            </div>
            <div className="w-full bg-amber-200/60 rounded-full h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-600 h-2 rounded-full transition-all duration-700"
                style={{ width: `${(printersSponsored / TOTAL_PRINTERS_TARGET) * 100}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-amber-900/80 mt-1 block">
              Sasaran: 5 Unit Pencetak Sistem Ink Tank
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-100 text-center">
          <div className="p-2 bg-slate-50 rounded-lg">
            <Users size={16} className="mx-auto text-blue-600 mb-1" />
            <div className="text-base sm:text-lg font-bold text-slate-800">{donorCount}</div>
            <div className="text-[10px] sm:text-xs text-slate-500">Penyumbang</div>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg">
            <Target size={16} className="mx-auto text-amber-600 mb-1" />
            <div className="text-base sm:text-lg font-bold text-slate-800">650+</div>
            <div className="text-[10px] sm:text-xs text-slate-500">Pelajar Dibantu</div>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg">
            <ShieldCheck size={16} className="mx-auto text-emerald-600 mb-1" />
            <div className="text-base sm:text-lg font-bold text-emerald-700">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-500">Akaun Rasmi ASTA</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onOpenDonateModal}
            className="flex-1 py-3.5 px-6 bg-[#B91C1C] hover:bg-red-800 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-red-700/20 flex items-center justify-center gap-2 transition-all group"
          >
            <Heart size={18} className="text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
            <span>Sumbang Sekarang (FPX / QR)</span>
          </button>
          
          {onScrollToBudget && (
            <button
              onClick={onScrollToBudget}
              className="py-3.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Perincian Bajet</span>
              <ArrowRight size={15} />
            </button>
          )}
        </div>

        {/* Security badge note */}
        <div className="mt-3.5 flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
          <ShieldCheck size={13} className="text-emerald-600" />
          <span>Transaksi selamat di bawah kawalselia Persatuan Alumni SEMESTA (ASTA) & Pengurusan Sekolah</span>
        </div>
      </div>
    </div>
  );
};
