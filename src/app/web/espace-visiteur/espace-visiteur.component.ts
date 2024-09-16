import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-espace-visiteur',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './espace-visiteur.component.html',
  styleUrl: './espace-visiteur.component.scss'
})
export class EspaceVisiteurComponent {

  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
