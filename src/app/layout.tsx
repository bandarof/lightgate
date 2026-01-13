import './globals.css';
import { Inter } from 'next/font/google';
import BuilderRegistryClient from '@/components/builder-registry-client';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <BuilderRegistryClient />
        {children}
      </body>
    </html>
  );
}
