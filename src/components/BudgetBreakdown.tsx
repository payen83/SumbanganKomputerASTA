import React, { useState } from 'react';
import { BUDGET_BREAKDOWN, CAMPAIGN_TARGET } from '../data/campaignData';
import { BudgetItem } from '../types';
import { Monitor, Printer, CheckCircle, FileText, ChevronRight, X } from 'lucide-react';

export const BudgetBreakdown: React.FC<{ onOpenDonateModal: () => void }> = ({ onOpenDonateModal }) => {
  const [selectedItem, setSelectedItem] = useState<BudgetItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-blue-600" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-amber-600" />;
      default:
        return <FileText className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <section id="pecahan-bajet" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#002B66] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <FileText size={14} className="text-[#002B66]" />
            <span>Ketelusan Kewangan 100% Beraudit</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Perincian Anggaran Bajet Kempen RM 110,935.00
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Setiap sen sumbangan anda diagihkan dengan telus mengikut sebut harga rasmi pembekal berdaftar Kementerian Kewangan (MOF) dan dipersetujui jawatankuasa bersama ASTA & Pengurusan Sekolah.
          </p>
        </div>

        {/* Budget Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUDGET_BREAKDOWN.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#002B66] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-100">{getIcon(item.icon)}</div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 block uppercase">
                        Kuantiti: {item.quantity}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-slate-500 block">Jumlah Kos</span>
                    <span className="text-lg sm:text-xl font-extrabold text-[#002B66] font-mono">
                      RM {item.totalPrice.toLocaleString('ms-MY')}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Specs list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {item.specs.slice(0, 5).map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                  {item.specs.length > 5 && (
                    <div className="text-xs text-slate-400 italic pl-5">
                      +{item.specs.length - 5} spesifikasi & pakej perisian tambahan
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Kadar per unit: <strong>RM {item.unitPrice.toLocaleString('ms-MY', { minimumFractionDigits: item.unitPrice % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 })}</strong>
                </span>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="text-xs font-bold text-[#002B66] hover:text-blue-800 flex items-center gap-1 p-1 hover:underline"
                >
                  <span>Lihat Spesifikasi Lengkap</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary Card */}
        <div className="mt-10 bg-gradient-to-r from-[#002B66] to-[#0D3B75] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Ringkasan Sasaran Tabung Rasmi
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Jumlah Sasaran Keseluruhan Projek Makmal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Meliputi perolehan 30 set desktop PC ACER Veriton 2000 dan 5 unit pencetak serbaguna CANON PIXMA AIO TANK G3010 dengan 3 tahun jaminan rasmi onsite.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="text-center sm:text-right">
              <span className="text-xs text-slate-300 block">Sasaran Tepat</span>
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                RM {CAMPAIGN_TARGET.toLocaleString('ms-MY', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <button
              onClick={onOpenDonateModal}
              className="py-3 px-6 bg-[#B91C1C] hover:bg-red-800 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all"
            >
              Taja Bahagian Ini
            </button>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-blue-700 block uppercase">
                  Perincian Item ({selectedItem.quantity})
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-0.5">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="my-4 space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500 block">Anggaran Kos Seunit</span>
                  <span className="text-base font-bold text-slate-900 font-mono">
                    RM {selectedItem.unitPrice.toLocaleString('ms-MY', { minimumFractionDigits: selectedItem.unitPrice % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Jumlah ({selectedItem.quantity})</span>
                  <span className="text-xl font-black text-[#002B66] font-mono">
                    RM {selectedItem.totalPrice.toLocaleString('ms-MY')}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Spesifikasi Teknikal & Piawaian:
                </h4>
                <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700">
                  {selectedItem.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 italic">
                {selectedItem.description}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenDonateModal();
                }}
                className="flex-1 py-3 bg-[#B91C1C] hover:bg-red-800 text-white font-bold text-xs rounded-xl shadow"
              >
                Sumbang Untuk Item Ini
              </button>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-3 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
