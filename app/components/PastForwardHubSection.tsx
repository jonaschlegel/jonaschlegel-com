import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

const hubLinks = [
  {
    label: 'Website',
    url: 'https://pastforwardhub.com',
    icon: HiOutlineGlobeAlt,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/pastforwardhub/',
    icon: FaLinkedin,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/pastforwardhub',
    icon: FaInstagram,
  },
] as const;

/** Promotional section for the Past Forward Hub newsletter and community. */
const PastForwardHubSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl border border-gray-200 bg-white p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          {/* Icon */}
          <div className="flex size-20 shrink-0 items-center justify-center bg-primary-green/10 md:size-24">
            <HiOutlineGlobeAlt className="size-8 text-primary-green md:size-10" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
              Co-founded platform
            </p>
            <h2 className="mb-3 font-merriweather text-xl font-semibold md:text-3xl">
              PastForwardHub
            </h2>
            <p className="mb-6 text-gray-700">
              A global career platform connecting archaeologists with jobs,
              colleagues, and resources across academic, commercial, and public
              sectors. Co-founded with Alexandra Dolea and Laura Coltofean to
              address job insecurity, missing networks, and unclear career paths
              in archaeology.
            </p>

            {/* Platform links */}
            <div className="flex flex-wrap gap-3">
              {hubLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={`hub-${link.label}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-primary-green hover:text-primary-green"
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastForwardHubSection;
