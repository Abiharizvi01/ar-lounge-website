import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

import beforeImg from '../assets/sofa-before.jpeg';
import afterImg from '../assets/sofa-after.jpeg';

const Hero = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const whatsappNumber = "919699081189";

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section className="relative bg-[#0b1329] text-white py-20 lg:py-28 px-6 md:px-12 overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Clean Typography */}
        <div className="lg:col-span-6 flex flex-col text-left">
          
          {/* Location Badge */}
          <span className="inline-flex items-center gap-2 bg-teal-950/90 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-xs font-medium w-fit mb-6 shadow-sm">
            <CheckCircle2 size={15} className="text-teal-400" /> Serving Bengaluru & Surrounding Areas
          </span>

          {/* Stark White Bold Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
            Transform Your Old <br />
            Sofa Into A New One
          </h1>

          <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            Professional sofa refurbishment & upholstery services with expert craftsmanship and premium materials at direct factory rates.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap sm:flex-row gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20A.R.%20Sofa%20Maker,%20I%20want%20a%20free%20quote%20for%20sofa%20work.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-teal-900/30 flex items-center justify-center gap-2"
            >
              Get Free Quote
            </a>
            
            <a
              href="#gallery"
              className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 px-8 py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              View Our Work
            </a>
          </div>

          {/* Clean Trust Badges */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap gap-6 text-slate-300 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-teal-400" />
              <span>Door-to-Door Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-teal-400" />
              <span>Direct Factory Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-teal-400" />
              <span>100% Quality Guarantee</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Taller Before / After Slider */}
        <div className="lg:col-span-6 w-full">
          <div 
            className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden select-none border border-slate-800/80 shadow-2xl cursor-ew-resize"
            onMouseMove={handleSliderMove}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();
              const x = touch.clientX - rect.left;
              const width = rect.width;
              setSliderPos(Math.max(0, Math.min(100, (x / width) * 100)));
            }}
          >
            {/* After Image */}
            <img 
              src={afterImg} 
              alt="After Restoration" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="absolute top-4 right-4 bg-teal-600 text-white text-[11px] font-extrabold tracking-wider uppercase px-3.5 py-1 rounded-full shadow z-10 pointer-events-none">
              AFTER
            </span>

            {/* Before Image */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={beforeImg} 
                alt="Before Restoration" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <span className="absolute top-4 left-4 bg-slate-900/90 text-white text-[11px] font-extrabold tracking-wider uppercase px-3.5 py-1 rounded-full shadow z-10">
                BEFORE
              </span>
            </div>

            {/* Divider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl font-bold text-xs border border-slate-300">
                ⟨⟩
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4 tracking-wide">
            Drag slider left / right to view transformation
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;