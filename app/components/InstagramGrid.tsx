'use client';

import { BsInstagram } from 'react-icons/bs';

const instagramPosts = [
  { shortcode: 'DJTTORFO-eB', type: 'post' },
  { shortcode: 'DVV7oN6iEdU', type: 'post' },
  { shortcode: 'DU21848iGpM', type: 'post' },
  { shortcode: 'DUvuQlqCMs9', type: 'reel' },
  { shortcode: 'DQfUyeKiGb9', type: 'post' },
  { shortcode: 'DQpt2StCHtu', type: 'post' },
] as const;

/** Grid of embedded Instagram posts. */
const InstagramGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <BsInstagram className="size-5 text-primary-green" />
            @archaeoink
          </h2>
          <a
            href="https://www.instagram.com/archaeoink/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary-green hover:underline"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post) => {
            const url =
              post.type === 'reel'
                ? `https://www.instagram.com/reel/${post.shortcode}/embed/captioned/`
                : `https://www.instagram.com/p/${post.shortcode}/embed/captioned/`;
            return (
              <div
                key={`ig-${post.shortcode}`}
                className="relative w-full overflow-hidden bg-white"
                style={{ aspectRatio: '4 / 5', minHeight: 320 }}
              >
                <iframe
                  src={url}
                  title={`Instagram ${post.type} by @archaeoink`}
                  className="absolute inset-0 size-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Behind-the-scenes looks at illustration work, fieldwork, and
          archaeological research
        </p>
      </div>
    </section>
  );
};

export default InstagramGrid;
