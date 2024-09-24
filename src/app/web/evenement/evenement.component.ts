import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.scss'
})
export class EvenementComponent {

  translate: TranslateService = inject(TranslateService)
  ngOnInit() {
    this.translate.setDefaultLang('fr');
    
  }
  translateText(lang: string) {
    this.translate.use(lang);
  }
}
