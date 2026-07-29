import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { bannerData, jonaBannerImage } from '../data/content';

/** Short personal bridge between the portfolio and Jona's background. */
const Banner: FC = () => {
  return (
    <section
      className="bg-primary-yellow/35 py-16 md:py-24"
      aria-labelledby="about-jona-heading"
    >
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Why the work connects</p>
            <h2 id="about-jona-heading" className="mt-3 text-3xl md:text-5xl">
              Archaeological context is part of the process.
            </h2>
            {bannerData.map((bannerText) => (
              <p
                key={`banner-${bannerText}`}
                className="mt-6 text-lg leading-relaxed text-gray-800"
              >
                {bannerText}
              </p>
            ))}
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center border-b border-primary-dark font-semibold text-primary-dark hover:border-primary-green hover:text-primary-green"
            >
              More about Jona and archaeoINK
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
          <div className="shrink-0">
            <div className="relative aspect-square size-44 overflow-hidden rounded-full border-4 border-primary-cream md:size-60">
              <Image
                src={jonaBannerImage}
                alt="Jona Schlegel during archaeological fieldwork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 176px, 240px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
