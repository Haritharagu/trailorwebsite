
import React, { useState, useRef, useEffect } from 'react';
import { getStyleAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const StylistChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello, lovely! I am your Aura Stylist. Looking for some fashion inspiration or need advice on your next outfit?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getStyleAdvice(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] h-[500px] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-rose-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-rose-900 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-800 flex items-center justify-center text-xl">
                👘
              </div>
              <div>
                <h4 className="font-serif text-lg leading-tight">Aura Stylist</h4>
                <p className="text-[10px] uppercase tracking-widest text-rose-300">Online & Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-rose-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FDF2F0]/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-rose-400 text-white rounded-br-none' 
                    : 'bg-white text-gray-700 shadow-sm rounded-bl-none border border-rose-50'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-rose-50 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-rose-200 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-rose-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-rose-50 bg-white">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for fashion advice..."
                className="w-full pl-4 pr-12 py-3 bg-rose-50 border-none rounded-full text-sm focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1.5 w-9 h-9 bg-rose-900 text-white rounded-full flex items-center justify-center hover:bg-rose-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-rose-900 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce"
        >
          <span className="text-3xl">👗</span>
        </button>
      )}
    </div>
  );
};

export default StylistChat;
