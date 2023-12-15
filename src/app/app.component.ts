import { Component } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = $localize`:@@ANGULAR_APP_PERSONDETAILS:person details`;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  changeLanguage(event: any) {
    const currentUrl = this.document.location.href;

    const newLocale = event.target.value;

    const newUrl = currentUrl.replace(`/${this.locale}/`, `/${newLocale}/`);

    // Navigate to the new URL
    this.document.location.href = newUrl;
  }
}
