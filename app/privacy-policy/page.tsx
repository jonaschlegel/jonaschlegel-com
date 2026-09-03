import type { Metadata } from 'next';
import { generateLegalOGImageUrl } from '../lib/og-utils';

/** SEO metadata for the Privacy Policy page. */
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy information for jonaschlegel.com explaining what data is collected and which services are used.',
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: 'Privacy Policy | Jona Schlegel',
    description:
      'Privacy policy for jonaschlegel.com detailing how personal data is collected, used, and protected in compliance with GDPR.',
    images: [
      {
        url: generateLegalOGImageUrl('Privacy Policy'),
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Jona Schlegel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Jona Schlegel',
    description:
      'Privacy policy for jonaschlegel.com detailing data handling in compliance with GDPR.',
    images: [generateLegalOGImageUrl('Privacy Policy')],
  },
  alternates: {
    canonical: 'https://jonaschlegel.com/privacy-policy',
  },
};

/** Privacy information matching the services currently used by the website. */
export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-600">Last updated: 20 July 2026</p>

      <section className="mb-8">
        <h2 className="text-left">1. Introduction</h2>
        <p>
          Jona Schlegel, trading as archaeoINK, is responsible for the personal
          data described on this page. Questions and privacy requests can be
          sent to{' '}
          <a href="mailto:archaeoink@jonaschlegel.com">
            archaeoink@jonaschlegel.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Data We Collect</h2>
        <p>We collect the following personal data when you use our website:</p>
        <ul className="ml-6 list-inside list-disc">
          <li>
            Information submitted through the project enquiry form, including
            your name, email address, project type, timeline, and message.
          </li>
          <li>
            Limited usage and device information when you consent to analytics.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Data</h2>
        <p>Your personal data may be used for the following purposes:</p>
        <ul className="ml-6 list-inside list-disc">
          <li>To provide services or respond to inquiries.</li>
          <li>To analyze website usage and improve our offerings.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Cookies</h2>
        <p>
          CookieYes stores and communicates your consent preferences. Optional
          analytics storage is denied by default and can be changed through the
          cookie settings shown on the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Sharing Your Data</h2>
        <p>The website uses the following service providers:</p>
        <ul className="ml-6 list-inside list-disc">
          <li>Vercel for website hosting and delivery.</li>
          <li>CookieYes for consent management.</li>
          <li>Google Analytics when analytics consent is granted.</li>
          <li>
            Resend to deliver information submitted through the enquiry form.
          </li>
          <li>
            OpenStreetMap and CARTO when the interactive CV map is displayed.
          </li>
          <li>
            Sketchfab only after you choose to load an interactive 3D model.
          </li>
        </ul>
        <p>
          Links to external services such as Calendly, social networks, and the
          archaeoINK publication on Substack open those services directly. Their
          own privacy terms apply after you follow a link.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Data Retention</h2>
        <p>
          Enquiry details are kept only as long as needed to respond, manage a
          potential or active project, and meet applicable administrative
          obligations. Analytics retention is controlled through the configured
          analytics and consent settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="ml-6 list-inside list-disc">
          <li>Request access to your personal data.</li>
          <li>Request the correction or deletion of your data.</li>
          <li>Object to the processing of your data or withdraw consent.</li>
          <li>Request a portable copy where applicable.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">8. Security</h2>
        <p>
          We implement security measures to protect your personal data, but no
          method of transmission over the internet is 100% secure. We cannot
          guarantee absolute security of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          9. Changes to This Policy
        </h2>
        <p>
          This page is updated when the website or its service providers change.
          The date at the top shows the latest revision.
        </p>
      </section>
    </div>
  );
}
