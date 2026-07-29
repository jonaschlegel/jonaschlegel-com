'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { MdClose, MdDehaze } from 'react-icons/md';
import { navLinks } from '../data/content';
import Logo from './Logo';

/** Responsive primary navigation with keyboard-safe mobile behaviour. */
const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setMobileOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => toggleRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => firstLinkRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu(true);
      if (event.key !== 'Tab') return;

      const panelItems = Array.from(
        mobilePanelRef.current?.querySelectorAll<HTMLElement>('a, button') ??
          [],
      );
      const focusable = [toggleRef.current, ...panelItems].filter(
        (item): item is HTMLElement => item !== null,
      );
      const currentIndex = focusable.indexOf(
        document.activeElement as HTMLElement,
      );
      const nextIndex = event.shiftKey
        ? (currentIndex - 1 + focusable.length) % focusable.length
        : (currentIndex + 1) % focusable.length;

      event.preventDefault();
      focusable[nextIndex]?.focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const isCurrent = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <header className="container mx-auto flex min-h-20 items-center justify-between py-3">
      <div className="relative z-[70]">
        <Logo />
      </div>

      <nav aria-label="Primary" className="hidden lg:block">
        <ul className="navigation-list flex items-baseline gap-7">
          {navLinks.map((navItem) => (
            <li key={`desktop-nav-${navItem.name}`}>
              <Link
                href={navItem.href}
                aria-current={isCurrent(navItem.href) ? 'page' : undefined}
                className="inline-block py-[15px] text-sm font-medium leading-[14px] text-primary-dark transition-colors hover:text-primary-green aria-[current=page]:text-primary-green"
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href="/services#contact"
        className="hidden min-h-11 items-center rounded-full bg-primary-dark px-5 py-2 text-sm font-semibold text-primary-cream transition-colors hover:bg-primary-green lg:inline-flex"
      >
        Start a project
      </Link>

      <button
        ref={toggleRef}
        type="button"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMobileOpen((open) => !open)}
        className="relative z-[70] inline-flex size-11 items-center justify-center rounded-full border border-primary-dark/30 lg:hidden"
      >
        {mobileOpen ? (
          <MdClose size={24} aria-hidden="true" />
        ) : (
          <MdDehaze size={24} aria-hidden="true" />
        )}
      </button>

      {mobileOpen && (
        <div
          ref={mobilePanelRef}
          id="mobile-navigation"
          className="fixed inset-0 z-[60] flex bg-primary-cream px-6 pb-10 pt-28 lg:hidden"
        >
          <nav aria-label="Mobile primary" className="flex w-full flex-col">
            <ul className="navigation-list space-y-1">
              {navLinks.map((navItem, index) => (
                <li key={`mobile-nav-${navItem.name}`}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={navItem.href}
                    aria-current={isCurrent(navItem.href) ? 'page' : undefined}
                    onClick={() => closeMenu()}
                    className="flex min-h-14 items-center border-b border-primary-dark/15 font-merriweather text-2xl font-semibold text-primary-dark aria-[current=page]:text-primary-green"
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services#contact"
              onClick={() => closeMenu()}
              className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-primary-green px-6 py-3 font-semibold text-white"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
