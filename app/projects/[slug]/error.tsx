'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-4 text-3xl font-bold">Could not load this project</h1>
      <p className="mb-8 text-gray-600">
        Something went wrong while loading the project. Please try again or go
        back to the projects overview.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-primary-green px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/projects"
          className="border border-gray-300 px-6 py-3 text-sm font-semibold text-primary-dark transition-colors hover:border-gray-500"
        >
          All projects
        </Link>
      </div>
    </div>
  );
}
