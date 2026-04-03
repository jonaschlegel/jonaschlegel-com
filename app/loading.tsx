/** Root loading skeleton shown during page transitions. */
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-2/3 rounded bg-neutral-200" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-neutral-200" />
          <div className="h-4 w-5/6 rounded bg-neutral-200" />
          <div className="h-4 w-4/6 rounded bg-neutral-200" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-[4/3] rounded bg-neutral-200" />
          <div className="aspect-[4/3] rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
