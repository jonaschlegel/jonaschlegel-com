import Link from 'next/link';
import { footerdata } from '../data/content';
import ButtonPrimary from './ButtonPrimary';
import SocialItem from './SocialItem';

/** Site footer with navigation links, social icons, and contact call-to-action. */
const Footer = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 font-merriweather text-3xl font-bold md:text-5xl">
          {footerdata.heading}
        </h1>
        <div>
          <ButtonPrimary calendlyEventSlug="jonaschlegel">
            Work With Me
          </ButtonPrimary>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-center gap-6">
          {footerdata.navLinks.map((navItem) => (
            <Link key={`nav-${navItem.name}`} href={navItem.href}>
              {navItem.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {footerdata.socialLinks.map((socialItem) => (
            <SocialItem key={`social-${socialItem.href}`} {...socialItem} />
          ))}
        </div>
        <div className="mt-6 flex flex-col justify-center gap-1 text-center text-sm md:flex-row md:gap-4">
          <Link href="/imprint">Imprint</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-1 text-[10px]">
          <span>© Jona Schlegel, archaeoINK 2026. All rights reserved.</span>
          <span>
            KVK:{' '}
            <a
              href="https://www.kvk.nl/bestellen/#/96576820000061893501?origin=search"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              96576820
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
