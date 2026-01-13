// Simple builder export
import { builder } from '@builder.io/sdk';

// Initialize with API key if available
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

export { builder };
