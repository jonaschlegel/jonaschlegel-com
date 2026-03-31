'use client';

import Image, { type StaticImageData } from 'next/image';
import { useMemo } from 'react';
import illustrationAnimals from '../images/other-illustration/illustration-animals-inked.png';
import illustrationAnthropology from '../images/other-illustration/illustration-anthropology-letters.png';
import illustrationStratigraphy from '../images/other-illustration/illustration-archaeological-stratigraphy.png';
import illustrationArtefact from '../images/other-illustration/illustration-artefact-female-sign.jpg';
import illustrationAugnetizier from '../images/other-illustration/illustration-augnetizier-cluster.jpg';
import illustrationBabylon from '../images/other-illustration/illustration-babylon-map.jpg';
import illustrationBellBeaker from '../images/other-illustration/illustration-bell-beaker.jpg';
import illustrationBenin from '../images/other-illustration/illustration-benin-mask.jpg';
import illustrationCherryPicking from '../images/other-illustration/illustration-bias-cherry-picking.jpg';
import illustrationEurocentrism from '../images/other-illustration/illustration-bias-eurocentism.jpg';
import illustrationBronzeAge from '../images/other-illustration/illustration-bronze-age-cluster.jpg';
import illustrationBronzeHoard from '../images/other-illustration/illustration-bronze-hoard.jpg';
import illustrationBrush from '../images/other-illustration/illustration-brush-stratigraphy.jpg';
import illustrationBurial from '../images/other-illustration/illustration-burial-dog-human.png';
import illustrationCalcyladen from '../images/other-illustration/illustration-calcyladen.png';
import illustrationPosthole from '../images/other-illustration/illustration-circle-posthole.png';
import illustrationFeeding from '../images/other-illustration/illustration-feeding-reconstruction.jpg';
import illustrationFemalBurial from '../images/other-illustration/illustration-femal-burial-necklace.jpg';
import illustrationCoffee from '../images/other-illustration/illustration-fueled-by-coffee.png';
import illustrationFunnelBeaker from '../images/other-illustration/illustration-funnel-beaker-cluster.jpg';
import illustrationGenderBias from '../images/other-illustration/illustration-gender-bias.jpg';
import illustrationGoatVessel from '../images/other-illustration/illustration-goat-vessel.jpg';
import illustrationGreenland from '../images/other-illustration/illustration-greenland-map.jpg';
import illustrationKnife from '../images/other-illustration/illustration-knife.jpg';
import illustrationKore from '../images/other-illustration/illustration-kore-reconstruction.jpg';
import illustrationLinearPottery from '../images/other-illustration/illustration-linear-pottery-cluster.jpg';
import illustrationGraffiti from '../images/other-illustration/illustration-neolithic-graffiti-reconstruction.jpg';
import illustrationNewYear from '../images/other-illustration/illustration-new-years-wishes.jpg';
import illustrationOchre from '../images/other-illustration/illustration-ochre.jpg';
import illustrationPots from '../images/other-illustration/illustration-pots-with-cati.jpg';
import illustrationStillLife from '../images/other-illustration/illustration-still-life.jpeg';
import illustrationTerracotta from '../images/other-illustration/illustration-terracotta-mug-classification.jpg';
import illustrationTorso from '../images/other-illustration/illustration-torso-statue.jpg';
import illustrationTypes from '../images/other-illustration/illustration-types-of-archaeological-illustration.jpg';
import illustrationVenusNeon from '../images/other-illustration/illustration-venus-of-willendorf-neon.jpg';
import illustrationVenus from '../images/other-illustration/illustration-venus-willendorf.jpg';
import illustrationWall from '../images/other-illustration/illustration-wall-interpretation.jpg';

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
        {doubled.map((img, i) => (
          <div
            key={`illust-${img.alt}-${i < images.length ? 'a' : 'b'}`}
            className="relative shrink-0"
            style={{ height: BAND_HEIGHT }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              height={BAND_HEIGHT}
              width={Math.round(BAND_HEIGHT * (img.src.width / img.src.height))}
              className="block h-full w-auto object-cover"
              sizes={`${Math.round(BAND_HEIGHT * (img.src.width / img.src.height))}px`}
              quality={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
