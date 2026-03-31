import Image, { type StaticImageData } from 'next/image';
import type { FC } from 'react';
import adventuressLogo from '../images/collaborations/adventuress-archaeology.png';
import dhBeneluxLogo from '../images/collaborations/dh-benelux.png';
import gaiaLogo from '../images/collaborations/gaia-prospection.png';
import huygensLogo from '../images/collaborations/huygens-institute.png';
import necessaryReunionsLogo from '../images/collaborations/necessary-reunions.png';
import universityViennaLogo from '../images/collaborations/university-vienna.png';
import upleveledLogo from '../images/collaborations/upleveled.png';

interface Client {
  name: string;
  url: string;
  description: string;
  logo: StaticImageData;
}

const currentClients: Client[] = [
  {
    name: 'Huygens Institute',
    url: 'https://www.huygens.knaw.nl/',
    description: 'GLOBALISE & Suriname Time Machine',
    logo: huygensLogo,
  },
  {
    name: 'DH BeNeLux',
    url: 'https://dhbenelux.org/',
    description: 'Digital Humanities conference',
    logo: dhBeneluxLogo,
  },
  {
    name: 'Adventuress Magazine',
    url: 'https://www.adventuressarchaeology.com/',
    description: 'Cover art & illustration',
    logo: adventuressLogo,
  },
  {
    name: 'University of Vienna',
    url: 'https://www.univie.ac.at/',
    description: 'Upcoming collaboration',
    logo: universityViennaLogo,
  },
  {
    name: 'UpLeveled',
    url: 'https://upleveled.io/',
    description: 'Coding education',
    logo: upleveledLogo,
  },
];

const pastClients: Client[] = [
  {
    name: 'GAIA Prospection',
    url: 'https://www.gaia-prospection.com/',
    description: 'Geophysical survey',
    logo: gaiaLogo,
  },
  {
    name: 'Necessary Reunions',
    url: 'https://necessaryreunions.org',
    description: 'NWO-funded research platform',
    logo: necessaryReunionsLogo,
  },
];

/** Section displaying current and past client/partner organisations. */
const ClientLogos: FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
            Collaborations
          </p>
          <h2 className="font-merriweather text-2xl font-semibold md:text-3xl">
            Who I Work With
          </h2>
        </header>

        {/* Current clients */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {currentClients.map((client) => (
              <a
                key={`client-${client.name}`}
                href={client.url}
                target={client.url.startsWith('/') ? undefined : '_blank'}
                rel={
                  client.url.startsWith('/') ? undefined : 'noopener noreferrer'
                }
                className="group flex flex-col items-center gap-2 px-4 py-3 transition-opacity hover:opacity-70"
                title={`${client.name} — ${client.description}`}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Past collaborations */}
        <div className="border-t border-gray-200 pt-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Past collaborations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {pastClients.map((client) => (
              <a
                key={`past-client-${client.name}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 px-4 py-2 opacity-50 transition-opacity hover:opacity-80"
                title={`${client.name} — ${client.description}`}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  height={36}
                  className="h-9 w-auto object-contain grayscale"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
