'use client';

import { BsInstagram } from 'react-icons/bs';

// Static Instagram posts - update these periodically with your latest content
// To update: Replace the image URLs and post URLs with your recent posts
const instagramPosts = [
  {
    id: '1',
    imageUrl: '/images/instagram/post-1.jpg',
    postUrl: 'https://www.instagram.com/archaeoink/',
    alt: 'Archaeological illustration work',
  },
  {
    id: '2',
    imageUrl: '/images/instagram/post-2.jpg',
    postUrl: 'https://www.instagram.com/archaeoink/',
    alt: 'Fieldwork documentation',
  },
  {
    id: '3',
    imageUrl: '/images/instagram/post-3.jpg',
    postUrl: 'https://www.instagram.com/archaeoink/',
    alt: 'Science communication project',
  },
  {
    id: '4',
    imageUrl: '/images/instagram/post-4.jpg',
    postUrl: 'https://www.instagram.com/archaeoink/',
    alt: 'Digital heritage work',
  },
  {
    id: '5',
    imageUrl: '/images/instagram/post-5.jpg',
    postUrl: 'https://www.instagram.com/archaeoink/',
    alt: 'Research visualization',
  },
  {
    id: '6',
    imageUrl: '/images/instagram/post-6.jpg',
    postUrl: 'https://www.instagram.com/archaeoink/',
    alt: 'Archaeological mapping',
  },
];

const InstagramGrid = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BsInstagram className="h-5 w-5 text-primary-teal" />
            @archaeoink
          </h2>
          <a
            href="https://www.instagram.com/archaeoink/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-teal hover:underline flex items-center gap-1"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {instagramPosts.map((post) => (
            <a
              key={`instagram-${post.id}`}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-800"
            >
              {/* Placeholder gradient until real images are added */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/30 to-primary-green/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                <BsInstagram className="h-6 w-6 text-white" />
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-neutral-500 mt-4 text-center">
          Behind-the-scenes looks at illustration work, fieldwork, and
          archaeological research
        </p>
      </div>
    </section>
  );
};

export default InstagramGrid;
