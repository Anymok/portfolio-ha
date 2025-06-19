import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToSection(sectionId: string, duration: number = 1000) {
    const element = document.getElementById(sectionId);
    if (element) {
      const start = window.pageYOffset;
      const target = element.offsetTop - 80; // Offset pour le header
      const distance = target - start;
      const startTime = performance.now();

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, start + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }

  // Observer pour les animations d'entrée
  createIntersectionObserver(callback: (entries: IntersectionObserverEntry[]) => void, threshold: number = 0.1) {
    return new IntersectionObserver(callback, {
      threshold,
      rootMargin: '0px 0px -50px 0px'
    });
  }
} 