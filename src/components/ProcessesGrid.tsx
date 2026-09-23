import React from 'react';
import { roboticProcesses } from '../data/processes';

export const ProcessesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F7FA] text-[#142039] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
                APLICACIONES
              </span>
              <span className="w-8 h-[1px] bg-slate-300" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                PROCESOS DE MANUFACTURA
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0B1638]">
              APLICACIONES ROBÓTICAS EN PISO DE PLANTA.
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">
            07 MODALIDADES DE INTEGRACIÓN
          </span>
        </div>

        {/* Technical Process Strip / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roboticProcesses.map((proc, idx) => (
            <div
              key={proc.id}
              className={`bg-white p-5 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between ${
                idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#E42332]">
                    [{proc.number}]
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>
                <h3 className="font-display font-semibold text-base text-[#0B1638] mb-2">
                  {proc.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {proc.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>ESTÁNDAR B2B</span>
                <span className="text-[#3154B5]">CONFIGURABLE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
