import { notFound } from "next/navigation";

interface PageProps {
  params: { page: string[] };
}

// This catch-all route will not match any defined routes above
// Return 404 for all unmatched routes
export default function Page({ params }: PageProps) {
  notFound();
}
