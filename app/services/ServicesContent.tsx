'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ButtonPrimary from '../components/ButtonPrimary';
import adventuressCover from '../images/projects/adventuress-cover.jpg';
import necessaryReunions from '../images/projects/necessary-reunions.png';
import pastrace from '../images/projects/pastrace.jpg';
import romanBurial from '../images/projects/roman-burial.jpg';

const capabilities = [
  {
    title: 'Illustration & Visual Storytelling',
    description:
      'Scientifically accurate illustrations for publications, outreach, and education. From reconstruction drawings and life-like scenes to conceptual illustrations, cover art, comics, and zines.',
    includes: [
      'Reconstruction drawings & life-like scenes',
      'Cover art & publication illustration',
      'Conceptual and educational illustrations',
      'Comics, zines & visual narratives',
    ],
    image: romanBurial,
    imageAlt:
      'Roman burial reconstruction illustration for academic publication',
    projectSlug: 'roman-burial',
    projectName: 'Roman Burial Reconstruction',
  },
  {
    title: '3D Modelling & Documentation',
    description:
      'Digital 3D documentation and modelling of archaeological artefacts and features using image-based modelling (photogrammetry), Feather 3D, and Nomad Sculpt.',
    includes: [
      'Image-based modelling (photogrammetry)',
      'Digital sculpting (Nomad Sculpt, Feather 3D)',
      'Artefact documentation & visualisation',
      '3D models for research and outreach',
    ],
    sketchfabModels: [
      {
        id: '76bee1f4a8394dc78d3c5be74f8491ce',
        title: 'Lengyel culture pottery',
      },
      // {
      //   id: 'c9db9791d7f8470da5c6bc40d6903529',
      //   title: 'Gravestone from Rheinsberg (Germany)',
      // },
    ],
  },
  {
    title: 'Web Development & Digital Platforms',
    description:
      'Fullstack web development for archaeological research projects. Database-driven platforms, interactive visualisation tools, and digital research infrastructure.',
    includes: [
      'Research platforms & databases',
      'Interactive data visualisation & 3D tools',
      'Next.js, TypeScript, Tailwind CSS',
      'CesiumJS, Leaflet, Three.js',
    ],
    image: necessaryReunions,
    imageAlt:
      'Necessary Reunions research platform for VOC cartographic analysis',
    projectSlug: 'necessary-reunions',
    projectName: 'Necessary Reunions',
  },
  {
    title: 'Brand & Publication Design',
    description:
      'Visual identity and publication design for heritage organisations, research projects, and academic publishers. Brand systems that communicate credibility and purpose.',
    includes: [
      'Brand identity development',
      'Publication & journal design',
      'Visual systems & style guides',
      'Print & digital asset creation',
    ],
    image: pastrace,
    imageAlt: 'PasTrace brand identity for heritage documentation company',
    projectSlug: 'pastrace',
    projectName: 'PasTrace',
  },
] as const;

const processSteps = [
  {
    step: '01',
    title: 'Brief',
    summary: 'We define your project together.',
    details:
      'Every project starts with a conversation. You share your research context, target audience, and goals. I ask questions to understand the archaeological content, the level of accuracy required, and any constraints around format, timeline, or budget. By the end, we have a shared brief that guides the entire project.',
  },
  {
    step: '02',
    title: 'Sketch & Concept',
    summary: 'First visual directions based on the brief.',
    details:
      'Based on the brief, I develop initial sketches or wireframes depending on the project type. For illustrations, this means rough compositions and style explorations. For web projects, wireframes and content architecture. For brand work, initial logo concepts and colour directions. You review these before any detailed work begins.',
  },
  {
    step: '03',
    title: 'Iteration',
    summary: 'Refining through feedback rounds.',
    details:
      'This is where the work takes shape. We go through structured feedback rounds where you review, comment, and I refine. For illustrations, I typically work through 2 to 3 rounds: rough sketch, refined drawing, and final colour/detail pass. For web projects, this means development sprints with regular check-ins. Each round brings us closer to the final result.',
  },
  {
    step: '04',
    title: 'Delivery',
    summary: 'Final files, formats, and handover.',
    details:
      'You receive the final deliverables in all required formats. Illustrations come in print-ready and web-optimised versions. Web projects include full deployment and documentation. Brand packages include all logo variants, colour specifications, and usage guidelines. I also provide a short handover session to walk you through everything.',
  },
];

const projectTypes = [
  'Illustration',
  '3D Modelling',
  'Web Development',
  'Brand / Publication Design',
  'Not sure yet',
] as const;

const timelines = [
  'Flexible',
  '1 to 3 months',
  '3 to 6 months',
  'Urgent (under 1 month)',
] as const;

export default function ServicesContent() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    timeline: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType || 'New Project'}`,
    );
    const body = encodeURIComponent(
      `Hi Jona,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\nTimeline: ${formData.timeline}\n\nProject description:\n${formData.description}\n`,
    );
    window.location.href = `mailto:archaeoink@jonaschlegel.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Intro */}
      <header className="mx-auto mb-20 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-green">
          Services
        </p>
        <h1 className="mb-6 leading-snug tracking-tight">
          Visual Science Communication
        </h1>
        <p className="text-lg tracking-tight text-gray-600">
          From reconstruction illustrations and 3D artefact models to research
          platforms and brand identity: everything I do serves one goal. Making
          archaeological knowledge visible, accessible, and engaging.
        </p>
      </header>

      {/* Capabilities */}
      <section className="mb-24">
        <div className="space-y-20">
          {capabilities.map((cap, index) => (
            <div
              key={`capability-${cap.title}`}
              className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual */}
              <div className="lg:basis-1/2">
                {'sketchfabModels' in cap ? (
                  <div className="grid gap-4">
                    {cap.sketchfabModels.map((model) => (
                      <div
                        key={`model-${model.id}`}
                        className="relative aspect-[4/3] w-full overflow-hidden"
                      >
                        <iframe
                          title={model.title}
                          className="absolute inset-0 size-full"
                          src={`https://sketchfab.com/models/${model.id}/embed?ui_theme=dark`}
                          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : 'image' in cap ? (
                  <Link
                    href={`/projects/${cap.projectSlug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={cap.image}
                        alt={cap.imageAlt}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-80"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <p className="mt-2 text-sm text-primary-green">
                      {cap.projectName} &rarr;
                    </p>
                  </Link>
                ) : null}
              </div>

              {/* Text */}
              <div className="lg:basis-1/2">
                <h2 className="mb-4 font-merriweather text-xl font-semibold md:text-3xl">
                  {cap.title}
                </h2>
                <p className="mb-6 text-gray-600">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.includes.map((item) => (
                    <li
                      key={`include-${item}`}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 bg-primary-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Adventuress callout */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-gray-200 pt-12 md:flex-row md:gap-12">
          <div className="relative aspect-[3/4] w-48 shrink-0 overflow-hidden md:w-56">
            <Image
              src={adventuressCover}
              alt="Adventuress Archaeologist journal cover art"
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
              Ongoing collaboration
            </p>
            <h3 className="mb-3 font-merriweather text-lg font-semibold md:text-2xl">
              Adventuress Magazine
            </h3>
            <p className="text-gray-600">
              Regular cover art for Adventuress Archaeologist, a publication
              celebrating women in archaeology. Each issue features a new
              illustration developed in close collaboration with the editorial
              team.
            </p>
            <Link
              href="/projects/adventuress-cover"
              className="mt-3 inline-block text-sm text-primary-green hover:underline"
            >
              View project &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto mb-24 max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-green">
            How it works
          </p>
          <h2 className="font-merriweather text-2xl font-semibold md:text-4xl">
            From Brief to Delivery
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gray-200 md:block" />

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={`step-${step.step}`} className="relative md:pl-16">
                {/* Step number */}
                <div className="absolute left-0 top-0 hidden size-12 items-center justify-center bg-primary-green text-sm font-bold text-white md:flex">
                  {step.step}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setOpenStep(openStep === index ? null : index)
                  }
                  className="flex w-full items-center justify-between border border-gray-200 bg-white px-6 py-5 text-left transition-colors hover:border-gray-400"
                  aria-expanded={openStep === index}
                >
                  <div>
                    <span className="mr-2 text-sm font-bold text-primary-green md:hidden">
                      {step.step}
                    </span>
                    <span className="font-merriweather text-lg font-semibold">
                      {step.title}
                    </span>
                    <span className="ml-3 hidden text-gray-600 sm:inline">
                      {step.summary}
                    </span>
                  </div>
                  {openStep === index ? (
                    <FaChevronUp className="shrink-0 text-primary-green" />
                  ) : (
                    <FaChevronDown className="shrink-0 text-primary-green" />
                  )}
                </button>

                {openStep === index && (
                  <div className="border border-t-0 border-gray-200 bg-gray-50 px-6 py-5">
                    <p className="leading-relaxed text-gray-700">
                      {step.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-green">
            Get in touch
          </p>
          <h2 className="mb-4 font-merriweather text-2xl font-semibold md:text-4xl">
            Start a Project
          </h2>
          <p className="text-gray-600">
            Fill out the form below and I will get back to you within a few
            working days. Or if you prefer a live conversation:
          </p>
          <div className="mt-4">
            <ButtonPrimary calendlyEventSlug="jonaschlegel">
              Book a Call
            </ButtonPrimary>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-primary-dark"
              >
                Name
              </label>
              <input
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-primary-dark"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="projectType"
                className="mb-1.5 block text-sm font-medium text-primary-dark"
              >
                Project type
              </label>
              <select
                id="projectType"
                required
                value={formData.projectType}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    projectType: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
              >
                <option value="">Select a type</option>
                {projectTypes.map((type) => (
                  <option key={`type-${type}`} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="timeline"
                className="mb-1.5 block text-sm font-medium text-primary-dark"
              >
                Timeline
              </label>
              <select
                id="timeline"
                required
                value={formData.timeline}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    timeline: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
              >
                <option value="">Select a timeline</option>
                {timelines.map((t) => (
                  <option key={`timeline-${t}`} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-1.5 block text-sm font-medium text-primary-dark"
            >
              Tell me about your project
            </label>
            <textarea
              id="description"
              required
              rows={5}
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="What do you need? What is the research context? Who is the audience?"
              className="w-full resize-y border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
            />
          </div>

          <button
            className="w-full bg-primary-dark px-8 py-4 text-sm font-semibold text-primary-cream transition-colors hover:bg-primary-green"
          >
            Send Project Brief
          </button>
          <p className="text-center text-xs text-gray-500">
            This opens your email client with the form details pre-filled.
          </p>
        </form>
      </section>
    </div>
  );
}
