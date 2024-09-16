import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-adama',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './adama.component.html',
  styleUrl: './adama.component.scss'
})
export class AdamaComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
