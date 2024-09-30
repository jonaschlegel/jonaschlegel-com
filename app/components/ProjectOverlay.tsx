'use client';

import { useState } from 'react';

interface ProjectOverlayProps {
  name: string;
}

export default function ProjectOverlay({ name }: ProjectOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="rounded bg-blue-500 p-2 text-white"
        type="button"
      >
        Show Details
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/75 p-4 text-white">
      <div className="rounded-lg bg-white p-4 text-black">
        <p>More details about {name}...</p>
        <button
          onClick={() => {
            toggleVisibility();
          }}
          className="mt-4 rounded bg-red-500 p-2 text-white"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
}
