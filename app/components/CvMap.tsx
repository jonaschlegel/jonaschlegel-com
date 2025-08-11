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

interface EducationalProject {
  title: string;
  location: string;
  startDate?: string;
  endDate?: string;
  'role(s)'?: string[];
  url?: string;
}

interface EducationalExperience {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  url?: string;
  'connected project(s)'?: EducationalProject[];
}

interface CvMapProps {
  workExperience: WorkExperience[];
  educationalExperience?: EducationalExperience[];
  className?: string;
}

const CvMap: React.FC<CvMapProps> = ({
  workExperience,
  educationalExperience = [],
  className = '',
}) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [projectData, setProjectData] = useState<{
    [locationName: string]: {
      workProjects: WorkProject[];
      educationProjects: EducationalProject[];
      workExperiences: WorkExperience[];
      educationalExperiences: EducationalExperience[];
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
            workProjects: WorkProject[];
            educationProjects: EducationalProject[];
            workExperiences: WorkExperience[];
            educationalExperiences: EducationalExperience[];
          };
        } = {};

        // Process work experience
        workExperience.forEach((work) => {
          // Add main work location
          if (!processedData[work.location]) {
            processedData[work.location] = {
              workProjects: [],
              educationProjects: [],
              workExperiences: [],
              educationalExperiences: [],
            };
          }
          processedData[work.location]!.workExperiences.push(work);

          // Add connected projects
          if (work['connected project(s)']) {
            work['connected project(s)'].forEach((project) => {
              if (!processedData[project.location]) {
                processedData[project.location] = {
                  workProjects: [],
                  educationProjects: [],
                  workExperiences: [],
                  educationalExperiences: [],
                };
              }
              processedData[project.location]!.workProjects.push(project);
            });
          }
        });

        // Process educational experience
        educationalExperience.forEach((edu) => {
          // Add main education location
          if (!processedData[edu.location]) {
            processedData[edu.location] = {
              workProjects: [],
              educationProjects: [],
              workExperiences: [],
              educationalExperiences: [],
            };
          }
          processedData[edu.location]!.educationalExperiences.push(edu);

          // Add connected projects
          if (edu['connected project(s)']) {
            edu['connected project(s)'].forEach((project) => {
              if (!processedData[project.location]) {
                processedData[project.location] = {
                  workProjects: [],
                  educationProjects: [],
                  workExperiences: [],
                  educationalExperiences: [],
                };
              }
              processedData[project.location]!.educationProjects.push(project);
            });
          }
        });

        setProjectData(processedData);
      })
      .catch((error) => {
        console.error('Error loading locations:', error);
      });
  }, [workExperience, educationalExperience]);

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
              E
            </div>
            <span>Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-teal rounded-full border-2 border-white shadow flex items-center justify-center text-white font-bold text-xs">
              P
            </div>
            <span>Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-yellow rounded-full border-2 border-white shadow flex items-center justify-center text-white font-bold text-xs">
              M
            </div>
            <span>Multiple</span>
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
