import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CompteAReboursComponent } from "../compte-a-rebours/compte-a-rebours.component";
import { KeynoteSpeakerComponent } from "../keynote-speaker/keynote-speaker.component";
import { SponsorComponent } from '../sponsor/sponsor.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { EvenementComponent } from "../web/evenement/evenement.component";
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, CompteAReboursComponent, KeynoteSpeakerComponent, SponsorComponent, EvenementComponent, RouterLink],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
   slides = [
    {
      conference: 'Marché Africain des Solutions Spatiales (MASS)',
      date: 'Du 16 au 20 Juin 2025',
      year: '2025',
      description: 'Abidjan - Côte d’Ivoire,  Parc des Expositions',
      aboutText: 'A PROPOS',
      registerText: 'INSCRIVEZ-VOUS',
      image: '../../../assets/slide.jpeg'
    },
    {
      conference: 'L\'espace n\'est pas une option, mais une nécessité. La technologie spatiale est fondamentale pour les pays africains.',
      year: '2025',
      description: 'Abidjan - Côte d’Ivoire,  Parc des Expositions',
      aboutText: 'A PROPOS',
      registerText: 'INSCRIVEZ-VOUS',
      image: '../../../assets/page_2_img_1.png'
    }
  ];
 
 // slides: any[] = [];
  currentIndex = 0;
  slideInterval: Subscription | undefined;
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
    this.startSlideShow();
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      this.slideInterval.unsubscribe();
    }
  }

  startSlideShow() {
    this.slideInterval = interval(3000).subscribe(() => {
      this.nextSlide();
    });
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }

 /*  initializeSlides() {
    this.slides = [
      {
        conference: this.translate.instant('conference'),
        date: this.translate.instant('date'),
        year: this.translate.instant('year'),
        description: this.translate.instant('description'),
        aboutText: this.translate.instant('about'),
        registerText: this.translate.instant('register'),
        image: '../../../assets/slide.jpeg'
      },
      {
        conference: this.translate.instant('desc1'),
        year: this.translate.instant('year'),
        description: this.translate.instant('description'),
        aboutText: this.translate.instant('about'),
        registerText: this.translate.instant('register'),
        image: '../../../assets/page_2_img_1.png'
      }
    ];
  } */
}
