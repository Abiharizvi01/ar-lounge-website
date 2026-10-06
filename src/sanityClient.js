import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'j0qc5i85', // Replace with your actual Project ID from sanity.config.js
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-01-01',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);