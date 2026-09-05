import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getVisualWork,
  visualWorks,
  type WorkImage,
} from '../../content/works';
import { allWorkAssets, archiveAssets } from '../../content/archive-assets';

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

function sourceFilename(source: string) {
  return source.split('/').pop();
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

  const canonical = `https://jonaschlegel.com/work/${work.slug}`;
  const description =
    work.seo?.description ??
    (work.editorial.status === 'ready' ? work.editorial.summary : undefined) ??
    `${work.title}, ${work.classification.form.toLowerCase()} by Jona Schlegel.`;
  const shareImage = work.seo?.image ?? work.images.primary;
  const shareAsset = [...allWorkAssets, ...archiveAssets].find(
    (asset) => sourceFilename(shareImage.src) === asset.filename,
  );

  return {
    title: work.seo?.title ?? work.title,
    description,
    keywords: work.seo?.keywords ?? work.classification.keywords,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: work.seo?.title ?? work.title,
      description,
      images: [
        {
          url: shareAsset?.src.src ?? shareImage.src,
          width: shareAsset?.width ?? 1200,
          height: shareAsset?.height ?? 900,
          alt: shareImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.seo?.title ?? work.title,
      description,
      images: [shareAsset?.src.src ?? shareImage.src],
    },
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

function ImageCaption({ image }: { image: WorkImage }) {
  const creatorCredit =
    !image.creditLine && image.rights?.creator
      ? `Image: ${image.rights.creator}`
      : undefined;
  const rights = [
    image.rights?.copyrightYear,
    image.rights?.copyrightHolder,
    image.rights?.license,
  ]
    .filter(Boolean)
    .join(' · ');
  const hasCaption =
    image.title ||
    image.caption ||
    image.creditLine ||
    creatorCredit ||
    rights ||
    image.rights?.sourceUrl ||
    image.longDescription;

  if (!hasCaption) return null;

  return (
    <figcaption>
      {image.title ? <strong>{image.title}</strong> : null}
      {image.caption ? <span>{image.caption}</span> : null}
      {image.creditLine ? <span>{image.creditLine}</span> : null}
      {creatorCredit ? <span>{creatorCredit}</span> : null}
      {rights ? (
        <span>
          {rights}
          {image.rights?.licenseUrl ? (
            <>
              {' · '}
              <a href={image.rights.licenseUrl}>Licence</a>
            </>
          ) : null}
        </span>
      ) : null}
      {image.rights?.sourceUrl ? (
        <span>
          <a href={image.rights.sourceUrl}>Image source</a>
        </span>
      ) : null}
      {image.longDescription ? (
        <details>
          <summary>Detailed image description</summary>
          <p>{image.longDescription}</p>
        </details>
      ) : null}
    </figcaption>
  );
}

export default async function VisualWorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getVisualWork(slug);

  if (!work) notFound();

  const publishedEditorial =
    work.editorial.status === 'ready' ? work.editorial : undefined;
  const dimensions = work.creation?.dimensions;
  const dimensionsLabel = dimensions
    ? `${[dimensions.width, dimensions.height, dimensions.depth]
        .filter((value) => value !== undefined)
        .join(' × ')} ${dimensions.unit}`
    : undefined;
  const researchDetails = [
    work.classification.subjects?.length,
    work.classification.archaeologicalPeriods?.length,
    work.classification.cultures?.length,
    work.classification.places?.length,
    work.classification.objectTypes?.length,
    work.classification.themes?.length,
    work.classification.keywords?.length,
    publishedEditorial?.description,
    publishedEditorial?.researchQuestion,
    publishedEditorial?.approach,
    publishedEditorial?.process,
    publishedEditorial?.interpretation,
    work.credits?.roles?.length,
    work.credits?.client,
    work.credits?.institution,
    work.credits?.project,
    work.credits?.collaborators?.length,
    work.credits?.acknowledgements?.length,
    work.credits?.context,
    work.sources?.length,
    work.links?.length,
  ].some(Boolean);
  const primaryAsset = [...allWorkAssets, ...archiveAssets].find(
    (asset) => sourceFilename(work.images.primary.src) === asset.filename,
  );

  return (
    <article className="work-detail">
      <Link href="/work" className="work-back">
        ← Back to all work
      </Link>
      <div className="work-detail__layout">
        <figure className="work-detail__figure">
          <Image
            src={primaryAsset?.src ?? work.images.primary.src}
            alt={work.images.primary.alt}
            width={primaryAsset?.width ?? 1600}
            height={primaryAsset?.height ?? 1200}
            priority
            sizes="(max-width: 800px) 100vw, 68vw"
            style={{
              objectPosition: work.images.primary.presentation?.objectPosition,
              backgroundColor:
                work.images.primary.presentation?.backgroundColor,
            }}
          />
          <ImageCaption image={work.images.primary} />
        </figure>
        <div className="work-detail__copy">
          <p className="archive-eyebrow">
            {work.classification.primaryPractice}
            {work.creation?.dateLabel ? ` · ${work.creation.dateLabel}` : ''}
          </p>
          <h1>{work.title}</h1>
          {work.subtitle ? (
            <p className="work-detail__subtitle">{work.subtitle}</p>
          ) : null}
          {publishedEditorial?.summary ? (
            <p className="work-detail__summary">{publishedEditorial.summary}</p>
          ) : null}
          <dl className="work-facts">
            <Fact label="Date" value={work.creation?.dateLabel} />
            <Fact label="Completed" value={work.creation?.completedOn} />
            <Fact
              label="Practice"
              value={work.classification.primaryPractice}
            />
            <Fact label="Form" value={work.classification.form} />
            <Fact
              label="Materials"
              value={work.creation?.materials?.join(', ')}
            />
            <Fact
              label="Techniques"
              value={work.creation?.techniques?.join(', ')}
            />
            <Fact label="Tools" value={work.creation?.tools?.join(', ')} />
            <Fact label="Dimensions" value={dimensionsLabel} />
            <Fact label="Duration" value={work.creation?.duration} />
          </dl>
          {researchDetails ? (
            <details className="work-more">
              <summary>Research, process &amp; credits</summary>
              <dl className="work-facts">
                <Fact
                  label="Subjects"
                  value={work.classification.subjects?.join(', ')}
                />
                <Fact
                  label="Period"
                  value={work.classification.archaeologicalPeriods?.join(', ')}
                />
                <Fact
                  label="Cultures"
                  value={work.classification.cultures?.join(', ')}
                />
                <Fact
                  label="Places"
                  value={work.classification.places?.join(', ')}
                />
                <Fact
                  label="Object types"
                  value={work.classification.objectTypes?.join(', ')}
                />
                <Fact
                  label="Themes"
                  value={work.classification.themes?.join(', ')}
                />
                <Fact
                  label="Keywords"
                  value={work.classification.keywords?.join(', ')}
                />
                <Fact
                  label="Description"
                  value={publishedEditorial?.description}
                />
                <Fact
                  label="Research question"
                  value={publishedEditorial?.researchQuestion}
                />
                <Fact label="Approach" value={publishedEditorial?.approach} />
                <Fact label="Process" value={publishedEditorial?.process} />
                <Fact
                  label="Interpretation"
                  value={publishedEditorial?.interpretation}
                />
                <Fact label="Role" value={work.credits?.roles?.join(', ')} />
                <Fact label="Client" value={work.credits?.client} />
                <Fact label="Institution" value={work.credits?.institution} />
                <Fact label="Project" value={work.credits?.project} />
                <Fact
                  label="Collaborators"
                  value={work.credits?.collaborators?.join(', ')}
                />
                <Fact
                  label="Acknowledgements"
                  value={work.credits?.acknowledgements?.join(', ')}
                />
                <Fact label="Context" value={work.credits?.context} />
              </dl>
              {work.sources?.length ? (
                <div className="work-links">
                  <h2>Sources</h2>
                  {work.sources.map((source) =>
                    source.url ? (
                      <a key={`source-${source.label}`} href={source.url}>
                        {source.citation ?? source.label} →
                      </a>
                    ) : (
                      <span key={`source-${source.label}`}>
                        {source.citation ?? source.label}
                      </span>
                    ),
                  )}
                </div>
              ) : null}
              {work.links?.length ? (
                <div className="work-links">
                  {work.links.map((link) => (
                    <a key={`link-${link.url}`} href={link.url}>
                      {link.label} →
                    </a>
                  ))}
                </div>
              ) : null}
            </details>
          ) : null}
        </div>
      </div>
      {work.images.gallery?.length ? (
        <section className="work-gallery" aria-labelledby="work-gallery-title">
          <h2 id="work-gallery-title">Details &amp; process</h2>
          <div className="work-gallery__grid">
            {work.images.gallery.map((image) => (
              <figure
                className="work-gallery__figure"
                key={`gallery-${work.slug}-${image.src}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  style={{
                    objectPosition: image.presentation?.objectPosition,
                    backgroundColor: image.presentation?.backgroundColor,
                  }}
                />
                <ImageCaption image={image} />
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
