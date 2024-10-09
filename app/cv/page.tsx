/* eslint-disable react/no-array-index-key */
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';

interface Job {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
}

interface Publication {
  title: string;
  date: string;
  authors: string[];
  url: string;
}

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

  const combinedItems = [
    ...workExperience.map((job) => ({
      type: 'work',
      startDate: parseDate(job.startDate),
      endDate: parseDate(job.endDate || 'Present'),
      data: job,
    })),
    ...educationalExperience.map((edu) => ({
      type: 'education',
      startDate: parseDate(edu.startDate),
      endDate: parseDate(edu.endDate || 'Present'),
      data: edu,
    })),
    ...publications.map((pub) => ({
      type: 'publication',
      startDate: parseDate(pub.date),
      endDate: parseDate(pub.date),
      data: pub,
    })),
  ];

  // Sort combinedItems to ensure proper ordering of overlapping entries
  combinedItems.sort((a, b) => {
    // First, compare start dates
    if (a.startDate.getTime() !== b.startDate.getTime()) {
      return a.startDate.getTime() - b.startDate.getTime();
    }
    // If start dates are the same, compare end dates
    return b.endDate.getTime() - a.endDate.getTime();
  });

  const combinedByYear: {
    [year: number]: {
      work: Job[];
      education: Education[];
      publications: Publication[];
    };
  } = {};

  combinedItems.forEach((item) => {
    const startYear = item.startDate.getFullYear();
    const endYear = item.endDate.getFullYear();

    for (let year = endYear; year >= startYear; year--) {
      if (!combinedByYear[year]) {
        combinedByYear[year] = { work: [], education: [], publications: [] };
      }

      if (item.type === 'work') {
        combinedByYear[year]?.work.push(item.data as Job);
      } else if (item.type === 'education') {
        combinedByYear[year]?.education.push(item.data as Education);
      } else if (item.type === 'publication') {
        combinedByYear[year]?.publications.push(item.data as Publication);
      }
    }
  });

  const earliestYear = Math.min(
    ...Object.keys(combinedByYear).map((year) => parseInt(year, 10)),
  );
  const latestYear = Math.max(
    ...Object.keys(combinedByYear).map((year) => parseInt(year, 10)),
  );

  const allYears: number[] = [];
  for (let year = latestYear; year >= earliestYear; year--) {
    allYears.push(year);
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6">Curriculum Vitae</h1>

        {/* Grid container with rows representing each year */}
        <div
          className="grid gap-y-4"
          style={{
            gridTemplateColumns: '100px 1fr 1fr 1fr',
            gridAutoRows: 'minmax(50px, auto)',
          }}
        >
          {/* Column headers */}
          <div className="font-bold text-lg" />
          <h2 className="font-bold text-lg">Work</h2>
          <h2 className="font-bold text-lg">Education</h2>
          <h2 className="font-bold text-lg">Publications</h2>

          {/* Iterate over each year */}
          {allYears.map((year) => {
            const yearData = combinedByYear[year] || {
              work: [],
              education: [],
              publications: [],
            };

            return (
              <React.Fragment key={`year-${year}`}>
                {/* Year Column */}
                <div
                  className="border-t py-2 text-white font-bold"
                  style={{ gridColumn: 1 }}
                >
                  {year}
                </div>

                {/* Work Column Spanning Entries */}
                {yearData.work.length > 0 &&
                  yearData.work.map((job, index) => {
                    const startYear = parseDate(job.startDate).getFullYear();
                    const endYear = job.endDate
                      ? parseDate(job.endDate).getFullYear()
                      : new Date().getFullYear();
                    const rowSpan = endYear - startYear + 1;

                    return (
                      <div
                        key={`work-${year}-${index}`}
                        style={{
                          gridColumn: 2,
                          gridRowStart: allYears.indexOf(endYear) + 2,
                          gridRowEnd: `span ${rowSpan}`,
                        }}
                        className="p-2 border rounded-lg shadow bg-white mb-2"
                      >
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {job.title} at {job.organization}
                        </h3>
                        <p className="text-xs text-gray-700">
                          {job.startDate} - {job.endDate || 'Present'} |{' '}
                          {job.location}
                        </p>
                        <p className="text-gray-500">{job.description}</p>
                      </div>
                    );
                  })}

                {/* Education Column Spanning Entries */}
                {yearData.education.length > 0 &&
                  yearData.education.map((edu, index) => {
                    const startYear = parseDate(edu.startDate).getFullYear();
                    const endYear = edu.endDate
                      ? parseDate(edu.endDate).getFullYear()
                      : new Date().getFullYear();
                    const rowSpan = endYear - startYear + 1;

                    return (
                      <div
                        key={`education-${year}-${index}`}
                        style={{
                          gridColumn: 3,
                          gridRowStart: allYears.indexOf(endYear) + 2,
                          gridRowEnd: `span ${rowSpan}`,
                        }}
                        className="p-2 border rounded-lg shadow bg-white mb-2"
                      >
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {edu.degree} at {edu.institution}
                        </h3>
                        <p className="text-xs text-gray-700">
                          {edu.startDate} - {edu.endDate || 'Present'} |{' '}
                          {edu.location}
                        </p>
                        <p className="text-gray-500">{edu.description}</p>
                      </div>
                    );
                  })}

                {/* Publications Column */}
                <div className="flex flex-col gap-2" style={{ gridColumn: 4 }}>
                  {yearData.publications.map((pub, index) => (
                    <div
                      key={`publication-${year}-${index}`}
                      className="p-2 border rounded-lg shadow bg-white"
                    >
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {pub.title}
                      </h3>
                      <p className="text-xs text-gray-700">
                        {pub.date} | {pub.authors.join(', ')}
                      </p>
                      {pub.url && (
                        <a
                          href={pub.url}
                          className="text-primary-accent underline text-xs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Publication
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CvPage;
