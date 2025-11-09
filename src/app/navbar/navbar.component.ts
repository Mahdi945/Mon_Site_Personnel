import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  currentLanguage = 'en';
  isMenuOpen = false;
  isLanguageDropdownOpen = false;

  constructor(private translate: TranslateService) {
    // Charger la langue sauvegardée ou utiliser 'en' par défaut
    const savedLang = localStorage.getItem('language') || 'en';
    this.currentLanguage = savedLang;
    translate.setDefaultLang(savedLang);
    translate.use(savedLang);
  }

  ngOnInit() {
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isLanguageDropdownOpen = false;
  }

  toggleLanguageDropdown(event: Event) {
    event.preventDefault();
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    // Sauvegarder la langue choisie
    localStorage.setItem('language', lang);
    this.isLanguageDropdownOpen = false;
    this.closeMenu();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    // Sauvegarder le thème choisi
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Add method to get available languages
  getAvailableLanguages() {
    return [
      { code: 'en', name: 'NAVBAR.ENGLISH' },
      { code: 'fr', name: 'NAVBAR.FRENCH' },
      { code: 'ar', name: 'NAVBAR.ARABIC' },
      { code: 'de', name: 'NAVBAR.GERMAN' }
    ];
  }
}
