import Link from 'next/link';
import type { Metadata } from 'next';
import CalendlyButton from './components/CalendlyButton';
import ArchiveGrid from './components/ArchiveGrid';
import ArchiveIntroduction from './components/ArchiveIntroduction';
import { allWorkAssets, archiveAssets, landingPageAssets } from './content/archive-assets';
import { visualWorks } from './content/works';
import { toArchiveGridItems } from './content/archive-grid';

export const metadata: Metadata = {
  title: 'Archaeology, drawn, mapped and made usable',
  description:
    'Jona Schlegel is an archaeologist, illustrator and web developer working with research, objects, maps and digital interfaces.',
  alternates: { canonical: 'https://jonaschlegel.com' },
};

// Keep the landing page a generous visual archive: the small landing collection
// is supplemented with a few maps, reconstructions, interfaces and identity studies.
const additionalLandingFilenames = new Set([
  'Babylon-map.jpg',
  'europe-graffiti-history-spray-can.jpg',
  'trier-roman-economy-geology-and-raw-materials-map.webp',
  'trier-roman-pottery-workshop-reconstruction-close.webp',
  'archaeological-multi-tool.jpg',
  'digital-elevation-model.jpg',
  'bell-beaker-map.jpg',
  'archaeological-stratigraphy.png',
  'pastrace-brand-identity.webp',
]);

const interfaceFilenames = new Set(['suriname-tijdmachine-1.webp', 'necessary-reunions.png']);

const selectedAssets = [
  ...landingPageAssets,
  ...allWorkAssets.filter((asset) => additionalLandingFilenames.has(asset.filename)),
  ...archiveAssets.filter((asset) => interfaceFilenames.has(asset.filename)),
];

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
      <ArchiveIntroduction title="Archaeology, drawn, mapped and made usable.">
        I am Jona Schlegel, an archaeologist, illustrator and web developer. I turn research,
        objects and complex data into illustrations, reconstructions, maps and digital interfaces
        for archaeological projects, publications and public engagement.
      </ArchiveIntroduction>

      <section aria-labelledby="selected-work-heading">
        <div className="archive-section-heading">
          <p className="archive-eyebrow" id="selected-work-heading">
            A selection of things I have made
          </p>
        </div>
        <ArchiveGrid
          items={toArchiveGridItems(selectedAssets, visualWorks)}
          showLabels
          randomize={false}
        />
      </section>

      <nav className="home-links" aria-label="Explore the archive">
        <Link href="/work">All work</Link>
        <a href="https://archaeoink.substack.com/" target="_blank" rel="noreferrer">
          Research notebook ↗
        </a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="contact" className="archive-contact" aria-labelledby="contact-heading">
        <p className="archive-eyebrow">Contact</p>
        <h2 id="contact-heading">Have a research story to make visible?</h2>
        <p>Tell me what you are working on, and we can find the right visual or digital form for it.</p>
        <CalendlyButton text="Book an appointment" />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
