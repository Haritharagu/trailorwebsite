
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-rose-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-rose-900 tracking-widest mb-6">AURA COUTURE</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium text-gray-500 uppercase tracking-widest">
          <a href="#home" className="hover:text-rose-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
          <a href="#services" className="hover:text-rose-500 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-rose-500 transition-colors">Gallery</a>
          <a href="#booking" className="hover:text-rose-500 transition-colors">Bookings</a>
        </div>
        <div className="w-20 h-px bg-rose-200 mx-auto mb-8"></div>
        <p className="text-gray-400 text-xs font-light tracking-wide">
          &copy; {new Date().getFullYear()} Aura Couture. Hand-stitched with love by [Your Mother's Name].
          <br />
          <span className="mt-2 block italic text-rose-300">Perfect Fit. Timeless Style. Always.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
