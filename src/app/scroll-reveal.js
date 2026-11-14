'use client';

import { useEffect, useRef } from 'react';

const clamp = (value) => Math.min(1, Math.max(0, value));
const smoothstep = (value) => value * value * (3 - 2 * value);

export default function ScrollReveal({ children, className, labelledBy, id, hero = false, fadeWithNext = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      if (preference.matches) {
        section.style.removeProperty('--section-opacity');
        section.style.removeProperty('--section-shift');
        return;
      }
      // Measure the stationary section, never the animated content inside it.
      const { top, bottom } = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const entrance = hero ? 1 : smoothstep(clamp((viewport - top) / (viewport * 0.72)));
      const exit = smoothstep(clamp(bottom / (viewport * (fadeWithNext ? 1 : 0.65))));
      section.style.setProperty('--section-opacity', String((0.25 + entrance * 0.75) * exit));
      section.style.setProperty('--section-shift', `${(1 - entrance) * Math.min(64, viewport * 0.08)}px`);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(section);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', schedule);
    };
  }, [hero, fadeWithNext]);

  return (
    <section id={id} ref={ref} className={`${className} section-motion${hero ? ' hero-motion' : ''}`} aria-labelledby={labelledBy}>
      {hero ? children : <div className="section-content">{children}</div>}
    </section>
  );
}
