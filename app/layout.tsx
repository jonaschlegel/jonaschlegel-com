import './globals.css';
import CalendlyScript from './components/CalendlyScript';
import CrispScript from './components/CrispScript';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollUpArrow';
import Tracking from './Tracking';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-800 text-white">
      <head>
        {/* Add your icons here */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <Tracking />
        <CalendlyScript />
        <CrispScript />
      </body>
    </html>
  );
}
