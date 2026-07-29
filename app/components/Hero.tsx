import Image from 'next/image';
import Link from 'next/link';
import { heroSectionData } from '../data/content';

/** Outcome-led landing hero introducing Jona and the two studio practices. */
const Hero = () => {
  return (
    <section className="container mx-auto pb-14 pt-10 md:pb-24 md:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <div className="relative size-10 shrink-0 overflow-hidden rounded-full md:size-12">
              <Image
                src={heroSectionData.jonaPhoto}
                alt=""
                fill
                className="object-cover object-top"
                sizes="48px"
              />
            </div>
            <p className="eyebrow my-0">{heroSectionData.eyebrow}</p>
          </div>

          <h1 className="mt-7 max-w-3xl text-balance leading-[1.04] tracking-tight">
            {heroSectionData.heading}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-700">
            {heroSectionData.subheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center rounded-full bg-primary-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Explore case studies
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
            <Link
              href="/services#contact"
              className="inline-flex min-h-12 items-center rounded-full border border-primary-dark px-6 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-primary-dark hover:text-primary-cream"
            >
              Discuss a project
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-primary-dark/10 bg-white p-3 shadow-[12px_12px_0_0_#E6D67C] md:p-5">
            <Image
              src={heroSectionData.showcaseImage.src}
              alt={heroSectionData.showcaseImage.alt}
              fill
              className="object-contain p-2 md:p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
