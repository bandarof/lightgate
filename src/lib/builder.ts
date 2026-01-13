import { builder } from '@builder.io/sdk';

// Initialize with API key if available
// This needs to run on both server and client
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (apiKey && !builder.isInitialized) {
  builder.init(apiKey);
} else if (!apiKey) {
  console.warn('NEXT_PUBLIC_BUILDER_API_KEY is not set. Builder.io content will not load.');
}

export { builder };
