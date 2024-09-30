'use client';

import React from 'react';
import type { ButtonProps } from './Button';
import Button from './Button';

export interface ButtonSecondaryProps extends ButtonProps {
  pdfUrl?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  pdfUrl,
  ...args
}) => {
  return (
    <Button
      className={`rounded-full border font-semibold text-white ${className}`}
      {...args}
      onClick={() => {
        if (pdfUrl) {
          const link = document.createElement('a');
          link.href = pdfUrl;

          const fileName = pdfUrl.split('/').pop() || 'Portfolio.pdf';

          link.download = fileName;
          link.click();
        }
      }}
    />
  );
};

export default ButtonSecondary;
