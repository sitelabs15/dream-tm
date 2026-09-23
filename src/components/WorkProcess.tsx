import React, { useState } from 'react';
import { workSteps } from '../data/processes';

export const WorkProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="proceso" className="py-24 bg-[#F5F7FA] text-[#142039] relative overflow-hidden bg-cad-grid-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
                04 / MÉTODO
              </span>
              <span className="w-8 h-[1px] bg-slate-300" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                METODOLOGÍA DE INGENIERÍA
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0B1638] [text-wrap:balance]">
              DEL PROBLEMA DE PRODUCCIÓN AL ARRANQUE EN PLANTA.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-sm">
            Estructura secuencial verificada para garantizar estabilidad operacional desde la fase inicial de diagnóstico.
          </p>
        </div>

        {/* Desktop Horizontal Process Flow */}
        <div className="hidden lg:block mb-12">
          {/* Signal Line Track */}
          <div className="relative mb-8">
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-slate-200" />
            <div
              className="absolute top-5 left-0 h-[2px] bg-[#E42332] transition-all duration-500"
              style={{ width: `${(activeStep / (workSteps.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 flex justify-between">
              {workSteps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isPassed = idx <= activeStep;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-[#E42332] text-white ring-4 ring-red-100 shadow-md scale-110'
                          : isPassed
                          ? 'bg-[#0B1638] text-white'
                          : 'bg-white border-2 border-slate-300 text-slate-500 group-hover:border-slate-400'
                      }`}
                    >
                      {step.number}
                    </div>

                    <span
                      className={`mt-3 text-xs font-mono font-medium tracking-wide uppercase transition-colors ${
                        isActive ? 'text-[#0B1638] font-bold' : 'text-slate-500'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Card */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-[#E42332] font-bold">
                  {workSteps[activeStep].step}
                </span>
                <span className="text-xs font-mono text-slate-400">·</span>
                <span className="text-xs font-mono text-slate-500">FASE OPERACIONAL</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0B1638] mb-3">
                {workSteps[activeStep].title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                {workSteps[activeStep].description}
              </p>
              <div className="p-3 bg-[#F5F7FA] rounded border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-2">
                <span className="text-emerald-600 font-bold">ENTREGABLE:</span>
                <span>{workSteps[activeStep].deliverable}</span>
              </div>
            </div>

            <div className="col-span-4 flex flex-col justify-center items-end border-l border-slate-200 pl-8">
              <span className="text-5xl font-display font-bold text-slate-200">
                0{activeStep + 1}
              </span>
              <span className="text-xs font-mono text-slate-400 mt-2">
                DREAM TM · PUEBLA
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {workSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative pl-12"
            >
              <div className="absolute top-6 left-4 w-6 h-6 rounded-full bg-[#0B1638] text-white flex items-center justify-center text-[10px] font-mono font-bold">
                {step.number}
              </div>
              <span className="text-[10px] font-mono text-[#E42332] uppercase tracking-wider block mb-1">
                {step.step}
              </span>
              <h3 className="font-display font-semibold text-lg text-[#0B1638] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                {step.description}
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2 rounded border border-slate-100">
                <strong className="text-slate-700">Entregable:</strong> {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
