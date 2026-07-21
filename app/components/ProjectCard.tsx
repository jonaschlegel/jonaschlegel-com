import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import type { ProjectType } from '../../types/global';

/** Concise case-study card showing the project, role, and outcome. */
const ProjectCard: FC<ProjectType> = ({
  slug,
  image,
  name,
  description,
  role,
  year,
}) => {
  return (
    <Link
      href={`/projects/${slug}` as Route}
      className="group col-span-12 block border-t border-primary-dark/20 pt-4 md:col-span-6"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-white">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="py-5">
        <p className="my-0 text-xs font-semibold uppercase tracking-wider text-primary-green">
          {role} · {year}
        </p>
        <h3 className="mt-2 font-merriweather text-2xl font-semibold text-primary-dark transition-colors group-hover:text-primary-green">
          {name}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-dark">
          Read case study{' '}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
