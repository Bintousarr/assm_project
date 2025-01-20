import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profesional-visitor',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './profesional-visitor.component.html',
  styleUrl: './profesional-visitor.component.scss'
})
export class ProfesionalVisitorComponent {
  translate: TranslateService = inject(TranslateService)
  ngOnInit() {
    this.translate.setDefaultLang('fr');
    
  }
  translateText(lang: string) {
    this.translate.use(lang);
  }
}
