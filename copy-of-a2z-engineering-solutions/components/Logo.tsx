
import React from 'react';

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', inverse = false }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`flex items-baseline gap-0.5 tracking-tighter font-medium text-2xl ${inverse ? 'text-white' : 'text-[#1A2B3C]'}`}>
        <span>A</span>
        <span className="relative">
          2
          <span className={`absolute -bottom-0.5 left-0 w-full h-[1px] ${inverse ? 'bg-white' : 'bg-[#1A2B3C]'}`}></span>
        </span>
        <span>Z</span>
      </div>
      <div className={`text-[8px] uppercase tracking-[0.4em] font-light mt-0.5 ${inverse ? 'text-gray-300' : 'text-[#6B7280]'}`}>
        Engineering Solutions
      </div>
    </div>
  );
};

export default Logo;
