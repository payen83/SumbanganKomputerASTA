import React, { useRef } from 'react';
import { AstaLogo, SemestaCrest } from './Logos';
import { CheckCircle2, Download, Printer, Share2, X, Award, ShieldCheck, Heart } from 'lucide-react';

interface ReceiptData {
  name: string;
  amount: number;
  packageType: string;
  message?: string;
  isAnonymous: boolean;
  referenceId: string;
  paymentMethod: string;
  email: string;
  phone: string;
  date: string;
}

interface OfficialReceiptModalProps {
  receiptData: ReceiptData | null;
  onClose: () => void;
}

export const OfficialReceiptModal: React.FC<OfficialReceiptModalProps> = ({ receiptData, onClose }) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  if (!receiptData) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto animate-in zoom-in-95">
        {/* Top Celebration Bar */}
        <div className="bg-gradient-to-r from-emerald-600 via-[#002B66] to-[#002B66] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-amber-300">
              <Award size={24} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                Sumbangan Berjaya Disahkan
              </span>
              <h3 className="font-extrabold text-base sm:text-lg">
                Jazakallahu Khairan Kathira!
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Certificate / Receipt Canvas */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]" ref={receiptRef}>
          {/* Printable Container */}
          <div className="border-4 border-double border-slate-300 rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-50 via-white to-amber-50/20 relative">
            {/* Watermark in background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
              <SemestaCrest size={320} />
            </div>

            {/* Header with Logos */}
            <div className="flex items-start justify-between border-b-2 border-slate-200 pb-5 mb-5">
              <div className="flex items-center gap-3">
                <SemestaCrest size={50} />
                <AstaLogo size={46} />
                <div className="leading-tight">
                  <h4 className="text-sm font-black text-[#002B66] uppercase">
                    SEMESTA RAUB & ASTA TRADITION
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    Sekolah Menengah Sains Tengku Abdullah, 27600 Raub, Pahang
                  </span>
                  <span className="text-[10px] text-amber-700 font-semibold block">
                    Tabung Pembangunan Digital & Komputer Makmal
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">E-Resit Rasmi</span>
                <span className="text-xs font-mono font-bold text-slate-900">{receiptData.referenceId}</span>
                <span className="text-[10px] text-slate-500 block">{receiptData.date}</span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center my-4">
              <h2 className="text-lg sm:text-xl font-black text-[#002B66] uppercase tracking-wide">
                RESIT SUMBANGAN & SIJIL PENGHARGAAN
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Pengesahan penerimaan sumbangan ikhlas demi kemajuan digital murid SEMESTA
              </p>
            </div>

            {/* Details Table */}
            <div className="my-5 bg-white rounded-xl border border-slate-200 overflow-hidden text-xs">
              <div className="divide-y divide-slate-100">
                <div className="grid grid-cols-3 p-3 bg-slate-50/70 font-semibold text-slate-600">
                  <span>Nama Penyumbang:</span>
                  <span className="col-span-2 text-slate-900 font-bold text-sm">
                    {receiptData.isAnonymous ? 'Hamba Allah' : receiptData.name}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-3">
                  <span className="text-slate-500">Pakej / Perincian:</span>
                  <span className="col-span-2 font-medium text-slate-800">{receiptData.packageType}</span>
                </div>
                <div className="grid grid-cols-3 p-3 bg-slate-50/70">
                  <span className="text-slate-500">Jumlah Disumbangkan:</span>
                  <span className="col-span-2 text-base font-black text-[#002B66] font-mono">
                    RM {receiptData.amount.toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-3">
                  <span className="text-slate-500">Kaedah Pembayaran:</span>
                  <span className="col-span-2 text-slate-700">{receiptData.paymentMethod} (Pengesahan Berjaya)</span>
                </div>
                {receiptData.message && (
                  <div className="grid grid-cols-3 p-3 bg-amber-50/40">
                    <span className="text-amber-900 font-medium">Pesanan / Doa:</span>
                    <span className="col-span-2 text-slate-700 italic">"{receiptData.message}"</span>
                  </div>
                )}
              </div>
            </div>

            {/* Official Stamp & Signatures */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-end justify-between text-center">
              <div>
                <div className="w-24 border-b border-slate-400 mx-auto mb-1"></div>
                <span className="text-[10px] font-bold text-slate-800 block">Hj. Shamsudin Muhamad</span>
                <span className="text-[9px] text-slate-500 block">Penyelaras Dana ASTA'91</span>
              </div>

              {/* Digital Verified Stamp */}
              <div className="w-20 h-20 rounded-full border-2 border-emerald-600 border-dashed p-1 flex flex-col items-center justify-center text-emerald-700 rotate-[-8deg]">
                <ShieldCheck size={20} />
                <span className="text-[8px] font-black uppercase">DISAHKAN</span>
                <span className="text-[7px] font-bold">SEMESTA-ASTA</span>
              </div>

              <div>
                <div className="w-24 border-b border-slate-400 mx-auto mb-1"></div>
                <span className="text-[10px] font-bold text-slate-800 block">En. Nasriq Ahmad</span>
                <span className="text-[9px] text-slate-500 block">Jawatankuasa Kewangan ASTA'00</span>
              </div>
            </div>

            {/* Footnote */}
            <div className="mt-5 text-center text-[10px] text-slate-500 leading-tight">
              Sumbangan ini direkodkan secara langsung di bawah Tabung Pembangunan ICT SEMESTA Raub. Terima kasih atas keprihatinan dan budi ikhlas anda.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handlePrint}
              className="flex-1 py-3 px-4 bg-[#002B66] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow"
            >
              <Printer size={16} />
              <span>Cetak / Simpan Sebagai PDF</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Tutup & Kembali ke Laman
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
