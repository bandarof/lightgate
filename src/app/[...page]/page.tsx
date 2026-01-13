import { builder } from "@/lib/builder";
import { notFound } from "next/navigation";

interface PageProps {
  params: { page: string[] };
}

export default async function Page({ params }: PageProps) {
  const urlPath = "/" + (params.page?.join("/") || "");
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  
  if (!apiKey) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page: {urlPath}</h1>
        <p className="mt-4 text-red-600">Builder.io API key not configured.</p>
      </div>
    );
  }
  
  try {
    const content = await builder
      .get("page", { userAttributes: { urlPath } })
      .toPromise();

    if (!content) {
      notFound();
    }

    const { BuilderComponent } = await import('@builder.io/react');
    return <BuilderComponent model="page" content={content} />;
  } catch (error) {
    console.error("Builder.io error:", error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page: {urlPath}</h1>
        <p className="mt-4 text-yellow-600">Error loading Builder.io content.</p>
      </div>
    );
  }
}
