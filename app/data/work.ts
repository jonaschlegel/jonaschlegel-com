import type { StaticImageData } from 'next/image';
import pigment from '../images/archInk2025/archInk-2025-1.jpg';
import shell from '../images/archInk2025/archInk-2025-2.jpg';
import residue from '../images/archInk2025/archInk-2025-3.jpg';
import bronze from '../images/archInk2025/archInk-2025-4.jpg';
import babylonMap from '../images/other-illustration/illustration-babylon-map.jpg';
import bellBeaker from '../images/other-illustration/illustration-bell-beaker.jpg';
import burial from '../images/other-illustration/illustration-burial-dog-human.jpg';
import genderBias from '../images/other-illustration/illustration-gender-bias.jpg';
import kore from '../images/other-illustration/illustration-kore-reconstruction.jpg';
import ochre from '../images/other-illustration/illustration-ochre.jpg';
import illustrationTypes from '../images/other-illustration/illustration-types-of-archaeological-illustration.jpg';
import venus from '../images/other-illustration/illustration-torso-statue.jpg';
import adventuress from '../images/projects/adventuress-cover.jpg';
import romanBurial from '../images/projects/roman-burial.jpg';
import suriname from '../images/projects/suriname-tijdmachine-1.webp';

export type WorkShape = 'feature' | 'wide' | 'square' | 'tall';

export interface VisualWork {
  slug: string;
  title: string;
  image: StaticImageData;
  alt: string;
  practice: string;
  form: string;
  summary: string;
  featured: boolean;
  shape: WorkShape;
  year?: string;
  tools?: string[];
  subject?: string;
  approach?: string;
  role?: string;
  context?: string;
  externalUrl?: string;
  externalLabel?: string;
}

export const visualWorks = [
  {
    slug: 'adventuress',
    title: 'Adventuress',
    image: adventuress,
    alt: 'Cover illustration and preparatory drawings for Adventuress Archaeology',
    practice: 'Illustration',
    form: 'Commissioned cover illustration',
    summary:
      'A cover about women in archaeology, moving between field notes, excavation and public storytelling.',
    featured: true,
    shape: 'feature',
    year: '2024',
    tools: ['Procreate'],
    subject: 'Women in archaeology',
    approach:
      'Sketch studies developed into a layered editorial composition.',
    role: 'Concept and illustration',
    context: 'Adventuress Archaeology',
    externalUrl: '/projects/adventuress-cover',
    externalLabel: 'Read the existing case study',
  },
  {
    slug: 'ochre',
    title: 'Ochre',
    image: ochre,
    alt: 'Illustrated study of ochre pigments, hand stencils and painting tools',
    practice: 'Visual archaeology',
    form: 'Standalone visual study',
    summary: 'Pigment, hands and painting tools gathered into one visual note.',
    featured: true,
    shape: 'square',
    tools: ['Digital illustration'],
    subject: 'Ochre pigments and hand stencils',
    approach: 'Object studies combined with a reconstructed scene.',
    role: 'Research and illustration',
    context: 'Independent work',
  },
  {
    slug: 'kore-in-colour',
    title: 'Kore in colour',
    image: kore,
    alt: 'Three-stage reconstruction of a Kore sculpture with colour',
    practice: 'Reconstruction',
    form: 'Comparative illustration',
    summary:
      'A surviving sculpture is placed beside a possible reconstruction in colour.',
    featured: true,
    shape: 'square',
    tools: ['Digital illustration'],
    subject: 'Archaic Greek sculpture and polychromy',
    approach:
      'Three states make the interpretive step visible rather than hiding it.',
    role: 'Research and reconstruction',
    context: 'Independent work',
  },
  {
    slug: 'world-from-babylon',
    title: 'The world from Babylon',
    image: babylonMap,
    alt: 'Illustrated explanation of the Babylonian Map of the World',
    practice: 'Visual explanation',
    form: 'Annotated object study',
    summary:
      'A visual reading of the Babylonian Map of the World and the ideas held inside it.',
    featured: true,
    shape: 'square',
    tools: ['Illustration', 'Information design'],
    subject: 'The Babylonian Map of the World',
    approach:
      'The source object stays central while lines, labels and colour guide the reading.',
    role: 'Research, illustration and design',
    context: 'Independent work',
  },
  {
    slug: 'suriname-time-machine',
    title: 'Suriname Time Machine',
    image: suriname,
    alt: 'Suriname Time Machine website shown across several screens',
    practice: 'Web design & development',
    form: 'Research interface',
    summary:
      'A website for exploring connected historical maps, images and records.',
    featured: true,
    shape: 'wide',
    year: '2025–2026',
    tools: ['Figma', 'TypeScript', 'React', 'Linked data'],
    subject: 'Connected cultural heritage collections',
    approach:
      'The interface turns relationships between records into paths a visitor can follow.',
    role: 'Interface design and front-end development',
    context: 'Huygens Institute and project partners',
    externalUrl: '/projects/suriname-tijdmachine',
    externalLabel: 'Read the existing case study',
  },
  {
    slug: 'gender-bias',
    title: 'Gender bias',
    image: genderBias,
    alt: 'Illustration about gender bias in archaeological interpretation',
    practice: 'Visual explanation',
    form: 'Editorial illustration',
    summary:
      'A visual argument about how categories and assumptions can shape archaeological interpretation.',
    featured: true,
    shape: 'square',
    tools: ['Illustration', 'Information design'],
    subject: 'Gender and archaeological interpretation',
    approach:
      'Symbols and artefacts are arranged as an argument rather than a decorative scene.',
    role: 'Research and illustration',
    context: 'Independent work',
  },
  {
    slug: 'venus',
    title: 'Venus',
    image: venus,
    alt: 'Tonal illustration of a sculpted torso',
    practice: 'Illustration',
    form: 'Figure study',
    summary:
      'A restrained study of a classical figure, treated more as material presence than icon.',
    featured: true,
    shape: 'tall',
    year: '2023',
    tools: ['Digital watercolour'],
    subject: 'Classical sculpture',
    approach: 'Soft tonal drawing with an intentionally unfinished edge.',
    role: 'Illustration',
    context: 'Independent work',
  },
  {
    slug: 'roman-burial',
    title: 'Roman burial',
    image: romanBurial,
    alt: 'Excavation photograph and drawn reconstruction of a Roman burial',
    practice: 'Reconstruction',
    form: 'Excavation-to-image study',
    summary:
      'An excavated burial and its drawn reconstruction shown as parts of the same research process.',
    featured: true,
    shape: 'wide',
    tools: ['Digital drawing'],
    subject: 'Roman-period burial context',
    approach:
      'Documentation and reconstruction remain visible beside one another.',
    role: 'Research and illustration',
    context: 'Scientific publication',
    externalUrl: '/projects/roman-burial',
    externalLabel: 'Read the existing case study',
  },
  {
    slug: 'friends',
    title: 'Friends',
    image: burial,
    alt: 'Ink drawing of a human and dog burial',
    practice: 'archInk',
    form: 'Prompt drawing',
    summary: 'A small drawing about care, companionship and burial.',
    featured: true,
    shape: 'square',
    year: '2023',
    tools: ['Ink', 'Digital drawing'],
    subject: 'Human-animal burial',
    approach: 'A quick visual response to the archInk prompt “Friends”.',
    role: 'Concept and illustration',
    context: 'Self-initiated',
  },
  {
    slug: 'what-illustration-can-do',
    title: 'What illustration can do',
    image: illustrationTypes,
    alt: 'Mind map of different forms of archaeological illustration',
    practice: 'Visual science communication',
    form: 'Explanatory map',
    summary:
      'A map of how archaeological illustration can explain objects, bodies, buildings and landscapes.',
    featured: true,
    shape: 'wide',
    tools: ['Drawing', 'Information design'],
    subject: 'Archaeological illustration methods',
    approach:
      'Examples are organised spatially so the field can be understood at a glance.',
    role: 'Research, illustration and information design',
    context: 'Independent work',
  },
  {
    slug: 'bell-beaker',
    title: 'Bell Beaker',
    image: bellBeaker,
    alt: 'Black-and-white archaeological drawing of a Bell Beaker vessel',
    practice: 'Archaeological drawing',
    form: 'Object study',
    summary:
      'A quiet object drawing where profile, decoration and material traces carry the information.',
    featured: true,
    shape: 'square',
    tools: ['Black-and-white line drawing'],
    subject: 'Bell Beaker ceramic vessel',
    approach: 'The vessel is isolated so form and surface can be read clearly.',
    role: 'Illustration',
    context: 'Independent work',
  },
  {
    slug: 'pigment',
    title: 'Pigment',
    image: pigment,
    alt: 'archInk page about prehistoric pigments and grinding stones',
    practice: 'archInk',
    form: 'Research sketch',
    summary: 'A one-page note on mineral colour, grinding and marks on stone.',
    featured: true,
    shape: 'tall',
    year: '2025',
    tools: ['Ink', 'Digital colour'],
    subject: 'Prehistoric pigments',
    approach: 'A daily prompt became a compact visual explanation.',
    role: 'Research and illustration',
    context: 'Self-initiated',
  },
  {
    slug: 'shell',
    title: 'Shell',
    image: shell,
    alt: 'archInk object study with a coloured shell at its centre',
    practice: 'archInk',
    form: 'Object constellation',
    summary:
      'One shell at the centre of several ways archaeologists encounter and interpret it.',
    featured: false,
    shape: 'square',
    year: '2025',
    tools: ['Ink', 'Digital colour'],
    subject: 'Shell artefacts and remains',
    approach:
      'A daily prompt explored variation through a loose radial composition.',
    role: 'Research and illustration',
    context: 'Self-initiated',
  },
  {
    slug: 'residue',
    title: 'Residue',
    image: residue,
    alt: 'Four-panel archInk drawing about archaeological residue analysis',
    practice: 'archInk',
    form: 'Four-panel sketch',
    summary: 'A short visual sequence about what remains on and inside an object.',
    featured: false,
    shape: 'square',
    year: '2025',
    tools: ['Ink', 'Digital colour'],
    subject: 'Archaeological residue analysis',
    approach:
      'A method is compressed into four scenes without becoming an infographic.',
    role: 'Research and illustration',
    context: 'Self-initiated',
  },
  {
    slug: 'bronze',
    title: 'Bronze',
    image: bronze,
    alt: 'archInk illustration of bronze artefacts and hands',
    practice: 'archInk',
    form: 'Material study',
    summary:
      'Bronze forms, fragments and hands arranged as an archaeological encounter.',
    featured: false,
    shape: 'square',
    year: '2025',
    tools: ['Ink', 'Digital colour'],
    subject: 'Bronze artefacts',
    approach: 'A warm, limited palette connects objects from different contexts.',
    role: 'Research and illustration',
    context: 'Self-initiated',
  },
] satisfies VisualWork[];

export const featuredWorks = visualWorks.filter((work) => work.featured);

export function getVisualWork(slug: string) {
  return visualWorks.find((work) => work.slug === slug);
}
