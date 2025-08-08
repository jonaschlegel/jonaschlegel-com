// Utility functions for tracking when client-side scripts are blocked

export const trackEvent = async (
  eventName: string,
  parameters?: Record<string, any>,
) => {
  try {
    // Try Google Analytics first
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
      return;
    }

    // Fallback to server-side tracking
    if (typeof window !== 'undefined') {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: eventName,
            parameters,
            url: window.location.href,
            userAgent: navigator.userAgent,
          }),
        });
      } catch (error) {
        console.warn('Server-side tracking failed:', error);
      }
    }
  } catch (error) {
    console.warn('Event tracking failed:', error);
  }
};

export const trackPageView = async (url?: string) => {
  try {
    let tracked = false;

    // Try client-side tracking first
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-6S9J34MPR3', {
        page_location: url || window.location.href,
        page_title: document.title,
      });
      tracked = true;
    }

    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      tracked = true;
    }

    // If client-side tracking failed, use server-side fallback
    if (!tracked && typeof window !== 'undefined') {
      await trackEvent('page_view', {
        page_location: url || window.location.href,
        page_title: document.title,
      });
    }
  } catch (error) {
    console.warn('Page view tracking failed:', error);
  }
};

export const isTrackingBlocked = () => {
  if (typeof window === 'undefined')
    return { googleAnalytics: true, facebookPixel: true };

  return {
    googleAnalytics: !window.gtag,
    facebookPixel: !window.fbq,
  };
};
