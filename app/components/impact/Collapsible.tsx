'use client';

import { type FC, type ReactNode, useId, useState } from 'react';

interface CollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  count?: number;
  children: ReactNode;
}

/** Expandable/collapsible section with a toggle header. */
const Collapsible: FC<CollapsibleProps> = ({
  title,
  defaultOpen = false,
  count,
  children,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
      >
        <span className="text-sm font-semibold text-gray-700">
          {title}
          {count != null && (
            <span className="ml-2 text-xs font-normal text-gray-400">
              ({count})
            </span>
          )}
        </span>
        <svg
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        hidden={!open}
        className="border-t border-gray-100 px-5 py-4"
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
