import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-left">1. Introduction</h2>
        <p>
          Protecting your privacy is important to us. This privacy policy
          outlines how we collect, use, and protect your personal data when you
          visit this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Data We Collect</h2>
        <p>We collect the following personal data when you use our website:</p>
        <ul className="ml-6 list-inside list-disc">
          <li>
            Contact information (such as your email address if provided
            voluntarily).
          </li>
          <li>
            Usage data (including cookies, IP addresses, and browser
            information).
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
          Our website uses cookies to improve user experience and analyze
          website traffic. You can control the use of cookies through your
          browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Sharing Your Data</h2>
        <p>We do not share your personal data with third parties except:</p>
        <ul className="ml-6 list-inside list-disc">
          <li>When required by law or government authorities.</li>
          <li>
            To trusted third-party service providers who assist in operating the
            website.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this privacy policy or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="ml-6 list-inside list-disc">
          <li>Request access to your personal data.</li>
          <li>Request the correction or deletion of your data.</li>
          <li>Object to the processing of your data or withdraw consent.</li>
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
          We may update this privacy policy from time to time. Any changes will
          be posted on this page with an updated date. Continued use of the
          website after changes indicates your acceptance of the revised policy.
        </p>
      </section>

      <div className="mt-16 text-center text-sm text-gray-600">
        <p>Last Updated: {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
