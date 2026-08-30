import fs from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import CvMap from '../components/CvMap';
import CvTabs from '../components/CvTabs';
import IllustrationBand from '../components/IllustrationBand';
import { jonaConferenceImage } from '../data/content';
import { generateSEOMetadata } from '../lib/seo';

/** SEO metadata for the CV page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'CV',
  description:
    'CV of Jona Schlegel – archaeological illustrator, visual science communicator, and web developer. Experience in archaeological drawing, full-stack development, and digital heritage platforms.',
  canonical: 'https://jonaschlegel.com/cv',
  keywords: [
    'archaeological illustrator CV',
    'archaeology web developer resume',
    'freelance archaeological illustrator',
    'archaeology web development experience',
    'visual science communication',
    'archaeology fullstack developer',
    'archaeological drawing experience',
    'publications archaeology',
  ],
  ogType: 'profile',
});

interface Job {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  url?: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  url?: string;
}

interface Publication {
  title: string;
  type: string;
  date: string;
  authors: string[];
  url: string;
  location: string;
}

/** CV page displaying work experience, education, publications, and an interactive map. */
const CvPage = async () => {
  const workPath = path.join(process.cwd(), 'app/data/cv/work-experience.json');
  const educationPath = path.join(
    process.cwd(),
    'app/data/cv/educational-experience.json',
  );
  const publicationsPath = path.join(
    process.cwd(),
    'app/data/cv/publications.json',
  );

  const workExperience: Job[] = JSON.parse(await fs.readFile(workPath, 'utf8'));
  const educationalExperience: Education[] = JSON.parse(
    await fs.readFile(educationPath, 'utf8'),
  );
  const publications: Publication[] = JSON.parse(
    await fs.readFile(publicationsPath, 'utf8'),
  );

  const parseDate = (dateStr: string): Date => {
    if (dateStr.toLowerCase() === 'present') {
      return new Date();
    }
    return new Date(dateStr);
  };

  const getPublicationKey = (publication: Publication): string => {
    return [
      publication.date,
      publication.title,
      publication.url,
      publication.authors.join(','),
    ].join('::');
  };

  const publicationOrder = new Map(
    publications.map((publication, index) => [
      getPublicationKey(publication),
      index,
    ]),
  );

  const comparePublications = (a: Publication, b: Publication): number => {
    const dateDifference =
      parseDate(b.date).getTime() - parseDate(a.date).getTime();

    if (dateDifference !== 0) {
      return dateDifference;
    }

    return (
      (publicationOrder.get(getPublicationKey(b)) ?? -1) -
      (publicationOrder.get(getPublicationKey(a)) ?? -1)
    );
  };

  type Entry = {
    id: string;
    type: 'work' | 'education';
    data: Job | Education;
    startDate: Date;
    endDate: Date;
  };

  const workEntries: Entry[] = workExperience.map((job, index) => {
    const startDate = parseDate(job.startDate);
    const endDate = parseDate(job.endDate || 'Present');
    return {
      id: `work-${index}`,
      type: 'work',
      data: job,
      startDate,
      endDate,
    };
  });

  const educationEntries: Entry[] = educationalExperience.map((edu, index) => {
    const startDate = parseDate(edu.startDate);
    const endDate = parseDate(edu.endDate || 'Present');
    return {
      id: `education-${index}`,
      type: 'education',
      data: edu,
      startDate,
      endDate,
    };
  });

  const sortEntriesByDate = (a: Entry, b: Entry) => {
    const yearDiff = b.startDate.getFullYear() - a.startDate.getFullYear();
    if (yearDiff !== 0) {
      return yearDiff;
    }
    return b.startDate.getMonth() - a.startDate.getMonth();
  };

  const sortedWorkEntries = workEntries.sort(sortEntriesByDate);
  const sortedEducationEntries = educationEntries.sort(sortEntriesByDate);
  const sortedPublications = [...publications].sort(comparePublications);

  const cvStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'CV – Jona Schlegel',
    url: 'https://jonaschlegel.com/cv',
    mainEntity: {
      '@type': 'Person',
      name: 'Jona Schlegel',
      jobTitle:
        'Archaeological Illustrator, Visual Science Communicator & Archaeology Web Developer',
      url: 'https://jonaschlegel.com',
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'HTW Berlin – University of Applied Sciences',
          url: 'https://krg.htw-berlin.de/',
        },
      ],
      knowsAbout: [
        'Archaeological Illustration',
        'Archaeology Web Development',
        'Visual Science Communication',
        'Full-stack Web Development',
        'Digital Heritage',
        'Landscape Archaeology',
        'Geophysical Prospection',
      ],
      hasCredential: educationalExperience.map((edu) => ({
        '@type': 'EducationalOccupationalCredential',
        name: edu.degree,
        credentialCategory: 'degree',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: edu.institution,
        },
      })),
      hasOccupation: workExperience.slice(0, 5).map((job) => ({
        '@type': 'Occupation',
        name: job.title,
        description: job.description,
        occupationLocation: {
          '@type': 'Place',
          name: job.location,
        },
      })),
    },
  };

  return (
    <>
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-full md:size-24">
                <Image
                  src={jonaConferenceImage}
                  alt="Jona presenting at an academic conference"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Comprehensive overview of my professional journey in
                  archaeological research, science communication, and education.
                  Explore my academic background, professional experience, and
                  key contributions to the field of archaeology.
                </p>
              </div>
            </div>
          </header>

          {/* CV Map */}
          <div className="mb-8">
            <CvMap
              workExperience={workExperience}
              educationalExperience={educationalExperience}
            />
          </div>

          <IllustrationBand seed={99} />

          {/* Mobile Tabs */}
          <div className="block md:hidden mt-8">
            <CvTabs
              workEntries={sortedWorkEntries.map((entry) => ({
                id: entry.id,
                data: entry.data as Job,
              }))}
              educationEntries={sortedEducationEntries.map((entry) => ({
                id: entry.id,
                data: entry.data as Education,
              }))}
              publications={publications}
            />
          </div>

          {/* Desktop version with independently stacked columns */}
          <div className="mt-8 hidden grid-cols-3 items-start gap-6 md:grid">
            <section aria-labelledby="cv-work-heading">
              <h2 id="cv-work-heading" className="mb-4 text-xl font-bold">
                Work
              </h2>
              <div className="flex flex-col gap-4">
                {sortedWorkEntries.map((entry) => {
                  const job = entry.data as Job;

                  return (
                    <article
                      key={`work-${entry.id}`}
                      className="rounded-lg bg-gray-50 p-4 shadow"
                    >
                      <h3 className="text-sm font-semibold text-gray-900">
                        {job.title} at {job.organization}
                      </h3>
                      <p className="my-2 text-xs text-gray-700">
                        {job.startDate} - {job.endDate || 'Present'} |{' '}
                        {job.location}
                      </p>
                      <p className="text-gray-700">{job.description}</p>
                      {job.url && (
                        <a
                          href={job.url}
                          className="mt-3 inline-block text-xs text-primary-accent underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project or Institution
                        </a>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>

            <section aria-labelledby="cv-education-heading">
              <h2 id="cv-education-heading" className="mb-4 text-xl font-bold">
                Education
              </h2>
              <div className="flex flex-col gap-4">
                {sortedEducationEntries.map((entry) => {
                  const education = entry.data as Education;

                  return (
                    <article
                      key={`education-${entry.id}`}
                      className="rounded-lg bg-gray-50 p-4 shadow"
                    >
                      <h3 className="text-sm font-semibold text-gray-900">
                        {education.degree} at {education.institution}
                      </h3>
                      <p className="my-2 text-xs text-gray-700">
                        {education.startDate} -{' '}
                        {education.endDate || 'Present'} | {education.location}
                      </p>
                      <p className="text-gray-700">{education.description}</p>
                      {education.url && (
                        <a
                          href={education.url}
                          className="mt-3 inline-block text-xs text-primary-accent underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Department
                        </a>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>

            <section aria-labelledby="cv-publications-heading">
              <h2
                id="cv-publications-heading"
                className="mb-4 text-xl font-bold"
              >
                Publications
              </h2>
              <div className="flex flex-col gap-4">
                {sortedPublications.map((publication) => (
                  <article
                    key={`publication-${getPublicationKey(publication)}`}
                    className="rounded-lg bg-gray-50 p-4 shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">
                      {publication.title}
                    </h3>
                    <div className="my-2 text-xs uppercase text-gray-700">
                      {publication.type}
                    </div>
                    <div className="text-xs text-gray-700">
                      {publication.date} | {publication.authors.join(', ')}
                    </div>
                    {publication.url && (
                      <a
                        href={publication.url}
                        className="mt-3 inline-block text-xs text-primary-accent underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Publication
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cvStructuredData),
        }}
      />
    </>
  );
};

export default CvPage;
