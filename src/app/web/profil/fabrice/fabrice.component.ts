import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-fabrice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './fabrice.component.html',
  styleUrl: './fabrice.component.scss'
})
export class FabriceComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
