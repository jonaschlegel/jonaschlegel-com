'use client';

import { BsMicFill, BsPlayCircle } from 'react-icons/bs';

interface MediaItem {
  title: string;
  type: 'podcast' | 'appearance' | 'episode';
  platform: string;
  date: string;
  url: string;
  description?: string;
}

const mediaItems: MediaItem[] = [
  {
    title: 'Things We Threw Away',
    type: 'podcast',
    platform: 'Host & Producer',
    date: 'Sept 2025 – Present',
    url: 'https://thingswethrewaway.substack.com',
    description:
      'Archaeology podcast exploring material culture and discard practices across time and space.',
  },
  {
    title: 'And My Trowel, Ep. 51 & 52',
    type: 'appearance',
    platform: 'Guest',
    date: '2025',
    url: 'https://www.intarch.ac.uk/podcast/',
    description:
      'Interview on archaeological illustration and science communication.',
  },
  {
    title: 'Necessary Reunions Software',
    type: 'episode',
    platform: 'Zenodo Publication',
    date: '2026',
    url: 'https://zenodo.org/records/14918468',
    description:
      'Research software for VOC cartographic analysis. DOI: 10.5281/zenodo.14918468',
  },
];

const MediaSection = () => {
  return (
    <section className="container mx-auto py-16" id="media">
      <div className="mb-8 text-center">
        <h2 className="font-merriweather text-2xl font-semibold md:text-4xl mb-3">
          Podcasts & Media
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Science communication through podcasts, interviews, and research
          publications.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {mediaItems.map((item) => (
          <a
            key={`media-${item.title}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-neutral-700 p-5 transition-all duration-300 hover:border-primary-teal hover:bg-primary-teal/5"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 rounded-full bg-primary-teal/20 p-2">
                {item.type === 'podcast' ? (
                  <BsMicFill className="h-4 w-4 text-primary-teal" />
                ) : (
                  <BsPlayCircle className="h-4 w-4 text-primary-teal" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-primary-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400">
                  {item.platform} · {item.date}
                </p>
              </div>
            </div>
            {item.description && (
              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
