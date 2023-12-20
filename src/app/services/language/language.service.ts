import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { supportedLanguages, defaultLanguage } from './languages';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  getCurrentLanguage(): string {
    return this.locale;
  }

  setCurrentLanguage(language: string): void {
    if (supportedLanguages.includes(language)) {
      this.setLanguageInUrl(language);
    } else {
      throw new Error(`Unsupported language: ${language}`);
    }
  }
  private setLanguageInUrl(language: string) {
    if (this.locale == language) {
      return;
    }
    const currentUrl = this.document.location.href;

    const newUrl = currentUrl.replace(`/${this.locale}/`, `/${language}/`);

    window.location.href = newUrl;
  }
}
