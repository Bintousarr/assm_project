import { Component, inject } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-voir-marche',
  standalone: true,
  imports: [ TranslateModule],
  templateUrl: './voir-marche.component.html',
  styleUrl: './voir-marche.component.scss'
})
export class VoirMarcheComponent {

  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
