interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
}

/** Direct scheduling link that only connects to Calendly after activation. */
export default function CalendlyButton({
  url = 'https://calendly.com/jonaschlegel',
  text = 'Schedule a call',
  className = '',
}: CalendlyButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-primary-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark ${className}`}
    >
      {text}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
