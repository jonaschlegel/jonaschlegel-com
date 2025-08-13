'use client';

import L from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

let pluginsLoaded = false;

const loadLeafletPlugins = async () => {
  if (typeof window !== 'undefined' && !pluginsLoaded) {
    await import('leaflet.heat');
    await import('leaflet.markercluster');
    pluginsLoaded = true;
  }
};

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

declare global {
  namespace L {
    function heatLayer(
      latlngs: Array<[number, number] | [number, number, number]>,
      options?: any,
    ): any;
    function markerClusterGroup(options?: any): any;
  }
}

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
  showClusters?: boolean;
  showHeatmap?: boolean;
}

// Custom marker icons for different types
const createCustomIcon = (
  type: 'work' | 'education' | 'project' | 'multiple',
) => {
  const colors = {
    work: '#009D6F',
    education: '#42CBB3',
    project: '#42CBB3',
    multiple: '#E6D67C',
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

// Create custom cluster icon
const createClusterIcon = (count: number) => {
  let size = 'small';
  let color = '#42CBB3';

  if (count < 5) {
    size = 'small';
    color = '#42CBB3';
  } else if (count < 10) {
    size = 'medium';
    color = '#009D6F';
  } else {
    size = 'large';
    color = '#E6D67C';
  }

  const sizeMap = {
    small: 30,
    medium: 40,
    large: 50,
  };

  return L.divIcon({
    html: `<div style="
      background-color: ${color};
      color: white;
      width: ${sizeMap[size as keyof typeof sizeMap]}px;
      height: ${sizeMap[size as keyof typeof sizeMap]}px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: ${size === 'large' ? '14px' : '12px'};
    ">${count}</div>`,
    className: 'custom-cluster-marker',
    iconSize: [
      sizeMap[size as keyof typeof sizeMap],
      sizeMap[size as keyof typeof sizeMap],
    ],
  });
};

// Map component that handles markers and clustering
const MapContent: React.FC<{
  locations: Location[];
  projectData: {
    [locationName: string]: {
      workProjects: WorkProject[];
      educationProjects: EducationalProject[];
      workExperiences: WorkExperience[];
      educationalExperiences: EducationalExperience[];
    };
  };
  showClusters: boolean;
  showHeatmap: boolean;
}> = ({ locations, projectData, showClusters, showHeatmap }) => {
  const map = useMap();

  useEffect(() => {
    const initializeMap = async () => {
      await loadLeafletPlugins();

      map.eachLayer((layer) => {
        if (
          layer instanceof L.MarkerClusterGroup ||
          layer instanceof L.Marker
        ) {
          map.removeLayer(layer);
        }
      });

      const markers: L.Marker[] = [];
      locations.forEach((location) => {
        const data = projectData[location.name];
        if (
          !data ||
          (data.workProjects.length === 0 &&
            data.educationProjects.length === 0 &&
            data.workExperiences.length === 0 &&
            data.educationalExperiences.length === 0)
        ) {
          return;
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

        const marker = L.marker(location.coordinates, {
          icon: createCustomIcon(markerType),
        });

        // Create popup content
        let popupContent = `
          <div class="p-2">
            <h3 class="font-bold text-gray-900 text-sm mb-2">${location.name}</h3>
        `;

        if (data.workExperiences.length > 0) {
          popupContent += `
            <div class="mb-3">
              <h4 class="font-semibold text-xs text-primary-green mb-1">Work Experience</h4>
          `;
          data.workExperiences.forEach((work) => {
            popupContent += `
              <div class="mb-2 text-xs">
                <div class="font-medium">${work.title}</div>
                <div class="text-gray-600">${work.organization}</div>
                <div class="text-gray-500">${work.startDate} - ${work.endDate || 'Present'}</div>
              </div>
            `;
          });
          popupContent += `</div>`;
        }

        if (data.educationalExperiences.length > 0) {
          popupContent += `
            <div class="mb-3">
              <h4 class="font-semibold text-xs text-primary-blue mb-1">Education</h4>
          `;
          data.educationalExperiences.forEach((edu) => {
            popupContent += `
              <div class="mb-2 text-xs">
                <div class="font-medium">${edu.degree}</div>
                <div class="text-gray-600">${edu.institution}</div>
                <div class="text-gray-500">${edu.startDate} - ${edu.endDate || 'Present'}</div>
              </div>
            `;
          });
          popupContent += `</div>`;
        }

        if (data.workProjects.length > 0) {
          popupContent += `
            <div class="mb-3">
              <h4 class="font-semibold text-xs text-primary-green mb-1">Work Projects</h4>
          `;
          data.workProjects.forEach((project) => {
            popupContent += `
              <div class="mb-2 text-xs">
                <div class="font-medium">${project.title}</div>
                ${project.startDate ? `<div class="text-gray-500">${project.startDate} - ${project.endDate || 'Present'}</div>` : ''}
                ${project['role(s)'] && project['role(s)'].length > 0 ? `<div class="text-gray-600 text-xs">${project['role(s)'].join(', ')}</div>` : ''}
                ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="text-primary-accent underline text-xs">View Project</a>` : ''}
              </div>
            `;
          });
          popupContent += `</div>`;
        }

        if (data.educationProjects.length > 0) {
          popupContent += `
            <div>
              <h4 class="font-semibold text-xs text-primary-blue mb-1">Education Projects</h4>
          `;
          data.educationProjects.forEach((project) => {
            popupContent += `
              <div class="mb-2 text-xs">
                <div class="font-medium">${project.title}</div>
                ${project.startDate ? `<div class="text-gray-500">${project.startDate} - ${project.endDate || 'Present'}</div>` : ''}
                ${project['role(s)'] && project['role(s)'].length > 0 ? `<div class="text-gray-600 text-xs">${project['role(s)'].join(', ')}</div>` : ''}
                ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="text-primary-accent underline text-xs">View Project</a>` : ''}
              </div>
            `;
          });
          popupContent += `</div>`;
        }

        popupContent += `</div>`;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'cv-map-popup',
        });

        markers.push(marker);
      });

      // Add markers to map
      if (showClusters && markers.length > 0) {
        const markerClusterGroup = L.markerClusterGroup({
          maxClusterRadius: 50,
          iconCreateFunction: (cluster: any) => {
            const count = (
              cluster as { getChildCount(): number }
            ).getChildCount();
            return createClusterIcon(count);
          },
          showCoverageOnHover: false,
          zoomToBoundsOnClick: true,
          spiderfyOnMaxZoom: true,
          removeOutsideVisibleBounds: true,
          animate: true,
        });

        markers.forEach((marker) => markerClusterGroup.addLayer(marker));
        map.addLayer(markerClusterGroup);
      } else {
        markers.forEach((marker) => map.addLayer(marker));
      }

      // Heatmap
      if (showHeatmap) {
        const heatmapData: [number, number, number][] = locations
          .map((location) => {
            const data = projectData[location.name];
            if (!data) return null;

            const intensity =
              data.workProjects.length +
              data.educationProjects.length +
              data.workExperiences.length +
              data.educationalExperiences.length;

            if (intensity === 0) return null;

            return [
              location.coordinates[0],
              location.coordinates[1],
              Math.min(intensity * 0.3, 1),
            ] as [number, number, number];
          })
          .filter((point): point is [number, number, number] => point !== null);

        if (heatmapData.length > 0) {
          const heatLayer = L.heatLayer(heatmapData, {
            radius: 60,
            blur: 30,
            maxZoom: 17,
            gradient: {
              0.0: 'rgba(66, 203, 179, 0.4)',
              0.2: 'rgba(66, 203, 179, 0.6)',
              0.4: 'rgba(0, 157, 111, 0.7)',
              0.6: 'rgba(0, 157, 111, 0.8)',
              0.8: 'rgba(230, 214, 124, 0.9)',
              1.0: 'rgba(83, 39, 0, 0.9)',
            },
          });
          map.addLayer(heatLayer);
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    initializeMap();

    return () => {
      map.eachLayer((layer) => {
        if (
          layer instanceof L.MarkerClusterGroup ||
          layer instanceof L.Marker ||
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (layer as any).options?.gradient // heatmap layer
        ) {
          map.removeLayer(layer);
        }
      });
    };
  }, [map, locations, projectData, showClusters, showHeatmap]);

  return null;
};

const MapComponent: React.FC<MapComponentProps> = ({
  locations,
  projectData,
  showClusters = true,
  showHeatmap = false,
}) => {
  // Calculate bounds to fit all markers with some padding
  const bounds: [number, number][] =
    locations.length > 0
      ? locations.map((loc) => loc.coordinates)
      : [
          [52.3676, 4.9041],
          [48.2082, 16.3738],
        ];

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

      <MapContent
        locations={locations}
        projectData={projectData}
        showClusters={showClusters}
        showHeatmap={showHeatmap}
      />
    </MapContainer>
  );
};

export default MapComponent;
