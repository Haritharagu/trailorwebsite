
import React, { useState } from 'react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600', category: 'Traditional', title: 'Silk Saree Blouse' },
  { id: 2, url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600', category: 'Bridal', title: 'Gold Embroidered Lehanga' },
  { id: 3, url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600', category: 'Contemporary', title: 'Western Gown' },
  { id: 4, url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600', category: 'Traditional', title: 'Cotton Kurta Set' },
  { id: 5, url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600', category: 'Details', title: 'Intricate Bead Work' },
  { id: 6, url: 'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600', category: 'Bridal', title: 'Red Velvet Blouse' },
];

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Design Gallery</h2>
          <p className="text-gray-600 font-light">Explore our curated collection of bespoke masterpieces.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImg(item)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-rose-100 text-xs tracking-widest uppercase mb-2">{item.category}</span>
                <h4 className="text-white font-serif text-2xl">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-4xl">&times;</button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImg.url} 
              alt={selectedImg.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="font-serif text-3xl mb-2">{selectedImg.title}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">{selectedImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
