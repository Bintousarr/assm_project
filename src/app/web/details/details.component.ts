import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }
  
  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
