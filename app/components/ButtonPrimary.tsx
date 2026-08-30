import type { ButtonProps } from './Button';
import Button from './Button';

export interface ButtonPrimaryProps extends ButtonProps {
  email?: string;
  calendlyEventSlug?: string;
}

const classes =
  'inline-flex min-h-12 items-center justify-center rounded-[0.4rem_1rem_0.4rem_0.8rem] bg-primary-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark';

/** Primary call to action with direct, script-free email and scheduling links. */
const ButtonPrimary = ({
  className = '',
  email,
  calendlyEventSlug,
  children,
  ...buttonProps
}: ButtonPrimaryProps) => {
  if (email) {
    return (
      <a href={`mailto:${email}`} className={`${classes} ${className}`}>
        {children}
      </a>
    );
  }

  if (calendlyEventSlug) {
    return (
      <a
        href={`https://calendly.com/${calendlyEventSlug}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classes} ${className}`}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Button
      className={`bg-primary-green font-semibold text-white hover:bg-primary-dark ${className}`}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
