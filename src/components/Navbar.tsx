import React, { useState } from 'react';
import { AstaLogo, SemestaCrest } from './Logos';
import { Heart, Menu, X, PhoneCall, QrCode } from 'lucide-react';

interface NavbarProps {
  onOpenDonateModal: () => void;
  collectedAmount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonateModal, collectedAmount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top micro alert ticker */}
      <div className="bg-[#002B66] text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="bg-amber-400 text-slate-950 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase">
          Kempen Rasmi
        </span>
        <span className="truncate">
          Tabung Sumbangan 30 Set PC & 5 Pencetak Makmal Komputer SEMESTA Raub · Sasaran RM 110,935.00
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & School Branding */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <SemestaCrest size={42} />
              <AstaLogo size={38} />
            </div>
            <div className="leading-tight">
              <span className="text-xs sm:text-sm font-extrabold text-[#002B66] block tracking-tight">
                SEMESTA RAUB
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 block">
                Alumni ASTA Tradition
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <button
              onClick={() => scrollTo('kenapa-perlu')}
              className="hover:text-[#002B66] transition-colors py-1"
            >
              Tentang Makmal
            </button>
            <button
              onClick={() => scrollTo('pecahan-bajet')}
              className="hover:text-[#002B66] transition-colors py-1"
            >
              Pecahan Bajet
            </button>
            <button
              onClick={() => scrollTo('penerima-bantuan')}
              className="hover:text-[#002B66] transition-colors py-1"
            >
              Suara Penerima
            </button>
            <button
              onClick={() => scrollTo('pakej-sumbangan')}
              className="hover:text-[#002B66] transition-colors py-1"
            >
              Pakej Infaq
            </button>
            <button
              onClick={() => scrollTo('faq-kempen')}
              className="hover:text-[#002B66] transition-colors py-1"
            >
              Soalan Lazim
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenDonateModal}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#B91C1C] hover:bg-red-800 active:scale-95 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md shadow-red-700/20 flex items-center gap-1.5 transition-all"
            >
              <Heart size={15} className="text-amber-300 fill-amber-300" />
              <span>Sumbang Sekarang</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 lg:hidden rounded-lg hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-3 py-2 bg-slate-50 rounded-xl mb-3 border border-slate-200 text-xs">
            <span className="text-slate-500 block">Terkumpul Terkini:</span>
            <span className="text-base font-bold text-[#002B66] font-mono">
              RM {collectedAmount.toLocaleString('ms-MY', { minimumFractionDigits: 2 })}
            </span>
          </div>

          <button
            onClick={() => scrollTo('kenapa-perlu')}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Tentang Makmal & Keperluan
          </button>
          <button
            onClick={() => scrollTo('pecahan-bajet')}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Perincian Bajet RM 110,935.00
          </button>
          <button
            onClick={() => scrollTo('penerima-bantuan')}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Testimonial Penerima Bantuan
          </button>
          <button
            onClick={() => scrollTo('pakej-sumbangan')}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Pakej Tajaan Komputer & Infaq
          </button>
          <button
            onClick={() => scrollTo('faq-kempen')}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Soalan Lazim (FAQ)
          </button>
          <button
            onClick={() => scrollTo('hubungi-kami')}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Hubungi Penyelaras Kempen
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonateModal();
              }}
              className="w-full py-3 bg-[#B91C1C] text-white font-bold rounded-xl text-center shadow flex items-center justify-center gap-2"
            >
              <Heart size={16} className="text-amber-300 fill-amber-300" />
              <span>Sumbang Terus Secara Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
