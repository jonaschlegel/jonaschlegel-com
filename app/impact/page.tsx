import fs from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import AcademicSection from '../components/impact/AcademicSection';
import CommunitySection from '../components/impact/CommunitySection';
import CreativeSection from '../components/impact/CreativeSection';
import ImpactRadar from '../components/impact/ImpactRadar';
import ImpactSummary from '../components/impact/ImpactSummary';
import MethodologySection from '../components/impact/MethodologySection';
import OpenSourceSection from '../components/impact/OpenSourceSection';
import SciCommSection from '../components/impact/SciCommSection';
import SocialGrid from '../components/impact/SocialGrid';
import {
  calculateDimensionScores,
  computeDerivedStats,
  derivePublicationCounts,
  getAcademicPlatformComparison,
  getHeadlineStats,
} from '../data/impact-utils';
import { generateImpactOGImageUrl } from '../lib/og-utils';
import { generateSEOMetadata } from '../lib/seo';

/** SEO metadata for the Impact page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Impact – Academic & Professional Impact Dashboard',
  description:
    'A multi-dimensional view of academic, science communication, and professional impact. Tracking publications, citations, podcast reach, social media presence, community building, and open source contributions.',
  canonical: 'https://jonaschlegel.com/impact',
  keywords: [
    'academic impact',
    'h-index',
    'altmetrics',
    'science communication metrics',
    'archaeology researcher profile',
    'freelance academic impact',
    'researcher dashboard',
    'publication metrics',
  ],
  ogType: 'profile',
  ogImage: generateImpactOGImageUrl(),
});

/** Impact dashboard page showing multi-dimensional academic and professional impact. */
const ImpactPage = async () => {
  const dataPath = path.join(process.cwd(), 'app/data/impact.json');
  const pubsPath = path.join(process.cwd(), 'app/data/cv/publications.json');
  const [impactRaw, pubsRaw] = await Promise.all([
    fs.readFile(dataPath, 'utf8'),
    fs.readFile(pubsPath, 'utf8'),
  ]);
  const impactData: ImpactData = JSON.parse(impactRaw);
  const publications: { type: string }[] = JSON.parse(pubsRaw);

  const { current, platforms, guestAppearances, scoringThresholds } =
    impactData;

  // Derive counts from publications.json and override snapshot values
  const pubCounts = derivePublicationCounts(publications);
  current.sciComm.podcastEpisodes = pubCounts.podcastEpisodes;
  current.academic.conferencesPresentations = pubCounts.conferencePresentations;

  const scores = calculateDimensionScores(current, scoringThresholds);

  const derived = computeDerivedStats(impactData);
  const platformComparison = getAcademicPlatformComparison(platforms);
  const headlineStats = getHeadlineStats(
    current,
    derived,
    platforms.length,
    pubCounts,
  );
  const githubPlatform = platforms.find((p) => p.id === 'github');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Impact Dashboard – Jona Schlegel',
    url: 'https://jonaschlegel.com/impact',
    mainEntity: {
      '@type': 'Person',
      name: 'Jona Schlegel',
      jobTitle:
        'Freelance Archaeological Illustrator & Archaeology Web Developer',
      url: 'https://jonaschlegel.com',
      sameAs: platforms.filter((p) => p.url).map((p) => p.url),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="container mx-auto py-16">
        {/* Page header */}
        <header className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
            Impact Dashboard
          </p>
          <h1 className="mb-4 font-merriweather text-3xl font-bold md:text-4xl">
            Academic & Professional Impact
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
            A transparent, multi-dimensional view of research output, science
            communication, digital presence, community building, and technical
            contributions. Last updated{' '}
            <time dateTime={impactData.lastUpdated}>
              {new Date(impactData.lastUpdated).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            .
          </p>

          <div className="mt-6 rounded-lg border border-primary-teal/30 bg-primary-teal/5 p-4">
            <p className="text-sm text-gray-600">
              <strong className="text-gray-700">Why this page?</strong> As a
              freelance academic, traditional career metrics (tenure committees,
              institutional h-index targets) don&apos;t fully capture impact.
              This dashboard tracks a broader picture — from peer-reviewed
              publications to podcast reach, from open source contributions to
              community building. Inspired by the{' '}
              <a
                href="https://sfdora.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green hover:underline"
              >
                DORA declaration
              </a>{' '}
              and altmetrics movement, which advocate for richer ways of
              evaluating research impact beyond citation counts alone.
            </p>
          </div>
        </header>

        {/* Headline stats */}
        <ImpactSummary stats={headlineStats} />

        {/* Radar chart */}
        <ImpactRadar scores={scores} />

        {/* Academic research */}
        <AcademicSection
          academic={current.academic}
          platforms={platforms}
          platformComparison={platformComparison}
          derived={derived}
        />

        {/* Science communication */}
        <SciCommSection
          sciComm={current.sciComm}
          guestAppearances={guestAppearances}
          platforms={platforms}
          derived={derived}
        />

        {/* Social media */}
        <SocialGrid
          platforms={platforms}
          metrics={current.digitalPresence.platformMetrics}
        />

        {/* Community */}
        <CommunitySection community={current.community} platforms={platforms} />

        {/* Creative & commercial */}
        <CreativeSection creative={current.creative} platforms={platforms} />

        {/* Open source */}
        <OpenSourceSection
          openSource={current.openSource}
          platform={githubPlatform}
        />

        {/* Methodology & transparency */}
        <MethodologySection
          thresholds={scoringThresholds}
          lastUpdated={impactData.lastUpdated}
        />
      </div>
    </>
  );
};

export default ImpactPage;
