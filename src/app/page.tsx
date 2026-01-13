import { builder } from "@/lib/builder";

// Direct reference to API key for debugging
const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export default async function Home() {
  console.log('Home page rendering, API key:', API_KEY ? 'Set' : 'Not set');
  
  // If no API key, show a clear message
  if (!API_KEY) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-800 font-bold">Builder.io API key not configured.</p>
          <p className="mt-2 text-yellow-700">
            Please ensure <code className="bg-yellow-100 px-1 rounded">NEXT_PUBLIC_BUILDER_API_KEY</code> is set in <code className="bg-yellow-100 px-1 rounded">.env.local</code>
          </p>
          <p className="mt-2 text-sm text-yellow-600">
            Current directory: {process.cwd()}
          </p>
        </div>
      </div>
    );
  }

  try {
    console.log('Fetching Builder.io content for homepage');
    const content = await builder
      .get("page", { userAttributes: { urlPath: "/" } })
      .toPromise();

    if (content) {
      console.log('Builder.io content found:', content.id);
      const { BuilderComponent } = await import('@builder.io/react');
      return <BuilderComponent model="page" content={content} />;
    }

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-blue-800">No Builder.io content found for homepage.</p>
          <p className="mt-2 text-sm text-blue-700">
            Create a page in Builder.io with urlPath = "/"
          </p>
          <p className="mt-2 text-xs text-green-600">
            API Key is configured (first 8 chars): {API_KEY.substring(0, 8)}...
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Builder.io error:", error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-800 font-bold">Error loading Builder.io content.</p>
          <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto">
            {error instanceof Error ? error.message : String(error)}
          </pre>
          <p className="mt-2 text-sm text-red-700">
            API Key: {API_KEY ? 'Set' : 'Not set'}
          </p>
        </div>
      </div>
    );
  }
}
