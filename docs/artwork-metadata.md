# Artwork metadata guide

The editable index for the Selected and All work grids is
`app/data/archive-catalog.json`. Every displayed image is listed under `works`
using its unchanged filename as the key. Interactive Sketchfab records are listed
under `models`.

This is the only file needed for ordinary archive editing. It controls titles,
alt text, categories, dates, ordering, grouping, visibility and the concise
metadata shown in the lightbox. The accompanying
`app/data/archive-catalog.schema.json` supplies allowed values and editor
validation.

Named works with full standalone detail pages can still have a richer
`VisualWork` record in `app/content/works.ts`. That file is no longer required
for routine grid sorting or metadata corrections.

## Quick archive editing

The top-level `featured` list controls the homepage selection. Add or remove
filenames there and rearrange the lines to set the homepage order.

Find an image filename inside `archive-catalog.json`, then edit its fields:

- `title`: the visible title.
- `alt`: a concise description of what can be seen.
- `category`: `illustration`, `maps`, `3d`, `web-interfaces`, or
  `brand-graphic-design`.
- `collection`: `main` includes the image in the default All view; `studies`
  keeps it accessible through its category without placing it in that opening
  selection.
- `visible`: set to `false` to hide the record without deleting its image or
  metadata.
- `order`: lower numbers appear first in All Work. Decimals are valid, so an
  image can be placed between `20` and `30` using `25`.
- `year`, `practice`, `form`, `tools`, `context`, `credits`, and `creditLine`:
  optional lightbox information.
- `series`: give related records the same `id` and `title` to combine them into
  one tile. Remove `series` to show an image on its own.

Run `pnpm archive:sync` after adding images. The command appends missing records
with useful defaults and never overwrites existing catalogue entries. It also
runs automatically before `pnpm dev` and `pnpm build`.

## Authoring workflow

1. Add the image to `app/images/all-work` or `app/images/landing-page`; the next
   dev/build run discovers it and adds a starter entry to
   `archive-catalog.json`.
2. Keep the full-resolution master outside the deployed repository, then run
   `pnpm image:optimize`. The content-hash manifest prevents unchanged files
   from being recompressed on later runs.
3. Open `app/data/archive-catalog.json`, find the new filename, and review its
   title, alt text, category, collection and order. Add its filename to
   `featured` if it should also appear on the homepage.
4. Only if the image needs a full standalone detail page, add a richer record to
   `app/content/works.ts`.
5. Add factual catalogue information: title, date, form, subjects, materials,
   techniques, tools, dimensions, and credits.
6. Write the short summary and longer interpretive text.
7. Add sources, rights, and external links.
8. Review SEO title, description, keywords, and share image.
9. Change `editorial.status` from `draft` to `in-review`, then to `ready`.

Draft editorial prose is intentionally not shown on the public detail page and
is not used as the SEO description. This lets records be completed gradually
without presenting placeholder writing as finished work.

## Image folders

The two archive locations have deliberate, separate asset boundaries:

- `app/images/landing-page` supplies only the image-led gallery on
  the homepage.
- `app/images/all-work` supplies the complete `/work` archive and is the
  canonical home of every work's primary image.

The `app/images/jona-images` folder remains separate and supplies personal
photographs such as the image on the About/CV page. Other image folders continue
to support legacy project pages, annual archInk galleries, services, and site
branding; they are not read by either visual-archive grid.

## Rights defaults and overrides

`app/data/image-metadata.json` contains the site-wide default rights statement.
It applies only when an image does not have a more specific credit or licence.
For client, institutional, collaborative, public-domain, or openly licensed
material, add the exact rights information to the corresponding `WorkImage`
record. Individual image rights always take priority over the site default.

## Top-level identity

| Field      | Required | Purpose                                                                        |
| ---------- | -------- | ------------------------------------------------------------------------------ |
| `slug`     | yes      | Stable, lowercase URL identifier. Do not change after publishing.              |
| `title`    | yes      | Public title of the work. Use sentence case unless the official title differs. |
| `subtitle` | no       | Clarifies a title without overloading it.                                      |

## Archive display

For the grid, edit `order`, `collection`, `visible`, and `series` in
`archive-catalog.json`. The primary image's intrinsic dimensions determine its
archive-tile proportions, so the image remains uncropped.

| Field   | Required | Purpose                                                     |
| ------- | -------- | ----------------------------------------------------------- |
| `order` | no       | Editorial order in the archive. Lower numbers appear first. |

## Images

`images.primary` identifies the canonical detail-page image for a named work.
The homepage and complete archive grids discover their image files directly
from their respective folders. Add supporting images to `images.gallery` using
the same `WorkImage` structure.

| Images field | Required | Purpose                                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------------------ |
| `primary`    | yes      | Canonical `WorkImage` used on the detail page.                                             |
| `gallery`    | no       | Supporting detail, process, context, or comparison images using the `WorkImage` structure. |

Each `WorkImage` uses the following fields:

| Field                          | Required | Purpose                                                                                             |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `src`                          | yes      | Statically imported image asset. Next.js derives its dimensions.                                    |
| `alt`                          | yes      | Concise description of meaningful visual content for non-visual readers. Do not repeat the caption. |
| `role`                         | yes      | `primary`, `detail`, `process`, `context`, or `comparison`.                                         |
| `title`                        | no       | Image-specific title when different from the work title.                                            |
| `caption`                      | no       | Visible context: what is shown and why it matters.                                                  |
| `longDescription`              | no       | Detailed visual description for complex diagrams, reconstructions, or information-rich images.      |
| `creditLine`                   | no       | Exact public credit line to display with the image.                                                 |
| `rights.creator`               | no       | Photographer, illustrator, institution, or source creator.                                          |
| `rights.copyrightHolder`       | no       | Current rights holder.                                                                              |
| `rights.copyrightYear`         | no       | Copyright year or range.                                                                            |
| `rights.license`               | no       | Human-readable licence, such as `CC BY 4.0` or `All rights reserved`.                               |
| `rights.licenseUrl`            | no       | Canonical licence URL.                                                                              |
| `rights.sourceUrl`             | no       | Original catalogue or publication URL.                                                              |
| `presentation.objectPosition`  | no       | Crop focal point, for example `40% 25%`.                                                            |
| `presentation.backgroundColor` | no       | Neutral background for transparent or isolated assets.                                              |

Alt text describes the image. A caption explains its context. A long
description communicates complex spatial relationships, labels, sequences, or
uncertainty that cannot fit into concise alt text.

## Classification

`classification` makes works searchable and supports future filters.

| Field                   | Required | Purpose                                                                                                   |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `primaryPractice`       | yes      | Main discipline shown in archive labels.                                                                  |
| `form`                  | yes      | Deliverable or visual form, such as reconstruction, object drawing, editorial illustration, or interface. |
| `subjects`              | no       | People, objects, methods, sites, or questions represented.                                                |
| `archaeologicalPeriods` | no       | Period labels, kept separate from creation date.                                                          |
| `cultures`              | no       | Cultural attribution only when evidence supports it.                                                      |
| `places`                | no       | Relevant site, region, museum, or country.                                                                |
| `objectTypes`           | no       | Controlled object categories where applicable.                                                            |
| `themes`                | no       | Interpretive themes such as uncertainty, gender, care, or public archaeology.                             |
| `keywords`              | no       | Search terms and useful synonyms not already captured above.                                              |

Prefer consistent terms across records. Do not place interpretive claims in a
classification field.

## Creation and production

| Field                   | Required | Purpose                                         |
| ----------------------- | -------- | ----------------------------------------------- |
| `dateLabel`             | no       | Human-readable date or range shown publicly.    |
| `startYear` / `endYear` | no       | Numeric dates for sorting and future filtering. |
| `completedOn`           | no       | Exact ISO date (`YYYY-MM-DD`) when meaningful.  |
| `materials`             | no       | Physical or source materials.                   |
| `techniques`            | no       | Processes used to make the work.                |
| `tools`                 | no       | Software, equipment, or instruments.            |
| `dimensions`            | no       | Width, height, optional depth, and unit.        |
| `duration`              | no       | Project or production duration when relevant.   |

Materials, techniques, and tools are deliberately separate: `ink` is a
material, `stippling` is a technique, and `Procreate` is a tool.

## Editorial content

| Field              | Required | Purpose                                                             |
| ------------------ | -------- | ------------------------------------------------------------------- |
| `status`           | yes      | `draft`, `in-review`, or `ready`. Only ready prose is published.    |
| `summary`          | no       | One or two sentences answering what the work is and why it matters. |
| `description`      | no       | Longer account of the work and its context.                         |
| `researchQuestion` | no       | Question, problem, or brief that initiated the work.                |
| `approach`         | no       | Chosen visual or methodological strategy.                           |
| `process`          | no       | Important stages, decisions, evidence, and revisions.               |
| `interpretation`   | no       | What is known, inferred, reconstructed, or intentionally uncertain. |
| `notes`            | no       | Internal authoring notes; never rendered publicly.                  |

Avoid promotional filler. Prefer concrete statements about the evidence, visual
decision, audience, constraint, or result.

## Credits and context

| Field              | Required | Purpose                                                                     |
| ------------------ | -------- | --------------------------------------------------------------------------- |
| `roles`            | no       | Your specific responsibilities. Use separate list items for distinct roles. |
| `client`           | no       | Commissioning client.                                                       |
| `institution`      | no       | Research, heritage, or publishing institution.                              |
| `project`          | no       | Parent research or publication project.                                     |
| `collaborators`    | no       | Named collaborators and, where useful, their roles.                         |
| `acknowledgements` | no       | Other contributors, collections, or support.                                |
| `context`          | no       | Short factual context not represented by the fields above.                  |

## Sources and links

Each source has a `label`, with optional full `citation`, `url`, and ISO
`accessedOn` date. Sources support archaeological claims, reference objects, or
identify visual evidence.

Links use one of these types:

- `case-study`
- `publication`
- `project`
- `process`
- `external`

## SEO and sharing

`seo` is optional. The detail page otherwise builds a neutral description from
the title and form and uses the primary image for Open Graph and Twitter cards.

| Field         | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| `title`       | Search/share title when the artwork title alone lacks context. |
| `description` | Accurate standalone summary of roughly 120–160 characters.     |
| `keywords`    | Small set of specific discovery terms.                         |
| `image`       | Alternate share image using the full `WorkImage` structure.    |

## Fill-in template

```ts
{
  slug: 'stable-url-slug',
  title: 'Official work title',
  subtitle: 'Optional clarifying subtitle',
  display: {
    order: 20,
  },
  images: {
    primary: {
      src: importedImage,
      alt: 'Concise description of the visible content',
      role: 'primary',
      caption: 'What is shown, with the context a reader needs.',
      longDescription: 'Optional detailed account of a complex visual.',
      creditLine: 'Illustration by Jona Schlegel, 2026.',
      rights: {
        creator: 'Jona Schlegel',
        copyrightHolder: 'Jona Schlegel',
        copyrightYear: '2026',
        license: 'All rights reserved',
      },
      presentation: { objectPosition: '50% 50%' },
    },
    gallery: [],
  },
  classification: {
    primaryPractice: 'Archaeological illustration',
    form: 'Reconstruction drawing',
    subjects: [],
    archaeologicalPeriods: [],
    cultures: [],
    places: [],
    objectTypes: [],
    themes: [],
    keywords: [],
  },
  creation: {
    dateLabel: '2026',
    startYear: 2026,
    endYear: 2026,
    materials: [],
    techniques: [],
    tools: [],
  },
  editorial: {
    status: 'draft',
    summary: '',
    description: '',
    researchQuestion: '',
    approach: '',
    process: '',
    interpretation: '',
    notes: '',
  },
  credits: {
    roles: [],
    collaborators: [],
    acknowledgements: [],
  },
  sources: [],
  links: [],
  seo: {
    title: '',
    description: '',
    keywords: [],
  },
}
```

## Ready-to-publish checklist

- Title and URL slug are final.
- Primary alt text describes the image without editorial interpretation.
- Complex visuals have a long description.
- Dates, materials, techniques, tools, dimensions, and roles are factual.
- Archaeological claims and source objects are cited.
- Reconstruction choices and uncertainty are explicit.
- Every collaborator and rights holder is credited.
- The summary works without seeing the image.
- SEO description is accurate and specific.
- `editorial.status` is `ready` only after copy review.
