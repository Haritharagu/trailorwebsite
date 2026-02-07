
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Blouse Stitching',
    description: 'Bespoke blouse designs from traditional maggam work to modern backless patterns.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=500',
    icon: '👗'
  },
  {
    id: '2',
    title: 'Churidar & Salwar',
    description: 'Perfectly fitted ethnic sets designed for comfort and effortless elegance.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=500',
    icon: '🧣'
  },
  {
    id: '3',
    title: 'Bridal & Customs',
    description: 'Transform your special day with custom bridal wear that reflects your unique style.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500',
    icon: '✨'
  },
  {
    id: '4',
    title: 'Alterations',
    description: 'Expert fitting adjustments to make your favorite old outfits feel brand new again.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=500',
    icon: '✂️'
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-[#F9F5F1]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Our Services</h2>
          <p className="text-gray-600 font-light">From traditional craftsmanship to contemporary silhouettes, we provide a wide range of premium tailoring services.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-50"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl text-rose-900 mb-3 group-hover:text-rose-500 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-rose-500 font-semibold text-xs tracking-widest uppercase flex items-center gap-2 group/btn">
                  Learn More 
                  <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
