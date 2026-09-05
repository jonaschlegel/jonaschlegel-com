import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import educationData from '../data/cv/educational-experience.json';
import publicationsData from '../data/cv/publications.json';
import workExperienceData from '../data/cv/work-experience.json';
import jonaFieldwork from '../images/jona-images/jona-fieldwork-forschungsfest.jpg';

export const metadata: Metadata = {
  title: 'About / CV',
  description:
    'About Jona Schlegel: archaeologist, illustrator, visual science communicator and web developer.',
  alternates: { canonical: 'https://jonaschlegel.com/about' },
};

interface CvEntry {
  period: string;
  place: string;
  role: string;
  description?: string;
}

interface WorkExperience {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
}

interface Publication {
  title: string;
  type: string;
  date: string;
  authors: string[];
  url?: string;
}

const workExperience = workExperienceData as WorkExperience[];
const publications = publicationsData as Publication[];

function yearFrom(date: string) {
  return date.match(/\d{4}/)?.[0] ?? date;
}

function periodFrom(startDate: string, endDate = 'Present') {
  const start = yearFrom(startDate);
  const end =
    endDate.toLowerCase() === 'present' ? 'present' : yearFrom(endDate);
  return start === end ? start : `${start}–${end}`;
}

function findExperience(organization: string, title: string) {
  return workExperience.find(
    (entry) => entry.organization === organization && entry.title === title,
  );
}

const primaryExperienceRecords = [
  findExperience('Huygens Institute', 'Researcher'),
  findExperience('archaeoINK', 'Freelancer'),
  findExperience(
    'Ludwig Boltzmann Institute for Archaeological Prospection and Virtual Archaeology',
    'Researcher',
  ),
  findExperience('University of Vienna', 'Student Assistant'),
].filter((entry): entry is WorkExperience => Boolean(entry));

const primaryExperience = primaryExperienceRecords.map((entry) => ({
  period: periodFrom(entry.startDate, entry.endDate),
  place: entry.organization,
  role: `${entry.title} · ${entry.location}`,
  description: entry.description,
}));

const primaryExperienceSet = new Set(primaryExperienceRecords);
const earlierExperience = workExperience
  .filter((entry) => !primaryExperienceSet.has(entry))
  .sort(
    (first, second) =>
      Number(yearFrom(second.startDate)) - Number(yearFrom(first.startDate)),
  )
  .map((entry) => ({
    period: periodFrom(entry.startDate, entry.endDate),
    place: entry.organization,
    role: `${entry.title} · ${entry.location}`,
  }));

const education = educationData.map((entry) => ({
  period: periodFrom(entry.startDate, entry.endDate),
  place: entry.institution,
  role: entry.degree,
  description: entry.description,
}));

const programmingKnowledge = [
  {
    title: 'Web languages',
    content: 'HTML, CSS, JavaScript, TypeScript',
  },
  {
    title: 'Frameworks & runtime',
    content: 'React, Next.js, Node.js',
  },
  {
    title: 'Spatial web',
    content: 'CesiumJS, Resium, Leaflet',
  },
  { title: 'Additional', content: 'SQL, R and NetLogo' },
];

const softwareKnowledge = [
  {
    title: 'Design & illustration',
    content:
      'Figma, Procreate, Photoshop, InDesign, Lightroom, Inkscape, GIMP, RawTherapee, Vectornator and Miro',
  },
  {
    title: 'GIS & mapping',
    content:
      'QGIS, ArcGIS Pro, survey2gis, SAGA GIS, GRASS GIS and Google Earth Pro',
  },
  {
    title: 'Databases & knowledge systems',
    content:
      'PostgreSQL, SQLite, Microsoft Access, OpenAtlas, CIDOC CRM, SKOS and dbdiagram.io',
  },
  {
    title: '3D & photogrammetry',
    content:
      'Blender, 3ds Max, Agisoft Metashape, Meshroom, MeshLab, CloudCompare, Kubit PhoToPlan and TachyCAD',
  },
  {
    title: 'Prospection data',
    content:
      'Golden Software Surfer, RiScan, RiProcess, RiSolve, RiPano, ApSoft and LoggerVis',
  },
  {
    title: 'Writing & office',
    content: 'Microsoft Office, LibreOffice, OpenOffice, LaTeX and Markdown',
  },
];

const voluntaryWork: CvEntry[] = [
  {
    period: '2008–2009',
    place: 'Voluntary Social Year in Culture',
    role: 'Research, publications, symposia, archives and web work · Berlin',
  },
  {
    period: '2001–2015',
    place: 'Deutscher Pfadfinderbund',
    role: 'German Scout Association',
  },
];

const certificates: CvEntry[] = [
  {
    period: '2023',
    place: 'Save Cultural Heritage Group',
    role: 'Introduction to Archaeological Illustration',
  },
  {
    period: '2022',
    place: 'ARIADNEplus Summer School · Prato',
    role: 'Mapping Existing Datasets to CIDOC CRM',
  },
  {
    period: '2021',
    place: 'Esri Training',
    role: 'Imagery in Action · ArcGIS Pro MOOC',
  },
  {
    period: '2021',
    place: 'Esri Training',
    role: 'Do-It-Yourself Geo Apps · ArcGIS Pro MOOC',
  },
  {
    period: '2021',
    place: 'University of Vienna',
    role: 'Basic Training in Being a Tutor',
  },
  {
    period: '2021',
    place: 'Ludwig Boltzmann Gesellschaft Career Center',
    role: 'REVISE & REVITALIZE · writing and communication winter school',
  },
  {
    period: '2019',
    place: 'Codecademy Pro Intensive',
    role: 'Build Front-End Web Apps from Scratch',
  },
  {
    period: '2016',
    place: 'LBI ArchPro Summer School',
    role: 'Advanced archaeological prospection, documentation and interpretation',
  },
  {
    period: 'Current',
    place: 'Driving licence',
    role: 'Category B',
  },
];

const languages: CvEntry[] = [
  { period: 'Native', place: 'German', role: 'Native proficiency' },
  { period: 'Fluent', place: 'English', role: 'Fluent proficiency' },
  { period: 'Basic', place: 'Dutch', role: 'Basic proficiency' },
  { period: 'Basic', place: 'French', role: 'Basic proficiency' },
  { period: 'Basic', place: 'Italian', role: 'Basic proficiency' },
];

const selectedPublicationTitles = [
  'Gazetteer of Early Modern Kerala',
  'Linking Surinamese Heritage Data: Building a Community-Focused Platform',
  'Storytellers by Design: Critical Approaches to Curating Research-Driven Digital Experiences Using Design Methods',
  'Introducing Spatial Anchors for Annotating and Georeferencing Historical Maps',
  'Disseminate | Analyse | Understand Graffiti-Scapes. Proceedings of the GoINDIGO2023 International Graffiti Symposium',
  'Getting Hold of the Urban Chameleon',
  'Each Graffito Deserves Its Polygon',
  'AUTOGRAF—AUTomated Orthorectification of GRAFfiti Photos',
  'Prospecting the UNESCO World Heritage Site of Müstair (Switzerland)',
  'CrowdSlide - a Mobile Web Application for Building a Database of Gravitational Mass Movements Using Volunteer Field Reports',
];

const selectedPublications = selectedPublicationTitles
  .map((title) =>
    publications.find((publication) => publication.title === title),
  )
  .filter((publication): publication is Publication => Boolean(publication));

function CvRows({ entries }: { entries: CvEntry[] }) {
  return entries.map((entry) => (
    <div
      className="cv-row"
      key={`${entry.period}-${entry.place}-${entry.role}`}
    >
      <span>{entry.period}</span>
      <div>
        <strong>{entry.place}</strong>
        <p>{entry.role}</p>
        {entry.description ? (
          <p className="cv-row__description">{entry.description}</p>
        ) : null}
      </div>
    </div>
  ));
}

function KnowledgeGroups({
  groups,
}: {
  groups: { title: string; content: string }[];
}) {
  return (
    <div className="tool-groups">
      {groups.map((group) => (
        <p key={`knowledge-${group.title}`}>
          <strong>{group.title}</strong> {group.content}
        </p>
      ))}
    </div>
  );
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
          <h2>Professional experience</h2>
          <CvRows entries={primaryExperience} />
          <details className="cv-disclosure">
            <summary>Earlier archaeological and research positions</summary>
            <CvRows entries={earlierExperience} />
          </details>
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <CvRows entries={education} />
        </section>

        <section className="cv-section">
          <h2>Programming knowledge</h2>
          <KnowledgeGroups groups={programmingKnowledge} />
        </section>

        <section className="cv-section">
          <h2>Software knowledge</h2>
          <KnowledgeGroups groups={softwareKnowledge} />
        </section>

        <section className="cv-section">
          <h2>Voluntary work</h2>
          <CvRows entries={voluntaryWork} />
        </section>

        <section className="cv-section">
          <h2>Certificates</h2>
          <CvRows entries={certificates} />
        </section>

        <section className="cv-section">
          <h2>Languages</h2>
          <CvRows entries={languages} />
        </section>

        <section className="cv-section">
          <h2>Selected publications &amp; research outputs</h2>
          {selectedPublications.map((publication) => (
            <div
              className="cv-row cv-row--publication"
              key={`publication-${publication.date}-${publication.title}`}
            >
              <span>{publication.date}</span>
              <div>
                <strong>
                  {publication.url ? (
                    <a href={publication.url}>{publication.title} ↗</a>
                  ) : (
                    publication.title
                  )}
                </strong>
                <p>
                  {publication.type} · {publication.authors.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </section>

        <p className="about-writing">
          <Link href="/cv">
            Open the complete CV, map and publication list →
          </Link>
        </p>
        <p className="about-writing">
          Essays, field notes and unfinished thoughts live on{' '}
          <a
            href="https://archaeoink.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Substack ↗
          </a>
        </p>
      </div>
    </div>
  );
}
