import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimationType = 'fadeIn' | 'slideUp';

type ScrollAnimationProps = {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
};

const ScrollAnimation = ({
  children,
  type = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (type) {
      case 'fadeIn':
        return 'animate-fadeIn';
      case 'slideUp':
        return 'animate-slideUp';
      default:
        return 'animate-fadeIn';
    }
  };

  const getDelayClass = () => {
    if (delay === 0) return '';
    return `delay-${delay}`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${getDelayClass()} ${className}`}
      style={{ 
        animationDelay: delay ? `${delay}ms` : undefined,
        animationPlayState: isVisible ? 'running' : 'paused'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;