import type { Metadata } from 'next';
import { aboutStudioData } from '../data/content';

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
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="mb-6">{aboutStudioData.heading}</h1>
      </header>

      <div className="space-y-12">
        {aboutStudioData.sections.map((section) => (
          <section
            key={`section-${section.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="max-w-4xl"
          >
            <h2 className="mb-6 text-2xl font-semibold">{section.title}</h2>
            <div className="prose prose-lg max-w-none">
              {section.content.split('\n\n').map((paragraph) => (
                <p
                  key={`paragraph-${paragraph.slice(0, 20).replace(/\s+/g, '-')}`}
                  className="mb-6 leading-relaxed text-neutral-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 max-w-4xl">
        <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
        <p className="leading-relaxed text-neutral-300">
          For collaboration enquiries or to discuss how archaeoINK can support
          your research communication needs, please get in touch via{' '}
          <a
            href="mailto:archaeoink@jonaschlegel.com"
            className="text-neutral-100 underline hover:text-neutral-50"
          >
            archaeoink@jonaschlegel.com
          </a>
        </p>
      </section>
    </div>
  );
}
