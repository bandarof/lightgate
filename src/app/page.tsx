import { builder } from "@/lib/builder";

export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  
  if (!apiKey) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-4 text-red-600">Builder.io API key not configured.</p>
        <p className="mt-2">Please set NEXT_PUBLIC_BUILDER_API_KEY in your environment variables.</p>
      </div>
    );
  }

  try {
    const content = await builder
      .get("page", { userAttributes: { urlPath: "/" } })
      .toPromise();

    if (content) {
      const { BuilderComponent } = await import('@builder.io/react');
      return <BuilderComponent model="page" content={content} />;
    }

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-4">No Builder.io content found for homepage.</p>
        <p className="mt-2">Create a page in Builder.io with urlPath = "/"</p>
      </div>
    );
  } catch (error) {
    console.error("Builder.io error:", error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-4 text-yellow-600">Error loading Builder.io content.</p>
      </div>
    );
  }
}
