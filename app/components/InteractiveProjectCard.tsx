'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProjectOverlay from './ProjectOverlay';

interface InteractiveProjectCardProps {
  image: string;
  name: string;
}

const InteractiveProjectCard = ({
  image,
  name,
}: InteractiveProjectCardProps) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOverlayVisible(true);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOverlayVisible(true)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="cursor-pointer"
        aria-label={`Open overlay for ${name}`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>
      {isOverlayVisible && <ProjectOverlay name={name} />}
    </div>
  );
};

export default InteractiveProjectCard;
