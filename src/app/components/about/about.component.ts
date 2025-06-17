import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  @ViewChild('textContent') textContent!: ElementRef;
  @ViewChild('imageContent') imageContent!: ElementRef;

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animationService.fadeIn(this.textContent.nativeElement);
      this.animationService.slideInRight(this.imageContent.nativeElement);
    }, 100);
  }
}
