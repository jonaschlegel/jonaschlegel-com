import type { Metadata } from 'next';
import ArchiveGrid from './components/ArchiveGrid';
import ArchiveIntroduction from './components/ArchiveIntroduction';
import { featuredWorks } from './data/work';

export const metadata: Metadata = {
  title: 'Selected work',
  description:
    'Selected archaeological illustration, visual research, design and web work by Jona Schlegel.',
  alternates: { canonical: 'https://jonaschlegel.com' },
};

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Selected work by Jona Schlegel',
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
      <ArchiveIntroduction title="Selected work" count={featuredWorks.length}>
        An image-first selection. Illustration leads; research, design and code
        sit just beneath the surface.
      </ArchiveIntroduction>
      <ArchiveGrid works={featuredWorks} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
