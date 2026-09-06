import type { Metadata } from 'next';
import ArchiveGrid from './components/ArchiveGrid';
import ArchiveIntroduction from './components/ArchiveIntroduction';
import CalendlyButton from './components/CalendlyButton';
import { landingPageAssets } from './content/archive-assets';
import { visualWorks } from './content/works';
import { toArchiveGridItems } from './content/archive-grid';

export const metadata: Metadata = {
  title: 'archaeoINK — archaeology in images and interfaces',
  description:
    'Selected archaeological illustration, visual research, design and web work by Jona Schlegel.',
  alternates: { canonical: 'https://jonaschlegel.com' },
};

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'archaeoINK by Jona Schlegel',
    description:
      'Archaeological illustration, visual research, reconstruction and digital heritage work.',
    url: 'https://jonaschlegel.com',
    author: {
      '@type': 'Person',
      '@id': 'https://jonaschlegel.com/#jona',
      name: 'Jona Schlegel',
    },
  };

  return (
    <div className="archive-page">
      <ArchiveIntroduction title="Welcome to archaeoINK">
        Where illustration, reconstruction, visual science communication, and
        web design and development meet archaeology.
      </ArchiveIntroduction>
      <ArchiveGrid
        items={toArchiveGridItems(landingPageAssets, visualWorks)}
        showLabels={false}
      />
      <section
        id="contact"
        className="archive-contact"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="archive-eyebrow">Contact</p>
          <h2 id="contact-title">Have a research story to make visible?</h2>
          <p>
            Tell me what you are working on, and we can find the right visual or
            digital form for it.
          </p>
        </div>
        <CalendlyButton text="Book an appointment" />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
