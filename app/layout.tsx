import './globals.css';
import type { Metadata } from 'next';
import CalendlyScript from './components/CalendlyScript';
import CrispScript from './components/CrispScript';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollUpArrow';
import Tracking from './Tracking';

export const metadata: Metadata = {
  metadataBase: new URL('https://jonaschlegel.com'),
  title: {
    template: '%s | Jona Schlegel',
    default:
      'Jona Schlegel – Archaeological Science Communication & Knowledge Management',
  },
  description:
    "Explore archaeology, scientific communication, and knowledge management. Discover how archaeological insights are shared with public engagement and innovation at Jona Schlegel's site.",
  keywords: [
    'archaeology',
    'science communication',
    'knowledge management',
    'archaeological research',
    'public engagement',
    'scientific writing',
    'archaeological illustration',
    'digital humanities',
    'heritage studies',
    'academic research',
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
      'Jona Schlegel – Archaeological Science Communication & Knowledge Management',
    description:
      'Explore archaeology, scientific communication, and knowledge management. Discover how archaeological insights are shared with public engagement and innovation.',
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
    description:
      'Explore archaeology, scientific communication, and knowledge management. Discover how archaeological insights are shared with public engagement and innovation.',
    images: [
      '/api/og?title=Jona%20Schlegel&subtitle=Archaeological%20Science%20Communication%20%26%20Knowledge%20Management',
    ],
    creator: '@jonaschlegel',
  },
  alternates: {
    canonical: 'https://jonaschlegel.com',
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Replace with actual verification code
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              jobTitle: 'Archaeological Science Communication Specialist',
              worksFor: {
                '@type': 'Organization',
                name: 'Independent Consultant',
              },
              alumniOf: [
                {
                  '@type': 'EducationalOrganization',
                  name: 'University of Archaeology', // Update with actual university
                },
              ],
              knowsAbout: [
                'Archaeology',
                'Science Communication',
                'Knowledge Management',
                'Archaeological Research',
                'Public Engagement',
                'Digital Humanities',
              ],
              sameAs: [
                'https://linkedin.com/in/jonaschlegel', // Update with actual profiles
                'https://twitter.com/jonaschlegel',
                'https://orcid.org/0000-0000-0000-0000', // Update with actual ORCID
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
                'Archaeological Science Communication & Knowledge Management',
              author: {
                '@type': 'Person',
                name: 'Jona Schlegel',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://jonaschlegel.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <Tracking />
        <CalendlyScript />
        <CrispScript />
      </body>
    </html>
  );
}
