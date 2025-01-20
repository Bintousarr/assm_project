import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tidiane',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './tidiane.component.html',
  styleUrl: './tidiane.component.scss'
})
export class TidianeComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
