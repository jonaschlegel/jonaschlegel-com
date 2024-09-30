# Business Portfolio Website

This repository contains the code for the business portfolio website [jonaschlegel.com](https://jonaschlegel.com), showcasing Jona Schlegel’s projects in archaeological science communication, illustration, and web development.

## Technologies Used

- **Framework**: [Next.js 13+](https://nextjs.org/)
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

## Deployment

The website is deployed using [Vercel](https://vercel.com/). You can find the production site at [jonaschlegel.com](https://jonaschlegel.com).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
