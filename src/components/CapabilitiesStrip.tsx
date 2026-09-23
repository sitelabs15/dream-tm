import React from 'react';

export const CapabilitiesStrip: React.FC = () => {
  const capabilities = [
    "INTEGRACIÓN ROBÓTICA",
    "PROGRAMACIÓN",
    "COMMISSIONING",
    "AUTOMATIZACIÓN",
    "OPTIMIZACIÓN",
    "SOPORTE"
  ];

  return (
    <div className="w-full bg-[#101C3B] border-y border-white/10 py-4 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between min-w-max gap-8 lg:gap-12">
          {capabilities.map((item, index) => (
            <React.Fragment key={item}>
              <div className="flex items-center gap-3 group">
                <span className="text-[11px] font-mono text-[#E42332]">
                  0{index + 1}
                </span>
                <span className="text-xs sm:text-sm font-display font-medium tracking-wider text-slate-200 uppercase whitespace-nowrap group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
              {index < capabilities.length - 1 && (
                <span className="text-white/20 select-none font-mono text-xs" aria-hidden="true">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
