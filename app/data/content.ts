import {
  BsBehance,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import profile01 from '../images/clients/profile01.jpg';
import heroBg from '../images/herobg.webp';
import jona from '../images/jona.webp';
import overview from '../images/overview.webp';
import adventuressCover from '../images/projects/adventuress-cover.jpg';
import archaeoZine from '../images/projects/archaeo-zine.png';
import exploringArchaeologicalDisciplines from '../images/projects/exploring-archaeological-disciplines.png';
import romanBurial from '../images/projects/roman-burial.png';
import trowelJournalBlog from '../images/projects/trowel-journal-blog.png';
import urbanChameleon from '../images/projects/urban-chameleon.png';
import illustrating from '../images/services/archaeological-illustrating.png';
import archaeologySciComm from '../images/services/archaeological-sci-comm.png';
import webDevelopment from '../images/services/web-development.png';

export const navLinks = [
  { name: 'Featured Projects', href: '/#project' },
  { name: 'Services', href: '/#service' },
  { name: 'CV', href: '/#cv' },
] as const;

export const heroSectionData = {
  heading: 'Want better visual science communication?',
  text: 'I transform data into narratives, web presences and create illustrative content.',
  statsData: [
    { name: '(Scientific) Articles Written', number: '15' },
    { name: 'Illustrations', number: '253' },
    { name: 'Programming Projects', number: '13' },
  ],
  bgImage: heroBg,
  heroImage: overview,
};

export const bannerData = [
  'Hi, my name is Jona Schlegel and I am specializing in scientific communication, web design, and illustration. I am passionate about creating engaging content that makes science accessible and inclusive. I am here to help you elevate your scientific communication and create a unique showcase of your scientific insights.',
];

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
        'Providing comprehensive archaeological research and data interpretation services, with a focus on accessible communication through digital tools',
      image: archaeologySciComm,
      alt: 'Archaeology service image',
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
        'Specialising in creating detailed, scientifically accurate illustrations for archaeological publications, reconstructions, and educational materials',
      image: illustrating,
      alt: 'Illustration service image',
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
        'Offering tailored web development and design solutions to enhance digital engagement for archaeological projects',
      image: webDevelopment,
      alt: 'Web Development service image',
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
