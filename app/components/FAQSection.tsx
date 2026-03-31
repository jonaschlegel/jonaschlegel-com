'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
}

/** Accordion-style FAQ section with expandable questions and structured data support. */
export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Answers to common questions about working together, timelines, and
            what to expect from a collaboration.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={`faq-${faq.question
                .slice(0, 50)
                .replace(/\s+/g, '-')
                .toLowerCase()
                .replace(/[^a-z0-9-]/g, '')}`}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary-green flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-primary-green flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </section>
  );
}

// Default FAQs for the site
/** Default set of frequently asked questions addressing common client concerns. */
export const defaultFAQs: FAQ[] = [
  {
    question: 'What is the typical process for a project?',
    answer:
      'Every project follows four stages: Brief, Sketch & Concept, Iteration, and Delivery. We start with a conversation to understand your research context, audience, and goals. I then develop initial sketches or wireframes for your review, refine through structured feedback rounds, and deliver final files in all required formats. The process ensures you stay involved at every step without needing to manage the details.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'Timelines vary by scope. A single scientific illustration typically takes 1\u20132 weeks. Brand identity projects run 3\u20134 weeks. Web platforms range from 4\u201312 weeks depending on complexity. During the initial brief, I provide a clear timeline estimate so you can plan accordingly. Urgent requests are possible \u2014 just let me know your deadline.',
  },
  {
    question: 'Do you work remotely and internationally?',
    answer:
      'Yes, most of my collaborations are remote. I currently work with institutions and researchers across the Netherlands, Austria, Switzerland, India, and the United States. Communication happens via email, video calls, and shared project boards \u2014 whatever works best for your team.',
  },
  {
    question: 'Are you a vendor or a collaborator?',
    answer:
      'A collaborator. As a trained landscape archaeologist, I understand research workflows, publication standards, and the importance of accuracy. I work as a partner embedded in your project, not an external service provider who needs everything spelled out. This means fewer misunderstandings and results that genuinely serve your research.',
  },
  {
    question: 'Can you work with our existing research data or systems?',
    answer:
      'Absolutely. I regularly work with GIS data, archaeological databases like OpenAtlas, archival systems, IIIF image servers, and various data formats. If you have existing datasets, CMS platforms, or institutional design guidelines, I integrate with what you already have rather than starting from scratch.',
  },
  {
    question: 'What if I am not sure which service I need?',
    answer:
      'That is completely fine and quite common. Many projects cross service boundaries \u2014 a research platform might need illustrations, a publication might need web components. Book a free consultation and I will help you figure out the best approach for your goals and budget.',
  },
];
