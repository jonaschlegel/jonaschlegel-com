import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import type { ProjectType } from '../../types/global';

/** Card linking to an individual project with a cover image. */
const ProjectCard: FC<ProjectType> = ({ slug, image, name, description }) => {
  return (
    <Link
      href={`/projects/${slug}` as any}
      className="group relative col-span-12 aspect-[4/3] cursor-pointer overflow-hidden md:col-span-6"
    >
      <Image
        src={image}
        alt={`${name} \u2013 ${description}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute bottom-0 w-full bg-black/50 p-4 text-center text-white transition duration-300 ease-in-out opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
