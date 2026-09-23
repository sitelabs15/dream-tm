import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'light' }) => {
  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img
        src="/dream-tm-logo.png"
        alt="DREAM TM - Automatización Industrial y Robótica"
        className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
        width="215"
        height="36"
        loading="eager"
      />
    </div>
  );
};
