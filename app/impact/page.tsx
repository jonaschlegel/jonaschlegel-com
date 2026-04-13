import fs from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import AcademicSection from '../components/impact/AcademicSection';
import CommunitySection from '../components/impact/CommunitySection';
import CreativeSection from '../components/impact/CreativeSection';
import GrowthTimeline from '../components/impact/GrowthTimeline';
import ImpactRadar from '../components/impact/ImpactRadar';
import ImpactSummary from '../components/impact/ImpactSummary';
import OpenSourceSection from '../components/impact/OpenSourceSection';
import SciCommSection from '../components/impact/SciCommSection';
import SocialGrid from '../components/impact/SocialGrid';
import {
  calculateDimensionScores,
  computeDerivedStats,
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
  const impactData: ImpactData = JSON.parse(
    await fs.readFile(dataPath, 'utf8'),
  );

  const { current, history, platforms, guestAppearances, scoringThresholds } =
    impactData;

  const scores = calculateDimensionScores(current, scoringThresholds);

  const previousSnapshot =
    history.length > 0 ? history[history.length - 1] : undefined;
  const previousScores = previousSnapshot
    ? calculateDimensionScores(previousSnapshot, scoringThresholds)
    : undefined;

  const derived = computeDerivedStats(impactData);
  const platformComparison = getAcademicPlatformComparison(platforms);
  const headlineStats = getHeadlineStats(current, derived, platforms.length);
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
        <ImpactRadar scores={scores} previousScores={previousScores} />

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

        {/* Growth timeline */}
        <GrowthTimeline history={history} current={current} />

        {/* Methodology note */}
        <section className="mx-auto max-w-2xl rounded-lg border border-gray-200 p-6">
          <h2 className="mb-3 font-merriweather text-lg font-semibold">
            Methodology & Transparency
          </h2>
          <div className="space-y-2 text-sm leading-relaxed text-gray-600">
            <p>
              All metrics are manually collected quarterly from each platform.
              The radar chart normalises each dimension to a 0–10 scale using
              configurable thresholds appropriate for early-to-mid career
              researchers in archaeology and digital humanities.
            </p>
            <p>
              Citation metrics are field-dependent — archaeology and humanities
              typically have significantly lower counts than STEM fields. An
              h-index of 5 in archaeology represents a different level of impact
              than an h-index of 5 in physics or medicine.
            </p>
            <p>
              This dashboard follows the spirit of the{' '}
              <a
                href="https://sfdora.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green hover:underline"
              >
                San Francisco Declaration on Research Assessment (DORA)
              </a>
              , which recommends against relying on journal-level metrics and
              advocates for considering the value and impact of all research
              outputs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ImpactPage;
