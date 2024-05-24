import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
