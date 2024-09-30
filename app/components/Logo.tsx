import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../images/logo.webp';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="relative inline-block aspect-square h-8">
        <Image
          src={logo}
          alt="logo"
          fill
          sizes="100%"
          className="object-cover"
        />
      </span>
      <span className="text-xl font-medium">Jona</span>
    </Link>
  );
};

export default Logo;
