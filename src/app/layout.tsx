import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Lightgate",
  description: "Illuminating the World Through Culture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">

        <ThemeProvider>

          <Header />

          {children}

          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}
