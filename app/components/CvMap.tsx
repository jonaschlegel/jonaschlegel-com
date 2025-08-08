'use client';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import MapWrapper from './MapWrapper';

interface Location {
  name: string;
  coordinates: [number, number];
  type: string;
}

interface WorkProject {
  title: string;
  location: string;
  startDate?: string;
  endDate?: string;
  'role(s)'?: string[];
  url?: string;
}

interface WorkExperience {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  director?: string;
  url?: string;
  'connected project(s)'?: WorkProject[];
}

interface CvMapProps {
  workExperience: WorkExperience[];
  className?: string;
}

interface MapComponentProps {
  locations: Location[];
  projectData: {
    [locationName: string]: {
      projects: WorkProject[];
      workExperiences: WorkExperience[];
    };
  };
}

const CvMap: React.FC<CvMapProps> = ({ workExperience, className = '' }) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [projectData, setProjectData] = useState<{
    [locationName: string]: {
      projects: WorkProject[];
      workExperiences: WorkExperience[];
    };
  }>({});

  useEffect(() => {
    // Load location coordinates
    fetch('/data/cv/locations.json')
      .then((response) => response.json())
      .then((locationData: Location[]) => {
        setLocations(locationData);

        // Process work experience and projects data
        const processedData: {
          [locationName: string]: {
            projects: WorkProject[];
            workExperiences: WorkExperience[];
          };
        } = {};

        workExperience.forEach((work) => {
          // Add main work location
          if (!processedData[work.location]) {
            processedData[work.location] = {
              projects: [],
              workExperiences: [],
            };
          }
          processedData[work.location]!.workExperiences.push(work);

          // Add connected projects
          if (work['connected project(s)']) {
            work['connected project(s)']!.forEach((project) => {
              if (!processedData[project.location]) {
                processedData[project.location] = {
                  projects: [],
                  workExperiences: [],
                };
              }
              processedData[project.location]!.projects.push(project);
            });
          }
        });

        setProjectData(processedData);
      })
      .catch((error) => {
        console.error('Error loading locations:', error);
      });
  }, [workExperience]);

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-green rounded-full border-2 border-white shadow flex items-center justify-center text-white font-bold text-xs">
              W
            </div>
            <span>Work Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-teal rounded-full border-2 border-white shadow flex items-center justify-center text-white font-bold text-xs">
              P
            </div>
            <span>Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-yellow rounded-full border-2 border-white shadow flex items-center justify-center text-white font-bold text-xs">
              B
            </div>
            <span>Both</span>
          </div>
        </div>
      </div>
      <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <MapWrapper locations={locations} projectData={projectData} />
      </div>
    </div>
  );
};

export default CvMap;
