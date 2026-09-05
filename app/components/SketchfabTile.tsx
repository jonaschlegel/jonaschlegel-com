'use client';

import { useState } from 'react';
import type { SketchfabGridItem } from '../content/archive-grid';

export default function SketchfabTile({ item }: { item: SketchfabGridItem }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="archive-tile archive-tile--embed" aria-label={item.alt}>
      {loaded ? (
        <iframe
          title={item.title}
          className="archive-tile__embed"
          src={`https://sketchfab.com/models/${item.id}/embed?ui_theme=dark`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      ) : (
        <button
          type="button"
          className="archive-tile__embed-launch"
          onClick={() => setLoaded(true)}
        >
          <span>Load interactive 3D model</span>
          <small>Sketchfab · {item.title}</small>
        </button>
      )}
      <span className="archive-tile__label">
        <span>{item.title}</span>
        {item.primaryPractice && <small>{item.primaryPractice}</small>}
      </span>
    </div>
  );
}
