interface PageProps {
  params: { page: string[] };
}

export default async function Page({ params }: PageProps) {
  const urlPath = "/" + (params.page?.join("/") || "");
  
  // Check if we should use Builder.io
  const useBuilder = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  
  if (!useBuilder) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page: {urlPath}</h1>
        <p className="mt-4">Builder.io not configured (no API key).</p>
      </div>
    );
  }
  
  try {
    // Try to use Builder.io
    const { builder } = await import('@builder.io/sdk');
    const { BuilderComponent } = await import('@builder.io/react');
    
    // Initialize builder
    builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
    
    const content = await builder
      .get("page", { userAttributes: { urlPath } })
      .toPromise();

    if (content) {
      return <BuilderComponent model="page" content={content} />;
    }
    
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page: {urlPath}</h1>
        <p className="mt-4">No Builder.io content found for this page.</p>
      </div>
    );
  } catch (error) {
    console.error("Builder.io error:", error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page: {urlPath}</h1>
        <p className="mt-4">Error loading Builder.io content.</p>
      </div>
    );
  }
}
