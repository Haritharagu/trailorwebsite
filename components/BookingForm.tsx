
import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Thread */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-rose-50 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-rose-900 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Book Your Appointment</h2>
            <p className="text-rose-100 font-light text-lg mb-12">
              Ready for your perfect fit? Drop us a message or visit our boutique to discuss your vision.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-rose-800 flex items-center justify-center transition-colors group-hover:bg-rose-700">
                  📍
                </div>
                <div>
                  <h4 className="font-medium">Visit Us</h4>
                  <p className="text-rose-200 text-sm">123 Silk Lane, Fashion District, City Name</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-rose-800 flex items-center justify-center transition-colors group-hover:bg-rose-700">
                  📞
                </div>
                <div>
                  <h4 className="font-medium">Call/WhatsApp</h4>
                  <p className="text-rose-200 text-sm">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full flex items-center gap-2 text-sm transition-colors">
                 <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white border border-rose-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-rose-300 outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white border border-rose-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-rose-300 outline-none transition-all" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select className="w-full bg-white border border-rose-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-rose-300 outline-none transition-all appearance-none">
                  <option>Blouse Stitching</option>
                  <option>Churidar / Salwar</option>
                  <option>Bridal Customization</option>
                  <option>Alterations</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message / Notes</label>
                <textarea rows={4} className="w-full bg-white border border-rose-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-rose-300 outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full bg-rose-400 text-white font-semibold py-4 rounded-xl tracking-widest uppercase hover:bg-rose-500 shadow-lg transition-all active:scale-95">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
