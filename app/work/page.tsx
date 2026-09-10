import type { Metadata } from 'next';
import ArchiveIntroduction from '../components/ArchiveIntroduction';
import WorkArchive from '../components/WorkArchive';
import { allWorkAssets, archiveAssets } from '../content/archive-assets';
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

const projectPlateFilenames = new Set([
  'suriname-tijdmachine-1.webp',
  'necessary-reunions.png',
  'pastforwardhub-2.webp',
]);

export default function WorkPage() {
  const sketchfabItems = getSketchfabGridItems();
  const archiveItems = toArchiveGridItems(
    [
      ...allWorkAssets,
      ...archiveAssets.filter((asset) =>
        projectPlateFilenames.has(asset.filename),
      ),
    ],
    visualWorks,
  );

  return (
    <div className="archive-page">
      <ArchiveIntroduction
        title="All work"
        count={archiveItems.length + sketchfabItems.length}
      >
        An index of illustrations, visual explanations, maps, reconstructions,
        interfaces, models and working studies. Browse by practice or search for
        a title.
      </ArchiveIntroduction>
      <WorkArchive items={archiveItems} sketchfabItems={sketchfabItems} />
    </div>
  );
}
