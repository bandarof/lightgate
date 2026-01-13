import { BuilderComponent } from "@builder.io/react";
import { builder } from "@/lib/builder";
import { notFound } from "next/navigation";

interface PageProps {
  params: { page: string[] };
}

export default async function Page({ params }: PageProps) {
  const urlPath = "/" + (params.page?.join("/") || "");
  try {
    const content = await builder
      .get("page", { userAttributes: { urlPath } })
      .toPromise();

    if (!content) {
      notFound();
    }

    return <BuilderComponent model="page" content={content} />;
  } catch (error) {
    console.error("Error fetching Builder.io content:", error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page: {urlPath}</h1>
        <p className="mt-4">Unable to load Builder.io content at the moment.</p>
      </div>
    );
  }
}
