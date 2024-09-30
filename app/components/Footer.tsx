import Link from 'next/link';
import React from 'react';
import { footerdata } from '../data/content';
import ButtonPrimary from './ButtonPrimary';
import SocialItem from './SocialItem';

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
          {footerdata.navLinks.map((navItem) => {
            return (
              <Link key={`nav-${navItem.name}`} href={navItem.href}>
                {navItem.name}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center gap-4">
          {footerdata.socialLinks.map((socialItem) => {
            return (
              <SocialItem key={`social-${socialItem.href}`} {...socialItem} />
            );
          })}
        </div>
        <div className="mt-6 flex flex-col justify-center gap-1 text-center text-sm md:flex-row md:gap-4">
          <Link href="/imprint">Imprint</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        <div className="mt-6 flex justify-center text-[10px]">
          © Jona Schlegel {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
