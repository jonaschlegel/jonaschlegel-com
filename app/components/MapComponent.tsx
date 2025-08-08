'use client';

import L from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Fix for default markers in react-leaflet
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

interface WorkExperience {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
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

// Custom marker icons for different types
const createCustomIcon = (type: 'work' | 'project' | 'both') => {
  const colors = {
    work: '#009D6F', // primary-green
    project: '#42CBB3', // primary-teal
    both: '#E6D67C', // primary-yellow
  };

  const color = colors[type];
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
    ">${type === 'work' ? 'W' : type === 'project' ? 'P' : 'B'}</div>
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
          (data.projects.length === 0 && data.workExperiences.length === 0)
        ) {
          return null;
        }

        const hasWork = data.workExperiences.length > 0;
        const hasProjects = data.projects.length > 0;
        const markerType =
          hasWork && hasProjects ? 'both' : hasWork ? 'work' : 'project';

        return (
          <Marker
            key={location.name}
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
                    {data.workExperiences.map((work, index) => (
                      <div key={index} className="mb-2 text-xs">
                        <div className="font-medium">{work.title}</div>
                        <div className="text-gray-600">{work.organization}</div>
                        <div className="text-gray-500">
                          {work.startDate} - {work.endDate || 'Present'}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {data.projects.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-xs text-primary-teal mb-1">
                      Projects
                    </h4>
                    {data.projects.map((project, index) => (
                      <div key={index} className="mb-2 text-xs">
                        <div className="font-medium">{project.title}</div>
                        {project.startDate && (
                          <div className="text-gray-500">
                            {project.startDate} - {project.endDate || 'Present'}
                          </div>
                        )}
                        {project['role(s)'] &&
                          project['role(s)']!.length > 0 && (
                            <div className="text-gray-600 text-xs">
                              {project['role(s)']!.join(', ')}
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
