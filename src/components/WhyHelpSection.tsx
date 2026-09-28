import React from 'react';
import { AlertCircle, Cpu, GraduationCap, HeartHandshake, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

export const WhyHelpSection: React.FC = () => {
  return (
    <section id="kenapa-perlu" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#002B66] bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-3">
            <HeartHandshake size={14} className="text-[#B91C1C]" />
            <span>Misi Kemanusiaan & Pendidikan Digital</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Mengapa Kemudahan Makmal Ini Amat Kritikal Untuk Anak-Anak SEMESTA?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Sekolah Menengah Sains Tengku Abdullah (SEMESTA), Raub menempatkan lebih 600 anak-anak pintar dari seluruh pelosok negeri, majoritinya daripada keluarga berpendapatan sederhana dan luar bandar yang menaruh harapan tinggi untuk mengubah nasib keluarga.
          </p>
        </div>

        {/* 3 Core Challenges vs Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Perkakasan Uzur */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 relative group hover:border-[#002B66] transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Perkakasan Melebihi 10 Tahun
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Komputer sedia ada di makmal dibekalkan lebih sedekad yang lalu. Komponen kerap panas lampau, sistem sering tergantung (crash), dan tidak lagi mampu menjalankan perisian pengaturcaraan moden untuk sukatan pelajaran SPM Sains Komputer terkini.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/70 text-xs font-semibold text-red-700 flex items-center gap-1.5">
              <AlertCircle size={15} />
              <span>3 orang pelajar terpaksa berkongsi 1 komputer</span>
            </div>
          </div>

          {/* Card 2: Jurang Digital Pelajar Asrama */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 relative group hover:border-[#002B66] transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Satu-Satunya Pintu Dunia Digital
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tinggal di asrama penuh bermakna pelajar tidak mempunyai akses kepada komputer riba peribadi atau gajet di bilik. Makmal komputer sekolah adalah satu-satunya talian hayat mereka untuk mencari bahan rujukan penyelidikan, menyiapkan kerja kursus, dan mengakses modul universiti.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/70 text-xs font-semibold text-amber-800 flex items-center gap-1.5">
              <CheckCircle2 size={15} />
              <span>Menjamin kesaksamaan peluang anak-anak asrama</span>
            </div>
          </div>

          {/* Card 3: Revolusi AI & Sains Masa Depan */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 relative group hover:border-[#002B66] transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#002B66] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Latihan Kemahiran Abad Ke-21
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              30 set komputer ACER Veriton 2000 baharu dengan pemproses Intel Core i3-14100, memori DDR5, storan SSD pantas dan pakej perisian lengkap (Office 2024 & Adobe) membolehkan pelajar mempelajari pengaturcaraan Python, asas AI, visualisasi data serta reka bentuk digital tanpa sebarang kekangan teknikal.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/70 text-xs font-semibold text-[#002B66] flex items-center gap-1.5">
              <Sparkles size={15} />
              <span>Melahirkan bakat teknologi bernilai tinggi</span>
            </div>
          </div>
        </div>

        {/* Real photo gallery snippet */}
        <div className="mt-12 bg-gradient-to-r from-[#002B66] to-[#0A3D7E] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-2">
                Suasana Makmal Komputer SEMESTA Raub
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                "Bukan sekadar mengganti perkakasan, tetapi membina keyakinan diri generasi pewaris bangsa."
              </h3>
              <p className="mt-3 text-slate-200 text-sm leading-relaxed">
                Setiap kali mereka melangkah masuk ke makmal yang lengkap dan selesa, mereka tahu bahawa ada ratusan alumni, ibu bapa, dan rakyat Malaysia yang percaya pada potensi masa depan mereka.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>30 Stesen Kerja Lengkap</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>5 Pencetak Ink Tank Pusat</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Kemudahan Makmal Moden & Kondusif</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                  alt="Pelajar tekun koding"
                  className="rounded-xl shadow-md w-full h-32 sm:h-40 object-cover"
                />
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center">
                  <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono block">600+</span>
                  <span className="text-[11px] text-slate-200">Pelajar Mendapat Manfaat</span>
                </div>
              </div>
              <div className="space-y-3 pt-4">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center">
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono block">100%</span>
                  <span className="text-[11px] text-slate-200">Disalur Terus ke Makmal</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80"
                  alt="Komputer makmal"
                  className="rounded-xl shadow-md w-full h-32 sm:h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
