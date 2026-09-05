'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CalendlyButton from '../components/CalendlyButton';
import adventuressCover from '../images/archive/adventuress-cover.jpg';
import necessaryReunions from '../images/archive/necessary-reunions.png';
import romanBurial from '../images/archive/roman-burial.jpg';
import surinameTijdmachine from '../images/archive/suriname-tijdmachine.jpg';

type ProjectExample = {
  name: string;
  note: string;
  slug: string;
  image: StaticImageData;
};

const services = [
  {
    number: '01',
    eyebrow: 'Visual communication',
    title: 'Give complex research a form people can understand.',
    description:
      'For researchers, publishers, and heritage teams who need visuals that are both inviting and faithful to the evidence. I work from the research outward—finding the image, sequence, or visual language that makes the subject clear.',
    deliverables: [
      'Reconstruction and scientific illustration',
      'Editorial and publication artwork',
      'Conceptual visuals and visual narratives',
      'Supporting identity, layout, and 3D work',
    ],
    examples: [
      {
        name: 'Roman Burial Reconstruction',
        note: 'Peer-reviewed scientific illustration',
        slug: 'roman-burial',
        image: romanBurial,
      },
      {
        name: 'Adventuress Journal',
        note: 'Editorial cover illustration',
        slug: 'adventuress-cover',
        image: adventuressCover,
      },
    ] satisfies ProjectExample[],
  },
  {
    number: '02',
    eyebrow: 'Digital heritage products',
    title: 'Turn scattered knowledge into something people can explore.',
    description:
      'For research projects and heritage organisations with complex collections, maps, or data. I combine product thinking, interface design, and development to create useful public platforms—not just websites around a database.',
    deliverables: [
      'Research platforms and digital collections',
      'Interactive maps and visualisations',
      'Linked data and knowledge interfaces',
      'Interface design and full-stack development',
    ],
    examples: [
      {
        name: 'Suriname Tijdmachine',
        note: 'Archives, linked data, and historical maps',
        slug: 'suriname-tijdmachine',
        image: surinameTijdmachine,
      },
      {
        name: 'Necessary Reunions',
        note: 'A research interface for maps and records',
        slug: 'necessary-reunions',
        image: necessaryReunions,
      },
    ] satisfies ProjectExample[],
  },
] as const;

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    text: 'We clarify the research, audience, constraints, and the real job the work needs to do.',
  },
  {
    number: '02',
    title: 'Find a direction',
    text: 'I turn that understanding into sketches, concepts, or an interface structure before detailing it.',
  },
  {
    number: '03',
    title: 'Make together',
    text: 'We review at clear moments, combining your subject knowledge with my visual and technical work.',
  },
  {
    number: '04',
    title: 'Deliver well',
    text: 'You receive usable final files or a deployed product, with a straightforward handover.',
  },
] as const;

const projectTypes = [
  'Visual communication / illustration',
  'Digital heritage product',
  'A combination of both',
  'Not sure yet',
] as const;

const timelines = [
  'Flexible',
  '1 to 3 months',
  '3 to 6 months',
  'Urgent (under 1 month)',
] as const;

function ProjectPair({ examples }: { examples: readonly ProjectExample[] }) {
  return (
    <div className="grid grid-cols-12 items-start gap-4 md:gap-6">
      {examples.map((example, index) => (
        <Link
          key={`service-example-${example.slug}`}
          href={`/projects/${example.slug}`}
          className={`group block ${
            index === 0 ? 'col-span-8' : 'col-span-4 mt-16 md:mt-28'
          }`}
        >
          <div
            className={`relative overflow-hidden bg-gray-100 ${
              index === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'
            }`}
          >
            <Image
              src={example.image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
              sizes={index === 0 ? '60vw' : '30vw'}
            />
          </div>
          <p className="mb-0 mt-3 text-xs font-semibold uppercase tracking-wider text-primary-green">
            {example.name}
          </p>
          <p className="my-1 hidden text-sm text-gray-600 sm:block">
            {example.note}
          </p>
        </Link>
      ))}
    </div>
  );
}

/** Focused services page organised around client needs rather than techniques. */
export default function ServicesContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    timeline: '',
    description: '',
    website: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmissionStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Delivery failed');

      setSubmissionStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: '',
        timeline: '',
        description: '',
        website: '',
      });
    } catch {
      setSubmissionStatus('error');
    }
  };

  return (
    <div>
      <header className="container mx-auto grid gap-10 pb-20 pt-12 md:pb-32 md:pt-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow">Work with me</p>
          <h1 className="mt-4">
            The right form for the story your research holds.
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pb-2">
          <p className="my-0 text-lg leading-relaxed text-gray-700">
            I work where archaeology, visual communication, and digital
            technology meet—usually in one of two ways.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block border-b border-primary-dark pb-1 text-sm font-semibold text-primary-dark transition-colors hover:border-primary-green hover:text-primary-green"
          >
            Tell me what you are working on&nbsp; ↓
          </a>
        </div>
      </header>

      <div className="container mx-auto">
        {services.map((service, index) => (
          <section
            key={`service-${service.number}`}
            className="grid gap-12 border-t border-primary-dark/30 py-20 md:py-28 lg:grid-cols-12 lg:gap-16"
            aria-labelledby={`service-${service.number}`}
          >
            <div className={`lg:col-span-7 ${index === 1 ? 'lg:order-2' : ''}`}>
              <ProjectPair examples={service.examples} />
            </div>
            <div
              className={`self-center lg:col-span-5 ${
                index === 1 ? 'lg:order-1' : ''
              }`}
            >
              <p className="eyebrow">
                {service.number} · {service.eyebrow}
              </p>
              <h2
                id={`service-${service.number}`}
                className="mt-4 text-3xl leading-tight md:text-5xl"
              >
                {service.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {service.description}
              </p>
              <ul className="plain-list mt-8 grid gap-x-5 gap-y-0 border-t border-primary-dark/20 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={`deliverable-${deliverable}`}
                    className="border-b border-primary-dark/20 py-3 text-sm leading-snug text-primary-dark"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="border-y border-primary-dark/15 bg-[#e3ebe6] py-20 md:py-28">
        <div className="container mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-green">
              A shared process
            </p>
            <h2 className="mt-3 text-3xl text-primary-dark md:text-5xl">
              Rigorous without becoming heavy.
            </h2>
          </div>
          <ol className="plain-list grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={`process-step-${step.number}`}
                className="border-t border-primary-dark/30 pt-5"
              >
                <p className="my-0 text-xs font-bold tracking-widest text-primary-green">
                  {step.number}
                </p>
                <h3 className="mt-3 font-merriweather text-xl font-semibold text-primary-dark">
                  {step.title}
                </h3>
                <p className="mb-0 mt-3 text-sm leading-relaxed text-gray-700">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        className="container mx-auto grid scroll-mt-24 gap-12 py-20 md:py-32 lg:grid-cols-12 lg:gap-20"
      >
        <div className="lg:col-span-5">
          <p className="eyebrow">Start a conversation</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            What are you trying to make clear?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            A rough idea is enough. Tell me about the research, the audience,
            and where you are stuck. I will reply within a few working days.
          </p>
          <div className="mt-7">
            <CalendlyButton text="Or book a short call" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 border-t border-primary-dark pt-7 lg:col-span-7"
        >
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(event) =>
                setFormData((previous) => ({
                  ...previous,
                  website: event.target.value,
                }))
              }
            />
          </div>

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
                autoComplete="name"
                value={formData.name}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    name: event.target.value,
                  }))
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
                autoComplete="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    email: event.target.value,
                  }))
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
                What kind of project?
              </label>
              <select
                id="projectType"
                required
                value={formData.projectType}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    projectType: event.target.value,
                  }))
                }
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
              >
                <option value="">Select one</option>
                {projectTypes.map((type) => (
                  <option key={`project-type-${type}`} value={type}>
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
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    timeline: event.target.value,
                  }))
                }
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
              >
                <option value="">Select one</option>
                {timelines.map((timeline) => (
                  <option key={`timeline-${timeline}`} value={timeline}>
                    {timeline}
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
              Tell me about it
            </label>
            <textarea
              id="description"
              required
              rows={6}
              value={formData.description}
              onChange={(event) =>
                setFormData((previous) => ({
                  ...previous,
                  description: event.target.value,
                }))
              }
              placeholder="What is the research about? Who should it reach? What do you need help with?"
              className="w-full resize-y border border-gray-300 bg-white px-4 py-3 text-sm text-primary-dark transition-colors focus:border-primary-green focus:outline-none"
            />
          </div>

          <button
            disabled={submissionStatus === 'sending'}
            className="bg-primary-dark px-8 py-4 text-sm font-semibold text-primary-cream transition-colors hover:bg-primary-green disabled:cursor-wait disabled:opacity-60"
          >
            {submissionStatus === 'sending' ? 'Sending…' : 'Send project note'}
          </button>
          <div className="text-sm" aria-live="polite">
            {submissionStatus === 'success' && (
              <p className="my-0 font-semibold text-primary-green">
                Thank you. Your message has been sent.
              </p>
            )}
            {submissionStatus === 'error' && (
              <p className="my-0 text-gray-700">
                The form could not send your message. Please email{' '}
                <a
                  href="mailto:jonaschlegel@gmail.com"
                  className="font-semibold text-primary-green underline"
                >
                  jonaschlegel@gmail.com
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
