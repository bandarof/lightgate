import { BuilderComponent } from "@builder.io/react";
import { builder } from "@/lib/builder";
import { notFound } from "next/navigation";

interface PageProps {
  params: { page: string[] };
}

export default async function Page({ params }: PageProps) {
  const urlPath = "/" + (params.page?.join("/") || "");

  const content = await builder
    .get("page", { userAttributes: { urlPath } })
    .toPromise();

  if (!content) {
    notFound();
  }

  return <BuilderComponent model="page" content={content} />;
}
