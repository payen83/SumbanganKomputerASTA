import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/campaignData';
import { Quote, MessageSquareHeart, Star, CheckCircle, GraduationCap, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC<{ onOpenDonateModal: () => void }> = ({ onOpenDonateModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pelajar' | 'guru' | 'alumni'>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'pelajar') return t.id === 'test-2' || t.id === 'test-3';
    if (activeFilter === 'guru') return t.id === 'test-1';
    if (activeFilter === 'alumni') return t.id === 'test-4' || t.id === 'test-5';
    return true;
  });

  return (
    <section id="penerima-bantuan" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B91C1C] bg-red-50 border border-red-200/80 px-3.5 py-1.5 rounded-full mb-3">
            <MessageSquareHeart size={14} className="text-[#B91C1C]" />
            <span>Suara Hati Warga SEMESTA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Testimonial & Luahan Hati Penerima Bantuan
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Dengarkan sendiri bagaimana kemudahan makmal komputer ini memberi erti yang amat mendalam buat para guru sains, anak-anak asrama berpendapatan sederhana, dan alumni yang komited membalas budi.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 bg-slate-100 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-[#002B66] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Suara ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => setActiveFilter('pelajar')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'pelajar'
                  ? 'bg-white text-[#002B66] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pelajar & Asrama
            </button>
            <button
              onClick={() => setActiveFilter('guru')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'guru'
                  ? 'bg-white text-[#002B66] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Guru Penyelaras
            </button>
            <button
              onClick={() => setActiveFilter('alumni')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'alumni'
                  ? 'bg-white text-[#002B66] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Alumni ASTA
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-amber-200 transition-colors pointer-events-none">
                <Quote size={40} />
              </div>

              <div>
                {/* Tag */}
                <div className="inline-block text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded bg-blue-100 text-[#002B66] mb-4">
                  {item.tag}
                </div>

                {/* Main Quote */}
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal italic mb-5 relative z-10">
                  {item.quote}
                </p>

                {/* Impact story */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 mb-5">
                  <span className="text-[11px] font-bold text-amber-700 block uppercase mb-1">
                    Impak Sumbangan Anda:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.impactStory}
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#002B66] font-semibold block">
                    {item.role}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    {item.subRole}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Callout Banner */}
        <div className="mt-14 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-400 text-slate-950 rounded-xl shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Peluang Ini Terbuka Buat Kita Semua Membantu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Bukan nilai wang yang menjadi ukuran semata-mata, sebaliknya keikhlasan kita meringankan beban anak-anak asrama dan para guru yang berhempas pulas demi kecemerlangan ummah.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDonateModal}
            className="shrink-0 px-6 py-3.5 bg-[#B91C1C] hover:bg-red-800 text-white font-extrabold text-sm rounded-xl shadow-md flex items-center gap-2 transition-all"
          >
            <Heart size={16} className="text-amber-300 fill-amber-300" />
            <span>Kirim Sumbangan Kasih</span>
          </button>
        </div>
      </div>
    </section>
  );
};
