import { Component, inject } from '@angular/core';
import { SponsorComponent } from "../../sponsor/sponsor.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-orateur',
  standalone: true,
  imports: [TranslateModule, SponsorComponent, CommonModule, RouterLink],
  templateUrl: './orateur.component.html',
  styleUrl: './orateur.component.scss'
})
export class OrateurComponent {
 
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }
  
  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
