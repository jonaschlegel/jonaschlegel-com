import type { FC } from 'react';

/** Headline stats banner for the impact dashboard. */
const ImpactSummary: FC<{ stats: { name: string; number: string }[] }> = ({
  stats,
}) => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center"
          >
            <span className="font-merriweather text-3xl font-bold tracking-tight text-primary-green lg:text-4xl">
              {stat.number}
            </span>
            <span className="mt-1 text-sm text-gray-600">{stat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSummary;
