import Link from 'next/link';

/** Compact summary connecting Jona's research role and independent practice. */
const CurrentRoleBanner = () => {
  return (
    <aside
      className="border-y border-primary-dark/15 py-6"
      aria-label="Current work"
    >
      <div className="grid gap-2 md:grid-cols-[auto_1fr] md:gap-8">
        <p className="eyebrow">Current practice</p>
        <p className="my-0 max-w-4xl leading-relaxed text-gray-700">
          Alongside archaeoINK, I work as a researcher at the{' '}
          <a
            href="https://www.huygens.knaw.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary-green underline-offset-4 hover:underline"
          >
            Huygens Institute
            <span className="sr-only"> (opens in a new tab)</span>
          </a>{' '}
          on digital humanities and cultural heritage projects. This research
          work continually informs how I approach evidence, interfaces, and
          public communication.{' '}
          <Link
            href="/cv"
            className="font-semibold text-primary-green underline-offset-4 hover:underline"
          >
            View my CV
          </Link>
          .
        </p>
      </div>
    </aside>
  );
};

export default CurrentRoleBanner;
