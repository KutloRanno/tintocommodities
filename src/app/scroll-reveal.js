'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className, labelledBy, id }) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;

    // Only animate sections that have not already entered the viewport.
    if (section.getBoundingClientRect().top < window.innerHeight) return;
    section.dataset.reveal = 'waiting';
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.dataset.reveal = 'visible';
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -8% 0px' });
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return <section id={id} ref={ref} className={className} aria-labelledby={labelledBy}>{children}</section>;
}
