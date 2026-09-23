import React from 'react';
import { techStackData } from '../data/processes';
import { companyData } from '../data/company';

export const TechnologyGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white text-[#142039] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
                EQUIPAMIENTO & ESTÁNDARES
              </span>
              <span className="w-8 h-[1px] bg-slate-300" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                ARQUITECTURA DE CONTROL
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0B1638]">
              TECNOLOGÍA QUE CONECTA EL PROCESO.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-sm">
            Compatibilidad con la instrumentación, buses y cinemáticas estándar de manufactura automotriz e industrial.
          </p>
        </div>

        {/* 5-Category Engineering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((tech, idx) => (
            <div
              key={tech.category}
              className={`p-6 bg-[#F5F7FA] border border-slate-200 rounded-lg flex flex-col justify-between hover:border-slate-300 transition-colors ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#E42332] bg-white px-2 py-0.5 border border-slate-200 rounded">
                    {tech.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    ESTÁNDAR TÉCNICO
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#0B1638] mb-3">
                  {tech.label}
                </h3>

                <ul className="space-y-2 mb-4">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3154B5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tech.note && (
                <p className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200/60 leading-tight">
                  {tech.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded text-center">
          <p className="text-[11px] font-mono text-slate-500">
            {companyData.brandDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
