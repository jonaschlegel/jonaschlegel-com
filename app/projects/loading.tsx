/** Loading skeleton for the projects listing page. */
export default function ProjectsLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-1/3 rounded bg-neutral-200" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="aspect-[4/3] rounded bg-neutral-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
