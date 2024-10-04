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
      return new Date(); // Current date for ongoing entries
    }
    return new Date(dateStr);
  };

  const calculateSpanInYears = (startDate: Date, endDate: Date): number => {
    const startYear = startDate.getFullYear();
    const endYear = Math.min(endDate.getFullYear(), new Date().getFullYear());
    return endYear - startYear + 1;
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

  const earliestYear = Math.min(
    ...combinedItems.map((item) => item.startDate.getFullYear()),
  );
  const latestYear = Math.max(
    ...combinedItems.map((item) => item.endDate.getFullYear()),
  );

  const allYears = [];
  for (let year = latestYear; year >= earliestYear; year--) {
    allYears.push(year);
  }

  const getItemsForYear = (year: number) => {
    return combinedItems.filter(
      (item) =>
        item.startDate.getFullYear() <= year &&
        item.endDate.getFullYear() >= year,
    );
  };

  // Track already rendered work and education items to avoid repeating
  const renderedWorkItems = new Set();
  const renderedEducationItems = new Set();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6">Curriculum Vitae</h1>

        <div className="grid gap-4">
          <div
            className="grid"
            style={{
              gridTemplateColumns: '100px 1fr 1fr 1fr',
              gridAutoRows: 'minmax(50px, auto)',
            }}
          >
            <h2>Year</h2>
            <h2>Work</h2>
            <h2>Education</h2>
            <h2>Publications</h2>
          </div>

          {allYears.map((year) => {
            const itemsForYear = getItemsForYear(year);

            return (
              <div
                key={`year-${year}`}
                className="grid items-start"
                style={{
                  gridTemplateColumns: '100px 1fr 1fr 1fr',
                  gridTemplateRows: 'auto',
                }}
              >
                <div>
                  <div className="border-t" />
                  <div className="text-white font-bold">{year}</div>
                </div>
                {/* Work Experience Column (spanning multiple years) */}
                <div>
                  {itemsForYear
                    .filter((item) => item.type === 'work')
                    .map((item) => {
                      const spanInYears = calculateSpanInYears(
                        item.startDate,
                        item.endDate,
                      );

                      if (
                        item.startDate.getFullYear() === year &&
                        !renderedWorkItems.has(item)
                      ) {
                        renderedWorkItems.add(item);
                        return (
                          <div
                            key={`${item.type}-${item.startDate.getTime()}`}
                            className="p-4 border rounded-lg shadow bg-white"
                            style={{
                              gridRow: `span ${spanInYears}`,
                            }}
                          >
                            <h3 className="font-semibold text-gray-900">
                              {(item.data as Job).title} at{' '}
                              {(item.data as Job).organization}
                            </h3>
                            <p className="text-sm text-gray-700">
                              {item.startDate.getFullYear()} -{' '}
                              {item.endDate.getFullYear() ===
                              new Date().getFullYear()
                                ? 'Present'
                                : item.endDate.getFullYear()}{' '}
                              | {(item.data as Job).location}
                            </p>
                            <p className="text-gray-500">
                              {(item.data as Job).description}
                            </p>
                          </div>
                        );
                      } else {
                        return null; // Prevent rendering in non-start years
                      }
                    })}
                </div>

                {/* Educational Experience Column (spanning multiple years) */}
                <div>
                  {itemsForYear
                    .filter((item) => item.type === 'education')
                    .map((item) => {
                      const spanInYears = calculateSpanInYears(
                        item.startDate,
                        item.endDate,
                      );

                      if (
                        item.startDate.getFullYear() === year &&
                        !renderedEducationItems.has(item)
                      ) {
                        renderedEducationItems.add(item);
                        return (
                          <div
                            key={`${item.type}-${item.startDate.getTime()}`}
                            className="p-4 border rounded-lg shadow bg-white"
                            style={{
                              gridRow: `span ${spanInYears}`,
                            }}
                          >
                            <h3 className="font-semibold text-gray-900">
                              {(item.data as Education).degree} at{' '}
                              {(item.data as Education).institution}
                            </h3>
                            <p className="text-sm text-gray-700">
                              {item.startDate.getFullYear()} -{' '}
                              {item.endDate.getFullYear() ===
                              new Date().getFullYear()
                                ? 'Present'
                                : item.endDate.getFullYear()}{' '}
                              | {(item.data as Education).location}
                            </p>
                            <p className="text-gray-500">
                              {(item.data as Education).description}
                            </p>
                          </div>
                        );
                      } else {
                        return null; // Prevent rendering in non-start years
                      }
                    })}
                </div>

                {/* Publications Column (single row) */}
                <div>
                  {itemsForYear
                    .filter((item) => item.type === 'publication')
                    .map((item) => (
                      <div
                        key={`${item.type}-${item.startDate.getTime()}`}
                        className="p-2 border rounded-lg shadow bg-white mb-2"
                      >
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {(item.data as Publication).title}
                        </h3>
                        <p className="text-xs text-gray-700">
                          {(item.data as Publication).date} |{' '}
                          {(item.data as Publication).authors.join(', ')}
                        </p>
                        <a
                          href={(item.data as Publication).url}
                          className="text-primary-accent underline text-xs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Publication
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CvPage;
