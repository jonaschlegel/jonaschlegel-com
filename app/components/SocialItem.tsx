import Link from 'next/link';
import type { FC } from 'react';
import type { SocialType } from '../../types/global';

const SocialItem: FC<SocialType> = ({ Icon, href }) => {
  const isExternal = typeof href === 'string';

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="inline-block rounded-full border p-2">
        <Icon />
      </span>
    </a>
  ) : (
    <Link href={href}>
      <span className="inline-block rounded-full border p-2">
        <Icon />
      </span>
    </Link>
  );
};

export default SocialItem;
