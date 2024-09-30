import './globals.css';
import type { Metadata } from 'next';
import CalendlyScript from './components/CalendlyScript';
import CrispScript from './components/CrispScript';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tracking from './Tracking';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-800 text-white">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Tracking />
        <CalendlyScript />
        <CrispScript />
      </body>
    </html>
  );
}
