'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

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

const MapComponent = dynamic(
  () =>
    import('./MapComponent') as Promise<{
      default: ComponentType<MapComponentProps>;
    }>,
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-80 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    ),
  },
);

export default MapComponent;
