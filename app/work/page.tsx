import type { Metadata } from 'next';
import ArchiveGrid from '../components/ArchiveGrid';
import ArchiveIntroduction from '../components/ArchiveIntroduction';
import { allWorkAssets } from '../content/archive-assets';
import {
  getSketchfabGridItems,
  toArchiveGridItems,
} from '../content/archive-grid';
import { visualWorks } from '../content/works';

export const metadata: Metadata = {
  title: 'All work',
  description:
    'Illustration, visual research, reconstruction and digital heritage work by Jona Schlegel.',
  alternates: { canonical: 'https://jonaschlegel.com/work' },
};

export default function WorkPage() {
  const sketchfabItems = getSketchfabGridItems();

  return (
    <div className="archive-page">
      <ArchiveIntroduction
        title="All work"
        count={allWorkAssets.length + sketchfabItems.length}
      >
        One archive of all and some of my works, from sketches to visual studies
        and 3D models.
      </ArchiveIntroduction>
      <ArchiveGrid
        items={toArchiveGridItems(allWorkAssets, visualWorks)}
        sketchfabItems={sketchfabItems}
        randomize
      />
    </div>
  );
}
