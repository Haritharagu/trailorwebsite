
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#FDF2F0] flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 mb-6">
        {/* Animated Spool of Thread */}
        <div className="absolute inset-0 border-4 border-rose-300 rounded-lg animate-spin opacity-20"></div>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-rose-400">
          <path d="M30 20 L70 20 L70 80 L30 80 Z" />
          <path d="M25 15 L75 15 L75 25 L25 25 Z" />
          <path d="M25 75 L75 75 L75 85 L25 85 Z" />
          <circle cx="50" cy="50" r="5" className="fill-white animate-pulse" />
        </svg>
      </div>
      <h1 className="font-serif text-3xl text-rose-800 tracking-widest animate-pulse">AURA COUTURE</h1>
      <p className="mt-4 text-rose-600 italic font-light tracking-wide">Stitching your dreams into reality...</p>
    </div>
  );
};

export default LoadingScreen;
