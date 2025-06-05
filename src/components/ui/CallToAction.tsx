import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  primary?: boolean;
  className?: string;
};

const Button = ({ href, children, primary = true, className = '' }: ButtonProps) => {
  return (
    <a 
      href={href}
      className={`
        ${primary ? 'btn-primary' : 'btn-accent'}
        ${className}
      `}
    >
      {children}
    </a>
  );
};

type CallToActionProps = {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
};

const CallToAction = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink,
  className = '',
}: CallToActionProps) => {
  return (
    <section className={`bg-[#f5f5f7] py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryButtonText && (
            <Button href={primaryButtonLink} primary>
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <Button href={secondaryButtonLink} primary={false}>
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;