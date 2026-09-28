import React, { useState } from 'react';
import { AstaLogo, SemestaCrest } from './Logos';
import { QrCode, Phone, Sparkles, Maximize2, X, Download, Share2, Check } from 'lucide-react';

interface PosterCardProps {
  onOpenDonateModal: () => void;
}

export const PosterCard: React.FC<PosterCardProps> = ({ onOpenDonateModal }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Kempen Dana Makmal Komputer SEMESTA',
        text: 'Jom bantu menaja 30 Set Komputer & 5 Unit Pencetak untuk anak-anak Sekolah Menengah Sains Tengku Abdullah (SEMESTA), Raub. Sasaran RM 110,935!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <>
      <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden group transition-all hover:shadow-2xl">
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold text-slate-200">Poster Rasmi Kempen</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(true)}
              className="flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded text-slate-200 hover:text-white transition-colors"
              title="Perbesar Poster"
            >
              <Maximize2 size={13} />
              <span>Perbesar</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-2.5 py-1 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 rounded transition-colors"
              title="Kongsi Poster"
            >
              {copiedLink ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
              <span>{copiedLink ? 'Disalin' : 'Kongsi'}</span>
            </button>
          </div>
        </div>

        {/* Poster Canvas Replica */}
        <div className="relative p-5 sm:p-7 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 text-slate-900 overflow-hidden select-none">
          {/* Decorative Diagonal Blue & Yellow Stripe Accents matching the poster */}
          <div className="absolute -top-12 -right-12 w-48 h-80 bg-blue-900/10 -rotate-45 pointer-events-none"></div>
          <div className="absolute top-24 -right-8 w-24 h-96 bg-amber-400/20 -rotate-45 pointer-events-none"></div>

          {/* Header row with Logos */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              {/* Yellow Pill: PROGRAM SUMBANGAN */}
              <div className="inline-block bg-[#F5A623] text-slate-950 font-black text-xs sm:text-sm px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm mb-2">
                PROGRAM SUMBANGAN
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#002B66] leading-none tracking-tight">
                SET KOMPUTER UNTUK
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#B91C1C] leading-tight">
                MAKMAL KOMPUTER SEMESTA
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium leading-snug max-w-md">
                Memperkasa pembelajaran digital melalui kemudahan yang moden dan berkualiti.
              </p>
            </div>

            {/* Logos on Top Right */}
            <div className="flex items-center gap-2 shrink-0 bg-white/80 backdrop-blur-sm p-1.5 rounded-xl border border-slate-200 shadow-sm">
              <AstaLogo size={52} />
              <SemestaCrest size={56} />
            </div>
          </div>

          {/* Target Highlight */}
          <div className="my-4 pt-2 border-t border-slate-200/80">
            <div className="text-xs font-black uppercase tracking-wider text-[#002B66]">
              SASARAN SUMBANGAN
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#B91C1C] tracking-tight font-mono">
              RM 110,935.00
            </div>
          </div>

          {/* Two Circular Item Highlights */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 my-4">
            {/* Item 1: 30 SET KOMPUTER */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#002B66] overflow-hidden shadow-lg bg-slate-900 group/img">
                <img
                  src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=400&q=80"
                  alt="30 Set Komputer Meja"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-[10px] sm:text-xs text-amber-300 font-bold tracking-wider">ACER VERITON 2000</span>
                </div>
              </div>
              <div className="mt-2 bg-slate-800 text-white font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md text-center">
                30 SET KOMPUTER
              </div>
            </div>

            {/* Item 2: 5 UNIT PENCETAK */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#F5A623] overflow-hidden shadow-lg bg-slate-900 group/img">
                <img
                  src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80"
                  alt="5 Unit Pencetak Sistem Ink Tank"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-[10px] sm:text-xs text-amber-300 font-bold tracking-wider">CANON PIXMA G3010</span>
                </div>
              </div>
              <div className="mt-2 bg-slate-800 text-white font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md text-center">
                5 UNIT PENCETAK
              </div>
            </div>
          </div>

          {/* Panorama Computer Lab Preview */}
          <div className="relative mt-4 rounded-xl overflow-hidden border-2 border-slate-300 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
              alt="Makmal Komputer SEMESTA Raub"
              className="w-full h-36 sm:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
              <div className="text-white text-xs">
                <span className="font-bold text-amber-300">Makmal Komputer SEMESTA</span>
                <span className="text-slate-200 block text-[11px]">Keluasan kapasiti penuh bagi 30 stesen kerja digital murid</span>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action and QR Code Bar */}
          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-sm sm:text-base font-black text-[#002B66]">
                IMBAS KOD QR UNTUK MENYUMBANG
              </h4>
              <p className="text-xs text-slate-600">
                Gunakan portal pembayaran rasmi untuk rekod & resit serta-merta.
              </p>
              {/* Yellow Banner Strip */}
              <div className="mt-2 bg-[#F5A623] text-slate-950 font-black text-[11px] sm:text-xs px-3 py-1 rounded inline-block shadow-sm">
                KUTIPAN KEMPEN DIPAPARKAN SECARA LIVE DI LAMAN WEB.
              </div>
            </div>

            {/* Interactive QR box */}
            <div
              onClick={onOpenDonateModal}
              className="cursor-pointer group/qr shrink-0 bg-white p-2.5 rounded-xl border-2 border-amber-400 shadow-md flex flex-col items-center hover:border-[#002B66] transition-all hover:scale-105"
            >
              <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center text-white relative">
                <QrCode size={56} className="text-amber-300" />
                <div className="absolute inset-0 bg-amber-500/10 group-hover/qr:bg-transparent rounded-lg"></div>
              </div>
              <span className="text-[10px] font-bold text-[#002B66] mt-1 group-hover/qr:text-amber-600">
                KLIK IMBAS QR
              </span>
            </div>
          </div>

          {/* Contact Bar at Bottom */}
          <div className="mt-4 bg-white border border-slate-200 rounded-full px-4 py-2 text-center text-[11px] sm:text-xs text-slate-700 shadow-inner">
            <span className="font-semibold text-slate-900 block sm:inline">Untuk maklumat lanjut, hubungi:</span>{' '}
            <span className="font-bold text-[#002B66]">Shamsudin Muhamad (ASTA'91): 012-9140112</span>
            <span className="hidden sm:inline mx-1.5 text-slate-400">|</span>
            <span className="font-bold text-[#002B66]">Nasriq Ahmad (ASTA'00): 019-2567183</span>
          </div>
        </div>

        {/* Quick Footer Action inside Card */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Dianjurkan bersama Alumni ASTA & Pengurusan SEMESTA
          </span>
          <button
            onClick={onOpenDonateModal}
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
          >
            <Sparkles size={14} className="text-amber-300" />
            <span>Sumbang Sekarang</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h3 className="font-bold text-slate-900 text-base">Paparan Penuh Poster Kempen</h3>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Poster Inner View */}
            <div className="border border-slate-300 rounded-xl p-4 bg-slate-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="inline-block bg-[#F5A623] text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase mb-2">
                    PROGRAM SUMBANGAN
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#002B66]">SET KOMPUTER UNTUK</h2>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#B91C1C]">MAKMAL KOMPUTER SEMESTA</h3>
                  <p className="text-xs text-slate-700 mt-1 font-medium">
                    Memperkasa pembelajaran digital melalui kemudahan yang moden dan berkualiti.
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <AstaLogo size={44} />
                  <SemestaCrest size={48} />
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-3 my-3 text-center">
                <span className="text-xs font-bold text-[#002B66] uppercase block">SASARAN SUMBANGAN</span>
                <span className="text-3xl sm:text-4xl font-black text-[#B91C1C] font-mono">RM 110,935.00</span>
              </div>

              <div className="grid grid-cols-2 gap-3 my-3">
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="text-lg font-black text-[#002B66]">30 SET</div>
                  <div className="text-xs font-bold text-slate-700">ACER VERITON 2000</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="text-lg font-black text-[#F5A623]">5 UNIT</div>
                  <div className="text-xs font-bold text-slate-700">CANON PIXMA G3010</div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-center text-xs font-semibold text-amber-900 my-2">
                KUTIPAN KEMPEN DIPAPARKAN SECARA LIVE DI LAMAN WEB.
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-center text-xs text-slate-600">
                <p className="font-bold text-slate-800">Hubungi Penyelaras Rasmi:</p>
                <p>Shamsudin Muhamad (ASTA'91): 012-9140112</p>
                <p>Nasriq Ahmad (ASTA'00): 019-2567183</p>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  setIsZoomed(false);
                  onOpenDonateModal();
                }}
                className="flex-1 py-3 bg-[#B91C1C] hover:bg-red-800 text-white font-bold rounded-xl text-center shadow"
              >
                Terus Sumbang Sekarang
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-xl text-xs flex items-center gap-1.5"
              >
                <Download size={15} />
                <span>Cetak Poster</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
