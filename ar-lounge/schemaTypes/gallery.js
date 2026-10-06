export default {
  name: 'galleryItem',
  title: 'Gallery Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Item Title',
      type: 'string',
      description: 'Short title (e.g., Custom Velvet L-Shape Sofa)',
    },
    {
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      options: {
        list: [
          // Layouts & Capacity
          { title: '🛋️ L-Shape Sofa', value: 'l-shape-sofa' },
          { title: '🛋️ U-Shape Sofa', value: 'u-shape-sofa' },
          { title: '🛋️ 2 / 3 Seater Sofa', value: '2-3-seater-sofa' },
          { title: '🛋️ Sectional / Corner Sofa', value: 'sectional-sofa' },
          { title: '🛋️ Recliner / Home Theatre Sofa', value: 'recliner-sofa' },
          { title: '🛋️ Sofa Cum Bed / Daybed', value: 'sofa-cum-bed' },

          // Materials & Custom Builds
          { title: '✨ Leather Sofa', value: 'leather-sofa' },
          { title: '✨ Velvet / Fabric Sofa', value: 'velvet-fabric-sofa' },
          { title: '✨ Wooden Sofa', value: 'wooden-sofa' },
          { title: '👑 Chesterfield / Luxury Sofa', value: 'luxury-sofa' },

          // Commercial & Space Specific
          { title: '🏢 Office & Reception Sofa', value: 'office-sofa' },
          { title: '☕ Hotel & Restaurant Sofa', value: 'hotel-sofa' },
          { title: '🏡 Outdoor & Balcony Sofa', value: 'outdoor-sofa' },

          // Sets & Services
          { title: '📦 Complete Sofa Set (3+2 / 3+1+1)', value: 'sofa-set' },
          { title: '🛠️ Sofa Repair & Refurbishment', value: 'sofa-repair' },
          { title: '🪑 Dining Chair Upholstery', value: 'dining-chairs' },
          { title: '🛏️ Bed Mattress & Headboards', value: 'mattress' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Sofa Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}