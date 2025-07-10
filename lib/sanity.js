import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Ensure we have a project ID
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
if (!projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable');
}

export const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered "public", but you can use environment variables
   * if you want to differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: projectId,
  apiVersion: '2023-05-03', // Use a UTC date string
  /**
   * Set useCdn to `false` if your application requires the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated requests (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production',
  studioUrl: '/studio',
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (preview) => {
  // If no projectId is set, return a mock client that won't throw errors
  if (!projectId) {
    return {
      fetch: async () => [],
    };
  }
  return preview ? previewClient : sanityClient;
};

// Set up the image builder to get optimized images from Sanity
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
