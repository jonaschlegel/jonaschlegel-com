import type { FC } from 'react';
import type { StatType } from '../../types/global';

/** Individual statistic display with a number and label. */
const StatCard: FC<StatType> = ({ name, number }) => {
  return (
    <div className="flex w-24 flex-col items-center font-merriweather leading-snug md:w-auto">
      <h3 className="text-2xl font-bold tracking-tighter lg:text-4xl">
        {number}
      </h3>
      <h4 className="text-center text-xs text-gray-700 lg:text-sm">{name}</h4>
    </div>
  );
};

export default StatCard;
