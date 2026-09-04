'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '../data/content';

/** Quiet archive navigation that keeps the artwork visually dominant. */
export default function Navbar() {
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="archive-masthead">
      <Link href="/" className="archive-wordmark" aria-label="Jona Schlegel home">
        <span>Jona Schlegel</span>
        <small>Archaeology in images, objects &amp; interfaces</small>
      </Link>
      <nav aria-label="Primary">
        <ul className="archive-navigation">
          {navLinks.map((item) => (
            <li key={`navigation-${item.name}`}>
              {'external' in item ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
