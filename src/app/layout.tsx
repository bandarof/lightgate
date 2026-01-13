import React from "react";
import BuilderContextProvider from "../components/builder-registry-client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BuilderContextProvider>
          {children}
        </BuilderContextProvider>
      </body>
    </html>
  );
}
