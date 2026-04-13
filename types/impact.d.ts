/** A social media or content platform with metrics. */
type SocialPlatformData = {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
  category:
    | 'social'
    | 'academic'
    | 'content'
    | 'commerce'
    | 'community'
    | 'code';
  brand?: string;
  purpose: string;
  contentTypes: string[];
  active: boolean;
  joinedDate?: string;
  /** Arbitrary platform-specific metrics (citations, h-index, views, etc.). */
  [key: string]: unknown;
};

/** Time-varying metrics for a single platform. */
type PlatformMetrics = {
  platformId: string;
  followers?: number;
  posts?: number;
  likes?: number;
  views?: number;
  subscribers?: number;
  products?: number;
  supporters?: number;
  repos?: number;
  stars?: number;
  contributions?: number;
  members?: number;
  episodes?: number;
  downloads?: number;
  openRate?: number;
  /** Platform-specific academic metrics. */
  hIndex?: number;
  i10Index?: number;
  citations?: number;
  publications?: number;
};

/** A guest appearance on another podcast, show, or event. */
type GuestAppearance = {
  id: string;
  title: string;
  show: string;
  date: string;
  url?: string;
  type: 'podcast' | 'conference' | 'interview' | 'webinar' | 'panel';
  description?: string;
  likes?: number;
  views?: number;
};

/** Academic metrics aggregated across platforms. */
type AcademicMetricsSnapshot = {
  hIndex: number;
  i10Index: number;
  totalCitations: number;
  totalPublications: number;
  conferencesPresentations: number;
  collaborators: number;
  /** Source platform for each metric where applicable. */
  hIndexSource: string;
};

/** Science communication metrics. */
type SciCommMetricsSnapshot = {
  podcastEpisodes: number;
  podcastDownloads?: number;
  podcastSubscribers?: number;
  blogPosts: number;
  blogViews?: number;
  newsletterSubscribers: number;
  newsletterOpenRate?: number;
  guestAppearances: number;
};

/** Community building metrics. */
type CommunityMetricsSnapshot = {
  eventsOrganized: number;
  communityMembers: number;
  mapathonParticipants?: number;
  kickstarterBackers?: number;
  kickstarterFunded?: number;
};

/** Creative and commercial metrics. */
type CreativeMetricsSnapshot = {
  productsListed: number;
  supporters: number;
  projects: number;
};

/** Open source and tech metrics. */
type OpenSourceMetricsSnapshot = {
  publicRepos: number;
  stars: number;
  contributions: number;
  forks: number;
};

/** A complete snapshot of all metrics at a point in time. */
type ImpactSnapshot = {
  date: string;
  academic: AcademicMetricsSnapshot;
  sciComm: SciCommMetricsSnapshot;
  digitalPresence: {
    totalFollowers: number;
    totalPlatforms: number;
    platformMetrics: PlatformMetrics[];
  };
  community: CommunityMetricsSnapshot;
  creative: CreativeMetricsSnapshot;
  openSource: OpenSourceMetricsSnapshot;
};

/** A normalized 0-10 score for one impact dimension. */
type DimensionScore = {
  dimension: string;
  score: number;
  label: string;
  description: string;
};

/** Scoring thresholds for normalizing a metric to 0-10. */
type ScoringThreshold = {
  metric: string;
  /** Value that corresponds to score 0. */
  min: number;
  /** Value that corresponds to score 10. */
  max: number;
  /** Weight within the dimension (0-1, must sum to 1 per dimension). */
  weight: number;
};

/** The complete impact data structure stored in impact.json. */
type ImpactData = {
  lastUpdated: string;
  platforms: SocialPlatformData[];
  guestAppearances: GuestAppearance[];
  current: ImpactSnapshot;
  history: ImpactSnapshot[];
  scoringThresholds: Record<string, ScoringThreshold[]>;
};
