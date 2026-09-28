import React from 'react';
import { AstaLogo, SemestaCrest } from './Logos';
import { CONTACT_PERSONS } from '../data/campaignData';
import { Phone, MessageSquare, MapPin, Mail, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC<{ onOpenDonateModal: () => void }> = ({ onOpenDonateModal }) => {
  return (
    <footer id="hubungi-kami" className="bg-[#001D47] text-white border-t border-blue-950">
      {/* Top Contact Highlight Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="bg-gradient-to-r from-[#002B66] to-[#0A3D7E] rounded-3xl p-6 sm:p-10 border border-blue-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Saluran Bantuan & Pertanyaan Rasmi
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                Perlukan Maklumat Lanjut atau Ingin Sumbangan Korporat?
              </h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed max-w-xl">
                Hubungi terus pegawai penyelaras kempen daripada Jawatankuasa Alumni SEMESTA (ASTA) untuk sebarang perbincangan CSR, resit bertulis atau lawatan ke tapak makmal sekolah.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CONTACT_PERSONS.map((person, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-amber-300 block">{person.batch}</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{person.name}</h4>
                    <span className="text-xs text-slate-300 font-mono block mt-1">{person.phone}</span>
                  </div>
                  <a
                    href={person.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 py-2 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Rasmi</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Footer Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-blue-900/60">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <SemestaCrest size={48} />
              <AstaLogo size={42} />
              <div>
                <h4 className="font-extrabold text-base tracking-tight text-white">
                  SEMESTA RAUB & ASTA TRADITION
                </h4>
                <p className="text-xs text-slate-400">
                  Sekolah Menengah Sains Tengku Abdullah, Raub, Pahang
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Motto Sekolah: <em>"Ilmu Amal Budi"</em>. Kempen penggantian 30 set komputer dan 5 unit pencetak makmal ini diterajui oleh gabungan Persatuan Alumni ASTA bersama Pengurusan Sekolah SEMESTA demi menjamin masa depan generasi digital anak-anak kita.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs text-slate-300">
            <h5 className="font-bold text-white text-sm mb-3">Lokasi & Alamat</h5>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <span>
                Sekolah Menengah Sains Tengku Abdullah (SEMESTA),<br />
                27600 Raub,<br />
                Pahang Darul Makmur, Malaysia.
              </span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h5 className="font-bold text-white text-sm mb-2">Tindakan Pantas</h5>
            <button
              onClick={onOpenDonateModal}
              className="w-full py-2.5 px-4 bg-[#B91C1C] hover:bg-red-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow transition-all"
            >
              <Heart size={14} className="text-amber-300 fill-amber-300" />
              <span>Sumbang Secara Online</span>
            </button>
            <p className="text-[11px] text-slate-400 leading-tight">
              Portal dibuka 24 jam setiap hari dengan pengemaskinian status live.
            </p>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {new Date().getFullYear()} ASTA Tradition & SEMESTA Raub. Hak Cipta Terpelihara.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck size={14} />
              Portal Rasmi Disahkan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
