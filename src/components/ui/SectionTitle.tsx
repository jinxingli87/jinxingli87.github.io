import { ReactNode } from 'react';

type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string | ReactNode;
  centered?: boolean;
  className?: string;
};

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = false, 
  className = '' 
}: SectionTitleProps) => {
  return (
    <div 
      className={`mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}
    >
      {subtitle && (
        <p className="text-[#6e6e73] font-medium mb-2 text-sm uppercase tracking-wide">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">{title}</h2>
      {description && (
        <div className="text-xl text-[#6e6e73] leading-relaxed max-w-3xl">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;