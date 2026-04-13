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

// ---------------------------------------------------------------------------
// Cross-platform academic comparison
// ---------------------------------------------------------------------------

/** Per-platform citation/h-index data extracted from the raw platform objects. */
export interface AcademicPlatformMetric {
  platformId: string;
  platformName: string;
  url: string;
  hIndex?: number;
  citations?: number;
  publications?: number;
  extraMetrics: { label: string; value: number | string }[];
}

/** Helper to safely read a numeric field from a platform object. */
function numField(
  platform: SocialPlatformData,
  ...keys: string[]
): number | undefined {
  for (const key of keys) {
    const v = platform[key];
    if (typeof v === 'number') return v;
  }
  return undefined;
}

/** Extract comparable academic metrics from every academic platform. */
export function getAcademicPlatformComparison(
  platforms: SocialPlatformData[],
): AcademicPlatformMetric[] {
  return platforms
    .filter((p) => p.category === 'academic')
    .map((p) => {
      const extra: { label: string; value: number | string }[] = [];

      const views = numField(p, 'Public Views', 'total views');
      if (views != null) extra.push({ label: 'Views', value: views });

      const coAuthors = numField(p, 'Co-authors', 'co-authors');
      if (coAuthors != null)
        extra.push({ label: 'Co-authors', value: coAuthors });

      const mentions = numField(p, 'Mentions');
      if (mentions != null) extra.push({ label: 'Mentions', value: mentions });

      const followers = numField(p, 'Followers', 'followers');
      if (followers != null)
        extra.push({ label: 'Followers', value: followers });

      const oa = numField(p, 'open access (percentage)');
      if (oa != null) extra.push({ label: 'Open Access', value: `${oa}%` });

      const hic = numField(p, 'Highly Influential Citations');
      if (hic != null) extra.push({ label: 'Highly Influential', value: hic });

      const citRecv = numField(p, 'Citation statement received');
      const citGiven = numField(p, 'Citation statement given');
      if (citRecv != null)
        extra.push({ label: 'Citations Received', value: citRecv });
      if (citGiven != null)
        extra.push({ label: 'Citations Given', value: citGiven });

      const works = numField(p, 'works');
      if (works != null) extra.push({ label: 'Works', value: works });

      return {
        platformId: p.id,
        platformName: p.name,
        url: p.url,
        hIndex: numField(p, 'h-index', 'scholar h-index'),
        citations: numField(
          p,
          'citations',
          'sum of times cited',
          'scholar citations',
        ),
        publications: numField(
          p,
          'publications',
          'documents',
          'total documents',
          'total publications',
          'works',
          'scopus publications',
        ),
        extraMetrics: extra,
      };
    })
    .filter(
      (m) =>
        m.hIndex != null ||
        m.citations != null ||
        m.publications != null ||
        m.extraMetrics.length > 0,
    );
}

// ---------------------------------------------------------------------------
// Derived / aggregate statistics
// ---------------------------------------------------------------------------

export interface DerivedStats {
  /** Average citations per publication (Google Scholar). */
  citationsPerPublication: number;
  /** Total academic profile views (Academia.edu + Loop + ...). */
  totalAcademicViews: number;
  /** Open access percentage (from ImpactStory). */
  openAccessPercent: number | null;
  /** Total social media posts across all platforms. */
  totalPosts: number;
  /** Total web impressions across all websites (last 12 months). */
  totalWebImpressions: number;
  /** Total web clicks across all websites (last 12 months). */
  totalWebClicks: number;
  /** Largest co-author count across platforms. */
  coAuthorNetworkSize: number;
  /** Total guest appearance views. */
  guestAppearanceViews: number;
  /** Total guest appearance likes. */
  guestAppearanceLikes: number;
  /** Number of academic databases with a profile. */
  academicProfileCount: number;
  /** Number of platforms where h-index is tracked. */
  hIndexSourceCount: number;
  /** Citations per publication ratio. */
  contentToFollowerRatio: number;
}

/** Compute aggregate derived statistics from the full impact data. */
export function computeDerivedStats(data: ImpactData): DerivedStats {
  const { platforms, current, guestAppearances } = data;

  const citPerPub =
    current.academic.totalPublications > 0
      ? Math.round(
          (current.academic.totalCitations /
            current.academic.totalPublications) *
            10,
        ) / 10
      : 0;

  let academicViews = 0;
  for (const p of platforms) {
    if (p.category === 'academic') {
      academicViews += numField(p, 'Public Views', 'total views') ?? 0;
    }
  }

  const impactstory = platforms.find((p) => p.id === 'impactstory');
  const oaPercent = impactstory
    ? (numField(impactstory, 'open access (percentage)') ?? null)
    : null;

  let totalPosts = 0;
  for (const pm of current.digitalPresence.platformMetrics) {
    totalPosts += pm.posts ?? 0;
  }

  let totalImpressions = 0;
  let totalClicks = 0;
  for (const p of platforms) {
    totalImpressions += numField(p, 'Total impressions (last 12 months)') ?? 0;
    totalClicks += numField(p, 'total clicks (last 12 months)') ?? 0;
  }

  let maxCoAuthors = 0;
  for (const p of platforms) {
    const ca = numField(p, 'Co-authors', 'co-authors') ?? 0;
    if (ca > maxCoAuthors) maxCoAuthors = ca;
  }

  let gaViews = 0;
  let gaLikes = 0;
  for (const ga of guestAppearances) {
    gaViews += ga.views ?? 0;
    gaLikes += ga.likes ?? 0;
  }

  const academicPlatforms = platforms.filter((p) => p.category === 'academic');
  let hIndexSources = 0;
  for (const p of academicPlatforms) {
    if (numField(p, 'h-index', 'scholar h-index') != null) hIndexSources++;
  }

  const contentRatio =
    current.digitalPresence.totalFollowers > 0
      ? Math.round(
          (totalPosts / current.digitalPresence.totalFollowers) * 100,
        ) / 100
      : 0;

  return {
    citationsPerPublication: citPerPub,
    totalAcademicViews: academicViews,
    openAccessPercent: oaPercent,
    totalPosts,
    totalWebImpressions: totalImpressions,
    totalWebClicks: totalClicks,
    coAuthorNetworkSize: maxCoAuthors,
    guestAppearanceViews: gaViews,
    guestAppearanceLikes: gaLikes,
    academicProfileCount: academicPlatforms.length,
    hIndexSourceCount: hIndexSources,
    contentToFollowerRatio: contentRatio,
  };
}

// ---------------------------------------------------------------------------
// Headline stats
// ---------------------------------------------------------------------------

/** Get headline stats for the summary banner. */
export function getHeadlineStats(
  snapshot: ImpactSnapshot,
  derived: DerivedStats,
  platformCount: number,
): { name: string; number: string; detail?: string }[] {
  return [
    {
      name: 'Publications',
      number: String(snapshot.academic.totalPublications),
      detail: `${derived.citationsPerPublication} citations per paper`,
    },
    {
      name: 'Citations',
      number: String(snapshot.academic.totalCitations),
      detail: `h-index ${snapshot.academic.hIndex} across ${derived.hIndexSourceCount} databases`,
    },
    {
      name: 'Total Followers',
      number: snapshot.digitalPresence.totalFollowers.toLocaleString(),
      detail: `${derived.totalPosts.toLocaleString()} posts published`,
    },
    {
      name: 'Web Impressions',
      number: derived.totalWebImpressions.toLocaleString(),
      detail: `${derived.totalWebClicks.toLocaleString()} clicks (last 12 months)`,
    },
    {
      name: 'Academic Views',
      number: derived.totalAcademicViews.toLocaleString(),
      detail: derived.openAccessPercent
        ? `${derived.openAccessPercent}% open access`
        : undefined,
    },
    {
      name: 'Platforms',
      number: String(platformCount),
      detail: `${derived.academicProfileCount} academic databases`,
    },
  ];
}
