'use client';

import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { MdDehaze } from 'react-icons/md';
import { navLinks } from '../data/content';
import Button from './Button';
import ButtonSecondary from './ButtonSecondary';
import Logo from './Logo';

const externalLinks = [
  {
    name: 'The TrowelJournal Blog',
    shortName: 'blog',
    href: 'https://www.troweljournal.com/',
  },
  {
    name: 'The archaeoINK newsletter',
    shortName: 'newsletter',
    href: 'https://archaeoink.ck.page/',
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto mb-0 flex items-center justify-between pb-2 pt-4">
      <div className="z-30">
        <Logo />
      </div>
      <div className="z-30 lg:hidden">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={handleToggleMenu}
        >
          <MdDehaze />
        </button>
      </div>
      <div
        className={`fixed top-0 z-10 flex h-screen w-screen items-center bg-neutral-950 transition-all duration-500 ${
          mobileOpen ? 'left-0' : '-left-full'
        } lg:static lg:size-auto lg:bg-transparent`}
      >
        <ul className="flex w-full flex-col items-center gap-6 lg:flex-row lg:gap-8">
          {navLinks.map((navItem) => (
            <li className="list-none" key={`nav-${navItem.name}`}>
              <Button href={navItem.href} onClick={handleToggleMenu}>
                {navItem.name}
              </Button>
            </li>
          ))}
          {externalLinks.map((link) => (
            <li className="list-none" key={`external-${link.name}`}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleToggleMenu}
                className="flex items-center text-primary-accent"
              >
                <span className="lg:hidden">{link.name}</span>
                <span className="hidden lg:inline">{link.shortName}</span>
                <FiExternalLink className="ml-1 size-4" />
              </a>
            </li>
          ))}
          <li className="lg:hidden list-none">
            <ButtonSecondary pdfUrl="/data/Portfolio_JonaSchlegel.pdf">
              Portfolio
            </ButtonSecondary>
          </li>
        </ul>
      </div>
      <div className="hidden lg:inline-flex">
        <ButtonSecondary pdfUrl="/data/Portfolio_JonaSchlegel.pdf">
          Portfolio
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default Navbar;
