import Link from 'next/link';
import type { FC } from 'react';
import type { SocialType } from '../../types/global';

/** Social media icon link for external profiles. */
const SocialItem: FC<SocialType> = ({ Icon, href }) => {
  const isExternal = typeof href === 'string';

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="inline-block rounded-full border p-2 transition-colors hover:border-primary-green active:border-primary-green">
        <Icon aria-hidden="true" />
      </span>
    </a>
  ) : (
    <Link href={href}>
      <span className="inline-block rounded-full border p-2 transition-colors hover:border-primary-green active:border-primary-green">
        <Icon aria-hidden="true" />
      </span>
    </Link>
  );
};

export default SocialItem;
