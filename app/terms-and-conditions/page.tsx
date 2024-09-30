import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
        <p>
          These terms and conditions govern your use of this website and its
          content. By accessing or using any part of the site, you agree to
          comply with these terms. If you do not agree with any part of these
          terms, you must discontinue use of the site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Services Offered</h2>
        <p>
          This business provides services in scientific communication, web
          design, and illustration, specialising in archaeological knowledge
          management and transfer. These services are provided under bespoke
          agreements tailored to client needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          3. Intellectual Property Rights
        </h2>
        <p>
          All content, illustrations, graphics, and texts provided on this
          website are the intellectual property of this business, unless stated
          otherwise. Unauthorized use, reproduction, or distribution of any
          content is prohibited without prior written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Use of Content</h2>
        <p>
          The further use of images and texts from this website, whether for
          payment or free of charge, as well as the copying or reproduction of
          images and texts, is not permitted. Violation of these terms will
          result in legal action where appropriate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. External Links</h2>
        <p>
          This website may contain links to external websites that are not
          operated by this business. We are not responsible for the content or
          privacy practices of third-party websites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          6. Limitations of Liability
        </h2>
        <p>
          This business will not be held liable for any damages arising from the
          use or inability to use the website or its content. This includes, but
          is not limited to, any errors or omissions in the content, loss of
          data, or business interruption.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws
          of Austria. Any disputes relating to these terms shall be subject to
          the exclusive jurisdiction of the courts of Vienna, Austria.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">8. Changes to Terms</h2>
        <p>
          This business reserves the right to revise these terms at any time.
          Any changes will be communicated through updates to this page.
          Continued use of the website after any changes implies acceptance of
          the updated terms.
        </p>
      </section>

      <div className="mt-16 text-center text-sm text-gray-600">
        <p>Last Updated: {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
