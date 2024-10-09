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
  type: string;
  date: string;
  authors: string[];
  url: string;
  location: string;
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

  const allYearsSet = new Set<number>();
  const collectYears = (startDate: Date, endDate: Date) => {
    const years = [];
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
      allYearsSet.add(year);
    }
    return years;
  };

  type Entry = {
    id: string;
    type: 'work' | 'education';
    data: Job | Education;
    years: number[];
    startDate: Date;
    endDate: Date;
  };

  const workEntries: Entry[] = workExperience.map((job, index) => {
    const startDate = parseDate(job.startDate);
    const endDate = parseDate(job.endDate || 'Present');
    const years = collectYears(startDate, endDate);
    return {
      id: `work-${index}`,
      type: 'work',
      data: job,
      years,
      startDate,
      endDate,
    };
  });

  const educationEntries: Entry[] = educationalExperience.map((edu, index) => {
    const startDate = parseDate(edu.startDate);
    const endDate = parseDate(edu.endDate || 'Present');
    const years = collectYears(startDate, endDate);
    return {
      id: `education-${index}`,
      type: 'education',
      data: edu,
      years,
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

  const allYears = Array.from(allYearsSet).sort((a, b) => b - a);

  type TimelineEntry = {
    entry: Entry;
    layer: number;
  };

  type ColumnTimeline = {
    [year: number]: TimelineEntry[];
  };

  const workTimeline: ColumnTimeline = {};
  const educationTimeline: ColumnTimeline = {};

  allYears.forEach((year) => {
    workTimeline[year] = [];
    educationTimeline[year] = [];
  });

  const assignLayers = (entries: Entry[], timeline: ColumnTimeline) => {
    entries.forEach((entry) => {
      entry.years.forEach((year) => {
        const yearEntries = timeline[year];
        let layer = 0;
        const isLayerOccupied = (
          checkLayer: number,
          entriesInYear: TimelineEntry[],
        ) => {
          return entriesInYear.some((e) => e.layer === checkLayer);
        };

        while (yearEntries && isLayerOccupied(layer, yearEntries)) {
          layer++;
        }
        if (yearEntries) {
          yearEntries.push({ entry, layer });
        }
      });
    });
  };

  assignLayers(sortedWorkEntries, workTimeline);
  assignLayers(sortedEducationEntries, educationTimeline);

  const totalLayersPerYear: { [year: number]: number } = {};
  allYears.forEach((year) => {
    const workLayers =
      workTimeline[year] && workTimeline[year].length > 0
        ? Math.max(...workTimeline[year].map((e) => e.layer)) + 1
        : 0;
    const educationLayers =
      (educationTimeline[year]?.length ?? 0) > 0
        ? Math.max(...(educationTimeline[year] ?? []).map((e) => e.layer)) + 1
        : 0;
    totalLayersPerYear[year] = Math.max(workLayers, educationLayers, 1);
  });

  const yearRowStart: { [year: number]: number } = {};
  let currentRow = 2;
  allYears.forEach((year) => {
    yearRowStart[year] = currentRow;
    currentRow += totalLayersPerYear[year] ?? 0;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8">Curriculum Vitae</h1>

        {/* Grid container */}
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: '100px 1fr 1fr 1fr',
            gridTemplateRows: `repeat(${currentRow - 1}, auto)`,
          }}
        >
          {/* Column headers */}
          <div className="font-bold text-xl" />
          <h2 className="font-bold text-xl">Work</h2>
          <h2 className="font-bold text-xl">Education</h2>
          <h2 className="font-bold text-xl">Publications</h2>

          {/* Render year labels */}
          {allYears.map((year) => (
            <div
              key={`year-${year}`}
              className="border-t py-2 text-white font-bold"
              style={{
                gridColumn: 1,
                gridRow: `${yearRowStart[year]} / span ${totalLayersPerYear[year]}`,
              }}
            >
              {year}
            </div>
          ))}

          {/* Render work entries */}
          {sortedWorkEntries.map((entry) => {
            const startYear = entry.startDate.getFullYear();
            const endYear = entry.endDate.getFullYear();
            const rowStart =
              (yearRowStart[startYear] ?? 0) +
              (workTimeline[startYear]?.find((e) => e.entry.id === entry.id)
                ?.layer ?? 0);
            const rowEnd =
              (yearRowStart[endYear] ?? 0) +
              (workTimeline[endYear]?.find((e) => e.entry.id === entry.id)
                ?.layer ?? 0) +
              1;

            return (
              <div
                key={`work-${entry.id}`}
                style={{
                  gridColumn: 2,
                  gridRow: `${rowStart} / ${rowEnd}`,
                }}
                className="p-2 border rounded-lg shadow bg-white"
              >
                <h3 className="font-semibold text-gray-900 text-sm">
                  {(entry.data as Job).title} at{' '}
                  {(entry.data as Job).organization}
                </h3>
                <p className="text-xs text-gray-700">
                  {(entry.data as Job).startDate} -{' '}
                  {(entry.data as Job).endDate || 'Present'} |{' '}
                  {(entry.data as Job).location}
                </p>
                <p className="text-gray-500">
                  {(entry.data as Job).description}
                </p>
              </div>
            );
          })}

          {/* Render education entries */}
          {sortedEducationEntries.map((entry) => {
            const startYear = entry.startDate.getFullYear();
            const endYear = entry.endDate.getFullYear();
            const startLayer =
              educationTimeline[startYear]?.find((e) => e.entry.id === entry.id)
                ?.layer ?? 0;
            const rowStart = (yearRowStart[startYear] ?? 0) + startLayer;
            const endLayer =
              educationTimeline[endYear]?.find((e) => e.entry.id === entry.id)
                ?.layer ?? 0;
            const rowEnd = (yearRowStart[endYear] ?? 0) + endLayer + 1;

            return (
              <div
                key={`education-${entry.id}`}
                style={{
                  gridColumn: 3,
                  gridRow: `${rowStart} / ${rowEnd}`,
                }}
                className="p-2 border rounded-lg shadow bg-white"
              >
                <h3 className="font-semibold text-gray-900 text-sm">
                  {(entry.data as Education).degree} at{' '}
                  {(entry.data as Education).institution}
                </h3>
                <p className="text-xs text-gray-700">
                  {(entry.data as Education).startDate} -{' '}
                  {(entry.data as Education).endDate || 'Present'} |{' '}
                  {(entry.data as Education).location}
                </p>
                <p className="text-gray-500">
                  {(entry.data as Education).description}
                </p>
              </div>
            );
          })}

          {/* Iterate over each year */}
          {allYears.map((year) => {
            const yearPublications = publications.filter(
              (pub) => parseDate(pub.date).getFullYear() === year,
            );

            return (
              <React.Fragment key={`pubs-${year}`}>
                {/* Publications Column */}
                <div
                  style={{
                    gridColumn: 4,
                    gridRow: `${yearRowStart[year]} / span ${totalLayersPerYear[year]}`,
                  }}
                  className="flex flex-col gap-2"
                >
                  {yearPublications.map((pub, index) => (
                    <div
                      key={`publication-${year}-${index}`}
                      className="p-2 border rounded-lg shadow bg-white"
                    >
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {pub.title}
                      </h3>
                      <div className="text-xs uppercase my-2 text-gray-700">
                        {pub.type}
                      </div>
                      <div className="text-xs text-gray-700">
                        {pub.date} | {pub.authors.join(', ')}
                      </div>
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
