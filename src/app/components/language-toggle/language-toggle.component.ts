import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: false,
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {
  currentLanguage$;

  constructor(private languageService: LanguageService) {
    this.currentLanguage$ = this.languageService.currentLanguage$;
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  getLanguageText(): string {
    const currentLang = this.languageService.getCurrentLanguage();
    return currentLang === 'fr' ? 'EN' : 'FR';
  }
} 