import Link from 'next/link';
import { footerdata } from '../data/content';
import { KVK_NUMBER, KVK_URL } from '../lib/constants';

/** Compact footer for navigation, contact and legal information. */
export default function Footer() {
  return (
    <footer className="archive-footer">
      <div className="archive-footer__primary">
        <p>Jona Schlegel / archaeoINK</p>
        <a href="mailto:jonaschlegel@gmail.com">jonaschlegel@gmail.com</a>
      </div>
      <nav aria-label="Footer">
        <ul className="archive-footer__links">
          {footerdata.navLinks.map((item) => (
            <li key={`footer-${item.name}`}>
              {item.href.startsWith('http') ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="archive-footer__secondary">
        <span>© {new Date().getFullYear()} Jona Schlegel</span>
        <a href={KVK_URL} target="_blank" rel="noreferrer">
          KVK {KVK_NUMBER}
        </a>
        <Link href="/imprint">Imprint</Link>
        <Link href="/privacy-policy">Privacy</Link>
      </div>
    </footer>
  );
}
