'use client';

import { BsCalendarEvent, BsMicFill, BsPlayCircle } from 'react-icons/bs';

interface MediaItem {
  title: string;
  type: 'guest' | 'workshop' | 'talk';
  role: string;
  date: string;
  url: string;
  description: string;
}

const mediaItems: MediaItem[] = [
  {
    title: 'And My Trowel, Ep. 51 & 52',
    type: 'guest',
    role: 'Guest',
    date: '2025',
    url: 'https://www.intarch.ac.uk/podcast/',
    description:
      'Interview on archaeological illustration, science communication, and the archaeoINK studio.',
  },
  {
    title: 'Mapathon: Kaarten als bron voor Surinaamse geschiedenis',
    type: 'workshop',
    role: 'Co-organiser',
    date: 'March 2026',
    url: 'https://www.huygens.knaw.nl/evenementen/mapathon-kaarten-als-bron-voor-surinaamse-geschiedenis/',
    description:
      'Workshop on using historical maps as sources for Surinamese history, organised with the Huygens Institute.',
  },
];

const typeIcons = {
  guest: BsMicFill,
  workshop: BsCalendarEvent,
  talk: BsPlayCircle,
};

const MediaSection = () => {
  return (
    <section className="container mx-auto px-4 py-16" id="media">
      <div className="mb-8 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-green">
          Public engagement
        </p>
        <h2 className="mb-3 font-merriweather text-center text-2xl font-semibold md:text-4xl">
          Talks, Appearances & Workshops
        </h2>
        <p className="mx-auto max-w-2xl text-gray-700">
          Guest appearances, invited talks, and workshops where I contributed to
          conversations about archaeology, illustration, and heritage.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {mediaItems.map((item) => {
          const Icon = typeIcons[item.type];
          return (
            <a
              key={`media-${item.title}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-primary-green hover:bg-primary-green/5"
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="shrink-0 bg-primary-green/15 p-2">
                  <Icon className="size-4 text-primary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-primary-green">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700">
                    {item.role} · {item.date}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                {item.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default MediaSection;
