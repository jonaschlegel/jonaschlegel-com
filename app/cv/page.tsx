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
  ];

  const earliestYear = Math.min(
    ...combinedItems.map((item) => item.startDate.getFullYear()),
    ...publications.map((pub) => parseDate(pub.date).getFullYear()),
  );
  const latestYear = Math.max(
    ...combinedItems.map((item) => item.endDate.getFullYear()),
    ...publications.map((pub) => parseDate(pub.date).getFullYear()),
  );

  const allYears = [];
  for (let year = latestYear; year >= earliestYear; year--) {
    allYears.push(year);
  }

  const calculateRowSpan = (startDate: Date, endDate: Date) => {
    return endDate.getFullYear() - startDate.getFullYear() + 1;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6">Curriculum Vitae</h1>

        <div
          className="grid"
          style={{
            gridTemplateColumns: '100px 1fr 1fr 1fr',
            gridAutoRows: 'minmax(50px, auto)',
          }}
        >
          <div className="font-bold text-lg" />
          <h2 className="font-bold text-lg">Work</h2>
          <h2 className="font-bold text-lg">Education</h2>
          <h2 className="font-bold text-lg">Publications</h2>

          {allYears.map((year) => {
            const yearRow = latestYear - year + 2;
            return (
              <div
                key={`year-${year}`}
                className="border-t py-2 text-white font-bold"
                style={{ gridColumn: 1, gridRow: yearRow }}
              >
                {year}
              </div>
            );
          })}

          {combinedItems.map((item) => {
            const rowSpan = calculateRowSpan(item.startDate, item.endDate);
            const startYear = item.startDate.getFullYear();
            const endYear = item.endDate.getFullYear();
            const gridRowStart = latestYear - endYear + 2;

            return (
              <div
                key={`${item.type}-${item.startDate.getTime()}`}
                className="p-4 border rounded-lg shadow bg-white h-full"
                style={{
                  gridColumn: item.type === 'work' ? 2 : 3,
                  gridRow: `${gridRowStart} / span ${rowSpan}`,
                }}
              >
                <h3 className="font-semibold text-gray-900">
                  {item.type === 'work'
                    ? `${(item.data as Job).title} at ${(item.data as Job).organization}`
                    : `${(item.data as Education).degree} at ${(item.data as Education).institution}`}
                </h3>
                <p className="text-sm text-gray-700">
                  {startYear} -{' '}
                  {endYear === new Date().getFullYear() ? 'Present' : endYear} |{' '}
                  {item.type === 'work'
                    ? (item.data as Job).location
                    : (item.data as Education).location}
                </p>
                <p className="text-gray-500">
                  {item.type === 'work'
                    ? (item.data as Job).description
                    : (item.data as Education).description}
                </p>
              </div>
            );
          })}

          {/* Publications Column */}
          {publications.map((pub, index) => {
            const pubYear = parseDate(pub.date).getFullYear();
            const gridRow = latestYear - pubYear + 2;
            return (
              <div
                key={`publication-${index}`}
                className="p-2 border rounded-lg shadow bg-white mb-2"
                style={{
                  gridColumn: 4,
                  gridRow: `${gridRow} / span 1`,
                }}
              >
                <h3 className="font-semibold text-gray-900 text-sm">
                  {pub.title}
                </h3>
                <p className="text-xs text-gray-700">
                  {pub.date} | {pub.authors.join(', ')}
                </p>
                <a
                  href={pub.url}
                  className="text-primary-accent underline text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CvPage;
