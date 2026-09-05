'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const crispWebsiteId = '1f275037-ca55-460f-841b-a7c70d5d03b6';

/** Loads Crisp chat during browser idle time without blocking the page. */
export default function CrispScript() {
  const [functionalConsent, setFunctionalConsent] = useState(false);

  useEffect(() => {
    const handleBannerLoad = (event: Event) => {
      const detail = (event as CustomEvent).detail as
        { categories?: { functional?: boolean } } | undefined;
      setFunctionalConsent(detail?.categories?.functional === true);
    };
    const handleConsentUpdate = (event: Event) => {
      const detail = (event as CustomEvent).detail as
        { accepted?: string[] } | undefined;
      setFunctionalConsent(detail?.accepted?.includes('functional') === true);
    };

    document.addEventListener('cookieyes_banner_load', handleBannerLoad);
    document.addEventListener('cookieyes_consent_update', handleConsentUpdate);
    return () => {
      document.removeEventListener('cookieyes_banner_load', handleBannerLoad);
      document.removeEventListener(
        'cookieyes_consent_update',
        handleConsentUpdate,
      );
    };
  }, []);

  if (!functionalConsent) return null;

  return (
    <>
      <Script id="crisp-configuration" strategy="afterInteractive">
        {`window.$crisp = window.$crisp || []; window.CRISP_WEBSITE_ID = '${crispWebsiteId}'; window.$crisp.push(['safe', true]);`}
      </Script>
      <Script
        id="crisp-chat"
        src="https://client.crisp.chat/l.js"
        strategy="lazyOnload"
      />
    </>
  );
}
