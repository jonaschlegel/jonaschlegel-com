import type { FC } from 'react';
import type { StatType } from '../../types/global';
import StatCard from './StatCard';

/** Row of statistic cards rendered from an array of stats. */
const Stats: FC<{ stats: StatType[] }> = ({ stats }) => {
  return (
    <div className="flex flex-wrap items-center justify-around gap-4 md:block md:space-y-8">
      {stats.map((stat) => {
        return <StatCard key={`stat-${stat.name}`} {...stat} />;
      })}
    </div>
  );
};

export default Stats;
