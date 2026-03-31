import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { heroSectionData } from '../data/content';
import ButtonPrimary from './ButtonPrimary';

/** Landing hero section with heading, description, and showcase images. */
const Hero = () => {
  return (
    <section className="container mx-auto px-4 pb-12 pt-8 md:pb-20 md:pt-12">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Text column */}
        <div className="space-y-6 lg:basis-5/12 lg:py-8">
          <div className="flex items-center gap-3">
            <div className="relative size-10 shrink-0 overflow-hidden rounded-full md:size-12">
              <Image
                src={heroSectionData.jonaPhoto}
                alt="Jona Schlegel"
                fill
                className="object-cover object-top"
                sizes="48px"
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-green">
              {heroSectionData.eyebrow}
            </p>
          </div>
          <h1 className="leading-snug tracking-tight xl:text-[4.5rem]">
            {heroSectionData.heading}
          </h1>
          <p className="max-w-lg tracking-tight text-gray-600">
            {heroSectionData.subheading}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonPrimary
              calendlyEventSlug="jonaschlegel"
              sizeClass="py-3 px-6"
            >
              Let&apos;s Talk
            </ButtonPrimary>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary-dark px-6 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-primary-dark hover:text-primary-cream"
            >
              View Projects
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Showcase illustration */}
        <div className="lg:basis-7/12">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={heroSectionData.showcaseImage.src}
              alt={heroSectionData.showcaseImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
