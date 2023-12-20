import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from './services/language/language.service';
import { defaultLanguage } from './services/language/languages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: string = '';
  selectedLanguage: string = defaultLanguage;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.getCurrentLanguage();
    const name = 'John Doe';
    this.title = $localize`:@@ANGULAR_APP_PERSONDETAILS:person details ${name}`;
  }

  onLanguageChange(countryCode: string) {
    this.languageService.setCurrentLanguage(countryCode);
  }
}
