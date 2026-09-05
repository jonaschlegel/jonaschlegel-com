import type { StaticImageData } from 'next/image';
import adventuress from '../images/all-work/adventuress-cover.jpg';
import pigment from '../images/all-work/archInk-2025-1.jpg';
import shell from '../images/all-work/archInk-2025-2.jpg';
import residue from '../images/all-work/archInk-2025-3.jpg';
import bronze from '../images/all-work/archInk-2025-4.jpg';
import babylonMap from '../images/all-work/illustration-babylon-map.jpg';
import bellBeaker from '../images/all-work/illustration-bell-beaker.jpg';
import burial from '../images/all-work/illustration-burial-dog-human.jpg';
import genderBias from '../images/all-work/illustration-gender-bias.jpg';
import kore from '../images/all-work/illustration-kore-reconstruction.jpg';
import ochre from '../images/all-work/illustration-ochre.jpg';
import venus from '../images/all-work/illustration-torso-statue.jpg';
import illustrationTypes from '../images/all-work/illustration-types-of-archaeological-illustration.jpg';
import romanBurial from '../images/all-work/roman-burial.jpg';
import suriname from '../images/all-work/suriname-tijdmachine-1.webp';
import selectedAdventuress from '../images/landing-page/adventuress-cover.jpg';
import selectedPigment from '../images/landing-page/archInk-2025-1.jpg';
import selectedBabylonMap from '../images/landing-page/illustration-babylon-map.jpg';
import selectedBellBeaker from '../images/landing-page/illustration-bell-beaker.jpg';
import selectedBurial from '../images/landing-page/illustration-burial-dog-human.jpg';
import selectedGenderBias from '../images/landing-page/illustration-gender-bias.jpg';
import selectedKore from '../images/landing-page/illustration-kore-reconstruction.jpg';
import selectedOchre from '../images/landing-page/illustration-ochre.jpg';
import selectedVenus from '../images/landing-page/illustration-torso-statue.jpg';
import selectedIllustrationTypes from '../images/landing-page/illustration-types-of-archaeological-illustration.jpg';
import selectedRomanBurial from '../images/landing-page/roman-burial.jpg';
import selectedSuriname from '../images/landing-page/suriname-tijdmachine-1.webp';

export type WorkCopyStatus = 'draft' | 'in-review' | 'ready';

export type WorkImageRole =
  'primary' | 'detail' | 'process' | 'context' | 'comparison';

export interface WorkImageRights {
  creator?: string;
  copyrightHolder?: string;
  copyrightYear?: string;
  license?: string;
  licenseUrl?: string;
  sourceUrl?: string;
}

export interface WorkImage {
  src: StaticImageData;
  alt: string;
  role: WorkImageRole;
  title?: string;
  caption?: string;
  longDescription?: string;
  creditLine?: string;
  rights?: WorkImageRights;
  presentation?: {
    objectPosition?: string;
    backgroundColor?: string;
  };
}

export interface WorkClassification {
  primaryPractice: string;
  form: string;
  subjects?: string[];
  archaeologicalPeriods?: string[];
  cultures?: string[];
  places?: string[];
  objectTypes?: string[];
  themes?: string[];
  keywords?: string[];
}

export interface WorkCreation {
  dateLabel?: string;
  startYear?: number;
  endYear?: number;
  completedOn?: string;
  materials?: string[];
  techniques?: string[];
  tools?: string[];
  dimensions?: {
    width?: number;
    height?: number;
    depth?: number;
    unit: 'mm' | 'cm' | 'm' | 'px';
  };
  duration?: string;
}

export interface WorkEditorial {
  status: WorkCopyStatus;
  summary?: string;
  description?: string;
  researchQuestion?: string;
  approach?: string;
  process?: string;
  interpretation?: string;
  notes?: string;
}

export interface WorkCredits {
  roles?: string[];
  client?: string;
  institution?: string;
  project?: string;
  collaborators?: string[];
  acknowledgements?: string[];
  context?: string;
}

export interface WorkSource {
  label: string;
  citation?: string;
  url?: string;
  accessedOn?: string;
}

export interface WorkLink {
  label: string;
  url: string;
  type: 'case-study' | 'publication' | 'project' | 'process' | 'external';
}

export interface VisualWork {
  slug: string;
  title: string;
  subtitle?: string;
  display: {
    order?: number;
  };
  images: {
    primary: WorkImage;
    selection?: StaticImageData;
    gallery?: WorkImage[];
  };
  classification: WorkClassification;
  creation?: WorkCreation;
  editorial: WorkEditorial;
  credits?: WorkCredits;
  sources?: WorkSource[];
  links?: WorkLink[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: WorkImage;
  };
}

export const visualWorks: VisualWork[] = [
  {
    slug: 'adventuress',
    title: 'Adventuress',
    display: { order: 1 },
    images: {
      selection: selectedAdventuress,
      primary: {
        src: adventuress,
        alt: 'Cover illustration and preparatory drawings for Adventuress Archaeology',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Illustration',
      form: 'Commissioned cover illustration',
      subjects: ['Women in archaeology'],
    },
    creation: {
      dateLabel: '2024',
      startYear: 2024,
      endYear: 2024,
      tools: ['Procreate'],
    },
    editorial: {
      status: 'draft',
      summary:
        'A cover about women in archaeology, moving between field notes, excavation and public storytelling.',
      approach:
        'Sketch studies developed into a layered editorial composition.',
    },
    credits: {
      roles: ['Concept and illustration'],
      client: 'Adventuress Archaeology',
    },
    links: [
      {
        label: 'Read the existing case study',
        url: '/projects/adventuress-cover',
        type: 'case-study',
      },
    ],
  },
  {
    slug: 'ochre',
    title: 'Ochre',
    display: { order: 2 },
    images: {
      selection: selectedOchre,
      primary: {
        src: ochre,
        alt: 'Illustrated study of ochre pigments, hand stencils and painting tools',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Visual archaeology',
      form: 'Standalone visual study',
      subjects: ['Ochre pigments', 'Hand stencils', 'Painting tools'],
    },
    creation: { tools: ['Digital illustration'] },
    editorial: {
      status: 'draft',
      summary:
        'Pigment, hands and painting tools gathered into one visual note.',
      approach: 'Object studies combined with a reconstructed scene.',
    },
    credits: {
      roles: ['Research and illustration'],
      context: 'Independent work',
    },
  },
  {
    slug: 'kore-in-colour',
    title: 'Kore in colour',
    display: { order: 3 },
    images: {
      selection: selectedKore,
      primary: {
        src: kore,
        alt: 'Three-stage reconstruction of a Kore sculpture with colour',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Reconstruction',
      form: 'Comparative illustration',
      subjects: ['Archaic Greek sculpture', 'Polychromy'],
      archaeologicalPeriods: ['Archaic Greece'],
    },
    creation: { tools: ['Digital illustration'] },
    editorial: {
      status: 'draft',
      summary:
        'A surviving sculpture is placed beside a possible reconstruction in colour.',
      approach:
        'Three states make the interpretive step visible rather than hiding it.',
    },
    credits: {
      roles: ['Research and reconstruction'],
      context: 'Independent work',
    },
  },
  {
    slug: 'world-from-babylon',
    title: 'The world from Babylon',
    display: { order: 4 },
    images: {
      selection: selectedBabylonMap,
      primary: {
        src: babylonMap,
        alt: 'Illustrated explanation of the Babylonian Map of the World',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Visual explanation',
      form: 'Annotated object study',
      subjects: ['Babylonian Map of the World'],
    },
    creation: { tools: ['Illustration', 'Information design'] },
    editorial: {
      status: 'draft',
      summary:
        'A visual reading of the Babylonian Map of the World and the ideas held inside it.',
      approach:
        'The source object stays central while lines, labels and colour guide the reading.',
    },
    credits: {
      roles: ['Research, illustration and design'],
      context: 'Independent work',
    },
  },
  {
    slug: 'suriname-time-machine',
    title: 'Suriname Time Machine',
    display: { order: 5 },
    images: {
      selection: selectedSuriname,
      primary: {
        src: suriname,
        alt: 'Suriname Time Machine website shown across several screens',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Web design & development',
      form: 'Research interface',
      subjects: ['Connected cultural heritage collections'],
    },
    creation: {
      dateLabel: '2025–2026',
      startYear: 2025,
      endYear: 2026,
      tools: ['Figma', 'TypeScript', 'React', 'Linked data'],
    },
    editorial: {
      status: 'draft',
      summary:
        'A website for exploring connected historical maps, images and records.',
      approach:
        'The interface turns relationships between records into paths a visitor can follow.',
    },
    credits: {
      roles: ['Interface design and front-end development'],
      institution: 'Huygens Institute',
      context: 'Huygens Institute and project partners',
    },
    links: [
      {
        label: 'Read the existing case study',
        url: '/projects/suriname-tijdmachine',
        type: 'case-study',
      },
    ],
  },
  {
    slug: 'gender-bias',
    title: 'Gender bias',
    display: { order: 6 },
    images: {
      selection: selectedGenderBias,
      primary: {
        src: genderBias,
        alt: 'Illustration about gender bias in archaeological interpretation',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Visual explanation',
      form: 'Editorial illustration',
      subjects: ['Gender', 'Archaeological interpretation'],
    },
    creation: { tools: ['Illustration', 'Information design'] },
    editorial: {
      status: 'draft',
      summary:
        'A visual argument about how categories and assumptions can shape archaeological interpretation.',
      approach:
        'Symbols and artefacts are arranged as an argument rather than a decorative scene.',
    },
    credits: {
      roles: ['Research and illustration'],
      context: 'Independent work',
    },
  },
  {
    slug: 'venus',
    title: 'Venus',
    display: { order: 7 },
    images: {
      selection: selectedVenus,
      primary: {
        src: venus,
        alt: 'Tonal illustration of a sculpted torso',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Illustration',
      form: 'Figure study',
      subjects: ['Classical sculpture'],
    },
    creation: {
      dateLabel: '2023',
      startYear: 2023,
      endYear: 2023,
      tools: ['Digital watercolour'],
    },
    editorial: {
      status: 'draft',
      summary:
        'A restrained study of a classical figure, treated more as material presence than icon.',
      approach: 'Soft tonal drawing with an intentionally unfinished edge.',
    },
    credits: { roles: ['Illustration'], context: 'Independent work' },
  },
  {
    slug: 'roman-burial',
    title: 'Roman burial',
    display: { order: 8 },
    images: {
      selection: selectedRomanBurial,
      primary: {
        src: romanBurial,
        alt: 'Excavation photograph and drawn reconstruction of a Roman burial',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Reconstruction',
      form: 'Excavation-to-image study',
      subjects: ['Roman-period burial context'],
      archaeologicalPeriods: ['Roman period'],
    },
    creation: { tools: ['Digital drawing'] },
    editorial: {
      status: 'draft',
      summary:
        'An excavated burial and its drawn reconstruction shown as parts of the same research process.',
      approach:
        'Documentation and reconstruction remain visible beside one another.',
    },
    credits: {
      roles: ['Research and illustration'],
      context: 'Scientific publication',
    },
    links: [
      {
        label: 'Read the existing case study',
        url: '/projects/roman-burial',
        type: 'case-study',
      },
    ],
  },
  {
    slug: 'friends',
    title: 'Friends',
    display: { order: 9 },
    images: {
      selection: selectedBurial,
      primary: {
        src: burial,
        alt: 'Ink drawing of a human and dog burial',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'archInk',
      form: 'Prompt drawing',
      subjects: ['Human-animal burial'],
    },
    creation: {
      dateLabel: '2023',
      startYear: 2023,
      endYear: 2023,
      tools: ['Ink', 'Digital drawing'],
    },
    editorial: {
      status: 'draft',
      summary: 'A small drawing about care, companionship and burial.',
      approach: 'A quick visual response to the archInk prompt “Friends”.',
    },
    credits: { roles: ['Concept and illustration'], context: 'Self-initiated' },
  },
  {
    slug: 'what-illustration-can-do',
    title: 'What illustration can do',
    display: { order: 10 },
    images: {
      selection: selectedIllustrationTypes,
      primary: {
        src: illustrationTypes,
        alt: 'Mind map of different forms of archaeological illustration',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Visual science communication',
      form: 'Explanatory map',
      subjects: ['Archaeological illustration methods'],
    },
    creation: { tools: ['Drawing', 'Information design'] },
    editorial: {
      status: 'draft',
      summary:
        'A map of how archaeological illustration can explain objects, bodies, buildings and landscapes.',
      approach:
        'Examples are organised spatially so the field can be understood at a glance.',
    },
    credits: {
      roles: ['Research, illustration and information design'],
      context: 'Independent work',
    },
  },
  {
    slug: 'bell-beaker',
    title: 'Bell Beaker',
    display: { order: 11 },
    images: {
      selection: selectedBellBeaker,
      primary: {
        src: bellBeaker,
        alt: 'Black-and-white archaeological drawing of a Bell Beaker vessel',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'Archaeological drawing',
      form: 'Object study',
      subjects: ['Bell Beaker ceramic vessel'],
      archaeologicalPeriods: ['Bell Beaker period'],
      objectTypes: ['Ceramic vessel'],
    },
    creation: { techniques: ['Black-and-white line drawing'] },
    editorial: {
      status: 'draft',
      summary:
        'A quiet object drawing where profile, decoration and material traces carry the information.',
      approach:
        'The vessel is isolated so form and surface can be read clearly.',
    },
    credits: { roles: ['Illustration'], context: 'Independent work' },
  },
  {
    slug: 'pigment',
    title: 'Pigment',
    display: { order: 12 },
    images: {
      selection: selectedPigment,
      primary: {
        src: pigment,
        alt: 'archInk page about prehistoric pigments and grinding stones',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'archInk',
      form: 'Research sketch',
      subjects: ['Prehistoric pigments'],
    },
    creation: {
      dateLabel: '2025',
      startYear: 2025,
      endYear: 2025,
      materials: ['Ink'],
      techniques: ['Digital colour'],
    },
    editorial: {
      status: 'draft',
      summary:
        'A one-page note on mineral colour, grinding and marks on stone.',
      approach: 'A daily prompt became a compact visual explanation.',
    },
    credits: {
      roles: ['Research and illustration'],
      context: 'Self-initiated',
    },
  },
  {
    slug: 'shell',
    title: 'Shell',
    display: { order: 13 },
    images: {
      primary: {
        src: shell,
        alt: 'archInk object study with a coloured shell at its centre',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'archInk',
      form: 'Object constellation',
      subjects: ['Shell artefacts and remains'],
    },
    creation: {
      dateLabel: '2025',
      startYear: 2025,
      endYear: 2025,
      materials: ['Ink'],
      techniques: ['Digital colour'],
    },
    editorial: {
      status: 'draft',
      summary:
        'One shell at the centre of several ways archaeologists encounter and interpret it.',
      approach:
        'A daily prompt explored variation through a loose radial composition.',
    },
    credits: {
      roles: ['Research and illustration'],
      context: 'Self-initiated',
    },
  },
  {
    slug: 'residue',
    title: 'Residue',
    display: { order: 14 },
    images: {
      primary: {
        src: residue,
        alt: 'Four-panel archInk drawing about archaeological residue analysis',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'archInk',
      form: 'Four-panel sketch',
      subjects: ['Archaeological residue analysis'],
    },
    creation: {
      dateLabel: '2025',
      startYear: 2025,
      endYear: 2025,
      materials: ['Ink'],
      techniques: ['Digital colour'],
    },
    editorial: {
      status: 'draft',
      summary:
        'A short visual sequence about what remains on and inside an object.',
      approach:
        'A method is compressed into four scenes without becoming an infographic.',
    },
    credits: {
      roles: ['Research and illustration'],
      context: 'Self-initiated',
    },
  },
  {
    slug: 'bronze',
    title: 'Bronze',
    display: { order: 15 },
    images: {
      primary: {
        src: bronze,
        alt: 'archInk illustration of bronze artefacts and hands',
        role: 'primary',
      },
    },
    classification: {
      primaryPractice: 'archInk',
      form: 'Material study',
      subjects: ['Bronze artefacts'],
    },
    creation: {
      dateLabel: '2025',
      startYear: 2025,
      endYear: 2025,
      materials: ['Ink'],
      techniques: ['Digital colour'],
    },
    editorial: {
      status: 'draft',
      summary:
        'Bronze forms, fragments and hands arranged as an archaeological encounter.',
      approach:
        'A warm, limited palette connects objects from different contexts.',
    },
    credits: {
      roles: ['Research and illustration'],
      context: 'Self-initiated',
    },
  },
];

export const selectedWorks = visualWorks.flatMap((work) => {
  if (!work.images.selection) return [];

  return [
    {
      ...work,
      images: {
        ...work.images,
        primary: { ...work.images.primary, src: work.images.selection },
      },
    },
  ];
});

export function getVisualWork(slug: string) {
  return visualWorks.find((work) => work.slug === slug);
}
