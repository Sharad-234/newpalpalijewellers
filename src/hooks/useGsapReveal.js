// useGsapReveal.js
// Reusable GSAP hook: fade-up reveal on scroll for any element with [data-reveal].
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapReveal(scopeRef, options = {}) {
  const {
    selector = '[data-reveal]',
    y = 40,
    duration = 0.9,
    stagger = 0.12,
    once = true,
  } = options;

  useEffect(() => {
    if (!scopeRef?.current) return;
    const scope = scopeRef.current;
    const targets = scope.querySelectorAll(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: scope,
          start: 'top 78%',
          once,
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef, selector, y, duration, stagger, once]);
}
