import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
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
