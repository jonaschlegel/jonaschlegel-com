import type { Metadata } from 'next';
import ArchiveGrid from './components/ArchiveGrid';
import ArchiveIntroduction from './components/ArchiveIntroduction';
import {
  allWorkAssets,
  archiveAssets,
  landingPageAssets,
} from './content/archive-assets';
import {
  getFeaturedArchiveItems,
  toArchiveGridItems,
} from './content/archive-grid';
import { visualWorks } from './content/works';

export const metadata: Metadata = {
  title: 'Archaeology, drawn, mapped and made usable',
  description:
    'Jona Schlegel is an archaeologist, illustrator and web developer working with research, objects, maps and digital interfaces.',
  alternates: { canonical: 'https://jonaschlegel.com' },
};

const featuredItems = getFeaturedArchiveItems(
  toArchiveGridItems(
    [...landingPageAssets, ...allWorkAssets, ...archiveAssets],
    visualWorks,
  ),
);

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Archaeology, drawn, mapped and made usable',
    description:
      'Illustration, reconstruction, cartography and digital interface work by archaeologist Jona Schlegel.',
    url: 'https://jonaschlegel.com',
    author: {
      '@type': 'Person',
      '@id': 'https://jonaschlegel.com/#jona',
      name: 'Jona Schlegel',
    },
  };

  return (
    <div className="archive-page home-page">
      <ArchiveIntroduction title="Welcome to archaeoINK.">
        I am Jona Schlegel, an archaeologist, illustrator and web developer. I
        turn research, objects and complex data into illustrations,
        reconstructions, maps and digital interfaces for archaeological
        projects, publications and public engagement.
      </ArchiveIntroduction>

      <section aria-labelledby="selected-work-heading">
        <div className="archive-section-heading">
          <p className="archive-eyebrow" id="selected-work-heading">
            A selection of things I have made
          </p>
        </div>
        <ArchiveGrid items={featuredItems} showLabels randomize={false} />
      </section>

      <section
        id="contact"
        className="archive-contact"
        aria-labelledby="contact-heading"
      >
        <div>
          <p className="archive-eyebrow">Contact</p>
          <h2 id="contact-heading">Write to me.</h2>
        </div>
        <div className="archive-contact__copy">
          <p>
            For questions about the work, an idea you would like to discuss, or
            simply to say hello.
          </p>
          <div className="archive-contact__links">
            <a href="mailto:jonaschlegel@gmail.com">jonaschlegel@gmail.com</a>
            <a
              href="https://calendly.com/jonaschlegel"
              target="_blank"
              rel="noreferrer"
            >
              Choose a time
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
