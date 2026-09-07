import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image rights and licensing',
  description:
    'Copyright, permitted use and licensing information for images and illustrations by Jona Schlegel and archaeoINK.',
  alternates: {
    canonical: 'https://jonaschlegel.com/image-licensing',
  },
};

/** Explains the default rights status and how to request image permission. */
export default function ImageLicensingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Image rights and licensing</h1>
      <p className="text-sm text-gray-600">Last updated: 7 September 2026</p>

      <section className="mb-8">
        <h2 className="text-left">Default rights statement</h2>
        <p>
          Unless an image has a different credit or licence beside it, original
          illustrations and photographs on this website are © Jona Schlegel /
          archaeoINK. All rights are reserved.
        </p>
        <p>
          Please do not reproduce, redistribute, modify, sell, use commercially,
          place in an automated dataset, or use for model training without prior
          written permission, except where the law permits the use without
          permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Credits and commissioned work
        </h2>
        <p>
          Some portfolio pieces were created for clients, institutions, or
          collaborative projects. Their individual credit lines, licences, and
          agreements take priority over this default statement. This page only
          claims rights held or controlled by Jona Schlegel / archaeoINK.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Linking and sharing</h2>
        <p>
          You are welcome to link to a portfolio page. Please share the page URL
          rather than copying, reposting, or hotlinking the image file. Contact
          me when you need the image itself for teaching, publication, press,
          exhibitions, research, or another project.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Request a licence</h2>
        <p>
          Email{' '}
          <a href="mailto:jonaschlegel@gmail.com">jonaschlegel@gmail.com</a>{' '}
          with the work title or page URL, intended use, medium, territory,
          duration, and expected audience or circulation. I can then confirm
          availability, credit wording, file format, and any fee in writing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Text and data mining reservation
        </h2>
        <p>
          To the extent permitted by applicable law, rights are expressly
          reserved for text and data mining, including automated collection for
          generative-AI training. Crawler instructions published by this website
          communicate that reservation but cannot technically prevent every
          third party from downloading public files.
        </p>
      </section>
    </div>
  );
}
