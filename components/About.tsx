
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-4 -left-4 w-32 h-32 bg-rose-100 -z-10 rounded-full"></div>
             <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-beige-100 -z-10 rounded-full opacity-50"></div>
             <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
              alt="The Artisan at work" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover ring-8 ring-[#FDF2F0]"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-rose-500 font-semibold tracking-widest uppercase text-sm">Our Legacy</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 leading-tight">
              Perfect Fit, <br />
              Personal Style, <br />
              Timeless Confidence.
            </h2>
            <div className="w-20 h-1 bg-gold-400 bg-orange-300"></div>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Aura Couture was founded on a simple principle: every woman deserves the perfect fit that celebrates her personal style and builds timeless confidence. With over 25 years of experience, we bring passion, precision, and an eye for perfection to every garment.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              From the intricate patterns of a bridal blouse to the simple elegance of a daily-wear churidar, we honor the tradition of hand-crafted tailoring while embracing modern aesthetics. We don't just stitch fabric; we craft confidence that lasts a lifetime.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-4xl font-serif text-rose-800">25+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-rose-800">5k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
