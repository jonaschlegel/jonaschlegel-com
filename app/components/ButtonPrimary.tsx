'use client';

import React from 'react';
import type { ButtonProps } from './Button';
import Button from './Button';

declare global {
  interface Window {
    Calendly: {
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
      window.Calendly.initPopupWidget({
        url: `https://calendly.com/${calendlyEventSlug}?primary_color=ff3367`,
      });
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
