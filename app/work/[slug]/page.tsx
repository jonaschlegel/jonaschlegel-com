import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVisualWork, visualWorks } from '../../data/work';

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return visualWorks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getVisualWork(slug);

  if (!work) return {};

  return {
    title: work.title,
    description: work.summary,
    alternates: { canonical: `https://jonaschlegel.com/work/${work.slug}` },
  };
}

function Fact({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div className="work-fact">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default async function VisualWorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getVisualWork(slug);

  if (!work) notFound();

  return (
    <article className="work-detail">
      <Link href="/work" className="work-back">
        ← Back to all work
      </Link>
      <div className="work-detail__layout">
        <figure className="work-detail__figure">
          <Image
            src={work.image}
            alt={work.alt}
            priority
            sizes="(max-width: 800px) 100vw, 68vw"
          />
        </figure>
        <div className="work-detail__copy">
          <p className="archive-eyebrow">
            {work.practice}
            {work.year ? ` · ${work.year}` : ''}
          </p>
          <h1>{work.title}</h1>
          <p className="work-detail__summary">{work.summary}</p>
          <dl className="work-facts">
            <Fact label="Year" value={work.year} />
            <Fact label="Practice" value={work.practice} />
            <Fact label="Form" value={work.form} />
            <Fact label="Tools" value={work.tools.join(', ')} />
          </dl>
          <details className="work-more">
            <summary>Research, process &amp; credits</summary>
            <dl className="work-facts">
              <Fact label="Subject" value={work.subject} />
              <Fact label="Approach" value={work.approach} />
              <Fact label="Role" value={work.role} />
              <Fact label="Context" value={work.context} />
            </dl>
            {work.externalUrl ? (
              <a href={work.externalUrl}>{work.externalLabel} →</a>
            ) : null}
          </details>
        </div>
      </div>
    </article>
  );
}
