import { useEffect, useCallback } from 'react';

export const useSmoothScroll = () => {
  const smoothScrollTo = useCallback((target: string | Element, duration: number = 800) => {
    const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
    
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  const smoothScrollToTop = useCallback((duration: number = 600) => {
    smoothScrollTo('body', duration);
  }, [smoothScrollTo]);

  useEffect(() => {
    // Add smooth scroll behavior to all internal links
    const handleInternalLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          smoothScrollTo(href, 800);
        }
      }
    };

    document.addEventListener('click', handleInternalLinkClick);
    
    return () => {
      document.removeEventListener('click', handleInternalLinkClick);
    };
  }, [smoothScrollTo]);

  return {
    smoothScrollTo,
    smoothScrollToTop,
  };
};
