import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sherif',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sherif.component.html',
  styleUrl: './sherif.component.scss'
})
export class SherifComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
