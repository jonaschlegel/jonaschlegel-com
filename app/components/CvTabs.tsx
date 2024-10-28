'use client';
import { useState } from 'react';

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
  id: string;
  title: string;
  type: string;
  date: string; // Ensure this is in 'YYYY-MM-DD' or 'YYYY' format
  authors: string[];
  url?: string;
}

interface CvTabsProps {
  workEntries: { id: string; data: Job }[];
  educationEntries: { id: string; data: Education }[];
  publications: Publication[];
}

const CvTabs: React.FC<CvTabsProps> = ({
  workEntries,
  educationEntries,
  publications,
}) => {
  const [activeTab, setActiveTab] = useState<
    'work' | 'education' | 'publications'
  >('work');

  // Sort publications by date in descending order
  const sortedPublications = publications.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <div className="flex justify-around mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'work' ? 'border-b-2 border-primary-accent font-bold' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'education' ? 'border-b-2 border-primary-accent font-bold' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'publications' ? 'border-b-2 border-primary-accent font-bold' : ''}`}
          onClick={() => setActiveTab('publications')}
        >
          Publications
        </button>
      </div>

      {/* Work Tab */}
      {activeTab === 'work' && (
        <div>
          {workEntries.map((entry) => (
            <div
              key={`mobile-work-${entry.id}`}
              className="mb-4 p-4 rounded-lg shadow bg-gray-50"
            >
              <h3 className="font-semibold text-gray-900 text-sm">
                {entry.data.title} at {entry.data.organization}
              </h3>
              <p className="text-xs text-gray-700">
                {entry.data.startDate} - {entry.data.endDate || 'Present'} |{' '}
                {entry.data.location}
              </p>
              <p className="text-gray-700">{entry.data.description}</p>
              {entry.data.url && (
                <a
                  href={entry.data.url}
                  className="text-primary-accent underline text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project or Institution
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education Tab */}
      {activeTab === 'education' && (
        <div>
          {educationEntries.map((entry) => (
            <div
              key={`mobile-education-${entry.id}`}
              className="mb-4 p-4 rounded-lg shadow bg-gray-50"
            >
              <h3 className="font-semibold text-gray-900 text-sm">
                {entry.data.degree} at {entry.data.institution}
              </h3>
              <p className="text-xs text-gray-700 my-2">
                {entry.data.startDate} - {entry.data.endDate || 'Present'} |{' '}
                {entry.data.location}
              </p>
              <div className="text-gray-700">{entry.data.description}</div>
              {entry.data.url && (
                <a
                  href={entry.data.url}
                  className="text-primary-accent underline text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Department
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Publications Tab */}
      {activeTab === 'publications' && (
        <div>
          {sortedPublications.map((pub) => (
            <div
              key={`mobile-publication-${pub.id}`}
              className="mb-4 p-4 rounded-lg shadow bg-gray-50"
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
      )}
    </div>
  );
};

export default CvTabs;
