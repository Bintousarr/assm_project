import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exposant',
  standalone: true,
  imports: [ TranslateModule, RouterLink],
  templateUrl: './exposant.component.html',
  styleUrl: './exposant.component.scss'
})
export class ExposantComponent {
  translate: TranslateService = inject(TranslateService)
  ngOnInit() {
    this.translate.setDefaultLang('fr');
    
  }
  translateText(lang: string) {
    this.translate.use(lang);
  }
}
