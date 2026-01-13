import HeaderClient from "@/components/HeaderClient";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lightgate Media - Digital Marketing Agency",
  description: "Drive your business growth with our comprehensive digital marketing solutions including SEO, PPC, social media marketing, content strategy, and web design.",
  keywords: "digital marketing, SEO, PPC, social media marketing, content marketing, web design",
  openGraph: {
    title: "Lightgate Media - Digital Marketing Agency",
    description: "Drive your business growth with our comprehensive digital marketing solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div className="h-16 bg-white shadow-md" />}>
          <HeaderClient />
        </Suspense>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
