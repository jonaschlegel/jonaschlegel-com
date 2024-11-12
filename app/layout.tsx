import './globals.css';
import CalendlyScript from './components/CalendlyScript';
import CrispScript from './components/CrispScript';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollUpArrow';
import Tracking from './Tracking';
import { defaultMetadata } from './metadata';

type Metadata = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function RootLayout({
  children,
  metadata = defaultMetadata,
}: {
  children: React.ReactNode;
  metadata?: Metadata;
}) {
  const { title, description, url, image } = {
    ...defaultMetadata,
    ...metadata,
  };

  return (
    <html lang="en" className="bg-neutral-800 text-white">
      <head>
        {/* Favicon and Icons */}
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

        {/* Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
