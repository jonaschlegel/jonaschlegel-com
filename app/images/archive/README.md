# Visual archive image folders

The active image folders live directly under `app/images`:

- `../all-work` is the canonical collection used by `/work` and work detail pages.
- `../landing-page` contains copies of the works selected for the homepage.
- `../jona-images` contains personal photographs used by the About/CV page.

This `archive` folder contains the remaining source material and legacy assets,
kept out of the two visual-archive grids.

Use the same filename in both folders for a selected work. Because Next.js uses
static image imports to preserve dimensions and optimise output, add or remove
the corresponding `selection` import in `app/content/works.ts` when changing the
homepage selection.

Personal photographs stay in `app/images/jona-images`; the About/CV page uses
that folder independently of the visual archive.
