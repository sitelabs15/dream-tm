import React from 'react';
import { industrialAssets } from '../data/assets';
import { ImageWithFallback } from './ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Integración",
      desc: "Montaje, cableado y acoplamiento electromecánico de celdas a líneas vivas."
    },
    {
      number: "02",
      title: "Programación",
      desc: "Desarrollo de cinemáticas, puntos y lógicas secuenciales en controladores industriales."
    },
    {
      number: "03",
      title: "Puesta en marcha",
      desc: "Commissioning en campo con pruebas I/O y validación de ciclos en piso de planta."
    },
    {
      number: "04",
      title: "Soporte",
      desc: "Diagnóstico de fallas, ajustes y estabilización durante la operación regular."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-[#F5F7FA] text-[#142039] relative overflow-hidden bg-cad-grid-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
            01 / DREAM TM
          </span>
          <span className="w-8 h-[1px] bg-slate-300" />
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
            INGENIERÍA PARA HACER QUE LAS COSAS SUCEDAN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Title Column */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-[#0B1638] mb-6 [text-wrap:balance]">
              INGENIERÍA, ROBÓTICA Y AUTOMATIZACIÓN PARA PROCESOS INDUSTRIALES.
            </h2>
            <div className="p-6 bg-white border border-slate-200/80 rounded-lg shadow-sm border-l-4 border-l-[#E42332]">
              <p className="font-display text-xl sm:text-2xl font-semibold text-[#0B1638] tracking-tight">
                “Del diagnóstico al arranque en planta.”
              </p>
              <p className="text-sm text-slate-600 mt-2 font-mono">
                Compromiso técnico orientado a la continuidad y confiabilidad operativa.
              </p>
            </div>
          </div>

          {/* Right Text Column & Media */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
              <strong className="text-[#0B1638] font-semibold">Dream TM</strong> es una empresa mexicana enfocada en la integración de robots y sistemas automáticos. Su experiencia combina programación industrial, puesta en marcha, soporte técnico y optimización de procesos productivos para la manufactura moderna.
            </p>

            <div className="relative">
              <ImageWithFallback
                src={industrialAssets.robotArmCloseup.src}
                alt={industrialAssets.robotArmCloseup.alt}
                aspectRatio="aspect-[16/10]"
                label="MECÁNICA & CONTROL"
                coordinate="ESTUDIO CINEMÁTICO"
              />
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
          {pillars.map((item) => (
            <div
              key={item.number}
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#E42332]">
                  {item.number}
                </span>
                <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-[#3154B5] transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#0B1638] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
