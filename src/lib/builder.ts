import { builder } from '@builder.io/sdk';

// Try multiple ways to get the API key
const apiKey = 
  // 1. From env variable (should work on server and client)
  process.env.NEXT_PUBLIC_BUILDER_API_KEY ||
  // 2. From window object if we're in browser (fallback)
  (typeof window !== 'undefined' && (window as any).NEXT_PUBLIC_BUILDER_API_KEY) ||
  // 3. Hardcoded for development
  '2fcfe1b955134aacad7b3c67770584fe';

// Initialize Builder.io
if (apiKey) {
  console.log('Initializing Builder.io with API key');
  builder.init(apiKey);
}

export { builder };
