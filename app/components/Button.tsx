'use client';

import type { Route } from 'next';
import Link from 'next/link';
import type { ButtonHTMLAttributes, FC } from 'react';
import React from 'react';

export interface ButtonProps {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  className = 'text-neutral-200 disabled:cursor-not-allowed',
  translate = '',
  sizeClass = 'py-3 px-4 mt-5 mb-5 sm:py-2 sm:px-6',
  fontSize = 'text-sm sm:text-base font-medium',
  disabled = false,
  href,
  children,
  type,
  loading,
  onClick = () => {},
}) => {
  const CLASSES = `relative inline-flex items-center justify-center rounded-full transition-colors ${fontSize} ${sizeClass} ${translate} ${className}`;

  const renderLoading = () => {
    return (
      <svg
        className="-ml-1 mr-3 size-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
  };

  if (href) {
    return (
      <Link href={href as Route} className={CLASSES} onClick={onClick}>
        {children || `This is Link`}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={CLASSES}
      onClick={onClick}
      type={type}
    >
      {loading && renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
