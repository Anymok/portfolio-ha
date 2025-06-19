import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { ScrollService } from '../../shared/services/scroll.service';
import lottie from 'lottie-web';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('skillBadgeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('socialLinkAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  private animation: any;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.loadLottieAnimation();
  }

  private loadLottieAnimation() {
    this.animation = lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/about.json'
    });
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.scrollService.scrollToSection(sectionId);
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  }
}
