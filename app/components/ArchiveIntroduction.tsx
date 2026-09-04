interface ArchiveIntroductionProps {
  title: string;
  count: number;
  children: React.ReactNode;
}

/** Compact page introduction that keeps the work inside the first viewport. */
export default function ArchiveIntroduction({
  title,
  count,
  children,
}: ArchiveIntroductionProps) {
  return (
    <header className="archive-introduction">
      <div>
        <h1>{title}</h1>
        <p className="archive-index">
          {count} works · Illustration · Reconstruction · Visual explanation ·
          Web
        </p>
      </div>
      <p>{children}</p>
    </header>
  );
}
