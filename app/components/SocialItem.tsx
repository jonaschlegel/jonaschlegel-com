import Link from 'next/link';
import type { FC } from 'react';
import type { SocialType } from '../../types/global';

const SocialItem: FC<SocialType> = ({ Icon, href }) => {
  return (
    <Link href={href} target="_blank">
      <span className="inline-block rounded-full border p-2">
        <Icon />
      </span>
    </Link>
  );
};

export default SocialItem;
