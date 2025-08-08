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
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Common questions about archaeological science communication,
            research methods, and professional services.
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
              className="mb-4 border border-neutral-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-neutral-800 hover:bg-neutral-700 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary-teal flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-primary-teal flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-neutral-900 border-t border-neutral-700"
                >
                  <p className="text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </p>
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
export const defaultFAQs: FAQ[] = [
  {
    question: 'What is archaeological science communication?',
    answer:
      'Archaeological science communication involves translating complex archaeological research and findings into accessible content for diverse audiences. This includes creating educational materials, public presentations, digital content, and engaging with media to share archaeological discoveries and their significance with the broader community.',
  },
  {
    question: 'How do you approach knowledge management in archaeology?',
    answer:
      'Knowledge management in archaeology focuses on systematically organizing, preserving, and sharing archaeological data and insights. This involves creating digital archives, developing databases, establishing workflows for data collection and analysis, and ensuring that archaeological knowledge is accessible to researchers, institutions, and the public for future use.',
  },
  {
    question: 'What services do you offer for archaeological projects?',
    answer:
      'I provide comprehensive support for archaeological projects including research design, data analysis, scientific illustration, public engagement strategies, educational content creation, and knowledge management systems. Each project is tailored to meet specific research goals and communication objectives.',
  },
  {
    question: 'How do you ensure accuracy in science communication?',
    answer:
      'Accuracy is maintained through rigorous fact-checking, collaboration with subject matter experts, peer review processes, and staying current with the latest archaeological research. All communications are grounded in scientific evidence and reviewed for both accuracy and accessibility before publication.',
  },
  {
    question: 'Can you help with public engagement for archaeological sites?',
    answer:
      'Yes, I specialize in developing public engagement strategies for archaeological sites, including creating interpretive materials, designing educational programs, developing digital experiences, and training staff in effective communication techniques to connect visitors with archaeological heritage.',
  },
  {
    question: 'What is your experience with digital archaeology tools?',
    answer:
      'I have extensive experience with various digital archaeology tools including GIS systems, 3D modeling software, database management systems, and digital illustration platforms. This technical expertise enables effective integration of technology with traditional archaeological methods and communication strategies.',
  },
];
