import type { FC } from 'react';
import type { StatType } from '../../types/global';
import StatCard from './StatCard';

const Stats: FC<{ stats: StatType[] }> = ({ stats }) => {
  return (
    <div className="flex items-center justify-around md:block md:space-y-8">
      {stats.map((stat) => {
        return <StatCard key={`stat-${stat.name}`} {...stat} />;
      })}
    </div>
  );
};

export default Stats;
