import { Component, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from './servies/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: string = '';
  selectedLanguage: string = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe((language) => {
      this.selectedLanguage = language;
    });

    const name = 'John Doe';
    this.title = $localize`:@@ANGULAR_APP_PERSONDETAILS:person details ${name}`;
  }
}
