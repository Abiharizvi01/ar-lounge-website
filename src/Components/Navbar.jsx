import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png'; // Update path if your logo has a different name

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "919699081189";
  const phoneNumber = "+919699081189";

  return (
    <nav className="bg-white border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        
        {/* LOGO & BRANDING */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="A.R. Sofa Maker Logo" className="h-10 w-auto object-contain" />
          <div>
            <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight block leading-tight">
              A.R. SOFA MAKER
            </span>
            <span className="text-[11px] font-bold text-teal-600 tracking-wider uppercase block">
              ELYSIAN LOUNGE
            </span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#" className="hover:text-teal-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-teal-600 transition-colors">Gallery</a>
          <a href="#about" className="hover:text-teal-600 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
        </div>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-800 p-1"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-slate-700">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-teal-600 text-white py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;