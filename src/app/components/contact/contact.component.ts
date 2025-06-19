import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  private animation: any;

  ngOnInit() {
    // Attendre que le DOM soit prêt
    setTimeout(() => {
      this.loadLottieAnimation();
    }, 100);
  }

  private loadLottieAnimation() {
    try {
      console.log('Tentative de chargement de l\'animation Lottie...');
      console.log('Container:', this.lottieContainer?.nativeElement);
      
      if (!this.lottieContainer?.nativeElement) {
        console.error('Container Lottie non trouvé');
        return;
      }

      this.animation = lottie.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './mail.json'
      });

      // Ajouter des listeners pour diagnostiquer
      this.animation.addEventListener('DOMLoaded', () => {
        console.log('Animation Lottie chargée avec succès');
      });

      this.animation.addEventListener('error', (error: any) => {
        console.error('Erreur lors du chargement de l\'animation:', error);
      });

    } catch (error) {
      console.error('Erreur lors de l\'initialisation de l\'animation:', error);
    }
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  }
}
