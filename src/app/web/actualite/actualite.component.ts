import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-actualite',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.scss'
})
export class ActualiteComponent {

  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
