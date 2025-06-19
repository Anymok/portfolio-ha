import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  standalone: false,
  template: `
    <span class="typing-text">
      {{ displayText }}<span class="cursor" [class.blink]="isTyping">|</span>
    </span>
  `,
  styles: [`
    .typing-text {
      font-family: 'Courier New', monospace;
      font-weight: 600;
    }
    
    .cursor {
      color: #4a6bff;
      font-weight: bold;
    }
    
    .cursor.blink {
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `]
})
export class TypingEffectComponent implements OnInit, OnDestroy {
  @Input() text: string = '';
  @Input() speed: number = 100;
  @Input() delay: number = 500;

  displayText: string = '';
  isTyping: boolean = true;
  private currentIndex: number = 0;
  private interval: any;

  ngOnInit() {
    setTimeout(() => {
      this.startTyping();
    }, this.delay);
  }

  private startTyping() {
    this.interval = setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.displayText += this.text[this.currentIndex];
        this.currentIndex++;
      } else {
        this.isTyping = false;
        clearInterval(this.interval);
      }
    }, this.speed);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
} 