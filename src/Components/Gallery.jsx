import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { client, urlFor } from '../sanityClient';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedTag, setSelectedTag] = useState('all');
  const [loading, setLoading] = useState(true);
  const whatsappNumber = "919699081189";

  useEffect(() => {
    // GROQ Query to fetch all photos from Sanity Studio ordered by newest first
    const query = '*[_type == "galleryItem"] | order(_createdAt desc)';
    client
      .fetch(query)
      .then((data) => {
        setGalleryItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  // Filter items based on active category tag
  const filteredItems = selectedTag === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedTag);

  return (
    <section id="gallery" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold text-teal-700 tracking-wider uppercase bg-teal-100/80 px-4 py-1.5 rounded-full mb-3">
            Our Work Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recent Craftsmanship & Transformations
          </h2>
          <p className="text-slate-600 mt-3 text-sm md:text-base">
            Explore our latest completed custom sofas, upholstery restorations, and mattress crafts.
          </p>
        </div>

        {/* Category Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'All Work', value: 'all' },
            { label: 'Custom Sofas', value: 'custom-sofa' },
            { label: 'Sofa Repair', value: 'sofa-repair' },
            { label: 'Dining Chairs', value: 'dining-chairs' },
            { label: 'Mattresses', value: 'mattress' },
          ].map((tag) => (
            <button
              key={tag.value}
              onClick={() => setSelectedTag(tag.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedTag === tag.value
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 bg-slate-100 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredItems.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No items found in this category yet.
          </div>
        )}

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                {item.image && (
                  <img
                    src={urlFor(item.image).width(800).quality(85).url()}
                    alt={item.title || "Sofa Work"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}

                {/* WhatsApp Overlay Button */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi%20Abbas,%20I%20am%20interested%20in%20work%20similar%20to%20this%20item.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle size={16} /> Enquire on WhatsApp
                  </a>
                </div>
              </div>

              {/* Title & Tag Footer */}
              <div className="p-4 border-t border-slate-200/80 bg-white flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm truncate">
                  {item.title || "Refurbished Work"}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md border border-teal-200/60 shrink-0">
                  {item.category?.replace('-', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;