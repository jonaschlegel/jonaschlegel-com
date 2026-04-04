import './globals.css';
import type { Metadata } from 'next';
import CalendlyScript from './components/CalendlyScript';
import CrispScript from './components/CrispScript';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollUpArrow';
import Tracking from './Tracking';

const BASE_DESCRIPTION =
  'Jona Schlegel – Freelance archaeological illustrator, visual science communicator, and archaeology web developer. Specialising in archaeological illustration, archaeology web development & design, fullstack web applications for heritage research, and visual science communication for archaeology.';

const SHORT_DESCRIPTION =
  'Freelance archaeological illustrator and archaeology web developer. Specialising in visual science communication, archaeological drawing, and fullstack web development for heritage and archaeology.';

/** Site-wide metadata configuration for SEO, Open Graph, and Twitter cards. */
export const metadata: Metadata = {
  metadataBase: new URL('https://jonaschlegel.com'),
  title: {
    template: '%s | Jona Schlegel',
    default:
      'Jona Schlegel \u2013 Archaeological Illustration, Archaeology Web Development & Visual Science Communication',
  },
  description: BASE_DESCRIPTION,
  keywords: [
    'archaeological illustration',
    'archaeology web development',
    'archaeology web design',
    'visual science communication archaeology',
    'archaeology website',
    'freelance archaeological illustrator',
    'archaeology fullstack developer',
    'archaeological drawing',
    'digital heritage',
    'science communication archaeology',
    'archaeology web developer',
    'archaeological illustration freelance',
    'archaeology painting',
    'heritage web development',
  ],
  authors: [{ name: 'Jona Schlegel', url: 'https://jonaschlegel.com' }],
  creator: 'Jona Schlegel',
  publisher: 'Jona Schlegel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jonaschlegel.com',
    siteName: 'Jona Schlegel',
    title:
      'Jona Schlegel – Archaeological Illustration, Archaeology Web Development & Visual Science Communication',
    description: BASE_DESCRIPTION,
    images: [
      {
        url: '/api/og?title=Jona%20Schlegel&subtitle=Archaeological%20Science%20Communication%20%26%20Knowledge%20Management',
        width: 1200,
        height: 630,
        alt: 'Jona Schlegel - Archaeology & Science Communication',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Jona Schlegel – Archaeological Science Communication & Knowledge Management',
    description: SHORT_DESCRIPTION,
    images: [
      '/api/og?title=Jona%20Schlegel&subtitle=Archaeological%20Science%20Communication%20%26%20Knowledge%20Management',
    ],
    creator: '@jonaschlegel',
  },
  alternates: {
    canonical: 'https://jonaschlegel.com',
  },
  verification: {
    google: 'z5xgbg6m64rk',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  other: {
    // Additional SEO optimizations
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

/** Root layout wrapping all pages with global styles, navigation, and scripts. */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-primary-cream text-primary-dark">
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
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#009a73" />
        <meta name="msapplication-TileColor" content="#009a73" />

        {/* Structured Data for Person/Professional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jona Schlegel',
              url: 'https://jonaschlegel.com',
              jobTitle:
                'Archaeological Illustrator & Archaeology Web Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'archaeoINK',
                url: 'https://jonaschlegel.com',
                description:
                  'Visual science communication studio for archaeological illustration, archaeology web development, and heritage design.',
              },
              alumniOf: [
                {
                  '@type': 'EducationalOrganization',
                  name: 'HTW Berlin – University of Applied Sciences',
                  url: 'https://krg.htw-berlin.de/',
                  description: 'Bachelor and Master studies',
                },
              ],
              knowsAbout: [
                'Archaeological Illustration',
                'Archaeology Web Development',
                'Archaeology Web Design',
                'Fullstack Web Development for Archaeology',
                'Visual Science Communication',
                'Archaeological Drawing',
                'Digital Heritage Platforms',
                'Science Communication',
                'Landscape Archaeology',
              ],
              sameAs: [
                'https://www.linkedin.com/in/jona-schlegel/',
                'https://orcid.org/0000-0002-4190-9566',
                'https://www.instagram.com/archaeoink/',
                'https://bsky.app/profile/jonaschlegel.com',
                'https://github.com/jonaschlegel',
                'https://mastodon.social/@archaeoINK',
              ],
            }),
          }}
        />

        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Jona Schlegel',
              url: 'https://jonaschlegel.com',
              description:
                'Archaeological Illustration, Archaeology Web Development & Visual Science Communication',
              author: {
                '@type': 'Person',
                name: 'Jona Schlegel',
              },
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
        <Tracking />
        <CalendlyScript />
        <CrispScript />
      </body>
    </html>
  );
}
