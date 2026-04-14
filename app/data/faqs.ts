export interface FAQ {
  question: string;
  answer: string;
}

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
