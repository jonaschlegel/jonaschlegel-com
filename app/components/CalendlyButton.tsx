interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
}

/** Script-free scheduling link that does not load Calendly until activated. */
export default function CalendlyButton({
  url = 'https://calendly.com/jonaschlegel/consultation',
  text = 'Schedule a Call',
  className = '',
}: CalendlyButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center rounded-full bg-primary-green px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark ${className}`}
    >
      {text}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
