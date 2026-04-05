import Script from 'next/script';

const googleAnalyticsTrackingId = 'G-6S9J34MPR3';

/** Renders Google Analytics and tracking scripts. */
export default function Tracking() {
  return (
    <>
      {/* Cookie Consent – must load before analytics to manage consent state */}
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/f49132772cc1d9f89dfe9534/script.js"
        strategy="beforeInteractive"
      />

      {/* Consent defaults – must run before gtag.js processes the dataLayer */}
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
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsTrackingId}', {
                page_title: document.title,
                page_location: window.location.href
              });

              // Update Google consent state when user interacts with CookieYes banner
              document.addEventListener('cookieyes_consent_update', function(e) {
                var detail = e.detail || {};
                var accepted = detail.accepted || [];
                gtag('consent', 'update', {
                  analytics_storage: accepted.indexOf('analytics') > -1 ? 'granted' : 'denied',
                  ad_storage: accepted.indexOf('advertisement') > -1 ? 'granted' : 'denied',
                  ad_user_data: accepted.indexOf('advertisement') > -1 ? 'granted' : 'denied',
                  ad_personalization: accepted.indexOf('advertisement') > -1 ? 'granted' : 'denied',
                  functionality_storage: accepted.indexOf('functional') > -1 ? 'granted' : 'denied',
                  personalization_storage: accepted.indexOf('functional') > -1 ? 'granted' : 'denied',
                });
              });
            `,
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
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
    </>
  );
}
