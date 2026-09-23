import React from 'react';
import { industrialAssets } from '../data/assets';
import { companyData } from '../data/company';

export const RoboticsFeature: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#08122D] text-white overflow-hidden border-y border-white/10 bg-cad-grid">
      {/* Background Industrial Image with Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={industrialAssets.automotiveLine.src}
          alt={industrialAssets.automotiveLine.alt}
          className="w-full h-full object-cover opacity-20 filter contrast-125 saturate-50"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08122D] via-[#08122D]/90 to-[#08122D]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Statement */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-[#E42332] animate-ping" />
              <span className="text-xs font-mono tracking-widest text-[#E42332] uppercase">
                ROBÓTICA INDUSTRIAL
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-6">
              PROGRAMACIÓN, INTEGRACIÓN Y PUESTA EN MARCHA.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-6 font-normal">
              Especialización técnica en el despliegue de cinemáticas, sincronización con controladores y puesta en marcha sobre celdas automatizadas de alto rendimiento productivo.
            </p>

            <p className="text-[11px] font-mono text-slate-400 max-w-xl">
              {companyData.brandDisclaimer}
            </p>
          </div>

          {/* Technical Brand Experience Badges */}
          <div className="lg:col-span-4">
            <div className="bg-[#101C3B]/90 border border-white/15 p-6 rounded-lg backdrop-blur-md">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
                EXPERIENCIA EN PROGRAMACIÓN E INTEGRACIÓN
              </span>

              <div className="space-y-4">
                <div className="p-4 bg-[#08122D] border border-white/10 rounded flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-xl tracking-wider text-white">
                      FANUC
                    </span>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Robots articulados de 6 ejes · Controladores RJ3 y afines
                    </p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                <div className="p-4 bg-[#08122D] border border-white/10 rounded flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-xl tracking-wider text-white">
                      KUKA
                    </span>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Cinemáticas industriales · Control y commissioning
                    </p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>ESTADO: DISPONIBLE</span>
                <span className="text-slate-300">PUEBLA & COBERTURA NACIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
