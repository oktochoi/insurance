'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
};

export default function RevealOnScroll({ children, className = '' }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      setShown(true);
    };

    const rect = el.getBoundingClientRect();
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    if (rect.top < vh * 0.92 && rect.bottom > -40) {
      reveal();
      return;
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          reveal();
          obs.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px 8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className} ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      } transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none`}
      style={{ transitionDelay: '0ms' }}
    >
      {children}
    </div>
  );
}
