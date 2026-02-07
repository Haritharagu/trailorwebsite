
import React from 'react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    comment: 'The fit was absolutely perfect! I had my bridal blouse stitched here and everyone kept asking where I got it done.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 2,
    name: 'Anjali Nair',
    comment: 'Very professional and timely. The attention to detail in the embroidery is simply unmatched. Highly recommended!',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 3,
    name: 'Deepika Rao',
    comment: 'Finally found a tailor who understands exactly what I want. The suggestions for fabric were so helpful.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

const Reviews: React.FC = () => {
  return (
    <div className="py-24 bg-[#FDF2F0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Kind Words</h2>
          <p className="text-gray-600 font-light">What our lovely clients have to say about their Aura experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-rose-50 flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-6 bg-white p-2 rounded-full shadow-md">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="mt-8 mb-6 flex text-orange-300">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic font-light mb-8 leading-relaxed">
                "{review.comment}"
              </p>
              <h4 className="font-serif text-lg text-rose-900">{review.name}</h4>
              <span className="text-rose-400 text-xs font-semibold tracking-widest mt-1">LOYAL CLIENT</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
