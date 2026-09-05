import type { Metadata } from 'next';
import ArchiveGrid from '../components/ArchiveGrid';
import ArchiveIntroduction from '../components/ArchiveIntroduction';
import { allWorkAssets } from '../content/archive-assets';
import { toArchiveGridItems } from '../content/archive-grid';
import { visualWorks } from '../content/works';

export const metadata: Metadata = {
  title: 'All work',
  description:
    'Illustration, visual research, reconstruction and digital heritage work by Jona Schlegel.',
  alternates: { canonical: 'https://jonaschlegel.com/work' },
};

export default function WorkPage() {
  return (
    <div className="archive-page">
      <ArchiveIntroduction title="All work" count={allWorkAssets.length}>
        Finished commissions, research graphics, web work and quick visual
        studies, kept together as one growing archive.
      </ArchiveIntroduction>
      <ArchiveGrid items={toArchiveGridItems(allWorkAssets, visualWorks)} />
    </div>
  );
}
