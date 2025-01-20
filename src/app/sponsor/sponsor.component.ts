import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss'
})
export class SponsorComponent {
 
   sponsors = [
    '../../../assets/AFRICAN_UNION.png',
    '../../../assets/spon1.png',
    '../../../assets/spon2.png',
    '../../../assets/spon3.png'
  ];

  translate: TranslateService = inject(TranslateService)

  constructor() { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.duplicateImages();
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }

  duplicateImages(): void {
    const sponsorContainer = document.querySelector('.animate-scroll') as HTMLElement;
    const originalContent = sponsorContainer.innerHTML; // Obtenir le contenu actuel

    sponsorContainer.innerHTML += originalContent; // Dupliquer le contenu
  }
}
