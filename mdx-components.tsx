import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default HTML elements with custom styling
    h1: ({ children }) => (
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-6 mt-12 text-3xl font-semibold text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 mt-8 text-2xl font-semibold text-white">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-6 leading-relaxed text-neutral-300">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-6 list-disc pl-6 text-neutral-300">{children}</ul>
    ),
    li: ({ children }) => <li className="mb-2 leading-relaxed">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-neutral-200">{children}</em>
    ),
    // Use Next.js Image component for better performance
    img: ({ src, alt, ...props }) => (
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={600}
        className="rounded-lg"
        {...props}
      />
    ),
    // Custom caption component for figure captions
    div: ({ children, className, ...props }) => {
      if (className === 'caption') {
        return (
          <div className="mt-2 text-sm italic text-neutral-400" {...props}>
            {children}
          </div>
        );
      }
      return (
        <div className={className} {...props}>
          {children}
        </div>
      );
    },
    ...components,
  };
}
