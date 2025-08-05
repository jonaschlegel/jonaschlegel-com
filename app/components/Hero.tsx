import Image from 'next/image';
import React from 'react';
import { heroSectionData } from '../data/content';
import ButtonPrimary from './ButtonPrimary';
import Stats from './Stats';

const Hero = () => {
  return (
    <div className="container relative mx-auto mb-0 pb-0 pt-4 lg:pb-36">
      <div className="relative mb-4 aspect-[4/1] w-full overflow-hidden rounded-[2.5rem]">
        <Image
          src={heroSectionData.bgImage}
          alt="Archaeological illustration and scientific communication background showcasing Jona Schlegel's work"
          fill
          className="object-cover"
          sizes="100%"
          priority
        />
      </div>
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="space-y-6 md:basis-2/5 2xl:basis-[35%]">
          <h1 className="leading-snug tracking-tight xl:text-[4.5rem]">
            {heroSectionData.heading}
          </h1>
          <p className="tracking-tight text-neutral-300">
            {heroSectionData.text}
          </p>
          <div>
            <ButtonPrimary calendlyEventSlug="jonaschlegel" className="mb-5">
              Let&apos;s Talk
            </ButtonPrimary>
          </div>
        </div>
        <div>
          <Stats stats={heroSectionData.statsData} />
        </div>
      </div>
      <div className="relative bottom-0 mb-0 aspect-square w-full overflow-hidden pt-8 md:absolute md:left-[40%] md:aspect-[4/6] md:h-3/4 md:w-auto md:pt-0 xl:h-full">
        <Image
          src={heroSectionData.heroImage}
          alt="Jona Schlegel - Scientific Illustrator, Web Developer, and Archaeological Communicator"
          fill
          className="object-contain hover:opacity-60"
          sizes="(max-width: 768px) 100vw, 60vw"
        />{' '}
      </div>
    </div>
  );
};

export default Hero;
