import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../images/logo.webp';

/** Site logo linking to the home page. */
const Logo = () => {
  return (
    <Link
      href="/"
      className="flex min-h-11 items-center gap-2"
      aria-label="Jona Schlegel and archaeoINK — home"
    >
      <span className="relative inline-block aspect-square h-8">
        <Image src={logo} alt="" fill sizes="32px" className="object-cover" />
      </span>
      <span className="text-base font-semibold text-primary-dark md:text-lg">
        Jona Schlegel
        <span className="hidden font-normal text-gray-700 sm:inline">
          {' '}
          / archaeoINK
        </span>
      </span>
    </Link>
  );
};

export default Logo;
