import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <header className="nav">
          <div className="container nav-inner">
            <div className="logo">LIGHTGATE</div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

      </body>
    </html>
  );
}
