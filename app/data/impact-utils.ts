/**
 * Utility functions for calculating impact dimension scores and growth rates.
 *
 * ## How Scoring Works
 *
 * Each of the 6 impact dimensions (Academic, SciComm, Digital Presence,
 * Community, Creative, Open Source) receives a normalized 0–10 score.
 *
 * Within each dimension, individual metrics are:
 * 1. Clamped between configured `min` and `max` thresholds
 * 2. Linearly interpolated to a 0–10 scale
 * 3. Combined using configured `weight` values (weights sum to 1.0)
 *
 * ### What the thresholds mean
 *
 * - `min`: The value at which the metric contributes score 0. Usually 0.
 * - `max`: The value at which the metric maxes out at score 10.
 *   Think of this as "what would be excellent for someone at my career stage."
 *   For example, an h-index max of 15 means: an h-index of 15 or above = full marks.
 *
 * ### Tuning thresholds
 *
 * You can adjust thresholds in `impact.json` → `scoringThresholds`.
 * - **Raising `max`** makes the score harder to reach (more aspirational).
 *   Example: changing citations max from 200 → 500 means you need 500 citations for a 10.
 * - **Lowering `max`** makes the score easier to reach (reflects current stage).
 *   Example: changing hIndex max from 15 → 8 means h-index of 8 = score 10.
 * - **Changing `weight`** shifts importance within a dimension.
 *   Weights must sum to 1.0 within each dimension.
 *   Example: if you value podcast subscribers more than episodes,
 *   increase subscribers weight from 0.2 → 0.3 and decrease episodes from 0.25 → 0.15.
 *
 * ### Current defaults (archaeology/digital humanities early-career)
 *
 * | Dimension | Metric | Max for 10 | Weight | Rationale |
 * |-----------|--------|-----------|--------|-----------|
 * | Academic | h-index | 15 | 0.30 | ~15 is strong for mid-career archaeology |
 * | Academic | citations | 200 | 0.25 | Humanities citation rates are lower than STEM |
 * | Academic | publications | 20 | 0.25 | ~20 papers = solid early-mid career |
 * | Academic | conferences | 15 | 0.20 | Active conference participation |
 * | SciComm | podcast episodes | 50 | 0.25 | ~1 year of weekly episodes |
 * | SciComm | podcast subs | 500 | 0.20 | Niche archaeology audience |
 * | SciComm | blog posts | 50 | 0.15 | Consistent long-form writing |
 * | SciComm | newsletter subs | 1000 | 0.20 | Good niche newsletter size |
 * | SciComm | guest appearances | 10 | 0.20 | Shows external recognition |
 * | Digital | total followers | 5000 | 0.50 | Combined across all platforms |
 * | Digital | platforms active | 10 | 0.50 | Breadth of presence |
 * | Community | events | 10 | 0.30 | Mapathons, workshops, etc. |
 * | Community | members | 500 | 0.40 | PastForwardHub + community size |
 * | Community | collaborators | 20 | 0.30 | Active project collaborators |
 * | Creative | products | 50 | 0.40 | Across Ko-fi, Redbubble, Etsy |
 * | Creative | supporters | 100 | 0.30 | Paying supporters/customers |
 * | Creative | projects | 20 | 0.30 | Behance + portfolio projects |
 * | OpenSource | repos | 30 | 0.30 | Public repositories |
 * | OpenSource | stars | 100 | 0.30 | Community appreciation |
 * | OpenSource | contributions | 500 | 0.25 | Total git contributions |
 * | OpenSource | forks | 50 | 0.15 | Code reuse by others |
 */

const DIMENSION_META: Record<string, { label: string; description: string }> = {
  academic: {
    label: 'Academic Research',
    description:
      'Publications, citations, h-index, and conference presentations across Google Scholar, Scopus, and other databases.',
  },
  sciComm: {
    label: 'Science Communication',
    description:
      'Podcast episodes, blog writing, newsletter reach, and guest appearances that translate research for broader audiences.',
  },
  digitalPresence: {
    label: 'Digital Presence',
    description:
      'Social media reach and activity across Instagram, Bluesky, LinkedIn, Mastodon, and other platforms.',
  },
  community: {
    label: 'Community Building',
    description:
      'Events organised, community platforms co-founded, collaborators engaged, and participatory projects like Mapathons.',
  },
  creative: {
    label: 'Creative & Commercial',
    description:
      'Products, merchandise, and creative projects across Ko-fi, Redbubble, Etsy, and Behance.',
  },
  openSource: {
    label: 'Open Source & Tech',
    description:
      'GitHub repositories, community stars, code contributions, and forks showing technical impact.',
  },
};

/** Normalize a single metric value to a 0–10 scale using linear interpolation. */
function normalizeMetric(value: number, min: number, max: number): number {
  if (max <= min) return 0;
  const clamped = Math.max(min, Math.min(max, value));
  return ((clamped - min) / (max - min)) * 10;
}

/** Extract the numeric value of a metric from a snapshot dimension object. */
function getMetricValue(
  dimensionData: Record<string, unknown>,
  metricName: string,
): number {
  const val = dimensionData[metricName];
  return typeof val === 'number' ? val : 0;
}

/** Calculate normalized 0–10 scores for all 6 impact dimensions. */
export function calculateDimensionScores(
  snapshot: ImpactSnapshot,
  thresholds: Record<string, ScoringThreshold[]>,
): DimensionScore[] {
  const dimensions = [
    'academic',
    'sciComm',
    'digitalPresence',
    'community',
    'creative',
    'openSource',
  ] as const;

  return dimensions.map((dim) => {
    const dimThresholds = thresholds[dim] || [];
    const dimData = snapshot[dim] as Record<string, unknown>;
    const meta = DIMENSION_META[dim];

    let score = 0;
    for (const t of dimThresholds) {
      const value = getMetricValue(dimData, t.metric);
      score += normalizeMetric(value, t.min, t.max) * t.weight;
    }

    return {
      dimension: dim,
      score: Math.round(score * 10) / 10,
      label: meta.label,
      description: meta.description,
    };
  });
}

/** Calculate the total reach (followers + subscribers + members) from a snapshot. */
export function getTotalReach(snapshot: ImpactSnapshot): number {
  return (
    snapshot.digitalPresence.totalFollowers +
    (snapshot.sciComm.podcastSubscribers || 0) +
    (snapshot.sciComm.newsletterSubscribers || 0) +
    (snapshot.community.communityMembers || 0)
  );
}

/** Calculate percentage growth between two snapshots for a given metric path. */
export function getGrowthRate(
  current: number,
  previous: number,
): number | null {
  if (previous === 0) return current > 0 ? 100 : null;
  return Math.round(((current - previous) / previous) * 100);
}

/** Get headline stats for the summary banner. */
export function getHeadlineStats(
  snapshot: ImpactSnapshot,
  platformCount: number,
): { name: string; number: string }[] {
  return [
    {
      name: 'Publications',
      number: String(snapshot.academic.totalPublications),
    },
    {
      name: 'Citations',
      number: String(snapshot.academic.totalCitations),
    },
    {
      name: 'h-index',
      number: String(snapshot.academic.hIndex),
    },
    {
      name: 'Podcast Episodes',
      number: String(snapshot.sciComm.podcastEpisodes),
    },
    {
      name: 'Total Reach',
      number: getTotalReach(snapshot).toLocaleString(),
    },
    {
      name: 'Platforms',
      number: String(platformCount),
    },
  ];
}
