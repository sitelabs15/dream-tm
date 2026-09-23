import React from 'react';
import { industrialAssets } from '../data/assets';
import { ImageWithFallback } from './ImageWithFallback';
import { ShieldCheck } from 'lucide-react';

export const AutomotiveSection: React.FC = () => {
  const autoApplications = [
    {
      title: "Estaciones de ensamble",
      desc: "Integración de componentes con comprobación óptica y torque controlado."
    },
    {
      title: "Manipulación de piezas pesadas",
      desc: "Transferencia de mazas, fundición, frenos y módulos de chasis."
    },
    {
      title: "Soldadura por puntos (Spot)",
      desc: "Pinzas neumáticas y servocontroladas para ensamble de carrocería."
    },
    {
      title: "Aplicación de adhesivos",
      desc: "Dispensado perimetral con control continuo de caudal y velocidad."
    },
    {
      title: "Soporte de arranques (Ramp-up)",
      desc: "Presencia técnica para estabilización en turnos de pre-serie y serie."
    },
    {
      title: "Cambios de modelo (Retooling)",
      desc: "Readecuación de cinemáticas y lógicas I/O para nuevas referencias."
    }
  ];

  return (
    <section id="industrias" className="py-24 bg-[#0B1638] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
                SECTOR CLAVE
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                INDUSTRIA AUTOMOTRIZ
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6 [text-wrap:balance]">
              AUTOMATIZACIÓN PARA ENTORNOS DE PRODUCCIÓN AUTOMOTRIZ.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Dream TM cuenta con referencias públicas vinculadas con programación, puesta en marcha y automatización para procesos industriales y automotrices, con estándares de precisión, sincronismo y seguridad operacional de alta exigencia.
            </p>

            <div className="p-4 bg-[#101C3B] border border-white/10 rounded flex items-center gap-3 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Rigurosidad técnica en enclavamientos de seguridad y repetibilidad de proceso.</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ImageWithFallback
              src={industrialAssets.automotiveLine.src}
              alt="Planta de manufactura automotriz robotizada"
              aspectRatio="aspect-[4/3]"
              label="AUTOMOTIVE MANUFACTURING"
              coordinate="TIER 1 / OEM COMPATIBLE"
            />
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {autoApplications.map((app, index) => (
            <div
              key={index}
              className="p-5 bg-[#101C3B]/60 border border-white/10 hover:border-white/25 rounded-lg transition-colors"
            >
              <div className="text-xs font-mono text-[#E42332] mb-2 font-bold">
                0{index + 1} // APLICACIÓN
              </div>
              <h3 className="font-display font-semibold text-base text-white mb-2">
                {app.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
