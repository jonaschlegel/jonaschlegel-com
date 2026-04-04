import {
  BsBehance,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import profile01 from '../images/clients/profile01.jpg';
import profile02 from '../images/clients/profile02.jpg';
import jonaDoodle from '../images/jona-images/jona-doodle-working-terms.jpg';
import jonaWatercolor from '../images/jona-images/jona-early-watercolor-drawing.jpg';
import jonaExcavationEarly from '../images/jona-images/jona-excavation-early.webp';
import jonaAbout from '../images/jona-images/jona-excavation-trowel.jpg';
import jonaBanner from '../images/jona-images/jona-fieldwork-forschungsfest.jpg';
import jonaGeophysics from '../images/jona-images/jona-geophysics-fieldwork.jpg';
import jonaLaptop from '../images/jona-images/jona-laptop-working.jpg';
import jonaSpectrometry from '../images/jona-images/jona-measure-spectrometry.jpeg';
import jonaAcropolis from '../images/jona-images/jona-museum-visit_acropolis-greece.jpg';
import jonaLeiden from '../images/jona-images/jona-museum-visit_leiden-wereldmuseum.jpg';
import jonaConference from '../images/jona-images/jona-oulu_conference-presentation.jpg';
import jonaInterview from '../images/jona-images/jona-prospection-scanner.jpg';
import jonaMotorised from '../images/jona-images/jona-prospection_motorised-magnetic.jpg';
import jonaPaleontology from '../images/jona-images/jona-scicomm_paleontology-archaeology.jpeg';
import jonaSorting from '../images/jona-images/jona-sorting-artifacts.jpg';
import jonaGraffiti from '../images/jona-images/jona-spraying-wall-graffiti-legal.jpg';
import jonaRecording from '../images/jona-images/jona-standing-globe.jpg';
import jonaScicomm from '../images/jona-images/jona-working_desk-ipad.jpg';
import jonaDeskMaps from '../images/jona-images/jona-working_desk-maps.jpg';
import jonaDeskWorking from '../images/jona-images/jona-working_desk-writing.jpg';
import jona from '../images/jona.webp';
import typesOfIllustration from '../images/other-illustration/illustration-types-of-archaeological-illustration.jpg';
import adventuressCover from '../images/projects/adventuress-cover.jpg';
import archaeoZine from '../images/projects/archaeo-zine.jpg';
import archaeologyJournaling from '../images/projects/archaeology-journaling.png';
import archaeologyOfBias from '../images/projects/archaeology-of-bias.png';
import archeomatch from '../images/projects/archeomatch.png';
import archink2025 from '../images/projects/archink-2025.png';
import dhBenelux from '../images/projects/dh-benelux.jpg';
import dutchLearningPlatform from '../images/projects/dutch-learning-platform.png';
import exploringArchaeologicalDisciplines from '../images/projects/exploring-archaeological-disciplines.jpg';
import geophysicalProspection from '../images/projects/geophysical-prospection.webp';
import necessaryReunions from '../images/projects/necessary-reunions.png';
import pastforwardhub from '../images/projects/pastforwardhub.png';
import pastrace from '../images/projects/pastrace-new.png';
import romanBurial from '../images/projects/roman-burial.jpg';
import surinameTijdmachine from '../images/projects/suriname-tijdmachine.jpg';
import trowelJournalBlog from '../images/projects/trowel-journal-blog.jpg';
import urbanChameleon from '../images/projects/urban-chameleon.jpg';
import illustrating from '../images/services/archaeological-illustrating.jpg';
import archaeologySciComm from '../images/services/archaeological-sci-comm.jpg';
import webDevelopment from '../images/services/web-development.jpg';
import { archink2021Gallery } from './galleries/archink-2021';
import { archink2022Gallery } from './galleries/archink-2022';
import { archink2023Gallery } from './galleries/archink-2023';
import { archink2024Gallery } from './galleries/archink-2024';
import { archink2025Gallery } from './galleries/archink-2025';

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
      name: 'Suriname Tijdmachine',
      slug: 'suriname-tijdmachine',
      image: surinameTijdmachine,
      description:
        'Digital platform bringing scattered historical Surinamese sources together on interactive maps of Paramaribo and plantations.',
      services: [
        'web development & design for archaeology',
        'archaeological research & communication',
      ],
      isFeatured: false,
      year: '2025 - 2026',
      location: 'Netherlands / Suriname',
      institution: 'Huygens Institute (KNAW) / Stichting Pica',
      role: 'Web Developer, Interface Design',
      duration: '2025–2026, with possible extension',
      tools: [
        'Next.js',
        'TypeScript',
        'Leaflet',
        'Linked Open Data',
        'IIIF',
        'AnnoRepo',
      ],
      objective:
        "Build a central digital platform integrating multiple historical databases from Suriname's past onto interactive maps, making dispersed archival sources searchable in one place.",
      targetGroup: [
        'Researchers and genealogists studying Surinamese history',
        'Heritage institutions such as Rijksmuseum and Nationaal Archief',
        'Citizen scientists and community members exploring family histories',
      ],
      challenges: [
        'Integrating data from multiple institutions with different formats and standards',
        'Presenting sensitive colonial and slavery-related history with appropriate context',
      ],
      outcome:
        'Launched platform with interactive maps, linked data infrastructure, and case studies on colonial Suriname history. Integrates Burgerlijke Stand, Wijkregister, Slavenregister, and Emancipatieregister.',
      impact: [
        'Connected to UNESCO Memory of the World-registered slave registers',
        'Cross-institutional collaboration between Dutch and Surinamese heritage organisations',
        'Citizen science integration enabling community-driven historical research',
      ],
      externalUrl: 'https://surinametijdmachine.org/',
    },
    {
      id: '2',
      name: 'PastForwardHub',
      slug: 'pastforwardhub',
      image: pastforwardhub,
      description:
        'Global career platform connecting archaeologists with jobs, colleagues, and resources across academic, commercial, and public sectors.',
      services: ['web development & design for archaeology'],
      isFeatured: false,
      year: '2025 - present',
      location: 'Amsterdam & Vienna',
      institution: 'PastForwardHub',
      role: 'Co-founder, Design & Web Development',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      objective:
        'Build a sustainable career platform for archaeologists offering a directory, job board, resources, and community features to address systemic job insecurity in the field.',
      targetGroup: [
        'Archaeological professionals seeking stable career paths',
        'Students and early-career researchers exploring opportunities',
        'Institutions and organisations looking to hire archaeologists',
      ],
      challenges: [
        'Building a platform that addresses systemic career challenges rather than offering short-term fixes',
        'Coordinating co-founder responsibilities across design, development, marketing, and fundraising',
      ],
      outcome:
        'Live platform with directory, job board, resources, and community features. Endorsed by EAA/ECA, ANA, and Direcția Patrimoniu Digital. Kickstarter campaign with 29 backers.',
      impact: [
        'Endorsed by key archaeological organisations across Europe',
        'Kickstarter-backed with growing community of supporting archaeologists',
        'First dedicated global career platform for the archaeology sector',
      ],
      externalUrl: 'https://pastforwardhub.com/',
    },
    {
      id: '3',
      name: 'Necessary Reunions',
      slug: 'necessary-reunions',
      image: necessaryReunions,
      description:
        'Digital research platform remarrying 17th-century VOC maps with textual archives to reconceptualise histories of early modern Kerala.',
      services: [
        'web development & design for archaeology',
        'archaeological research & communication',
      ],
      isFeatured: false,
      year: '2025',
      location: 'Netherlands / Kerala, India',
      institution: 'Huygens Institute / University of Amsterdam',
      role: 'Researcher, Interface Design and User Experience',
      duration: 'March - December 2025',
      tools: [
        'Next.js',
        'React',
        'IIIF',
        'Computer vision (MapReader, Meta AI Segment Everything)',
        'HTR (Loghi toolkit)',
        'Georeferencing',
        'AnnoRepo',
      ],
      objective:
        'Reconnect Dutch East India Company (VOC) maps with textual archives, annotate 30 Kerala maps from the Leupe collection, and create a comprehensive gazetteer linking historical and modern place names.',
      targetGroup: [
        'Historians and humanities researchers studying colonial-era South Asia',
        'Cultural heritage professionals and archival specialists',
        'Researchers working with the GLOBALISE project and colonial-era archives',
      ],
      challenges: [
        'Integrating historical handwriting recognition with cartographic analysis across 30 maps',
        'Building interfaces for complex archival research spanning multiple institutions and countries',
      ],
      outcome:
        're:Charted viewer for 30 annotated and georeferenced VOC maps, GAVOC historical thesaurus with LOD URIs, and a searchable gazetteer of Kerala place names. NWO XS funded. Published on Zenodo.',
      impact: [
        'NWO XS grant-funded research project at the Huygens Institute',
        'Platform, datasets, and code published on Zenodo and GitHub for open access',
        'Connects 30 historical VOC maps with textual archives, feeding into the larger GLOBALISE project',
      ],
      externalUrl: 'https://necessaryreunions.org/',
    },
    {
      id: '4',
      name: 'DH BeNeLux',
      slug: 'dh-benelux',
      image: dhBenelux,
      description:
        'Redesigned website for the Digital Humanities BeNeLux community with interactive conference maps and journal integration.',
      services: ['web development & design for archaeology'],
      isFeatured: false,
      year: '2025',
      role: 'Design, Development',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Leaflet'],
      objective:
        'Redesign the DH BeNeLux website as a hub for the digital humanities community in Belgium, Netherlands, and Luxembourg, with interactive conference maps, journal browsing, and news.',
      targetGroup: [
        'Digital humanities researchers in the BeNeLux region',
        'Conference organisers and attendees',
        'Journal authors and readers',
      ],
      outcome:
        'Redesigned community hub with conference history on interactive maps, journal volume browsing, news section, and search functionality for the DH BeNeLux network.',
      externalUrl: 'https://dhbenelux.vercel.app/',
    },
    {
      id: 'archink-challenge-2025',
      name: 'archInk Drawing Challenge 2025',
      slug: 'archink-2025',
      image: archink2025Gallery[0]!.src,
      description:
        'Yearly archaeological drawing challenge combining Inktober with archaeological themes. Each illustration explores archaeological concepts through conceptual visual storytelling.',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
      year: '2025',
      role: 'Illustration, Concept',
      tools: ['Procreate', 'iPad', 'Pen & Ink'],
      objective:
        'Create daily ink drawings responding to archaeological prompts during October, using visual metaphors and conceptual illustration to communicate complex archaeological ideas to broad audiences.',
      targetGroup: [
        'Archaeological illustration enthusiasts and fellow #archInk participants',
        'Science communication audiences on social media',
        'Students and educators exploring archaeology through art',
      ],
      outcome:
        '13 conceptual illustrations exploring archaeological themes through the Inktober drawing challenge format, shared across social media as part of the #archInk community.',
      impact: [
        'Contributed to public archaeology outreach through visual science communication',
        'Engaged with the global Inktober community while maintaining archaeological focus',
      ],
      publications: [
        {
          title: '#archInk: Inktober and Archaeology',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
        },
        {
          title:
            'Switching Gears from archInk to Inktober for Fresh Inspiration',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/public-archaeology',
        },
        {
          title:
            'The Power of Conceptual Illustrations in Archaeological Communication during Inktober 2024',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/conceptual-illustrations-in-inktober',
        },
      ],
      galleryImages: archink2025Gallery,
      externalUrl:
        'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
    },
    {
      id: '5',
      name: 'archInk — Interactive Stratigraphic Profile',
      slug: 'archink-stratigraphic-profile',
      image: archink2025,
      description:
        'Interactive educational tool visualising archaeological stratigraphy with illustrated layers from bedrock to modern surface.',
      services: [
        'web development & design for archaeology',
        'scientific & archaeological illustration',
      ],
      isFeatured: false,
      year: '2025',
      role: 'Illustration, Concept, Development',
      tools: ['Next.js', 'TypeScript', 'Procreate'],
      objective:
        'Create an interactive visualisation of archaeological stratigraphy, illustrating 7 excavation layers from present day to natural bedrock with period-specific artifacts and soil descriptions.',
      targetGroup: [
        'Archaeology students learning stratigraphic principles',
        'Educators teaching excavation methods',
        'Public audiences curious about how archaeological excavation works',
      ],
      outcome:
        'Interactive web tool showing 7 illustrated layers (A-Horizon to bedrock) spanning from present day to millions of years ago, each with detailed soil descriptions, period context, and artifact examples.',
      externalUrl: 'https://arch-ink-transformation.vercel.app/',
    },
    {
      id: '6',
      name: 'ArcheoMatch',
      slug: 'archeomatch',
      image: archeomatch,
      description:
        'Tinder-style web app helping students discover archaeological disciplines matched to their personality and interests.',
      services: ['web development & design for archaeology'],
      isFeatured: false,
      year: '2025 (in development)',
      role: 'Concept, Design, Development',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      objective:
        'Help students and curious people discover their ideal archaeological discipline through a gamified personality quiz and swipe-based exploration of 47 disciplines.',
      targetGroup: [
        'Prospective archaeology students choosing a specialisation',
        'Career explorers curious about archaeology',
        'Educators looking for engaging outreach tools',
      ],
      challenges: [
        'Designing a matching algorithm that balances personality science with archaeological discipline characteristics',
        'Keeping 47 discipline profiles accurate, engaging, and visually distinct',
      ],
      outcome:
        'Web application with personality quiz, swipe-based discipline exploration, compatibility scores, and university/career path recommendations covering 47 archaeological disciplines.',
      externalUrl: 'https://v0-archaeology-discipline-tinder.vercel.app/',
    },
    {
      id: '7',
      name: 'The Archaeology of Bias',
      slug: 'archaeology-of-bias',
      image: archaeologyOfBias,
      description:
        'Educational platform exploring hidden biases in archaeological research through interactive flip cards and critical analysis.',
      services: [
        'web development & design for archaeology',
        'archaeological research & communication',
      ],
      isFeatured: false,
      year: '2025 (in progress)',
      role: 'Concept, Research, Design, Development',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      objective:
        'Present and explain common biases in archaeology — sampling, survivorship, confirmation, presentism, cultural, and funding bias — through an interactive, educational web experience.',
      targetGroup: [
        'Archaeology students developing critical thinking skills',
        'Researchers reflecting on methodological assumptions',
        'Public audiences interested in how we interpret the past',
      ],
      challenges: [
        'Presenting complex epistemological concepts in an accessible, engaging format',
        'Balancing academic rigour with visual interactivity',
      ],
      outcome:
        'Interactive web platform with flip-card explorations of 6 major archaeological biases, each with examples, illustrations, and links to further reading.',
      externalUrl: 'https://v0-the-archaeology-of-bias.vercel.app/',
    },
    {
      id: '8',
      name: 'Archaeology Journaling',
      slug: 'archaeology-journaling',
      image: archaeologyJournaling,
      description:
        'Daily artifact drawing practice platform using open-access museum collections from The Met, Rijksmuseum, Smithsonian, and more.',
      services: ['web development & design for archaeology'],
      isFeatured: false,
      year: '2025',
      role: 'Concept, Design, Development',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      objective:
        'Combine archaeology journaling with daily drawing practices, letting users explore artifacts from major museum collections and build a personal sketchbook journal with progress tracking.',
      targetGroup: [
        'Archaeology students practising observational drawing',
        'Illustrators looking for daily drawing challenges',
        'Museum enthusiasts and drawing practice communities',
      ],
      outcome:
        'Drawing practice platform integrating open-access collections from The Met, Cleveland Museum of Art, Rijksmuseum, Smithsonian, Harvard Art Museums, Sketchfab, and Europeana with daily challenges, streak tracking, and a personal sketchbook.',
      externalUrl: 'https://v0-archaeology-journaling-website.vercel.app/',
    },
    {
      id: '9',
      name: 'Dutch Learning Platform',
      slug: 'dutch-learning-platform',
      image: dutchLearningPlatform,
      description:
        'Interactive web app for learning Dutch vocabulary, articles, verb tenses, and grammar through exercises and tests.',
      services: ['web development & design for archaeology'],
      isFeatured: false,
      year: '2025',
      role: 'Design, Development',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      objective:
        'Create an interactive learning tool for Dutch language learners covering vocabulary, articles (de/het), verb tenses, modal verbs, conjunctions, and test preparation.',
      targetGroup: [
        'Dutch language learners at A1/A2 level',
        'Integration course students preparing for exams',
        'Expats learning Dutch for daily life',
      ],
      outcome:
        'Fully functional learning platform with vocabulary drills, article exercises, perfect tense and imperfectum practice, modal verbs, conjunctions, and comprehensive final tests.',
      externalUrl: 'https://dutch-learning-platform.vercel.app/',
    },
    {
      id: '10',
      name: 'Roman Burial Reconstruction',
      slug: 'roman-burial',
      image: romanBurial,
      description:
        'Scientific illustration of the first genetically documented mother-daughter burial from Roman Austria.',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
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
      id: 'archink-challenge-2024',
      name: 'archInk Drawing Challenge 2024',
      slug: 'archink-2024',
      image: archink2024Gallery[0]!.src,
      description:
        'Conceptual illustrations reinterpreting Inktober 2024 prompts through archaeological lenses — exploring cultural baggage, media sensationalism, empathy in practice, and the future of heritage.',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
      year: '2024',
      role: 'Illustration, Concept',
      tools: ['Procreate', 'iPad', 'Pen & Ink'],
      objective:
        'Reinterpret Inktober 2024 prompts through archaeological conceptual illustration, using visual metaphors to critique biases, celebrate fieldwork, and spark dialogue about archaeological communication.',
      targetGroup: [
        'Archaeological illustration enthusiasts and Inktober participants',
        'Science communication audiences on social media',
        'Students and educators exploring archaeology through art',
      ],
      outcome:
        '28 conceptual illustrations addressing themes like cultural baggage, media representation, empathy in archaeology, and the future of heritage — shared as part of the Inktober 2024 challenge.',
      impact: [
        'Bridged archaeology and the global Inktober art community for wider public engagement',
        'Published accompanying blog post analysing the power of conceptual illustration in archaeological communication',
      ],
      publications: [
        {
          title: '#archInk: Inktober and Archaeology',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
        },
        {
          title:
            'Switching Gears from archInk to Inktober for Fresh Inspiration',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/public-archaeology',
        },
        {
          title:
            'The Power of Conceptual Illustrations in Archaeological Communication during Inktober 2024',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/conceptual-illustrations-in-inktober',
        },
      ],
      galleryImages: archink2024Gallery,
      externalUrl:
        'https://www.archaeoink.com/blog/conceptual-illustrations-in-inktober',
    },
    {
      id: '11',
      name: 'Adventuress Journal Cover',
      slug: 'adventuress-cover',
      image: adventuressCover,
      description:
        'Cover design concept celebrating women in archaeology across past, present, and future.',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
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
      id: '12',
      name: 'PasTrace',
      slug: 'pastrace',
      image: pastrace,
      description:
        'Brand identity for a German photogrammetry company specialising in 3D heritage documentation.',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
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

    {
      id: 'archink-challenge-2023',
      name: 'archInk Drawing Challenge 2023',
      slug: 'archink-2023',
      image: archink2023Gallery[0]!.src,
      description:
        'Archaeological ink drawings created for the #archInk challenge in October 2023, exploring prompts from acoustics and craft to solidarity and revolution through an archaeological lens.',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
      year: '2023',
      role: 'Illustration, Concept',
      tools: ['Procreate', 'iPad', 'Pen & Ink'],
      objective:
        'Respond to daily #archInk drawing prompts during October 2023, combining artistic skill development with archaeological science communication on social media.',
      targetGroup: [
        'Archaeological illustration community and #archInk participants',
        'Science communication audiences on social media',
        'Students exploring archaeology through creative expression',
      ],
      outcome:
        '19 ink drawings interpreting archaeological themes through the #archInk prompt list, shared on social media to engage the archaeology and art communities.',
      impact: [
        'Sustained the #archInk community through continued annual participation',
        'Explored new digital illustration techniques while maintaining archaeological accuracy',
      ],
      publications: [
        {
          title: '#archInk: Inktober and Archaeology',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
        },
        {
          title:
            'Switching Gears from archInk to Inktober for Fresh Inspiration',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/public-archaeology',
        },
        {
          title:
            'The Power of Conceptual Illustrations in Archaeological Communication during Inktober 2024',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/conceptual-illustrations-in-inktober',
        },
      ],
      galleryImages: archink2023Gallery,
      externalUrl:
        'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
    },
    {
      id: '13',
      name: 'Exploring Archaeological Disciplines',
      slug: 'exploring-archaeological-disciplines',
      image: exploringArchaeologicalDisciplines,
      description:
        'Comic-style illustration series revealing the interdisciplinary nature of archaeology.',
      services: [
        'scientific & archaeological illustration',
        'archaeological research & communication',
      ],
      isFeatured: false,
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
      id: 'archink-challenge-2022',
      name: 'archInk Drawing Challenge 2022',
      slug: 'archink-2022',
      image: archink2022Gallery[0]!.src,
      description:
        'Archaeological ink drawings for the #archInk 2022 challenge, responding to prompts like bone, classify, exchange, and posthole with a blend of digital and traditional techniques.',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
      year: '2022',
      role: 'Illustration, Concept',
      tools: ['Procreate', 'iPad', 'Pen & Ink'],
      objective:
        'Create daily archaeological illustrations in response to the #archInk prompt list, advancing digital drawing skills while communicating archaeological concepts visually.',
      targetGroup: [
        'Archaeological illustration community and #archInk participants',
        'Science communication audiences on Twitter/X and Instagram',
        'Students and professionals interested in archaeological visual communication',
      ],
      outcome:
        '22 ink drawings exploring archaeological themes such as bones, buildings, fragility, and objectivity through the lens of the #archInk drawing challenge.',
      impact: [
        'Contributed to growing the #archInk hashtag community on social media',
        'Combined traditional ink techniques with digital illustration on iPad',
      ],
      publications: [
        {
          title: '#archInk: Inktober and Archaeology',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
        },
        {
          title:
            'Switching Gears from archInk to Inktober for Fresh Inspiration',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/public-archaeology',
        },
        {
          title:
            'The Power of Conceptual Illustrations in Archaeological Communication during Inktober 2024',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/conceptual-illustrations-in-inktober',
        },
      ],
      galleryImages: archink2022Gallery,
      externalUrl:
        'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
    },
    {
      id: '14',
      name: 'Mustair UNESCO Heritage Site Survey',
      slug: 'geophysical-prospection-study',
      image: geophysicalProspection,
      description:
        'Non-invasive geophysical investigation revealing hidden monastic landscapes at the UNESCO World Heritage Site.',
      services: ['archaeological research & communication'],
      isFeatured: false,
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
      id: 'archink-challenge-2021',
      name: 'archInk Drawing Challenge 2021',
      slug: 'archink-2021',
      image: archink2021Gallery[0]!.src,
      description:
        'First digital #archInk challenge — archaeological ink drawings on iPad responding to prompts inspired by archaeological book titles and concepts, from "In Small Things Forgotten" to "Uncommon Ground".',
      services: ['scientific & archaeological illustration'],
      isFeatured: false,
      year: '2021',
      role: 'Illustration, Concept',
      tools: ['Procreate', 'iPad'],
      objective:
        'Participate in the #archInk drawing challenge for the second time, transitioning from traditional pen and paper to digital illustration on iPad while exploring archaeological themes.',
      targetGroup: [
        'Archaeological illustration community and #archInk participants',
        'Science communication audiences on Twitter/X',
        'Fellow archaeologists exploring creative expression',
      ],
      outcome:
        '19 digital ink drawings exploring concepts from archaeological literature and practice, marking the transition from traditional to digital illustration techniques.',
      impact: [
        'Shifted from traditional to digital archaeological illustration, opening new creative possibilities',
        'Engaged with the #archInk community during peak participation years',
      ],
      publications: [
        {
          title: '#archInk: Inktober and Archaeology',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
        },
        {
          title:
            'Switching Gears from archInk to Inktober for Fresh Inspiration',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/public-archaeology',
        },
        {
          title:
            'The Power of Conceptual Illustrations in Archaeological Communication during Inktober 2024',
          venue: 'archaeoINK Blog',
          url: 'https://www.archaeoink.com/blog/conceptual-illustrations-in-inktober',
        },
      ],
      galleryImages: archink2021Gallery,
      externalUrl:
        'https://www.archaeoink.com/blog/archInk-Inktober-and-archaeology',
    },
    {
      id: '15',
      name: 'Urban Chameleon',
      slug: 'urban-chameleon',
      image: urbanChameleon,
      description:
        "Interactive platform for exploring and analysing graffiti as cultural heritage along Vienna's Danube Canal.",
      services: ['web development & design for archaeology'],
      isFeatured: false,
      hidden: true,
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
      id: '16',
      name: 'Trowel Journal Blog',
      slug: 'trowel-journal-blog',
      image: trowelJournalBlog,
      description:
        'Personal blog sharing ideas on archaeology, illustration, and scientific communication.',
      services: [
        'web development & design for archaeology',
        'archaeological research & communication',
      ],
      isFeatured: false,
      hidden: true,
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
      id: '17',
      name: 'archaeo Zine',
      slug: 'archaeo-zine',
      image: archaeoZine,
      description:
        'Illustrated zines translating peer-reviewed research into accessible formats for public audiences.',
      services: [
        'scientific & archaeological illustration',
        'archaeological research & communication',
      ],
      isFeatured: false,
      hidden: true,
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
  { name: 'Research Platforms Built', number: '10+' },
];

/** Recent blog posts from archaeoINK for homepage preview. */
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
    alt: 'Jona visiting the Acropolis museum in Greece',
    caption: 'Museum visit, Greece',
  },
  {
    src: jonaConference,
    alt: 'Jona presenting research at a conference in Oulu',
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
    alt: 'Jona standing next to a globe',
    caption: 'Portrait',
  },
  {
    src: jonaScicomm,
    alt: 'Jona working at desk with iPad for digital illustration',
    caption: 'Digital illustration',
  },
  {
    src: jonaInterview,
    alt: 'Jona using prospection scanner during fieldwork',
    caption: 'Prospection scanning',
  },
  {
    src: jonaExcavationEarly,
    alt: 'Jona during early excavation fieldwork',
    caption: 'In the field',
  },
  {
    src: jonaSorting,
    alt: 'Jona sorting archaeological finds in the lab',
    caption: 'Sorting finds',
  },
  {
    src: jonaWatercolor,
    alt: 'Early watercolor drawing by Jona',
    caption: 'Watercolor illustration',
  },
  {
    src: jonaDoodle,
    alt: 'Jona doodling and sketching archaeological terms',
    caption: 'Sketching',
  },
  {
    src: jonaSpectrometry,
    alt: 'Jona measuring artefacts with spectrometry equipment',
    caption: 'Spectrometry analysis',
  },
  {
    src: jonaLeiden,
    alt: 'Jona visiting the Wereldmuseum in Leiden',
    caption: 'Museum visit, Leiden',
  },
  {
    src: jonaMotorised,
    alt: 'Motorised magnetic prospection survey in the field',
    caption: 'Magnetic prospection',
  },
  {
    src: jonaGraffiti,
    alt: 'Jona spraying on a legal graffiti wall',
    caption: 'Street art',
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

/** FAQ content for the services page, targeting key search terms. */
export const servicesFAQs = [
  {
    question: 'What is archaeological illustration?',
    answer:
      'Archaeological illustration is the practice of creating scientifically accurate visual representations of archaeological sites, artefacts, and contexts. It encompasses drawing, digital painting, sketching, and conceptual illustration \u2014 translating complex research into clear visuals for publications, exhibitions, and education.',
  },
  {
    question: 'What types of archaeological drawing do you offer?',
    answer:
      'I offer reconstruction drawings, artefact illustrations, site plans, section drawings, and conceptual sketches. Each drawing is developed in close collaboration with researchers to ensure accuracy. Techniques range from detailed pencil sketching to fully rendered digital painting, depending on the publication context.',
  },
  {
    question: 'Do you offer digital painting for archaeology?',
    answer:
      'Yes. I use tools like Procreate and Inkscape to create digital paintings for archaeological reconstructions, life-like scenes, and publication covers. Digital painting allows for flexible iteration and produces print-ready results suitable for journals, books, and exhibition panels.',
  },
  {
    question: 'What is archaeology cover art?',
    answer:
      'Archaeology cover art refers to illustrated covers designed for archaeological journals, books, and magazines. I create cover art that visually communicates the theme of a publication while meeting academic design standards \u2014 for example, the ongoing cover illustration series for Adventuress Archaeologist magazine.',
  },
  {
    question: 'How does web development for archaeology work?',
    answer:
      'Archaeology web development involves building digital platforms tailored to research needs: interactive databases, GIS-based mapping tools, 3D visualisation interfaces, and content management systems for heritage data. I use modern frameworks like Next.js, TypeScript, and Tailwind CSS alongside spatial tools such as CesiumJS and Leaflet.',
  },
  {
    question:
      'Can you create a brand identity for an archaeology organisation?',
    answer:
      'Absolutely. Archaeology brand identity includes logo design, visual systems, colour palettes, typography, and style guides tailored to heritage organisations, research projects, and academic publishers. The goal is a professional identity that communicates credibility and aligns with institutional values \u2014 like the PasTrace brand I developed for a heritage documentation company.',
  },
  {
    question: 'What is conceptual illustration in archaeology?',
    answer:
      'Conceptual illustration in archaeology visualises ideas, processes, or hypotheses rather than depicting specific artefacts or sites. Examples include comic-style explanations of archaeological methods, educational infographics, and diagrammatic illustrations of research workflows \u2014 making abstract concepts tangible for diverse audiences.',
  },
  {
    question: 'What is archaeology journaling?',
    answer:
      'Archaeology journaling combines reflective writing with visual documentation \u2014 sketching, note-taking, and illustrated observations from fieldwork and research. I share techniques and insights through the Trowel Journal blog and develop journaling workshops that help archaeologists integrate visual thinking into their practice.',
  },
];
