'use client';

import React from 'react';
import type { ButtonProps } from './Button';
import Button from './Button';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export interface ButtonPrimaryProps extends ButtonProps {
  email?: string;
  calendlyEventSlug?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = '',
  email,
  calendlyEventSlug,
  ...args
}) => {
  const handleClick = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    } else if (calendlyEventSlug) {
      const openCalendlyPopup = () => {
        if (
          window.Calendly &&
          typeof window.Calendly.initPopupWidget === 'function'
        ) {
          try {
            window.Calendly.initPopupWidget({
              url: `https://calendly.com/${calendlyEventSlug}?primary_color=ff3367`,
            });
            return true;
          } catch (error) {
            console.error('Error opening Calendly popup:', error);
            return false;
          }
        }
        return false;
      };

      if (openCalendlyPopup()) {
        return;
      }

      setTimeout(() => {
        if (!openCalendlyPopup()) {
          console.warn('Calendly is not loaded yet, opening in new tab');
          window.open(`https://calendly.com/${calendlyEventSlug}`, '_blank');
        }
      }, 1000);
    }
  };

  return (
    <Button
      className={`rounded-full bg-primary-accent font-semibold text-black ${className}`}
      {...args}
      onClick={handleClick}
    />
  );
};

export default ButtonPrimary;
