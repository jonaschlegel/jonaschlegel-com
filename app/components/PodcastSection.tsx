import Image from 'next/image';
import { BsMicFill } from 'react-icons/bs';
import { FaApple, FaInstagram, FaSpotify } from 'react-icons/fa';
import { jonaRecordingImage } from '../data/content';

const podcastLinks = [
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/show/3ll0iPXhoaSiv4YgqygWWG',
    icon: FaSpotify,
  },
  {
    label: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/nl/podcast/things-we-threw-away-podcast/id1830278873',
    icon: FaApple,
  },
  {
    label: 'Substack',
    url: 'https://thingswethrewaway.substack.com',
    icon: BsMicFill,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/twtapodcast/',
    icon: FaInstagram,
  },
] as const;

export const podcastStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'PodcastSeries',
  name: 'Things We Threw Away',
  description:
    'An archaeology podcast about objects from the past in the present, co-hosted by Jona Schlegel and Stefanie Ulrich.',
  url: 'https://thingswethrewaway.substack.com',
  webFeed: 'https://thingswethrewaway.substack.com/feed',
  author: [
    {
      '@type': 'Person',
      name: 'Jona Schlegel',
      url: 'https://jonaschlegel.com',
    },
    { '@type': 'Person', name: 'Stefanie Ulrich' },
  ],
} as const;

/** Section promoting the Things We Threw Away podcast with platform links. */
const PodcastSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl border border-gray-200 bg-white p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          {/* Photo */}
          <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-lg md:w-24">
            <Image
              src={jonaRecordingImage}
              alt="Jona Schlegel, co-host of the archaeology podcast"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
              Podcast
            </p>
            <h2 className="mb-3 font-merriweather text-xl font-semibold md:text-3xl">
              Things We Threw Away
            </h2>
            <p className="mb-6 text-gray-700">
              An archaeology podcast about objects from the past in the present,
              co-hosted with Stefanie Ulrich. Each episode explores a different
              artefact or theme, from Roman cradles and plaster casts to the
              provenance of museum collections. And where provenance is not a
              region in France.
            </p>

            {/* Platform links */}
            <div className="flex flex-wrap gap-3">
              {podcastLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={`podcast-${link.label}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Listen on ${link.label}`}
                    className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-primary-green hover:text-primary-green active:border-primary-green active:text-primary-green"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
