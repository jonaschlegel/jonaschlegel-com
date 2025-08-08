'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const googleAnalyticsTrackingId = 'G-6S9J34MPR3';

interface ScriptLoadState {
  gtag: boolean;
  fbpixel: boolean;
  cookieyes: boolean;
}

export default function Tracking() {
  const [scriptsLoaded, setScriptsLoaded] = useState<ScriptLoadState>({
    gtag: false,
    fbpixel: false,
    cookieyes: false,
  });
  const [showFallbackBanner, setShowFallbackBanner] = useState(false);

  useEffect(() => {
    // Check after a delay to allow scripts to load, then activate fallbacks if needed
    const timeout = setTimeout(() => {
      // Update state for scripts that loaded
      if (typeof window !== 'undefined' && window.gtag) {
        setScriptsLoaded((prev) => ({ ...prev, gtag: true }));
      }
      if (typeof window !== 'undefined' && window.fbq) {
        setScriptsLoaded((prev) => ({ ...prev, fbpixel: true }));
      }

      // Check if CookieYes should be loaded but isn't available
      const shouldLoadCookieYes =
        process.env.NODE_ENV === 'production' ||
        process.env.NEXT_PUBLIC_COOKIEYES_ENABLED === 'true';

      if (
        shouldLoadCookieYes &&
        typeof window !== 'undefined' &&
        !('cookieyes' in window) &&
        !scriptsLoaded.cookieyes
      ) {
        // CookieYes failed to load, show fallback
        setShowFallbackBanner(true);
      }

      // Silent fallback for blocked Facebook Pixel
      if (typeof window !== 'undefined' && !window.fbq) {
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'page_view_fb_fallback',
            parameters: {
              page_location: window.location.href,
              page_title: document.title,
              blocked_service: 'facebook_pixel',
            },
            url: window.location.href,
            userAgent: navigator.userAgent,
          }),
        }).catch(() => {
          // Silent fail - no user-visible errors
        });
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [scriptsLoaded.cookieyes]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}
        strategy="afterInteractive"
        onLoad={() => {
          setScriptsLoaded((prev) => ({ ...prev, gtag: true }));
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              try {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  if (window.dataLayer) {
                    window.dataLayer.push(arguments);
                  }
                }

                if (typeof gtag === 'function') {
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
                }
              } catch (error) {
                // Silent error handling
              }
            `,
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptsLoaded((prev) => ({ ...prev, fbpixel: true }));
        }}
        onError={() => {
          // Silent fallback when blocked
          setTimeout(() => {
            if (typeof window !== 'undefined') {
              fetch('/api/analytics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  event: 'facebook_pixel_blocked',
                  parameters: {
                    page_location: window.location.href,
                    page_title: document.title,
                    blocked_reason: 'ad_blocker',
                  },
                  url: window.location.href,
                  userAgent: navigator.userAgent,
                }),
              }).catch(() => {
                // Silent fail
              });
            }
          }, 500);
        }}
        dangerouslySetInnerHTML={{
          __html: `
            try {
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
                t.onerror = function() {
                  // Silent error handling
                };
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              }(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              if (window.fbq) {
                fbq('init', '812703364405783');
                fbq('track', 'PageView');
              }
            } catch (error) {
              // Silent error handling
            }
          `,
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
            setScriptsLoaded((prev) => ({ ...prev, cookieyes: true }));
          }}
          onError={(error) => {
            // CookieYes script failed to load (403, blocked, etc.)
            console.warn('CookieYes script blocked or failed to load:', error);

            // Show fallback cookie banner after a short delay
            setTimeout(() => {
              if (!scriptsLoaded.cookieyes) {
                setShowFallbackBanner(true);

                // Track the fallback usage
                fetch('/api/analytics', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    event: 'cookieyes_fallback_shown',
                    parameters: {
                      page_location: window.location.href,
                      page_title: document.title,
                      blocked_reason: 'script_load_failed',
                    },
                    url: window.location.href,
                    userAgent: navigator.userAgent,
                  }),
                }).catch(() => {
                  // Silent fail
                });
              }
            }, 1000);
          }}
        />
      )}

      {/* Fallback Cookie Banner */}
      {showFallbackBanner && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#333',
            color: 'white',
            padding: '15px',
            textAlign: 'center',
            zIndex: 9999,
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
          }}
        >
          <p style={{ margin: '0 0 10px 0' }}>
            This website uses cookies to improve your experience.
            <button
              onClick={() => setShowFallbackBanner(false)}
              style={{
                background: '#007cba',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                marginLeft: '10px',
                cursor: 'pointer',
                borderRadius: '3px',
              }}
            >
              Accept
            </button>
          </p>
        </div>
      )}
    </>
  );
}
