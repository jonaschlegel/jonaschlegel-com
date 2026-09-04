import type { Metadata } from 'next';
import Image from 'next/image';
import jonaFieldwork from '../images/jona-images/jona-fieldwork-forschungsfest.jpg';

export const metadata: Metadata = {
  title: 'About / CV',
  description:
    'About Jona Schlegel: archaeologist, illustrator, visual science communicator and web developer.',
  alternates: { canonical: 'https://jonaschlegel.com/about' },
};

const experience = [
  {
    period: '2025–present',
    place: 'Huygens Institute',
    role: 'Researcher · digital humanities, interfaces and public heritage',
  },
  {
    period: '2024–present',
    place: 'archaeoINK',
    role: 'Independent practice · visual communication and web development',
  },
  {
    period: '2018–2023',
    place: 'Ludwig Boltzmann Institute ArchPro',
    role: 'Researcher · geophysical prospection, GIS and visualisation',
  },
];

const education = [
  {
    period: '2019–2023',
    place: 'University of Vienna',
    role: 'Doctoral studies · Prehistory and Historical Archaeology',
  },
  {
    period: '2016–2018',
    place: 'HTW Berlin / Freie Universität Berlin',
    role: 'MSc · Landscape Archaeology',
  },
  {
    period: '2012–2016',
    place: 'HTW Berlin',
    role: 'BA · Conservation and Restoration / Field Archaeology',
  },
];

function CvRows({
  entries,
}: {
  entries: { period: string; place: string; role: string }[];
}) {
  return entries.map((entry) => (
    <div className="cv-row" key={`${entry.period}-${entry.place}`}>
      <span>{entry.period}</span>
      <div>
        <strong>{entry.place}</strong>
        <p>{entry.role}</p>
      </div>
    </div>
  ));
}

export default function AboutPage() {
  return (
    <div className="about-archive">
      <section className="about-archive__introduction">
        <div>
          <p className="archive-eyebrow">About / CV</p>
          <h1>Archaeology, made visible.</h1>
          <p className="about-archive__lead">
            I am an archaeologist who draws, designs and builds websites. Most
            of my work begins with something difficult to see: an excavated
            feature, a scattered archive, an uncertain reconstruction or a
            complicated research method. I look for the image or interface that
            makes it possible to enter.
          </p>
        </div>
        <figure>
          <Image
            src={jonaFieldwork}
            alt="Jona Schlegel holding a trowel during an archaeology event"
            priority
            sizes="(max-width: 800px) 100vw, 38vw"
          />
        </figure>
      </section>

      <div className="about-archive__cv">
        <section className="cv-section">
          <h2>Experience</h2>
          <CvRows entries={experience} />
        </section>
        <section className="cv-section">
          <h2>Education</h2>
          <CvRows entries={education} />
        </section>
        <section className="cv-section">
          <h2>Practice</h2>
          <div className="cv-row">
            <span>Images</span>
            <p>Archaeological illustration, reconstruction, editorial drawing</p>
          </div>
          <div className="cv-row">
            <span>Explanation</span>
            <p>Visual science communication, information design, mapping</p>
          </div>
          <div className="cv-row">
            <span>Digital</span>
            <p>Web design and development, spatial and 3D visualisation</p>
          </div>
        </section>
        <section className="cv-section">
          <h2>Tools</h2>
          <div className="tool-groups">
            <p>
              <strong>Illustration &amp; editorial</strong>
              Procreate, Photoshop, InDesign
            </p>
            <p>
              <strong>3D &amp; spatial</strong>
              Blender, Shapr3D, Nomad Sculpt, QGIS
            </p>
            <p>
              <strong>Web &amp; design</strong>
              Figma, TypeScript, React, Next.js
            </p>
            <p>
              <strong>Knowledge systems</strong>
              CIDOC CRM, SKOS, linked data
            </p>
          </div>
        </section>
        <p className="about-writing">
          Essays, field notes and unfinished thoughts live on{' '}
          <a href="https://archaeoink.substack.com/" target="_blank" rel="noreferrer">
            Substack ↗
          </a>
        </p>
      </div>
    </div>
  );
}
