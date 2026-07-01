import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}

export function ScrollReveal({ children, className = '', delay = 0, staggerChildren = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {staggerChildren && isVisible ? (
        <div className="contents">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] opacity-100 translate-y-0"
              style={{ transitionDelay: `${delay + index * 120}ms` }}
            >
              {child}
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
