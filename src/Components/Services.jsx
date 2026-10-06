import React from 'react';
import { Sofa, Wrench, Sparkles, BedDouble, ShieldCheck, Truck } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Sofa size={32} className="text-teal-600" />,
      title: 'Custom Sofa Manufacturing',
      desc: 'Tailor-made L-shape, 3-seater, recliners, and sofa-cum-beds built from scratch to fit your exact living room measurements.'
    },
    {
      icon: <Wrench size={32} className="text-teal-600" />,
      title: 'Sofa Repair & Refurbishment',
      desc: 'Complete restoration including foam replacing, spring fixing, wooden frame repair, and stitching updates.'
    },
    {
      icon: <Sparkles size={32} className="text-teal-600" />,
      title: 'Re-Upholstery & Fabric Swap',
      desc: 'Transform your worn-out sofa with premium Velvet, Leatherette, Suede, or Stain-Resistant fabrics.'
    },
    {
      icon: <BedDouble size={32} className="text-teal-600" />,
      title: 'Custom Mattresses & Cushioning',
      desc: 'High-density foam, orthopedic cotton mattresses, and luxury daybed cushion making at factory direct pricing.'
    },
    {
      icon: <ShieldCheck size={32} className="text-teal-600" />,
      title: 'Dining & Accent Chair Repair',
      desc: 'Upholstery padding and structural reinforcement for dining chairs, office chairs, and lounge armchairs.'
    },
    {
      icon: <Truck size={32} className="text-teal-600" />,
      title: 'Free Doorstep Inspection',
      desc: 'We visit your site in Bengaluru with fabric sample catalogs for on-the-spot measurement and quotes.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 px-6 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-teal-700 tracking-wider uppercase bg-teal-100/80 px-3.5 py-1 rounded-full">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Complete Furniture & Upholstery Solutions
          </h2>
          <p className="text-slate-600 mt-3 text-sm md:text-base">
            From manufacturing luxury custom sofas to restoring older furniture back to new condition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="p-3 bg-teal-50 w-fit rounded-xl group-hover:bg-teal-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-5">{service.title}</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;