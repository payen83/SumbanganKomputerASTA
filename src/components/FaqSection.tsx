import React, { useState } from 'react';
import { FREQUENTLY_ASKED_QUESTIONS } from '../data/campaignData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-kempen" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#002B66] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <HelpCircle size={14} className="text-[#002B66]" />
            <span>Maklumat Tambahan & Ketelusan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Soalan Lazim Mengenai Kempen (FAQ)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Segala persoalan umum berkenaan tatacara penyaluran dana, pengesahan resit, dan pemantauan perolehan aset makmal.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FREQUENTLY_ASKED_QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <span className="shrink-0 p-1.5 rounded-full bg-slate-100 text-slate-600">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
