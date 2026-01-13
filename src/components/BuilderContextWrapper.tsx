"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";

interface BuilderContextType {
  someValue: string;
  setSomeValue: (val: string) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export function BuilderContextProvider({ children }: { children: ReactNode }) {
  const [someValue, setSomeValue] = useState("default");
  return (
    <BuilderContext.Provider value={{ someValue, setSomeValue }}>
      {children}
    </BuilderContext.Provider>
  );
}

export function useBuilderContext() {
  const context = useContext(BuilderContext);
  if (!context) throw new Error("useBuilderContext must be used within BuilderContextProvider");
  return context;
}
