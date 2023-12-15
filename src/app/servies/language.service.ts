import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private supportedLanguages: string[] = ['en', 'nl', 'es'];
  private selectedLanguageSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('en');

  selectedLanguage$: Observable<string> =
    this.selectedLanguageSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private locale: string
  ) {
    // Extract language from the URL on service initialization
    this.extractLanguageFromUrl();
  }

  getSelectedLanguage(): string {
    return this.selectedLanguageSubject.value;
  }

  setSelectedLanguage(language: string): void {
    if (this.supportedLanguages.includes(language)) {
      this.selectedLanguageSubject.next(language);
      this.updateUrlLanguage(language);
    } else {
      console.error(`Unsupported language: ${language}`);
    }
  }

  private extractLanguageFromUrl() {
    try {
      const currentUrl = this.document.location.href;
      for (const lang of this.supportedLanguages) {
        if (currentUrl.includes(`/${lang}/`)) {
          this.selectedLanguageSubject.next(lang);
          break;
        }
      }
    } catch (error) {
      console.error('Error while extracting language from URL:', error);
    }
  }

  private updateUrlLanguage(language: string) {
    try {
      const currentUrl = this.document.location.href;
      const newUrl = currentUrl.replace(`/${this.locale}/`, `/${language}/`);
      this.document.location.href = newUrl;
    } catch (error) {
      console.error('Error while updating URL language:', error);
    }
  }
}
