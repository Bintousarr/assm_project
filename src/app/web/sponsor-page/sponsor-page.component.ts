import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sponsor-page',
  standalone: true,
  imports: [TranslateModule, CommonModule, CarouselModule],
  templateUrl: './sponsor-page.component.html',
  styleUrl: './sponsor-page.component.scss'
})
export class SponsorPageComponent {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<', '>'],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }



}
