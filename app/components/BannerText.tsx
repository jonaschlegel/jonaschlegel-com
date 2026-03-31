import type { FC, ReactNode } from 'react';

/** Styled text block used within the Banner component. */
const BannerText: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p className="text-center font-merriweather text-xs tracking-tighter text-neutral-950 lg:text-xl">
      {children}
    </p>
  );
};

export default BannerText;
