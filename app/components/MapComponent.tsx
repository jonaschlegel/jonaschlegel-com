'use client';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Fix for default markers in react-leaflet
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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

interface EducationalProject {
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
}

interface EducationalExperience {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface MapComponentProps {
  locations: Location[];
  projectData: {
    [locationName: string]: {
      workProjects: WorkProject[];
      educationProjects: EducationalProject[];
      workExperiences: WorkExperience[];
      educationalExperiences: EducationalExperience[];
    };
  };
}

// Custom marker icons for different types
const createCustomIcon = (
  type: 'work' | 'education' | 'project' | 'multiple',
) => {
  const colors = {
    work: '#009D6F', // primary-green
    education: '#42CBB3', // primary-teal (same as project)
    project: '#42CBB3', // primary-teal
    multiple: '#E6D67C', // primary-yellow
  };

  const color = colors[type];
  const letter =
    type === 'work'
      ? 'W'
      : type === 'education'
        ? 'E'
        : type === 'project'
          ? 'P'
          : 'M';

  const iconHtml = `
    <div style="
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${color};
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: bold;
      color: white;
    ">${letter}</div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: 'custom-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

const MapComponent: React.FC<MapComponentProps> = ({
  locations,
  projectData,
}) => {
  // Calculate bounds to fit all markers with some padding
  const bounds: [number, number][] =
    locations.length > 0
      ? locations.map((loc) => loc.coordinates)
      : [
          [52.3676, 4.9041],
          [48.2082, 16.3738],
        ]; // Default bounds (Amsterdam to Vienna)

  return (
    <MapContainer
      bounds={bounds}
      className="w-full h-full"
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        maxZoom={19}
        subdomains="abcd"
      />

      {locations.map((location) => {
        const data = projectData[location.name];
        if (
          !data ||
          (data.workProjects.length === 0 &&
            data.educationProjects.length === 0 &&
            data.workExperiences.length === 0 &&
            data.educationalExperiences.length === 0)
        ) {
          return null;
        }

        const hasWork = data.workExperiences.length > 0;
        const hasEducation = data.educationalExperiences.length > 0;
        const hasWorkProjects = data.workProjects.length > 0;
        const hasEducationProjects = data.educationProjects.length > 0;

        // Determine marker type based on what's present
        let markerType: 'work' | 'education' | 'project' | 'multiple';

        const hasWorkActivity = hasWork || hasWorkProjects;
        const hasEducationActivity = hasEducation || hasEducationProjects;

        if (hasWorkActivity && hasEducationActivity) {
          markerType = 'multiple';
        } else if (hasWorkActivity) {
          markerType = 'work';
        } else if (hasEducationActivity) {
          markerType = 'education';
        } else {
          markerType = 'project';
        }
        return (
          <Marker
            key={`marker-${location.name}`}
            position={location.coordinates}
            icon={createCustomIcon(markerType)}
          >
            <Popup maxWidth={300} className="cv-map-popup">
              <div className="p-2">
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  {location.name}
                </h3>

                {data.workExperiences.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-xs text-primary-green mb-1">
                      Work Experience
                    </h4>
                    {data.workExperiences.map((work) => (
                      <div
                        key={`work-${work.title}-${work.startDate}`}
                        className="mb-2 text-xs"
                      >
                        <div className="font-medium">{work.title}</div>
                        <div className="text-gray-600">{work.organization}</div>
                        <div className="text-gray-500">
                          {work.startDate} - {work.endDate || 'Present'}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {data.educationalExperiences.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-xs text-primary-blue mb-1">
                      Education
                    </h4>
                    {data.educationalExperiences.map((edu) => (
                      <div
                        key={`edu-${edu.degree}-${edu.startDate}`}
                        className="mb-2 text-xs"
                      >
                        <div className="font-medium">{edu.degree}</div>
                        <div className="text-gray-600">{edu.institution}</div>
                        <div className="text-gray-500">
                          {edu.startDate} - {edu.endDate || 'Present'}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {data.workProjects.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-xs text-primary-green mb-1">
                      Work Projects
                    </h4>
                    {data.workProjects.map((project) => (
                      <div
                        key={`work-project-${project.title}-${project.startDate || 'no-date'}`}
                        className="mb-2 text-xs"
                      >
                        <div className="font-medium">{project.title}</div>
                        {project.startDate && (
                          <div className="text-gray-500">
                            {project.startDate} - {project.endDate || 'Present'}
                          </div>
                        )}
                        {project['role(s)'] &&
                          project['role(s)'].length > 0 && (
                            <div className="text-gray-600 text-xs">
                              {project['role(s)'].join(', ')}
                            </div>
                          )}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-accent underline text-xs"
                          >
                            View Project
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {data.educationProjects.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-xs text-primary-blue mb-1">
                      Education Projects
                    </h4>
                    {data.educationProjects.map((project) => (
                      <div
                        key={`edu-project-${project.title}-${project.startDate || 'no-date'}`}
                        className="mb-2 text-xs"
                      >
                        <div className="font-medium">{project.title}</div>
                        {project.startDate && (
                          <div className="text-gray-500">
                            {project.startDate} - {project.endDate || 'Present'}
                          </div>
                        )}
                        {project['role(s)'] &&
                          project['role(s)'].length > 0 && (
                            <div className="text-gray-600 text-xs">
                              {project['role(s)'].join(', ')}
                            </div>
                          )}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-accent underline text-xs"
                          >
                            View Project
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
