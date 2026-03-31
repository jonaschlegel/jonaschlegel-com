import { FaArrowRight } from 'react-icons/fa';
import { blogPostsData } from '../data/content';

/** Preview of recent archaeoINK blog posts for the homepage. */
export default function BlogPreview() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
            archaeoINK
          </p>
          <h2 className="font-merriweather text-2xl font-semibold md:text-3xl">
            Latest from the Blog
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPostsData.map((post) => (
            <a
              key={`blog-${post.title.slice(0, 30).replace(/\s+/g, '-').toLowerCase()}`}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-gray-200 p-6 transition-colors hover:border-primary-green"
            >
              <time className="mb-2 text-xs text-neutral-400">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <h3 className="mb-3 font-merriweather text-base font-semibold leading-snug group-hover:text-primary-green">
                {post.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-gray-600">
                {post.excerpt}
              </p>
              <span className="mt-auto flex items-center gap-1 text-sm text-primary-green">
                Read on archaeoINK
                <FaArrowRight className="size-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
