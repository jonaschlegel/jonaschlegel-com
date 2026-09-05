# Visual archive image folders

- `all-work` is the canonical collection used by `/work` and work detail pages.
- `landing-selection` contains copies of the works selected for the homepage.

Use the same filename in both folders for a selected work. Because Next.js uses
static image imports to preserve dimensions and optimise output, add or remove
the corresponding `selection` import in `app/data/work.ts` when changing the
homepage selection.

Personal photographs stay in `app/images/jona-images`; the About/CV page uses
that folder independently of the visual archive.
