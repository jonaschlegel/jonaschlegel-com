import React from 'react';

const Imprint = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Imprint</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Business Information</h2>
        <p>
          <strong>Business Owner:</strong> Jona Schlegel
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:archaeoink@jonaschlegel.com">
            archaeoink@jonaschlegel.com
          </a>
        </p>
        <p>
          <strong>Headquarters:</strong> Vienna, Austria
        </p>
        <p>
          <strong>Type of Business:</strong> Neue Selbständige (Freelancer)
        </p>
        <p>
          <strong>Specialisations:</strong> Freelancing in Archaeology,
          Illustrations, Science Communication, Web Design
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Content Liability</h2>
        <p>
          The content of this website has been created with the utmost care.
          However, the accuracy, completeness, and timeliness of the content
          cannot be guaranteed. As a service provider, I am responsible for my
          own content on these pages under general laws. However, I am not
          obliged to monitor transmitted or stored third-party information or
          investigate circumstances that indicate illegal activity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Copyright</h2>
        <p>
          The further use of images and texts from this website, whether for
          payment or free of charge, as well as the copying or reproduction of
          images and texts, is not permitted without prior written permission
          from the business owner. Any unauthorized use will result in legal
          action.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">External Links</h2>
        <p>
          This website may contain links to external websites. As the content of
          these third-party websites is beyond my control, I cannot accept any
          liability for these external contents. The respective provider or
          operator of the linked pages is always responsible for the content of
          the pages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Legal Notice</h2>
        <p>
          This imprint is subject to the laws of Austria. Any disputes arising
          in connection with the use of this website will be handled by the
          competent court in Vienna.
        </p>
      </section>

      <div className="mt-16 text-center text-sm text-gray-600">
        <p>Last Updated: {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Imprint;
