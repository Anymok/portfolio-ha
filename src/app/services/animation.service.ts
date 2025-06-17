import { Injectable } from '@angular/core';
import { animate, stagger, spring, timeline } from '@motionone/dom';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() { }

  // Animation de fade in simple
  fadeIn(element: HTMLElement, options = {}) {
    return animate(
      element,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5, easing: 'ease-out', ...options }
    );
  }

  // Animation de fade in en cascade pour plusieurs éléments
  staggerFadeIn(elements: HTMLElement[], options = {}) {
    elements.forEach((element, index) => {
      animate(
        element,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, delay: index * 0.1, easing: 'ease-out', ...options }
      );
    });
  }

  // Animation de slide in depuis la gauche
  slideInLeft(element: HTMLElement, options = {}) {
    return animate(
      element,
      { x: [-100, 0], opacity: [0, 1] },
      { duration: 0.5, easing: 'ease-out', ...options }
    );
  }

  // Animation de slide in depuis la droite
  slideInRight(element: HTMLElement, options = {}) {
    return animate(
      element,
      { x: [100, 0], opacity: [0, 1] },
      { duration: 0.5, easing: 'ease-out', ...options }
    );
  }

  // Animation de scale in
  scaleIn(element: HTMLElement, options = {}) {
    return animate(
      element,
      { scale: [0.8, 1], opacity: [0, 1] },
      { duration: 0.5, easing: 'ease-out', ...options }
    );
  }

  // Animation de bounce
  bounce(element: HTMLElement, options = {}) {
    return animate(
      element,
      { y: [0, -20, 0] },
      { duration: 0.5, easing: spring(), ...options }
    );
  }

  // Animation de timeline pour des séquences complexes
  createTimeline(animations: any[]) {
    return timeline(animations);
  }
} 