import Link from 'next/link';

/** Banner highlighting the current professional role and CV link. */
const CurrentRoleBanner = () => {
  return (
    <div className="bg-primary-teal/10 border border-primary-teal/30 rounded-lg px-4 py-3 mb-8">
      <p className="text-sm md:text-base text-center">
        <span className="font-semibold text-primary-dark">Currently:</span>{' '}
        <span className="text-gray-900">
          Researcher at{' '}
          <Link
            href="https://www.huygens.knaw.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green hover:underline"
          >
            Huygens Institute
          </Link>{' '}
          (KNAW) working on NWO-funded digital humanities projects including{' '}
          <Link
            href="https://necessaryreunions.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green hover:underline"
          >
            Necessary Reunions
          </Link>
          ,{' '}
          <Link
            href="https://www.huygens.knaw.nl/projecten/suriname-time-machine/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green hover:underline"
          >
            Suriname Time Machine
          </Link>
          , and{' '}
          <Link
            href="https://globalise.huygens.knaw.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-green hover:underline"
          >
            GLOBALISE
          </Link>
          . Via archaeoINK: regular cover art for{' '}
          <Link
            href="/projects/adventuress-cover"
            className="text-primary-green hover:underline"
          >
            Adventuress Magazine
          </Link>{' '}
          and developing archaeology journaling workshops.
        </span>
      </p>
    </div>
  );
};

export default CurrentRoleBanner;
