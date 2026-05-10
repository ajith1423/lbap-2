import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon part - Recreating the eye and LB logo */}
      <svg width="48" height="32" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Teal swooshes (Eye shape) */}
        <path d="M10 40C10 40 40 10 90 10" stroke="#0B96AC" strokeWidth="6" strokeLinecap="round" />
        <path d="M10 40C10 40 40 70 90 70" stroke="#0B96AC" strokeWidth="6" strokeLinecap="round" />
        <path d="M30 40C30 40 50 25 80 25" stroke="#0B96AC" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <path d="M30 40C30 40 50 55 80 55" stroke="#0B96AC" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        
        {/* Central Orange Circle */}
        <circle cx="45" cy="40" r="15" fill="#F97316" />
        
        {/* LB Text inside circle */}
        <text x="45" y="47" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Outfit">LB</text>
      </svg>
      
      {/* Text part */}
      <div className="flex flex-col leading-none">
        <span className="text-xl md:text-2xl font-black tracking-tight uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Laxmi Balaji
        </span>
        <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-orange-600 uppercase mt-0.5">
          Automotive Products Pvt. Ltd
        </span>
      </div>
    </div>
  );
};

export default Logo;
