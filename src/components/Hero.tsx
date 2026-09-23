import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { industrialAssets } from '../data/assets';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92svh] lg:min-h-screen bg-[#08122D] text-white flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-cad-grid"
    >
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#243B82]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#3154B5]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Programmed Kinematic Robot Path SVG (Section 60) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 50 820 C 320 800, 480 650, 680 580 S 1000 520, 1280 340"
          stroke="url(#robotPathGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="robotPathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3154B5" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#E42332" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3154B5" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 3 Sequential Illuminated Kinematic Waypoint Nodes */}
        <g className="animate-pulse">
          <circle cx="480" cy="650" r="4" fill="#E42332" />
          <circle cx="480" cy="650" r="10" stroke="#E42332" strokeWidth="1" strokeOpacity="0.4" />
        </g>
        <g>
          <circle cx="680" cy="580" r="3.5" fill="#3154B5" />
          <circle cx="680" cy="580" r="8" stroke="#3154B5" strokeWidth="1" strokeOpacity="0.5" />
        </g>
        <g className="animate-pulse">
          <circle cx="1000" cy="520" r="4" fill="#E42332" />
          <circle cx="1000" cy="520" r="11" stroke="#E42332" strokeWidth="1" strokeOpacity="0.4" />
        </g>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (55% desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Engineering Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[2px] bg-[#E42332]" />
              <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                AUTOMATIZACIÓN · ROBÓTICA · INGENIERÍA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-semibold text-3xl sm:text-5xl lg:text-[3.8rem] leading-[1.05] tracking-tight text-white mb-6 [text-wrap:balance]">
              AUTOMATIZACIÓN INDUSTRIAL QUE MUEVE LA{' '}
              <span className="relative inline-block text-white">
                PRODUCCIÓN
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E42332]" />
              </span>
              .
            </h1>

            {/* Subcopy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              Diseñamos, integramos y programamos soluciones de automatización industrial para robots, estaciones y procesos de manufactura.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#E42332] hover:bg-[#C91826] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200 shadow-xl shadow-red-950/30 active:scale-98 cursor-pointer"
              >
                <span>SOLICITAR COTIZACIÓN</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/15 hover:border-white/30 rounded transition-all duration-200"
              >
                <span>VER PROYECTOS</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Clean Unboxed Trust Metadata (Zero-Pill Discipline) */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs font-mono text-slate-400">
                <span className="hover:text-white transition-colors">INTEGRACIÓN DE ROBOTS</span>
                <span className="text-[#E42332]" aria-hidden="true">·</span>
                <span className="hover:text-white transition-colors">PROGRAMACIÓN INDUSTRIAL</span>
                <span className="text-[#E42332]" aria-hidden="true">·</span>
                <span className="hover:text-white transition-colors">COMMISSIONING</span>
                <span className="text-[#E42332]" aria-hidden="true">·</span>
                <span className="hover:text-white transition-colors">SOPORTE A PRODUCCIÓN</span>
              </div>
            </div>
          </div>

          {/* Right Column (45% desktop - Industrial Composition) */}
          <div className="lg:col-span-5 relative">
            {/* Technical Frame Decor */}
            <div className="relative p-2 bg-[#0B1638]/60 backdrop-blur border border-white/15 rounded-lg shadow-2xl">
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#E42332]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#E42332]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#E42332]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#E42332]" />

              <ImageWithFallback
                src={industrialAssets.heroRobot.src}
                alt={industrialAssets.heroRobot.alt}
                aspectRatio="aspect-[4/3]"
                label="ROBOT CELL / 01"
                coordinate="X: 19.041  Y: -98.206  ·  PUEBLA, MX"
              />

              {/* Technical floating status indicator */}
              <div className="mt-2.5 px-3 py-2 bg-[#101C3B]/90 border border-white/10 rounded flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300">SISTEMA EN LÍNEA</span>
                </div>
                <span className="text-slate-400">PUEBLA, MX · 72580</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
