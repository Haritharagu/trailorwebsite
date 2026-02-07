
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDF2F0]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <path d="M-100,200 C150,50 350,450 600,200 S950,-50 1200,200" fill="none" stroke="#E8A398" strokeWidth="1" className="stitching-line" />
          <path d="M-100,500 C200,300 400,700 700,400 S1000,100 1300,500" fill="none" stroke="#D4AF37" strokeWidth="1" className="stitching-line" style={{ animationDelay: '-5s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12 z-10">
        <div className="space-y-8 text-center md:text-left animate-fade-in">
          <div className="inline-block px-4 py-1 border border-rose-300 rounded-full text-rose-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Bespoke Women's Tailoring
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-900 leading-tight">
            Perfect Fit. <br />
            <span className="italic font-light">Timeless Style.</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            Crafting elegance with every stitch. Experience the luxury of custom-made traditional and contemporary designs tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#booking"
              className="px-10 py-4 bg-rose-400 text-white rounded-full text-sm font-medium tracking-widest uppercase hover:bg-rose-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Book a Stitch
            </a>
            <a 
              href="#gallery"
              className="px-10 py-4 border-2 border-rose-300 text-rose-800 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-rose-50 transition-all duration-300"
            >
              View Designs
            </a>
          </div>
        </div>

        <div className="relative group perspective-1000 hidden md:block">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800" 
              alt="Premium tailoring" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent"></div>
          </div>
          {/* Floating Element */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cream-100 rounded-2xl shadow-xl p-4 animate-float z-20 bg-white/80 backdrop-blur-sm border border-rose-100 hidden lg:block">
            <div className="h-full border-2 border-dashed border-rose-200 rounded-xl flex items-center justify-center flex-col p-4 text-center">
              <span className="text-3xl mb-2">🧵</span>
              <p className="text-xs text-rose-800 font-medium">Fine craftsmanship in every detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
