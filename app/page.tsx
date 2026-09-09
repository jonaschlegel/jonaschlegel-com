import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import CalendlyButton from './components/CalendlyButton';
import babylonMap from './images/all-work/Babylon-map.jpg';
import friends from './images/all-work/burial-dog-human.jpg';
import ochre from './images/all-work/ochre-painting.jpg';
import koreInColour from './images/all-work/kore-reconstruction-coloured.jpg';
import genderBias from './images/all-work/gender-bias.jpg';
import bellBeaker from './images/all-work/bell-beaker.jpg';
import graffitiHistories from './images/all-work/europe-graffiti-history-spray-can.jpg';
import researchMap from './images/all-work/trier-roman-economy-geology-and-raw-materials-map.webp';
import potteryWorkshop from './images/all-work/trier-roman-pottery-workshop-reconstruction-close.webp';
import pastraceIdentity from './images/all-work/pastrace-brand-identity.webp';
import surinameInterface from './images/archive/suriname-tijdmachine-1.webp';
import surinameInterfaceDetails from './images/archive/suriname-tijdmachine-2.webp';
import workingPortrait from './images/jona-images/jona-working_desk-ipad.jpg';

export const metadata: Metadata = {
  title: 'Archaeology, drawn, mapped and made usable',
  description:
    'Jona Schlegel is an archaeologist, illustrator and web developer creating illustrations, reconstructions, maps and digital interfaces for research, publishing and public engagement.',
  alternates: { canonical: 'https://jonaschlegel.com' },
};

const selectedWorks = [
  {
    title: 'The world from Babylon',
    category: 'Visual explanation',
    image: babylonMap,
    alt: 'The Babylonian Map of the World shown as an archaeological drawing beside a colour-coded interpretation',
    span: '8',
  },
  {
    title: 'Friends',
    category: 'Archaeological illustration',
    image: friends,
    alt: 'Ink drawing of a human and dog burial arranged around the prompt Friends',
    span: '4',
  },
  {
    title: 'Ochre',
    category: 'Archaeological illustration',
    image: ochre,
    alt: 'Illustrated study of ochre pigments, hand stencils and painting tools',
    span: '4',
  },
  {
    title: 'Kore in colour',
    category: 'Visual reconstruction',
    image: koreInColour,
    alt: 'Three-stage reconstruction of an Archaic Greek Kore sculpture with colour',
    span: '4',
  },
  {
    title: 'Gender bias',
    category: 'Editorial illustration',
    image: genderBias,
    alt: 'Editorial illustration about gender bias in archaeological interpretation',
    span: '4',
  },
  {
    title: 'Bell Beaker',
    category: 'Archaeological drawing',
    image: bellBeaker,
    alt: 'Black-and-white archaeological drawing of a decorated Bell Beaker vessel',
    span: '5',
  },
  {
    title: 'Graffiti Histories',
    category: 'Information design',
    image: graffitiHistories,
    alt: 'Illustrated map and spray can tracing selected dates in European and North American graffiti history',
    span: '7',
  },
  {
    title: 'Roman Trier: economy and geology',
    category: 'Research cartography',
    image: researchMap,
    alt: 'Research map relating Roman production sites, roads and the Long Wall to geology, raw materials and soils around Trier',
    span: '7',
  },
  {
    title: 'Trier pottery workshop',
    category: '3D reconstruction',
    image: potteryWorkshop,
    alt: 'Three-dimensional reconstruction of a Roman pottery workshop positioned over its archaeological excavation plan',
    span: '5',
  },
] as const;

const collaborationAreas = [
  'Archaeological illustration and reconstruction',
  'Research visualisation and cartography',
  'Editorial and public-engagement visuals',
  'Digital interfaces and research tools',
  'Visual identities for archaeological projects',
];

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Archaeology, drawn, mapped and made usable',
    description:
      'Illustration, reconstruction, cartography and digital interface work by archaeologist Jona Schlegel.',
    url: 'https://jonaschlegel.com',
    author: {
      '@type': 'Person',
      '@id': 'https://jonaschlegel.com/#jona',
      name: 'Jona Schlegel',
    },
  };

  return (
    <div className="archive-page home-page">
      <header className="home-hero">
        <div className="home-hero__copy">
          <p className="archive-eyebrow">
            Archaeologist · Illustrator · Web developer
          </p>
          <h1>Archaeology, drawn, mapped and made usable.</h1>
          <p>
            I am Jona Schlegel, an archaeologist, illustrator and web developer.
            I turn research, objects and complex data into illustrations,
            reconstructions, maps and digital interfaces for archaeological
            projects, publications and public engagement.
          </p>
        </div>
        <figure className="home-hero__visual">
          <Image
            src={workingPortrait}
            alt="Jona Schlegel drawing on a tablet at a desk with archaeological research visible on the screens behind her"
            className="home-hero__image"
            sizes="(max-width: 760px) 100vw, 40vw"
            preload
          />
          <figcaption>Drawing and building research interfaces.</figcaption>
        </figure>
      </header>

      <section className="home-selected" aria-labelledby="selected-title">
        <div className="home-section-heading">
          <div>
            <p className="archive-eyebrow">Selected work</p>
            <h2 id="selected-title">Objects, evidence and interfaces</h2>
          </div>
          <p>
            A selection across archaeological drawing, interpretation,
            cartography, reconstruction and research-led digital design.
          </p>
        </div>

        <div className="selected-work-grid">
          {selectedWorks.map((work) => (
            <figure
              key={`selected-work-${work.title}`}
              className={`selected-work selected-work--span-${work.span}`}
            >
              <div className="selected-work__media">
                <Image
                  src={work.image}
                  alt={work.alt}
                  className="selected-work__image"
                  sizes={`(max-width: 640px) 100vw, (max-width: 960px) 50vw, ${work.span === '8' || work.span === '7' ? '58vw' : '38vw'}`}
                />
              </div>
              <figcaption className="selected-work__caption">
                <span>{work.title}</span>
                <small>· {work.category}</small>
              </figcaption>
            </figure>
          ))}

          <figure className="selected-work selected-work--span-7">
            <div className="project-plate project-plate--interface">
              <Image
                src={surinameInterface}
                alt="Suriname Tijdmachine interface plate showing connected historical stories, maps and archival data"
                className="project-plate__main"
                sizes="(max-width: 960px) 100vw, 58vw"
              />
              <div className="project-plate__details" aria-hidden="true">
                <Image
                  src={surinameInterfaceDetails}
                  alt=""
                  className="project-plate__detail project-plate__detail--map"
                  sizes="(max-width: 960px) 50vw, 28vw"
                />
                <Image
                  src={surinameInterfaceDetails}
                  alt=""
                  className="project-plate__detail project-plate__detail--data"
                  sizes="(max-width: 960px) 50vw, 28vw"
                />
              </div>
            </div>
            <figcaption className="selected-work__caption">
              <span>Suriname Tijdmachine</span>
              <small>· Interface design and development</small>
            </figcaption>
          </figure>

          <figure className="selected-work selected-work--span-5">
            <div className="selected-work__media selected-work__media--plate">
              <Image
                src={pastraceIdentity}
                alt="PasTrace identity plate combining its logo, colour palette, typography and brand applications"
                className="selected-work__image"
                sizes="(max-width: 960px) 100vw, 42vw"
              />
            </div>
            <figcaption className="selected-work__caption">
              <span>PasTrace</span>
              <small>· Visual identity and graphic design</small>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="home-collaboration"
        aria-labelledby="collaboration-title"
      >
        <div className="home-collaboration__introduction">
          <p className="archive-eyebrow">Working together</p>
          <h2 id="collaboration-title">What we can make visible</h2>
          <p>
            Bring an object, dataset, excavation, publication or research idea.
            We can work out the visual or digital form it needs.
          </p>
        </div>
        <ul className="home-collaboration__areas">
          {collaborationAreas.map((area) => (
            <li key={`collaboration-area-${area}`}>{area}</li>
          ))}
        </ul>
        <nav className="home-next-links" aria-label="Explore more">
          <Link href="/work">All work</Link>
          <a
            href="https://archaeoink.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Research notebook ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </section>

      <section
        id="contact"
        className="archive-contact home-contact"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="archive-eyebrow">Contact</p>
          <h2 id="contact-title">Have a research story to make visible?</h2>
          <p>
            Tell me about the material, question or audience you are working
            with, and we can find the right visual or digital form for it.
          </p>
        </div>
        <CalendlyButton text="Book an appointment" />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
