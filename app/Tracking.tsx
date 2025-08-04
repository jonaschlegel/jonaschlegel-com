'use client';

import Script from 'next/script.js';

const googleAnalyticsTrackingId = 'G-6S9J34MPR3';

export default function Tracking() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
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
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsTrackingId}', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        onError={() => {
          console.warn('Facebook Pixel blocked by ad blocker - this is normal');
        }}
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return;
              n = f.fbq = function() {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
              };
              if(!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '812703364405783');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Simple Analytics */}
      <Script
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        strategy="afterInteractive"
        defer
        onError={() => {
          console.warn(
            'Simple Analytics blocked by ad blocker - this is normal',
          );
        }}
      />

      {/* Cookie Consent - Load in production or when NEXT_PUBLIC_COOKIEYES_ENABLED is set */}
      {(process.env.NODE_ENV === 'production' ||
        process.env.NEXT_PUBLIC_COOKIEYES_ENABLED === 'true') && (
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/f49132772cc1d9f89dfe9534/script.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log('CookieYes script loaded successfully');
          }}
          onError={() => {
            console.error('Failed to load CookieYes script');
          }}
        />
      )}
    </>
  );
}
