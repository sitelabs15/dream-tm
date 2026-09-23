import React from 'react';
import { ContactForm } from './ContactForm';
import { LocationBlock } from './LocationBlock';

interface ContactSectionProps {
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacy }) => {
  return (
    <section id="contacto" className="py-24 bg-[#08122D] text-white relative border-b border-white/10 bg-cad-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
              06 / CONTACTO
            </span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
              EVALUACIÓN DE PROYECTOS
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4 [text-wrap:balance]">
            HABLEMOS DE TU PRÓXIMO PROYECTO.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Cuéntanos qué proceso deseas automatizar. Envíanos la información técnica disponible para evaluar el alcance y definir los siguientes pasos de ingeniería.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <LocationBlock />
          </div>

          <div className="lg:col-span-7">
            <ContactForm onOpenPrivacy={onOpenPrivacy} />
          </div>
        </div>
      </div>
    </section>
  );
};
