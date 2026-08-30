import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollUpArrow';
import Tracking from './Tracking';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  display: 'swap',
});

const BASE_DESCRIPTION =
  'Jona Schlegel helps researchers and heritage organisations turn complex evidence into rigorous illustrations, publications, and accessible digital platforms.';

const SHORT_DESCRIPTION =
  'Archaeological illustration, visual science communication, and full-stack digital heritage platforms by Jona Schlegel.';

/** Site-wide metadata configuration for SEO, Open Graph, and Twitter cards. */
export const metadata: Metadata = {
  metadataBase: new URL('https://jonaschlegel.com'),
  title: {
    template: '%s | Jona Schlegel',
    default: 'Jona Schlegel | Archaeology, Illustration & Digital Heritage',
  },
  description: BASE_DESCRIPTION,
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
    title: 'Jona Schlegel | Archaeology, Illustration & Digital Heritage',
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
    title: 'Jona Schlegel | Archaeology, Illustration & Digital Heritage',
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`bg-primary-cream text-primary-dark ${geistSans.variable}`}
    >
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
        <meta name="theme-color" content="#F4EFE6" />
        <meta name="msapplication-TileColor" content="#F4EFE6" />

        {/* Structured Data for Person/Professional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://jonaschlegel.com/#jona',
              name: 'Jona Schlegel',
              url: 'https://jonaschlegel.com',
              jobTitle:
                'Archaeological Illustrator & Archaeology Web Developer',
              worksFor: {
                '@type': 'Organization',
                '@id': 'https://jonaschlegel.com/#archaeoink',
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
                'Landscape Archaeology',
                'Visual Science Communication',
                'Data Modelling',
                'CIDOC CRM',
                'Archaeological Illustration',
                'Web Development',
                'React & Next.js Ecosystems',
                'Heritage Management Data',
                'Digital Heritage Platforms',
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
                '@id': 'https://jonaschlegel.com/#jona',
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
      </body>
    </html>
  );
}
