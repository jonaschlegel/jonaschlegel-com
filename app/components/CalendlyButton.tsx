'use client';

import { useEffect, useState } from 'react';

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
}

export default function CalendlyButton({
  url = 'https://calendly.com/jonaschlegel/consultation',
  text = 'Schedule a Call',
  className = '',
}: CalendlyButtonProps) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    // Check if Calendly is loaded
    const checkCalendly = (): void => {
      if (typeof window !== 'undefined') {
        // Check if Calendly exists and has the required method
        const hasCalendly =
          'Calendly' in window &&
          typeof (window.Calendly as Record<string, unknown>)
            .initPopupWidget === 'function';

        if (hasCalendly) {
          setIsCalendlyLoaded(true);
          return;
        }
      }
      // If not loaded, check again in 100ms
      timeoutId = window.setTimeout(checkCalendly, 100);
    };

    checkCalendly();

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const openCalendly = (): void => {
    if (typeof window !== 'undefined' && isCalendlyLoaded) {
      // Type assertion with proper checking
      const calendlyWidget = window.Calendly as
        | Record<string, unknown>
        | undefined;
      if (
        calendlyWidget &&
        typeof calendlyWidget.initPopupWidget === 'function'
      ) {
        (calendlyWidget.initPopupWidget as (options: { url: string }) => void)({
          url,
        });
        return;
      }
    }

    console.warn('Calendly is not yet loaded');
    // Fallback: open in new tab
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <button
      onClick={openCalendly}
      className={`inline-flex items-center rounded-full bg-primary-green px-8 py-3 font-semibold text-primary-dark transition-all duration-300 hover:bg-primary-teal hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
}
