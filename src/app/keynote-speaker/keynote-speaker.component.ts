import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-keynote-speaker',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './keynote-speaker.component.html',
  styleUrl: './keynote-speaker.component.scss'
})
export class KeynoteSpeakerComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  

}
