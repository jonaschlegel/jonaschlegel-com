import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import type { ProjectType } from '../../types/global';

const ProjectCard: FC<ProjectType> = ({ slug, image, name }) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative col-span-12 aspect-[4/3] cursor-pointer overflow-hidden rounded-lg md:col-span-6"
    >
      <Image
        src={image}
        alt={`${name} - Archaeological illustration and scientific communication project by Jona Schlegel`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute bottom-0 w-full bg-black/50 p-4 text-center text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
