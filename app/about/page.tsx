import type { Metadata } from 'next';
import Image from 'next/image';
import { aboutStudioData, jonaImage } from '../data/content';

export const metadata: Metadata = {
  title: 'About archaeoINK Studio',
  description:
    'Learn about archaeoINK, a visual science communication studio specialising in archaeology. Founded by landscape archaeologist Jona Schlegel, combining research expertise with visual communication.',
  keywords: [
    'archaeoINK',
    'archaeological studio',
    'science communication',
    'archaeological illustration',
    'visual communication',
    'landscape archaeology',
    'research visualisation',
  ],
  openGraph: {
    title: 'About archaeoINK Studio – Archaeological Visual Communication',
    description:
      'Learn about archaeoINK, a visual science communication studio specialising in archaeology, founded by landscape archaeologist Jona Schlegel.',
    images: [
      {
        url: '/api/og?title=About%20archaeoINK&subtitle=Visual%20Science%20Communication%20for%20Archaeology',
        width: 1200,
        height: 630,
        alt: 'About archaeoINK Studio - Archaeological Visual Communication',
      },
    ],
  },
  alternates: {
    canonical: 'https://jonaschlegel.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16">
      {/* Hero Section */}
      <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="mb-6">{aboutStudioData.heading}</h1>
          <p className="text-xl leading-relaxed">
            A visual science communication studio specialising in archaeology,
            bridging academic research and public understanding through
            thoughtful illustration and design.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-2xl">
            <Image
              src={jonaImage}
              alt="Jona Schlegel - Founder of archaeoINK Studio"
              width={500}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Studio Philosophy */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-semibold">Studio Philosophy</h2>
          <p className="text-lg leading-relaxed">
            Every archaeological site, artefact, and dataset contains layers of
            information that require thoughtful interpretation. Our approach
            prioritises accuracy and contextual understanding, working directly
            with researchers to translate complex archaeological concepts into
            clear visual narratives.
          </p>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="mb-16">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Areas of Expertise
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border-2 border-primary-teal p-6 transition-all duration-300 hover:bg-primary-teal/5">
            <h3 className="mb-4 text-xl font-semibold">
              Archaeological Illustration
            </h3>
            <p className="leading-relaxed">
              Site reconstructions, artefact documentation, and technical
              drawings grounded in current research and methodological best
              practice.
            </p>
          </div>
          <div className="rounded-lg border-2 border-primary-teal p-6 transition-all duration-300 hover:bg-primary-teal/5">
            <h3 className="mb-4 text-xl font-semibold">
              Science Communication
            </h3>
            <p className="leading-relaxed">
              Visual narratives that honour scholarly rigour whilst serving
              educational and public engagement purposes.
            </p>
          </div>
          <div className="rounded-lg border-2 border-primary-teal p-6 transition-all duration-300 hover:bg-primary-teal/5">
            <h3 className="mb-4 text-xl font-semibold">Digital Design</h3>
            <p className="leading-relaxed">
              Database-informed graphics and digital tools that make
              archaeological research findings more accessible to diverse
              audiences.
            </p>
          </div>
        </div>
      </section>

      {/* About Jona Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-semibold">
            About Jona Schlegel
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Background</h3>
              <p className="mb-6 leading-relaxed">
                Landscape archaeologist and science communicator, combining
                disciplinary expertise with visual communication skills to
                support researchers, institutions, and educators in making
                archaeological knowledge more accessible.
              </p>
              <h3 className="mb-4 text-xl font-semibold">Approach</h3>
              <p className="leading-relaxed">
                Rather than simplifying for the sake of accessibility, the focus
                lies in finding visual languages that honour both scholarly
                rigour and public curiosity, maintaining connection to
                underlying research whilst serving broader understanding.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Collaboration</h3>
              <p className="mb-6 leading-relaxed">
                Works as a partner in research projects, contributing visual
                expertise whilst learning from domain specialists to ensure
                authentic representation of archaeological work and its cultural
                significance.
              </p>
              <div className="rounded-lg bg-primary-teal/10 p-6">
                <h4 className="mb-3 font-semibold">Research Interests</h4>
                <ul className="space-y-2 text-sm">
                  <li>Landscape archaeology and spatial analysis</li>
                  <li>Visual science communication methodologies</li>
                  <li>Digital heritage and knowledge management</li>
                  <li>Archaeological illustration and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
