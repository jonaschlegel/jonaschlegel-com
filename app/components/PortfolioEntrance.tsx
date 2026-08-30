import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { archink2021Gallery } from '../data/galleries/archink-2021';
import { archink2022Gallery } from '../data/galleries/archink-2022';
import { archink2023Gallery } from '../data/galleries/archink-2023';
import { archink2024Gallery } from '../data/galleries/archink-2024';
import { archink2025Gallery } from '../data/galleries/archink-2025';
import adventuressCover from '../images/projects/adventuress-cover.jpg';
import exploringDisciplines from '../images/projects/exploring-archaeological-disciplines.jpg';
import geophysicalHero from '../images/projects/muestair-hero.png';
import romanBurial from '../images/projects/roman-burial.jpg';

const selectedWorks = [
  {
    title: 'Acoustics',
    meta: 'Ink drawing · archInk 2023',
    image: archink2023Gallery[0]!.src,
    href: '/projects/archink-2023#gallery',
    span: 'md:col-span-4 md:row-span-2',
    fit: 'object-contain',
  },
  {
    title: 'Posthole',
    meta: 'Ink drawing · archInk 2022',
    image: archink2022Gallery[13]!.src,
    href: '/projects/archink-2022#gallery',
    span: 'md:col-span-3',
    fit: 'object-contain',
  },
  {
    title: 'Research Design',
    meta: 'Digital illustration · archInk 2021',
    image: archink2021Gallery[10]!.src,
    href: '/projects/archink-2021#gallery',
    span: 'md:col-span-5',
    fit: 'object-contain',
  },
  {
    title: 'Day 11',
    meta: 'Ink drawing · archInk 2024',
    image: archink2024Gallery[10]!.src,
    href: '/projects/archink-2024#gallery',
    span: 'md:col-span-3',
    fit: 'object-contain',
  },
  {
    title: 'Day 5',
    meta: 'Ink drawing · archInk 2025',
    image: archink2025Gallery[4]!.src,
    href: '/projects/archink-2025#gallery',
    span: 'md:col-span-4',
    fit: 'object-contain',
  },
  {
    title: 'Roman mother–daughter burial',
    meta: 'Scientific reconstruction · 2024',
    image: romanBurial,
    href: '/projects/roman-burial',
    span: 'md:col-span-5 md:row-span-2',
    fit: 'object-cover',
  },
  {
    title: 'Adventuress Journal cover',
    meta: 'Editorial illustration · 2024',
    image: adventuressCover,
    href: '/projects/adventuress-cover',
    span: 'md:col-span-3',
    fit: 'object-cover',
  },
  {
    title: 'Exploring archaeological disciplines',
    meta: 'Educational illustration series · 2023',
    image: exploringDisciplines,
    href: '/projects/exploring-archaeological-disciplines',
    span: 'md:col-span-4',
    fit: 'object-cover',
  },
  {
    title: 'Prospecting Müstair',
    meta: 'Geophysics & mapping · 2021',
    image: geophysicalHero,
    href: '/projects/geophysical-prospection-study',
    span: 'md:col-span-5',
    fit: 'object-cover',
  },
] as const;

/** An image-first selection of work for the landing page. */
export default function PortfolioEntrance() {
  return (
    <section className="portfolio-landing container mx-auto pb-20 pt-10 md:pb-32 md:pt-16">
      <header className="mb-14 max-w-4xl md:mb-20">
        <p className="eyebrow">Jona Schlegel · archaeoINK</p>
        <h1 className="mt-5 text-balance text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
          Archaeology,
          <br />
          <span className="text-primary-green">drawn into view.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
          Illustration, visual research, maps, publications, and digital
          heritage — made to help people look closer.
        </p>
      </header>

      <section aria-labelledby="selected-work-heading">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2
            id="selected-work-heading"
            className="font-merriweather text-xl font-semibold md:text-2xl"
          >
            Selected work
          </h2>
          <p className="my-0 text-sm italic text-primary-brown">2021–present</p>
        </div>

        <div className="portfolio-wall grid gap-5 md:grid-cols-12 md:grid-flow-dense md:gap-7">
          {selectedWorks.map((work, index) => (
            <Link
              key={`landing-work-${work.title}`}
              href={work.href as Route}
              className={`work-tile group relative block min-h-72 overflow-hidden bg-[#ece5d7] ${work.span}`}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                priority={index < 2}
                className={`${work.fit} p-3 transition duration-500 group-hover:scale-[1.025] md:p-5`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="work-tile__caption absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="font-merriweather text-lg font-semibold text-primary-dark md:text-xl">
                  {work.title}
                </h3>
                <p className="mb-0 mt-1 text-sm text-primary-dark/80">
                  {work.meta}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-primary-brown/30 pt-5 md:mt-14">
        <p className="my-0 font-merriweather text-lg text-primary-dark">
          More drawings, projects, and experiments in the full portfolio.
        </p>
        <Link
          href="/projects"
          className="font-semibold text-primary-green hover:text-primary-dark"
        >
          View all work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
