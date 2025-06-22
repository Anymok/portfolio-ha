import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-toggle',
  standalone: false,
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('fr', style({ transform: 'rotateX(0deg)' })),
      state('en', style({ transform: 'rotateX(0deg)' })),
      transition('fr <=> en', [
        animate('0.6s ease-in-out')
      ])
    ])
  ]
})
export class LanguageToggleComponent implements OnInit, OnDestroy {
  currentLanguage$;
  currentLanguage: string = 'fr';
  private subscription: Subscription = new Subscription();

  constructor(private languageService: LanguageService) {
    this.currentLanguage$ = this.languageService.currentLanguage$;
  }

  ngOnInit() {
    this.subscription.add(
      this.languageService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
      })
    );
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  getLanguageText(): string {
    const currentLang = this.languageService.getCurrentLanguage();
    return currentLang === 'fr' ? 'EN' : 'FR';
  }

  getLanguageName(): string {
    const currentLang = this.languageService.getCurrentLanguage();
    return currentLang === 'fr' ? 'Français' : 'English';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
} 