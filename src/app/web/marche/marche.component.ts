import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-marche',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './marche.component.html',
  styleUrl: './marche.component.scss'
})
export class MarcheComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
