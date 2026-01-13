import { builder } from '@builder.io/sdk';

// Try multiple ways to get the API key
const apiKey =
  // 1. From env variable (should work on server and client)
  process.env.NEXT_PUBLIC_BUILDER_API_KEY ||
  // 2. Hardcoded for development
  '2fcfe1b955134aacad7b3c67770584fe';

// Initialize Builder.io only on client side to avoid build-time context errors
if (typeof window !== 'undefined' && apiKey) {
  try {
    builder.init(apiKey);
    console.log('Builder.io initialized with API key');
  } catch (error) {
    console.error('Failed to initialize Builder.io:', error);
  }
}

export { builder };
