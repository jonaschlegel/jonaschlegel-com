import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import type { ProjectType, ServiceType } from '../../types/global';
import ButtonSecondary from './ButtonSecondary';

interface ServiceCardProps extends ServiceType {
  projects: ProjectType[];
}

const ServiceCard: FC<ServiceCardProps> = ({
  image,
  alt,
  name,
  price,
  description,
  options,
  pdfUrl,
  projects,
}) => {
  const limitedProjects = projects.slice(0, 2);

  return (
    <div>
      <h2 className="mt-8 font-merriweather text-base font-semibold tracking-tight md:text-3xl">
        {name}
      </h2>
      <div className="group relative flex flex-col justify-between py-8 md:flex-row">
        <div className="basis-1/2">
          <p className="mt-2 text-sm text-neutral-400 md:text-base">
            {description}
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400">
            {options.map((option) => (
              <li key={`option-${option}`}>{option}</li>
            ))}
          </ul>
          {limitedProjects.length > 0 && (
            <div className="mt-6 flex items-center">
              <h3 className="font-semibold mr-4">Related Projects:</h3>
              <div className="flex space-x-4">
                {limitedProjects.map((project) => (
                  <Link
                    key={`project-${project.id}`}
                    href={`/projects/${project.slug}`}
                  >
                    <p className="text-white hover:underline">{project.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="my-10 ml-2 mt-2 w-full md:my-0 md:max-w-xs md:flex-1 lg:max-w-sm">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src={image}
              alt={alt}
              fill
              className="relative left-0 top-5 mt-2 size-full rounded-lg object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="mt-4 flex justify-center">
            <ButtonSecondary pdfUrl={pdfUrl}>
              {price ? (
                <p className="text-sm text-neutral-300 md:text-base">
                  Starting at ${price}/Hour
                </p>
              ) : (
                <p className="my-0 text-sm text-neutral-300 md:text-base">
                  Download Project Examples
                </p>
              )}
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
