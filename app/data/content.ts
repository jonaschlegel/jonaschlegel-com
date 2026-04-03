import {
  BsBehance,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import profile01 from '../images/clients/profile01.jpg';
import profile02 from '../images/clients/profile02.jpg';
import jonaAcropolis from '../images/jona-images/jona-acropolis-greece.jpg';
import jonaConference from '../images/jona-images/jona-conference-presentation.jpg';
import jonaDeskMaps from '../images/jona-images/jona-desk-maps.jpg';
import jonaDeskWorking from '../images/jona-images/jona-desk-working.jpg';
import jonaExcavationEarly from '../images/jona-images/jona-excavation-early.webp';
import jonaAbout from '../images/jona-images/jona-excavation-trowel.jpg';
import jonaBanner from '../images/jona-images/jona-fieldwork-forschungsfest.jpg';
import jonaGeophysics from '../images/jona-images/jona-geophysics-fieldwork.jpg';
import jonaInterview from '../images/jona-images/jona-interview-scanner.jpg';
import jonaLaptop from '../images/jona-images/jona-laptop-working.jpg';
import jonaPaleontology from '../images/jona-images/jona-paleontology-archaeology.jpeg';
import jonaRecording from '../images/jona-images/jona-recording-studio.jpg';
import jonaScicomm from '../images/jona-images/jona-scicomm-illustration.jpg';
import jona from '../images/jona.webp';
import typesOfIllustration from '../images/other-illustration/illustration-types-of-archaeological-illustration.jpg';
import adventuressCover from '../images/projects/adventuress-cover.jpg';
import archaeoZine from '../images/projects/archaeo-zine.jpg';
import exploringArchaeologicalDisciplines from '../images/projects/exploring-archaeological-disciplines.jpg';
import geophysicalProspection from '../images/projects/geophysical-prospection.webp';
import necessaryReunions from '../images/projects/necessary-reunions.png';
import pastrace from '../images/projects/pastrace.jpg';
import romanBurial from '../images/projects/roman-burial.jpg';
import trowelJournalBlog from '../images/projects/trowel-journal-blog.jpg';
import urbanChameleon from '../images/projects/urban-chameleon.jpg';
import illustrating from '../images/services/archaeological-illustrating.jpg';
import archaeologySciComm from '../images/services/archaeological-sci-comm.jpg';
import webDevelopment from '../images/services/web-development.jpg';

/** Navigation links used in the header and footer. */
export const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'CV', href: '/cv' },
] as const;

/** Content and images for the home page hero section. */
export const heroSectionData = {
  eyebrow: 'archaeoINK · Jona Schlegel',
  heading: 'Visual Science Communication for Archaeological Research',
  subheading:
    'Turning archaeological research into clear visual narratives through scientific illustration, publication design, and digital knowledge platforms.',
  jonaPhoto: jonaPaleontology,
  showcaseImage: {
    src: typesOfIllustration,
    alt: 'Mind map showing the types of archaeological illustration: reconstruction drawings, section drawings, artifact illustrations, site plans, scientific illustrations, comics, children\u2019s books, and zines',
  },
};

/** Text paragraphs displayed in the promotional banner. */
export const bannerData = [
  'Whether you are a researcher looking to visualise excavation data, an institution communicating heritage to the public, or an educator bringing archaeology into the classroom: archaeoINK helps you tell that story. Founded by landscape archaeologist Jona Schlegel, the studio works at the intersection of scientific rigour and visual storytelling, creating illustrations, publications, and digital tools that make archaeological knowledge accessible and engaging.',
];

/** Content sections for the About page describing archaeoINK studio. */
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

/** Profile image of Jona Schlegel. */
export const jonaImage = jona;
/** About page image of Jona during excavation work. */
export const jonaAboutImage = jonaAbout;
/** Banner image of Jona at a fieldwork event. */
export const jonaBannerImage = jonaBanner;

/** Portfolio projects data including metadata, images, and service tags. */
export const projectsData = {
  heading: 'Featured Projects',
  projectsList: [
    {
      id: '1',
      name: 'Urban Chameleon',
      slug: 'urban-chameleon',
      image: urbanChameleon,
      description:
        "Interactive platform for exploring and analysing graffiti as cultural heritage along Vienna's Danube Canal.",
      services: ['web development & design for archaeology'],
      isFeatured: true,
      year: '2023',
      location: 'Vienna, Austria',
      institution:
        'Ludwig Boltzmann Institute for Archaeological Prospection and Virtual Archaeology',
      role: 'Wireframing, Mockup, Prototyping, Web Development',
      duration: '2 months intensive work',
      tools: [
        'Next.js 13+',
        'React',
        'SCSS',
        'TypeScript',
        'Figma',
        'Miro',
        'OpenAtlas',
        'Resium/CesiumJS',
      ],
      objective:
        'Create an interactive platform for exploring and analysing graffiti in spatial and temporal context, preserving graffiti as cultural heritage.',
      targetGroup: [
        'Researchers needing efficient graffiti metadata queries',
        'Graffitists wanting their work represented and preserved',
        'General public exploring graffiti along the Danube Canal',
      ],
      challenges: [
        'Graffiti are inherently transient, requiring dynamic temporal display',
        'Managing and visualising large datasets with high-resolution 3D surface models in real-time',
      ],
      outcome:
        'Public-facing digital platform for Project INDIGO documenting 13km of continuous graffiti along the Danube Canal.',
      impact: [
        'First interactive platform mapping graffiti as cultural heritage along the Danube Canal',
        'Used by researchers at the Ludwig Boltzmann Institute for ongoing graffiti documentation',
      ],
    },
    {
      id: '2',
      name: 'Trowel Journal Blog',
      slug: 'trowel-journal-blog',
      image: trowelJournalBlog,
      description:
        'Personal blog sharing ideas on archaeology, illustration, and scientific communication.',
      services: [
        'web development & design for archaeology',
        'archaeological research & communication',
      ],
      isFeatured: true,
      year: '2023 - present',
      role: 'Content creation, Web development, Design',
      duration: 'Ongoing, weekly publication since October 2023',
      tools: ['Next.js', 'Markdown', 'Tailwind CSS'],
      objective:
        'Share practical techniques, digital tools, and personal reflections on archaeology, illustration, and science communication.',
      targetGroup: [
        'Archaeologists seeking accessible content on techniques and digital tools',
        'Illustrators looking for tips on scientific and archaeological illustration',
        'Science communicators needing approachable methods for complex topics',
      ],
      challenges: [
        'Balancing professionalism with personal expression across audiences',
        'Maintaining consistent weekly publishing schedule alongside other work',
        'Keeping Markdown-based content structure scalable as volume grows',
      ],
      outcome:
        'International readership, referenced in academic publications and university course materials.',
      impact: [
        'Referenced in university course materials internationally',
        'Weekly publication since October 2023 with growing international readership',
      ],
    },
    {
      id: '3',
      name: 'archaeo Zine',
      slug: 'archaeo-zine',
      image: archaeoZine,
      description:
        'Illustrated zines translating peer-reviewed research into accessible formats for public audiences.',
      services: [
        'scientific & archaeological illustration',
        'archaeological research & communication',
      ],
      isFeatured: true,
      year: 'Ongoing',
      role: 'Illustration, Design, Content development',
      tools: ['Procreate', 'Digital printing', 'Photography'],
      objective:
        'Democratize archaeological knowledge by transforming complex research into accessible, engaging zine formats.',
      targetGroup: [
        'Museum visitors and educators',
        'Teachers and students in schools',
        'Conference attendees and field archaeology audiences',
      ],
      challenges: [
        'Translating complex academic research into visually engaging short formats',
        'Balancing scientific accuracy with accessibility for non-specialist audiences',
      ],
      outcome:
        'Zines on post-excavation processing, medieval cooking, and community archaeology, distributed at museums, schools, and conferences.',
    },
    {
      id: '4',
      name: 'Exploring Archaeological Disciplines',
      slug: 'exploring-archaeological-disciplines',
      image: exploringArchaeologicalDisciplines,
      description:
        'Comic-style illustration series revealing the interdisciplinary nature of archaeology.',
      services: [
        'scientific & archaeological illustration',
        'archaeological research & communication',
      ],
      isFeatured: true,
      year: 'Ongoing',
      role: 'Illustration, Research, Science communication',
      tools: ['Procreate'],
      objective:
        'Challenge stereotypes about archaeology and make career paths visible through engaging comic-style illustrations.',
      targetGroup: [
        'Established archaeologists and students',
        'Parents with children interested in history',
        'Science communicators seeking accessible visual formats',
      ],
      challenges: [
        'Depicting specialisms accurately whilst keeping visuals approachable',
        'Optimising illustrations for social media without losing scientific detail',
      ],
      outcome:
        'Series covering archaeobotany, forensic archaeology, kurgan archaeology, and Jomon archaeology, used for university outreach and social media.',
    },
    {
      id: '5',
      name: 'Roman Burial Reconstruction',
      slug: 'roman-burial',
      image: romanBurial,
      description:
        'Scientific illustration of the first genetically documented mother-daughter burial from Roman Austria.',
      services: ['scientific & archaeological illustration'],
      isFeatured: true,
      year: '2024',
      location: 'Ovilava (Wels), Austria',
      institution: 'Journal of Archaeological Science: Reports',
      role: 'Scientific illustration',
      tools: ['Procreate', 'Scientific illustration techniques'],
      objective:
        'Accurately reconstruct a Roman-era double burial based on bioarchaeological and genetic findings for peer-reviewed publication.',
      targetGroup: [
        'Archaeological scholars and bioarchaeologists',
        'Museums and heritage interpretation audiences',
        'General public interested in Roman history',
      ],
      outcome:
        'Published reconstruction in Journal of Archaeological Science: Reports (2024), illustrating the first genetic evidence of a mother-daughter relationship in Roman Austria.',
      impact: [
        'Published in peer-reviewed Journal of Archaeological Science: Reports',
        'First visual reconstruction of a genetically confirmed Roman-era mother-daughter burial',
      ],
      publications: [
        {
          title:
            'Reconstruction of a Roman-era mother-daughter burial from Ovilava (Wels), Austria',
          venue: 'Journal of Archaeological Science: Reports',
          url: 'https://doi.org/10.1016/j.jasrep.2024.104522',
        },
      ],
    },
    {
      id: '6',
      name: 'Adventuress Journal Cover',
      slug: 'adventuress-cover',
      image: adventuressCover,
      description:
        'Cover design concept celebrating women in archaeology across past, present, and future.',
      services: ['scientific & archaeological illustration'],
      isFeatured: true,
      year: '2024',
      role: 'Illustration, Concept development',
      duration: '1 week',
      tools: ['Procreate'],
      objective:
        "Explore women's contributions to archaeology through a cover design featuring three female archaeologists representing different time periods.",
      targetGroup: [
        'Archaeological professionals seeking representation',
        'Students and early-career researchers',
        'Public audiences interested in women in science',
      ],
      outcome:
        'Cover design concept featuring past, present, and future archaeologists with era-appropriate tools and methodologies.',
    },
    {
      id: '7',
      name: 'Necessary Reunions',
      slug: 'necessary-reunions',
      image: necessaryReunions,
      description:
        'Digital research platform reconnecting 17th-century VOC maps with archival sources for early modern Kerala.',
      services: [
        'web development & design for archaeology',
        'archaeological research & communication',
      ],
      isFeatured: true,
      year: '2025',
      location: 'Netherlands / Kerala, India',
      institution: 'Huygens Institute / University of Amsterdam',
      role: 'Researcher, Interface Design and User Experience',
      duration: 'March - December 2025',
      tools: [
        'IIIF',
        'Computer vision',
        'HTR (Loghi toolkit)',
        'Georeferencing',
        'Web development',
      ],
      objective:
        'Reconnect Dutch East India Company (VOC) maps with textual archives and create a comprehensive gazetteer of place information for early modern Kerala.',
      targetGroup: [
        'Historians and humanities researchers',
        'Cultural heritage professionals and archival specialists',
        'Researchers working with colonial-era archives',
      ],
      challenges: [
        'Integrating historical handwriting recognition with cartographic analysis',
        'Building interfaces for complex archival research across multiple institutions',
      ],
      outcome:
        're:Charted web platform with computer vision analysis, handwritten text recognition, and georeferencing. NWO XS funded. Published on Zenodo.',
      impact: [
        'NWO XS grant-funded research project',
        'Platform and datasets published on Zenodo for open access',
        'Connects 30 historical VOC maps with textual archives for Kerala research',
      ],
    },
    {
      id: '8',
      name: 'Mustair UNESCO Heritage Site Survey',
      slug: 'geophysical-prospection-study',
      image: geophysicalProspection,
      description:
        'Non-invasive geophysical investigation revealing hidden monastic landscapes at the UNESCO World Heritage Site.',
      services: ['archaeological research & communication'],
      isFeatured: true,
      year: '2021 - 2022',
      location: 'Mustair, Switzerland',
      institution:
        'Ludwig Boltzmann Institute for Archaeological Prospection and Virtual Archaeology',
      role: 'First author, Data processing, Interpretation, Cartographic visualisation',
      tools: [
        'Caesium vapour magnetometry',
        'GPR (400 MHz / 800 MHz)',
        'Data processing software',
        'Cartographic visualisation',
      ],
      objective:
        'Map subsurface archaeological features and understand the spatial organisation of the medieval monastic complex beyond preserved architecture.',
      targetGroup: [
        'Heritage professionals and UNESCO site management',
        'Geophysical prospection researchers',
        'Archaeologists working with non-invasive survey methods',
      ],
      challenges: [
        'Surveying within a UNESCO World Heritage Site with strict access and conservation constraints',
        'Interpreting complex multi-phase subsurface remains across different geophysical methods',
      ],
      outcome:
        'Peer-reviewed publication in Remote Sensing (MDPI). Identified subsurface guest quarters, agricultural infrastructure, and craft production areas.',
      impact: [
        'Peer-reviewed publication contributing to UNESCO World Heritage Site management',
        'Revealed previously unknown monastic infrastructure beneath the site',
      ],
      publications: [
        {
          title:
            'Geophysical Prospection at the UNESCO World Heritage Site of Mustair (Switzerland)',
          venue: 'Remote Sensing (MDPI)',
        },
      ],
    },
    {
      id: '9',
      name: 'PasTrace',
      slug: 'pastrace',
      image: pastrace,
      description:
        'Brand identity for a German photogrammetry company specialising in 3D heritage documentation.',
      services: ['scientific & archaeological illustration'],
      isFeatured: true,
      year: '2023',
      institution: 'PasTrace (client)',
      role: 'Logo design, Brand identity development',
      tools: ['Procreate', 'Vector design'],
      objective:
        'Create a visual identity communicating technical precision and cultural respect for a heritage technology company.',
      targetGroup: [
        'Museums and heritage institutions',
        'Researchers using 3D documentation',
        'Digital heritage professionals',
      ],
      outcome:
        'Complete brand identity including logo symbol, wordmark, colour palette, tagline, and application guidelines.',
    },
  ],
};

/** Service offerings with descriptions, tools, and downloadable resources. */
export const serviceData = {
  heading: 'Services',
  servicesList: [
    {
      id: 'archaeology',
      slug: 'archaeology',
      name: 'Archaeological Research & Communication',
      description:
        'Your research data tells a story \u2014 but reaching the right audience requires more than a publication. From geophysical surveys to public engagement strategies, I help researchers communicate findings clearly and make complex datasets accessible through digital tools and structured knowledge representation.',
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
        'Complex findings need clear visuals to reach beyond your field. I create scientifically accurate illustrations for publications, site reconstructions, and educational materials \u2014 grounded in current research so your audience sees what you see.',
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
        'Your research deserves a platform as rigorous as your methodology. I build database-driven platforms and interactive visualisation tools that let your users explore, query, and engage with archaeological data on their terms.',
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

/** Client testimonials displayed in the carousel. */
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

/** Key statistics displayed on the home page. */
export const statsData: import('../../types/global').StatType[] = [
  { name: 'Years in Archaeological Research', number: '7+' },
  { name: 'Countries Worked In', number: '6' },
  { name: 'Peer-Reviewed Publications', number: '3' },
  { name: 'Research Platforms Built', number: '4' },
];

/** Recent blog posts from Trowel Journal for homepage preview. */
export const blogPostsData = [
  {
    title:
      'Visual Storytelling in Archaeology: Designing a Cover to Connect Women in the Field Across Time',
    date: '2024-10-08',
    excerpt:
      'Exploring the design of a magazine cover that honours the evolving roles of women in archaeology, drawing inspiration from pioneers like Ann Axtell Morris.',
    url: 'https://www.archaeoink.com/blog/visual-storytelling-in-archaeology',
  },
  {
    title:
      'The Power of Conceptual Illustrations in Archaeological Communication during Inktober 2024',
    date: '2024-09-24',
    excerpt:
      'How visual communication can democratize archaeology, making it more accessible and engaging for the public through strategic illustration.',
    url: 'https://www.archaeoink.com/blog/conceptual-illustrations-in-inktober',
  },
  {
    title:
      'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
    date: '2024-07-28',
    excerpt:
      'Using conceptual illustrations and visual metaphors to bridge the gap between specialists and the public, making archaeology more approachable.',
    url: 'https://www.archaeoink.com/blog/public-archaeology',
  },
];

/** Footer content including navigation, social links, and contact details. */
export const footerdata = {
  heading: "Let's Collaborate",
  navLinks: [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
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

/** Gallery images for the About page "Behind the Scenes" section. */
export const aboutGalleryImages = [
  {
    src: jonaAcropolis,
    alt: 'Jona at the Acropolis in Greece during archaeological fieldwork',
    caption: 'Fieldwork in Greece',
  },
  {
    src: jonaConference,
    alt: 'Jona presenting research at an academic conference',
    caption: 'Conference presentation',
  },
  {
    src: jonaDeskMaps,
    alt: 'Jona working with archaeological maps at the desk',
    caption: 'Working with maps',
  },
  {
    src: jonaGeophysics,
    alt: 'Jona conducting geophysical fieldwork survey',
    caption: 'Geophysical survey',
  },
  {
    src: jonaRecording,
    alt: 'Jona in the recording studio for the archaeology podcast',
    caption: 'Podcast recording',
  },
  {
    src: jonaScicomm,
    alt: 'Jona creating science communication illustrations',
    caption: 'Science communication',
  },
  {
    src: jonaInterview,
    alt: 'Jona during an interview with a 3D scanner',
    caption: 'Documentation & interviews',
  },
  {
    src: jonaExcavationEarly,
    alt: 'Jona during early excavation fieldwork',
    caption: 'In the field',
  },
] as const;

/** Personal images for contextual use across the site. */
export const jonaConferenceImage = jonaConference;
export const jonaRecordingImage = jonaRecording;
export const jonaInterviewImage = jonaInterview;
export const jonaDeskWorkingImage = jonaDeskWorking;
export const jonaLaptopImage = jonaLaptop;
export const jonaGeophysicsImage = jonaGeophysics;
export const jonaScicommImage = jonaScicomm;
