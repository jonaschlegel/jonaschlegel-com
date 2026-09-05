import type { Metadata } from 'next';
import ArchiveGrid from './components/ArchiveGrid';
import ArchiveIntroduction from './components/ArchiveIntroduction';
import { selectedWorks } from './data/work';

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
      <ArchiveGrid works={selectedWorks} showLabels={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
