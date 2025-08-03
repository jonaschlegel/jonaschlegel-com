import {
  BsBehance,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import profile01 from '../images/clients/profile01.jpg';
import profile02 from '../images/clients/profile02.jpg';
import heroBg from '../images/herobg.jpg';
import jona from '../images/jona.webp';
import overview from '../images/overview.webp';
import adventuressCover from '../images/projects/adventuress-cover.jpg';
import archaeoZine from '../images/projects/archaeo-zine.jpg';
import exploringArchaeologicalDisciplines from '../images/projects/exploring-archaeological-disciplines.jpg';
import necessaryReunions from '../images/projects/necessary-reunions.png';
import pastrace from '../images/projects/pastrace.jpg';
import romanBurial from '../images/projects/roman-burial.jpg';
import trowelJournalBlog from '../images/projects/trowel-journal-blog.jpg';
import urbanChameleon from '../images/projects/urban-chameleon.jpg';
import illustrating from '../images/services/archaeological-illustrating.jpg';
import archaeologySciComm from '../images/services/archaeological-sci-comm.jpg';
import webDevelopment from '../images/services/web-development.jpg';

export const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/#service' },
  { name: 'CV', href: '/cv' },
] as const;

export const heroSectionData = {
  heading: 'Visual communication for archaeological research',
  text: 'archaeoINK transforms research data into clear narratives through illustration, design, and structured knowledge representation.',
  statsData: [
    { name: 'Scientific Articles Written', number: '15' },
    { name: 'Illustrations Created', number: '253' },
    { name: 'Digital Projects', number: '13' },
  ],
  bgImage: heroBg,
  heroImage: overview,
};

export const bannerData = [
  'archaeoINK specialises in visual science communication for archaeology, creating accurate illustrations and structured knowledge representations that bridge academic research and public understanding. Founded by landscape archaeologist Jona Schlegel, the studio combines disciplinary expertise with visual communication skills to support researchers, institutions, and educators in making archaeological knowledge more accessible.',
];

export const aboutStudioData = {
  heading: 'About archaeoINK',
  sections: [
    {
      title: 'The Studio',
      content: `archaeoINK is a visual science communication studio specialising in archaeology, where illustration, design, and structured knowledge representation serve to advance research understanding and public engagement. Founded by landscape archaeologist and science communicator Jona Schlegel, the studio bridges the space between rigorous academic research and accessible visual communication.

The work centres on creating accurate, concept-driven visuals that respect the complexity and context inherent in archaeological data. Each project begins with careful collaboration between researcher and illustrator, ensuring that visual interpretations maintain scientific integrity whilst becoming more approachable for diverse audiences.`,
    },
    {
      title: 'Approach',
      content: `Every archaeological site, artefact, and dataset contains layers of information that require thoughtful interpretation. The studio's approach prioritises accuracy and contextual understanding, working directly with researchers to translate complex archaeological concepts into clear visual narratives.

Rather than simplifying for the sake of accessibility, the focus lies in finding visual languages that honour both scholarly rigour and public curiosity. This includes developing database-informed graphics that maintain connection to underlying research whilst serving educational and engagement purposes.`,
    },
    {
      title: 'Expertise',
      content: `The studio specialises in archaeological illustration, from site reconstructions to artefact documentation, always grounded in current research and methodological best practice. Additional expertise encompasses concept-driven visual design for academic publications, educational materials, and digital platforms that support knowledge sharing within and beyond academic communities.

Communication strategies developed here aim to bridge gaps between specialist knowledge and broader understanding, recognising that effective science communication requires both technical accuracy and thoughtful presentation. This includes designing digital tools and interfaces that make archaeological databases and research findings more accessible to various user groups.`,
    },
    {
      title: 'Collaboration',
      content: `Successful visual communication in archaeology depends on close collaboration between researchers, institutions, and communication specialists. The studio works as a partner in research projects, contributing visual expertise whilst learning from domain specialists to ensure authentic representation of archaeological work.

This collaborative approach extends to understanding the specific needs of different audiences, from academic peers to students, heritage professionals, and members of the public with varying levels of archaeological knowledge. The goal is always to create visuals that serve their intended purpose whilst maintaining respect for the discipline's complexity and cultural significance.`,
    },
  ],
};

export const jonaImage = jona;

export const projectsData = {
  heading: 'Featured Projects',
  projectsList: [
    {
      id: '1',
      name: 'Urban Chameleon',
      slug: 'urban-chameleon',
      image: urbanChameleon,
      description:
        'An exploration of urban graffiti and its historical context.',
      services: ['web development & design for archaeology'],
      isFeatured: true,
    },
    {
      id: '2',
      name: 'Trowel Journal Blog',
      slug: 'trowel-journal-blog',
      image: trowelJournalBlog,
      description: 'A blog platform for archaeological publications.',
      services: [
        'web development & design for archaeology',
        'archaeological aesearch & communication',
      ],
      isFeatured: true,
    },
    {
      id: '3',
      name: 'archaeo Zine',
      slug: 'archaeo-zine',
      image: archaeoZine,
      description: 'A zine promoting archaeological discoveries to the public.',
      services: [
        'scientific & archaeological illustration',
        'archaeological research & communication',
      ],
      isFeatured: true,
    },
    {
      id: '4',
      name: 'Exploring Archaeological Disciplines',
      slug: 'exploring-archaeological-disciplines',
      image: exploringArchaeologicalDisciplines,
      description:
        'A comic-style illustration series showcasing various branches of archaeology.',
      services: [
        'scientific & archaeological illustration',
        'archaeological research & communication',
      ],
      isFeatured: true,
    },
    {
      id: '5',
      name: 'Roman Burial',
      slug: 'roman-burial',
      image: romanBurial,
      description: 'An archaeological illustration of a Roman burial.',
      services: ['scientific & archaeological illustration'],
      isFeatured: true,
    },
    {
      id: '6',
      name: 'Adventuress Journal Cover',
      slug: 'adventuress-cover',
      image: adventuressCover,
      description:
        'A cover illustration for the first issue of the Adventuress Archaeologist journal.',
      services: ['scientific & archaeological illustration'],
      isFeatured: true,
    },
    {
      id: '7',
      name: 'Necessary Reunions',
      slug: 'necessary-reunions',
      image: necessaryReunions,
      description:
        'Digital cartographic research platform reuniting Dutch VOC maps with textual archives.',
      services: ['web development & design for archaeology'],
      isFeatured: true,
    },
    {
      id: '8',
      name: 'PasTrace',
      slug: 'pastrace',
      image: pastrace,
      description:
        'Logo design and visual identity for digital heritage technology company.',
      services: ['scientific & archaeological illustration'],
      isFeatured: true,
    },
  ],
};

export const serviceData = {
  heading: 'Services',
  servicesList: [
    {
      id: 'archaeology',
      slug: 'archaeology',
      name: 'Archaeological Research & Communication',
      description:
        'Comprehensive archaeological research and data interpretation services, focusing on accessible communication through digital tools and structured knowledge representation',
      image: archaeologySciComm,
      alt: 'Archaeological research and scientific communication tools and methods by Jona Schlegel',
      tools:
        'ArcGIS, QGIS, Ground-penetrating radar, Geophysical surveys, CIDOC CRM',
      options: [
        'Geophysical Prospection: Non-invasive surveys to uncover archaeological structures',
        'Data Interpretation: Analysis and mapping of archaeological findings',
        'Public Engagement: Making archaeological data accessible through interactive platforms and scientific communication',
      ],
      pdfUrl: '/data/Archaeology_JonaSchlegel.pdf',
    },
    {
      id: 'illustration',
      slug: 'illustration',
      name: 'Scientific & Archaeological Illustration',
      description:
        'Creating detailed, scientifically accurate illustrations for archaeological publications, site reconstructions, and educational materials, grounded in current research and methodological best practice',
      image: illustrating,
      alt: 'Scientific and archaeological illustration examples and digital artwork by Jona Schlegel',
      tools: 'Procreate, Inkscape, ArcGIS, QGIS',
      options: [
        'Reconstruction Illustrations: Accurate depictions of historical scenes for academic use',
        'Educational Illustrations: Visual content for teaching materials and public outreach',
        'GIS-based Map Illustrations: Integrating archaeological data with geospatial visualisation',
      ],
      pdfUrl: '/data/Illustration_JonaSchlegel.pdf',
    },
    {
      id: 'web-development',
      slug: 'web-development',
      name: 'Web Development & Design for Archaeology',
      description:
        'Tailored web development and design solutions that enhance digital engagement for archaeological projects, including database-driven platforms and interactive visualisation tools',
      image: webDevelopment,
      alt: 'Web development and design portfolio for archaeological projects by Jona Schlegel',
      tools: 'Next.js, TypeScript, Tailwind CSS, Three.js, CesiumJS, Leaflet',
      options: [
        'Website Development: Custom-built platforms for archaeological projects and databases',
        'Interactive Features: Enhancing user engagement with data visualisation and 3D tools',
        'UI/UX Design: Creating user-friendly interfaces for archaeological content presentation',
      ],
      pdfUrl: '/data/WebDevelopment_JonaSchlegel.pdf',
    },
  ],
};

export const testimonialsData = [
  {
    name: 'Gabriella Campbell',
    role: 'That Anthro Podcast',
    image: profile01,
    comment:
      'I am so glad that I was able to work with Jona. Her art is incredible and I know this is only the beginning of big things for her. And thanks for the extras! I know how much work and creativity Jona is put into this, so thanks.',
  },

  {
    name: 'Tuna Çapar',
    role: 'Research Associate',
    image: profile02,
    comment:
      'After viewing Jona’s portfolio, I requested a logo design, and it was the best decision. She worked diligently, brought fresh ideas, and delivered an outstanding final concept. I’m very happy with my brand identity and grateful for her talent and dedication.',
  },
];

export const footerdata = {
  heading: "Let's Collaborate",
  navLinks: [
    { name: 'About', href: '/#about' },
    { name: 'Project', href: '/#project' },
    { name: 'Service', href: '/#service' },
  ],
  socialLinks: [
    { Icon: BsBehance, href: 'https://www.behance.net/jonaschlegel1' },
    { Icon: BsInstagram, href: 'https://www.instagram.com/archaeoink/' },
    { Icon: BsTwitter, href: 'https://twitter.com/JonaSchlegel' },
    {
      Icon: BsLinkedin,
      href: 'https://www.linkedin.com/in/jona-schlegel-942879153/',
    },
    { Icon: BsGithub, href: 'https://github.com/jonaschlegel' },
  ],
} as const;
