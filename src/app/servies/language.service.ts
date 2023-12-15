import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguageSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('en');

  selectedLanguage$: Observable<string> =
    this.selectedLanguageSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  getSelectedLanguage(): string {
    return this.selectedLanguageSubject.value;
  }

  setSelectedLanguage(language: string): void {
    this.selectedLanguageSubject.next(language);
  }

  changeLanguage(newLocale: string): void {
    try {
      this.getSelectedLanguage();

      const currentUrl = this.document.location.href;
      const newUrl = currentUrl.replace(`/${this.locale}/`, `/${newLocale}/`);

      this.document.location.href = newUrl;
    } catch (error) {
      console.error('Error while changing language:', error);
    }
  }
}
