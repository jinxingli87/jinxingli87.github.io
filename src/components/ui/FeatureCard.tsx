import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`p-6 h-full flex flex-col ${className}`}>
      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-4 text-black">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-2 tracking-tight">{title}</h3>
      <p className="text-[#6e6e73] text-lg flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;