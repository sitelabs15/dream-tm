import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/services';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ArrowUpRight } from 'lucide-react';

interface ServicesGridProps {
  onOpenQuote: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="py-24 bg-white text-[#142039] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
                02 / CAPACIDADES
              </span>
              <span className="w-8 h-[1px] bg-slate-300" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                SERVICIOS DE INGENIERÍA
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0B1638]">
              CAPACIDAD TÉCNICA PARA CADA ETAPA DEL PROYECTO.
            </h2>
          </div>

          <p className="text-sm font-mono text-slate-500 max-w-sm">
            Integración de hardware, desarrollo de software robótico y acompañamiento directo en piso.
          </p>
        </div>

        {/* 3-Column Engineering Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#F5F7FA] hover:bg-[#0B1638] border border-slate-200 hover:border-white/20 p-8 rounded-lg transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Top Row: Index number & Arrow */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#E42332] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded border border-slate-300 group-hover:border-white/20 flex items-center justify-center text-slate-500 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-[#0B1638] group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 group-hover:text-slate-300 mb-6 transition-colors leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Technical Points List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/60 group-hover:border-white/10 transition-colors">
                  {service.bullets.slice(0, 4).map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      <span className="w-1 h-1 rounded-full bg-[#E42332]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-200/60 group-hover:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 group-hover:text-slate-400">
                  VER ESPECIFICACIÓN
                </span>
                <span className="text-[#3154B5] group-hover:text-[#E42332] font-semibold transition-colors">
                  + DETALLES
                </span>
              </div>

              {/* Technical active line on bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#E42332] transition-all duration-300 rounded-b-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
