import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('navAnimation', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('linkHover', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate('0.2s ease-out', style({ transform: 'scale(1.05)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  activeSection: string = 'about';
  isMobileMenuOpen: boolean = false;
  private scrollListener: any;

  ngOnInit() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Empêcher le scroll du body quand le menu mobile est ouvert
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      this.activeSection = sectionId;
      // Fermer le menu mobile après navigation
      if (this.isMobileMenuOpen) {
        this.toggleMobileMenu();
      }
    }
  }

  private setupScrollListener(): void {
    this.scrollListener = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset pour le header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            this.activeSection = sectionId;
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', this.scrollListener);
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
