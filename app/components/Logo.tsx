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
          alt="archaeoINK logo"
          fill
          sizes="32px"
          className="object-cover"
        />
      </span>
      <span className="text-xl font-medium">archaeoINK</span>
    </Link>
  );
};

export default Logo;
