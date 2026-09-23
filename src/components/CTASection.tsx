import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { companyData } from '../data/company';

interface CTASectionProps {
  onOpenQuote: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-24 bg-[#08122D] text-white relative border-b border-white/10 bg-cad-grid">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-[#E42332] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E42332]" />
          <span>CONTACTO DIRECTO DE INGENIERÍA</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6 [text-wrap:balance]">
          ¿TIENES UN PROCESO QUE NECESITA AUTOMATIZACIÓN?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Cuéntanos qué necesitas integrar, programar u optimizar. Podemos revisar el alcance inicial de tu proyecto y coordinar una sesión técnica con un especialista.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E42332] hover:bg-[#C91826] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200 shadow-xl shadow-red-950/40 cursor-pointer"
          >
            <span>SOLICITAR COTIZACIÓN</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyData.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/15 rounded transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-slate-300" />
            <span>HABLAR CON UN INGENIERO</span>
          </a>
        </div>

        <p className="text-xs font-mono text-slate-400 mt-6">
          Puebla, México · {companyData.scheduleNote}
        </p>
      </div>
    </section>
  );
};
