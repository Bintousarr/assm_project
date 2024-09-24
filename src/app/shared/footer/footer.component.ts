import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit(){
    this.translate.setDefaultLang('en');
    
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }

}
