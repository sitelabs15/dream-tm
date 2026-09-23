import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("tipo-proyectos");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white text-[#142039] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
              05 / FAQ
            </span>
            <span className="w-8 h-[1px] bg-slate-300" />
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
              PREGUNTAS FRECUENTES
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#0B1638]">
            RESOLUCIÓN DE DUDAS OPERACIONALES.
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqsData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-lg overflow-hidden bg-[#F5F7FA] transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-[#0B1638] hover:text-[#243B82] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded border border-slate-300 bg-white flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-red-50 border-red-200 text-[#E42332]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{item.answer}</p>
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
