import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
