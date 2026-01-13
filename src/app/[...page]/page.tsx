import { notFound } from "next/navigation";

interface PageProps {
  params: { page: string[] };
}

// Generate static params for the catch-all route
export async function generateStaticParams() {
  // Return empty array to skip static generation for catch-all routes
  // This is fine since we have specific routes defined above
  return [];
}

// This catch-all route will not match any defined routes above
// Return 404 for all unmatched routes
export default function Page({ params }: PageProps) {
  notFound();
}
