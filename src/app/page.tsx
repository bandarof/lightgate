import { builder } from "@/lib/builder";

export default async function Home() {
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
    </div>
  );
}
