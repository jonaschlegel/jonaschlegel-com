# Business Portfolio Website

This repository contains the code for the business portfolio website [jonaschlegel.com](https://jonaschlegel.com), showcasing Jona Schlegel’s projects in archaeological science communication, illustration, and web development.

## Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **TypeScript**: For type safety and improved developer experience.
- **ESLint**: [UpLeveled ESLint Config](https://github.com/upleveled/eslint-config-upleveled) for linting and code quality.

## Setup and Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/<your-username>/business-portfolio.git
   cd business-portfolio
   ```

2. **Install dependencies using pnpm**:

   ```bash
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   pnpm dev
   ```

   The site will be running locally at `http://localhost:3000`.

## Project Setup Command

The project was created using the following command:

```bash
pnpm create next-app@canary . --app --no-turbo --no-src-dir --no-eslint --import-alias @/* --tailwind
```

This command configures the project with:

- No turbo pack.
- No `src` directory.
- No ESLint (configured separately with [UpLeveled ESLint](https://github.com/upleveled/eslint-config-upleveled)).
- Tailwind CSS for styling.
- TypeScript support.
- Import alias for simplified path imports (`@/`).

## Folder Structure

```plaintext
.
├── .vscode/             # VSCode settings and configurations
├── app/                 # Next.js app directory
├── node_modules/        # Project dependencies
├── public/              # Public assets
├── .gitignore           # Files to ignore in git
├── eslint.config.js     # ESLint configuration (UpLeveled)
├── next-env.d.ts        # TypeScript environment file
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── pnpm-lock.yaml       # Lockfile for pnpm dependencies
├── postcss.config.mjs   # PostCSS configuration
├── prettier.config.js   # Prettier configuration
├── README.md            # Project documentation
├── stylelint.config.js  # Stylelint configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
```

## Linting and Formatting

The project uses the [UpLeveled ESLint config](https://github.com/upleveled/eslint-config-upleveled) for consistent code formatting and linting. You can run linting using the following command:

```bash
pnpm lint
```

Run linting, TypeScript, and stylesheet validation together with:

```bash
pnpm check
```

## Contact Form

The project enquiry form sends email through Resend. Copy `.env.example` to
`.env.local`, add a Resend API key, and use a sender address from a verified
domain. `CONTACT_TO_EMAIL` controls where enquiries are delivered.

## Image Assets

Content and UI images live in `app/images` and are imported from TypeScript or TSX files so Next.js can read their dimensions and optimize them through `next/image`. The `public` folder is reserved for assets that must keep a stable public URL, such as favicons, manifests, and downloadable files.

Next.js is configured in `next.config.ts` to serve modern `avif` and `webp` image responses to browsers that support them, with normal fallbacks handled by the image optimizer. Do not commit separate AVIF/WebP copies for every source image unless the deployment target changes to a static export without Next image optimization.

Use the image scripts before adding or replacing larger assets:

```bash
pnpm image:audit
pnpm image:optimize
```

The optimizer caps the longest edge at 2400px where that produces a smaller
published file, uses quality 82 for lossy formats, and strips embedded EXIF,
IPTC, and XMP metadata from rewritten files. A generated content-hash manifest
makes the command safe to run again: unchanged images are not repeatedly
recompressed. Keep full-resolution master files outside this deployed
repository before optimizing a new batch.

File extensions must match their actual formats (`.jpg` for JPEG, `.png` for
PNG, and `.webp` for WebP). The audit reports format mismatches and unusually
large assets for review.

## Deployment

The website is deployed using [Vercel](https://vercel.com/). You can find the production site at [jonaschlegel.com](https://jonaschlegel.com).

## Copyright and image rights

Unless otherwise credited, portfolio images and illustrations are © Jona
Schlegel / archaeoINK. All rights are reserved. They are not offered under an
open-source software licence. See the public
[image rights and licensing page](https://jonaschlegel.com/image-licensing) for
permission requests and exceptions.

No software licence is currently granted for the repository as a whole.
The site also emits a machine-readable `TDM-Reservation: 1` response header
and blocks named automated-training crawlers in `robots.txt`.
