'use client';

import type { StaticImageData } from 'next/dist/shared/lib/image-external';
import Image from 'next/image';
import { useMemo } from 'react';
import illustrationAnimals from '../images/all-work/Inked-Animals.jpg';
import illustrationAnthropology from '../images/all-work/anthropology-letters.jpg';
import illustrationStratigraphy from '../images/all-work/archaeological-stratigraphy.png';
import illustrationArtefact from '../images/archive/illustration-artefact-female-sign.jpg';
import illustrationAugnetizier from '../images/all-work/augnetizier-cluster.jpg';
import illustrationBabylon from '../images/all-work/Babylon-map.jpg';
import illustrationBellBeaker from '../images/all-work/bell-beaker.jpg';
import illustrationBenin from '../images/archive/illustration-benin-mask.jpg';
import illustrationCherryPicking from '../images/all-work/bias-cherry-picking.jpg';
import illustrationEurocentrism from '../images/all-work/bias-eurocentism.jpg';
import illustrationBronzeAge from '../images/all-work/bronze-age-cluster.jpg';
import illustrationBronzeHoard from '../images/all-work/nebra-bronze-hoard.jpg';
import illustrationBrush from '../images/all-work/brush-stratigraphy.jpg';
import illustrationBurial from '../images/all-work/burial-dog-human.jpg';
import illustrationCalcyladen from '../images/all-work/calcyladen.jpg';
import illustrationPosthole from '../images/all-work/Circle-Of-A-Posthole.jpg';
import illustrationFeeding from '../images/all-work/female-baby-feeding-reconstruction.jpg';
import illustrationFemalBurial from '../images/all-work/female-burial-reconstructon.jpg';
import illustrationCoffee from '../images/all-work/fueled-by-coffee.jpg';
import illustrationFunnelBeaker from '../images/all-work/Funnel-beaker-cluster.jpg';
import illustrationGenderBias from '../images/all-work/gender-bias.jpg';
import illustrationGoatVessel from '../images/all-work/goat-vessel.jpg';
import illustrationGreenland from '../images/archive/illustration-greenland-map.jpg';
import illustrationKnife from '../images/all-work/knife.jpg';
import illustrationKore from '../images/all-work/kore-reconstruction-coloured.jpg';
import illustrationLinearPottery from '../images/all-work/linear-pottery-cluster.jpg';
import illustrationGraffiti from '../images/all-work/neolithic-graffiti-reconstruction.jpg';
import illustrationNewYear from '../images/archive/illustration-new-years-wishes.jpg';
import illustrationOchre from '../images/all-work/ochre-painting.jpg';
import illustrationPots from '../images/all-work/pots-with-cati.jpg';
import illustrationStillLife from '../images/all-work/still-life.jpg';
import illustrationTerracotta from '../images/archive/illustration-terracotta-mug-classification.jpg';
import illustrationTorso from '../images/all-work/hatching-torso-statue.jpg';
import illustrationTypes from '../images/archive/illustration-types-of-archaeological-illustration.jpg';
import illustrationVenusNeon from '../images/all-work/venus-of-willendorf-neon.jpg';
import illustrationVenus from '../images/all-work/venus-of-willendorf-inked.jpg';
import illustrationWall from '../images/all-work/wall-graphic-interpretation.jpg';

const allIllustrations: { src: StaticImageData; alt: string }[] = [
  { src: illustrationAnimals, alt: 'Inked animal illustrations' },
  { src: illustrationAnthropology, alt: 'Anthropology letters illustration' },
  { src: illustrationStratigraphy, alt: 'Archaeological stratigraphy drawing' },
  { src: illustrationArtefact, alt: 'Artefact with female sign illustration' },
  { src: illustrationAugnetizier, alt: 'Augnetizier cluster illustration' },
  { src: illustrationBabylon, alt: 'Babylon map illustration' },
  { src: illustrationBellBeaker, alt: 'Bell Beaker illustration' },
  { src: illustrationBenin, alt: 'Benin mask illustration' },
  { src: illustrationCherryPicking, alt: 'Cherry picking bias illustration' },
  { src: illustrationEurocentrism, alt: 'Eurocentrism bias illustration' },
  { src: illustrationBronzeAge, alt: 'Bronze Age cluster illustration' },
  { src: illustrationBronzeHoard, alt: 'Bronze hoard illustration' },
  { src: illustrationBrush, alt: 'Brush stratigraphy illustration' },
  { src: illustrationBurial, alt: 'Dog and human burial illustration' },
  { src: illustrationCalcyladen, alt: 'Calcyladen illustration' },
  { src: illustrationPosthole, alt: 'Circle posthole illustration' },
  { src: illustrationFeeding, alt: 'Feeding reconstruction illustration' },
  {
    src: illustrationFemalBurial,
    alt: 'Female burial with necklace illustration',
  },
  { src: illustrationCoffee, alt: 'Fueled by coffee illustration' },
  { src: illustrationFunnelBeaker, alt: 'Funnel Beaker cluster illustration' },
  { src: illustrationGenderBias, alt: 'Gender bias illustration' },
  { src: illustrationGoatVessel, alt: 'Goat vessel illustration' },
  { src: illustrationGreenland, alt: 'Greenland map illustration' },
  { src: illustrationKnife, alt: 'Knife illustration' },
  { src: illustrationKore, alt: 'Kore reconstruction illustration' },
  {
    src: illustrationLinearPottery,
    alt: 'Linear pottery cluster illustration',
  },
  { src: illustrationGraffiti, alt: 'Neolithic graffiti reconstruction' },
  { src: illustrationNewYear, alt: 'New year wishes illustration' },
  { src: illustrationOchre, alt: 'Ochre illustration' },
  { src: illustrationPots, alt: 'Pots with Cati illustration' },
  { src: illustrationStillLife, alt: 'Still life illustration' },
  {
    src: illustrationTerracotta,
    alt: 'Terracotta mug classification illustration',
  },
  { src: illustrationTorso, alt: 'Torso statue illustration' },
  { src: illustrationTypes, alt: 'Types of archaeological illustration' },
  { src: illustrationVenusNeon, alt: 'Venus of Willendorf neon illustration' },
  { src: illustrationVenus, alt: 'Venus of Willendorf illustration' },
  { src: illustrationWall, alt: 'Wall interpretation illustration' },
];

/** Deterministic shuffle using a numeric seed. */
function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    const temp = shuffled[i] as T;
    shuffled[i] = shuffled[j] as T;
    shuffled[j] = temp;
  }
  return shuffled;
}

const BAND_HEIGHT = 180;
const IMAGE_COUNT = 8;

interface IllustrationBandProps {
  /** Numeric seed so each page gets a different but stable selection. */
  seed?: number;
}

/** A full-width decorative band of archaeological illustrations that scrolls horizontally. */
export default function IllustrationBand({ seed = 1 }: IllustrationBandProps) {
  const images = useMemo(() => {
    const shuffled = seededShuffle(allIllustrations, seed);
    return shuffled.slice(0, IMAGE_COUNT);
  }, [seed]);

  // Duplicate the set for seamless looping
  const doubled = [...images, ...images];

  return (
    <div
      className="illustration-band isolate w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="illustration-band__track flex w-max">
        {doubled.map((img, i) => {
          const imageWidth = Math.round(
            BAND_HEIGHT * (img.src.width / img.src.height),
          );

          return (
            <div
              key={`illust-${img.alt}-${i < images.length ? 'a' : 'b'}`}
              className="relative shrink-0"
              style={{ height: BAND_HEIGHT, width: imageWidth }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                height={BAND_HEIGHT}
                width={imageWidth}
                className="block"
                sizes={`${imageWidth}px`}
                quality={75}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
