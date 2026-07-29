import Script from 'next/script';

const googleAnalyticsTrackingId = 'G-6S9J34MPR3';

/** Renders Google Analytics and tracking scripts. */
export default function Tracking() {
  return (
    <>
      {/* 1. Consent defaults – must run first, before gtag.js and CookieYes */}
      <Script
        id="gtag-consent-defaults"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 2000,
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `,
        }}
      />

      {/* 2. Google Analytics – loads after consent defaults are set */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsTrackingId}', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
        }}
      />

      {/* 3. CookieYes – must load after consent defaults and gtag per CookieYes Advanced Consent Mode docs */}
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/f49132772cc1d9f89dfe9534/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
