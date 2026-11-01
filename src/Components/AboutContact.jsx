import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Award, Truck, CheckCircle2 } from 'lucide-react';

const AboutContact = () => {
  const whatsappNumber = "919699081189";
  const phone1 = "+919699081189";
  const phone2 = "+917752914791";
  const instagramUsername = "elysian__lounge";

  return (
    <div id="about">
      
      {/* ABOUT US SECTION */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="inline-block text-xs font-bold text-teal-700 tracking-wider uppercase bg-teal-100/80 px-4 py-1.5 rounded-full mb-4">
              Trust in Craftsmanship — No Compromise on Quality
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              A.R. Sofa Maker (Elysian Lounge)
            </h2>

            <p className="text-slate-600 mt-4 leading-relaxed text-base md:text-lg">
              Welcome to <strong className="text-slate-900">A.R. Sofa Maker (Elysian Lounge)</strong>, led by Master Upholstery & Sofa Specialist <strong className="text-slate-900">Abbas Rizvi</strong>. With years of hands-on expertise in Mumbai, we specialize in crafting custom luxury sofas, expert repairing, dining chair upholstery, and premium bed cotton mattresses.
            </p>

            <p className="text-slate-600 mt-3 leading-relaxed text-base">
              We believe in absolute quality—using only premium materials to ensure the best finishing and timely delivery for every single piece.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">No Compromise on Quality</h4>
                  <p className="text-xs text-slate-500 mt-0.5">High-grade foam, durable frames, & premium fabrics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <Award size={20} className="text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Expert Craftsmanship</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Precision work delivered by experienced hands.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <Clock size={20} className="text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Timely Delivery</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We respect your time and complete projects on schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <ShieldCheck size={20} className="text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Best Finishing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Attention to detail for a luxury high-end feel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Card */}
          <div className="bg-[#0b1329] text-white rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
            
            <span className="text-xs font-bold text-teal-400 tracking-wider uppercase block mb-2">
              Special Offers & Guarantees
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
              Why Customers Trust Us
            </h3>
            
            <ul className="space-y-5 text-slate-300 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <Truck size={22} className="text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Free Home Inspection</strong>
                  <span>Free catalog viewing & exact measurement right at your doorstep.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck size={22} className="text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">3 Years Warranty</strong>
                  <span>Quality high-density foam & strong structural frame durability guaranteed.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Award size={22} className="text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Factory Rates</strong>
                  <span>Top finish at direct workshop pricing with zero middleman markups.</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400">Master Specialist</p>
                <p className="text-lg font-bold text-white">Abbas Rizvi</p>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Abbas%20Rizvi,%20I%20want%20to%20enquire%20about%20sofa%20work.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp Direct
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-teal-700 tracking-wider uppercase bg-teal-100/80 px-4 py-1.5 rounded-full mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Direct Contact & Instant Enquiries
            </h2>
            <p className="text-slate-600 mt-3 text-sm md:text-base">
              Connect with us directly on WhatsApp or phone for immediate pricing and doorstep sample inspection.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* WhatsApp Card */}
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3.5 bg-emerald-600 text-white rounded-xl w-fit">
                  <MessageCircle size={26} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mt-6">Instant WhatsApp Chat</h4>
                <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                  Send us pictures of your sofa, requirements, or fabric preferences for a fast direct estimate.
                </p>
              </div>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi%20A.R.%20Sofa%20Maker,%20I%20would%20like%20to%20get%20a%20quote%20for%20sofa%20work.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3.5 bg-teal-600 text-white rounded-xl w-fit">
                  <Phone size={26} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mt-6">Call Us Directly</h4>
                <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                  Speak directly with Master Specialist Abbas Rizvi for consultations and booking measurements.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mt-8">
                <a 
                  href={`tel:${phone1}`} 
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone size={15} /> Call +91 96990 81189
                </a>
                <a 
                  href={`tel:${phone2}`} 
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone size={15} /> Call +91 77529 14791
                </a>
              </div>
            </div>

            {/* Location & Details Card */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl w-fit">
                  <MapPin size={26} />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mt-6">Workshop Location</h4>
                <p className="text-slate-800 text-sm font-semibold mt-2">
                  Malad West, Mumbai, Maharashtra
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Serving all areas across Mumbai & Thane with doorstep inspection and catalog viewing.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-semibold text-teal-700 flex items-center gap-2">
                <Clock size={16} className="text-teal-600" />
                <span>Open Everyday: 9:00 AM – 9:00 PM</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1329] text-slate-400 py-8 px-6 text-center text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} A.R. SOFA MAKER (Elysian Lounge). All rights reserved.</p>
          
          {/* INSTAGRAM BUTTON USING SAFE INLINE SVG */}
          <a
            href={`https://instagram.com/${instagramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all border border-slate-700"
          >
            <svg className="w-4 h-4 text-pink-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Follow @{instagramUsername}</span>
          </a>

          <p className="text-slate-500">Malad West, Mumbai</p>
        </div>
      </footer>

    </div>
  );
};

export default AboutContact;