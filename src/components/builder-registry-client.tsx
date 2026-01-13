"use client";

import { Builder } from "@builder.io/react";
import { useEffect } from "react";

export default function BuilderRegistryClient() {
  useEffect(() => {
    Builder.registerComponent(
      ({ text }: { text: string }) => <h1 className="text-4xl font-bold">{text}</h1>,
      {
        name: "Heading",
        inputs: [{ name: "text", type: "string" }],
      }
    );
  }, []);

  return null;
}
