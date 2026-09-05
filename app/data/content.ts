import {
  BsBehance,
  BsBluesky,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';
import jonaConference from '../images/jona-images/jona-oulu_conference-presentation.jpg';
import adventuressCover from '../images/all-work/adventuress-cover.jpg';
import archaeoZine from '../images/archive/projects/archaeo-zine.jpg';
import archaeologyJournaling from '../images/archive/projects/archaeology-journaling.png';
import archaeologyOfBias from '../images/archive/projects/archaeology-of-bias.png';
import archeomatch from '../images/archive/projects/archeomatch.png';
import archink2024Overview from '../images/archive/projects/archink-2024-overview.webp';
import archink2025 from '../images/archive/projects/archink-2025.png';
import dhBenelux from '../images/archive/projects/dh-benelux.jpg';
import dutchLearningPlatform from '../images/archive/projects/dutch-learning-platform.png';
import exploringArchaeologicalDisciplines from '../images/archive/projects/exploring-archaeological-disciplines.webp';
import muestairFindings from '../images/archive/projects/muestair-findings.png';
import geophysicalProspection from '../images/archive/projects/muestair-hero.png';
import muestairMethods from '../images/archive/projects/muestair-methods.png';
import necessaryReunions from '../images/archive/projects/necessary-reunions.png';
import pastforwardhub from '../images/archive/projects/pastforwardhub-1.webp';
import pastforwardhubDetail from '../images/archive/projects/pastforwardhub-2.webp';
import pastrace from '../images/archive/projects/pastrace-brand-identity.webp';
import romanBurial from '../images/all-work/roman-burial.jpg';
import surinameTijdmachine from '../images/all-work/suriname-tijdmachine-1.webp';
import surinameTijdmachineDetail from '../images/archive/projects/suriname-tijdmachine-2.webp';
import trowelJournalBlog from '../images/archive/projects/trowel-journal-blog.jpg';
import urbanChameleon from '../images/archive/projects/urban-chameleon.jpg';
import { archink2021Gallery } from '../content/galleries/archink-2021';
import { archink2022Gallery } from '../content/galleries/archink-2022';
import { archink2023Gallery } from '../content/galleries/archink-2023';
import { archink2024Gallery } from '../content/galleries/archink-2024';
import { archink2025Gallery } from '../content/galleries/archink-2025';

/** Navigation links used in the header and footer. */
export const navLinks = [
  { name: 'Selected', href: '/' },
  { name: 'All work', href: '/work' },
  { name: 'About / CV', href: '/about' },
  {
    name: 'Writing ↗',
    href: 'https://archaeoink.substack.com/',
    external: true,
  },
] as const;

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
        'Interactive heritage web platform reconnecting scattered historical Surinamese archives on georeferenced maps of Paramaribo and colonial plantation landscapes.',
      services: [
        'web development & design for archaeology',
        'archaeological research & communication',
      ],
      isFeatured: true,
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
      galleryImages: [
        {
          src: surinameTijdmachineDetail,
          caption:
            'Suriname Tijdmachine interface connecting stories, historical imagery, maps, and linked archival data',
        },
      ],
      externalUrl: 'https://surinametijdmachine.org/',
    },
    {
      id: '2',
      name: 'PastForwardHub',
      slug: 'pastforwardhub',
      image: pastforwardhub,
      description:
        'Full-stack Next.js platform connecting archaeologists worldwide with career opportunities, heritage network, and digital resources across academic and commercial sectors.',
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
      galleryImages: [
        {
          src: pastforwardhubDetail,
          caption:
            'PastForwardHub platform overview with career pathways, research snapshots, resources, and community support',
        },
      ],
      externalUrl: 'https://pastforwardhub.com/',
    },
    {
      id: '3',
      name: 'Necessary Reunions',
      slug: 'necessary-reunions',
      image: necessaryReunions,
      description:
        'Digital humanities platform using IIIF, georeferencing, and HTR to reconnect 17th-century Dutch East India Company archival maps with textual records for early modern Kerala.',
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
        'Custom Next.js website redesign for the Digital Humanities BeNeLux community — interactive conference maps, dynamic schedules, and open-access journal archive integration.',
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
        'Annual archaeological ink drawing challenge combining Inktober prompts with visual science communication and landscape archaeology conceptual storytelling.',
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
          url: '/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: '/blog/public-archaeology',
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
        'Interactive educational web tool visualising archaeological stratigraphy from modern surface to bedrock through illustrated layers with CIDOC CRM-informed data design.',
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
        'Interactive web app matching archaeology students to their ideal specialisms — from landscape archaeology to bioarchaeology — based on research interests and personality.',
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
        'Interactive web platform exploring cognitive and confirmation biases in archaeological interpretation through flip cards, critical analysis, and visual data storytelling.',
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
        'Daily archaeological illustration practice app providing timed drawing sessions with open-access artefacts from The Met, Rijksmuseum, Smithsonian, and global heritage collections.',
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
        'Interactive React web app for self-directed Dutch language learning — vocabulary drills, article training, verb conjugation exercises, and grammar tests with spaced repetition.',
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
        'Scientific reconstruction illustration for peer-reviewed publication on the first genetically confirmed Roman mother-daughter burial from Ovilava (Wels, Austria) — Journal of Archaeological Science.',
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
      id: 'archink-challenge-2024',
      name: 'archInk Drawing Challenge 2024',
      slug: 'archink-2024',
      image: archink2024Overview,
      description:
        'Conceptual archaeological ink drawings for the 2024 Inktober challenge — exploring cultural baggage, media sensationalism, empathy in field practice, and the future of heritage.',
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
          url: '/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: '/blog/public-archaeology',
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
        'Cover illustration concept for Adventuress Archaeology Journal celebrating women in archaeology across past, present, and future through scientific illustration and character design.',
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
      id: '12',
      name: 'PasTrace',
      slug: 'pastrace',
      image: pastrace,
      description:
        'Visual identity and logo design for PasTrace — German photogrammetry company specialising in high-fidelity 3D documentation of cultural heritage sites and archaeological monuments.',
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

    {
      id: 'archink-challenge-2023',
      name: 'archInk Drawing Challenge 2023',
      slug: 'archink-2023',
      image: archink2023Gallery[0]!.src,
      description:
        'Archaeological ink drawings for the #archInk 2023 challenge — exploring prompts from acoustics and craft to solidarity and revolution through the lens of landscape archaeology.',
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
          url: '/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: '/blog/public-archaeology',
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
        'Comic-style scientific illustration series debunking archaeology stereotypes by showcasing the true interdisciplinary breadth — from bioarchaeology and forensics to landscape survey and GIS.',
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
        'Archaeological ink drawings for the #archInk 2022 Inktober challenge — responding to prompts like bone, classify, exchange, and posthole with digital and traditional illustration.',
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
          url: '/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: '/blog/public-archaeology',
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
        'First-authored Remote Sensing (MDPI) study: GPR and magnetometry geophysical prospection revealing hidden monastic structures at the Müstair Carolingian UNESCO World Heritage Site.',
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
      galleryImages: [
        {
          src: muestairMethods,
          caption: 'A multi-method geophysical prospection workflow',
        },
        {
          src: muestairFindings,
          caption: 'Interpretive findings from the Müstair survey',
        },
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
        'Inaugural `#archInk` challenge — daily archaeological ink drawings on iPad responding to prompts from archaeology book titles such as "In Small Things Forgotten" and "Uncommon Ground".',
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
          url: '/blog/switching-gears-from-archink-to-inktober',
        },
        {
          title:
            'How Visual Communication Can Transform Public Archaeology into Engaging Conversations',
          venue: 'archaeoINK Blog',
          url: '/blog/public-archaeology',
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

/** Footer content including navigation, social links, and contact details. */
export const footerdata = {
  heading: 'Jona Schlegel',
  navLinks: [
    { name: 'Selected', href: '/' },
    { name: 'All work', href: '/work' },
    { name: 'About / CV', href: '/about' },
    { name: 'Writing', href: 'https://archaeoink.substack.com/' },
  ],
  socialLinks: [
    {
      Icon: BsBehance,
      href: 'https://www.behance.net/jonaschlegel1',
      name: 'Behance',
    },
    {
      Icon: BsInstagram,
      href: 'https://www.instagram.com/archaeoink/',
      name: 'Instagram',
    },
    {
      Icon: BsBluesky,
      href: 'https://bsky.app/profile/jonaschlegel.com',
      name: 'Bluesky',
    },
    {
      Icon: BsLinkedin,
      href: 'https://www.linkedin.com/in/jona-schlegel/',
      name: 'LinkedIn',
    },
    { Icon: BsGithub, href: 'https://github.com/jonaschlegel', name: 'GitHub' },
  ],
} as const;

export const jonaConferenceImage = jonaConference;
