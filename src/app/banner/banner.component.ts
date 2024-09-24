import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CompteAReboursComponent } from "../compte-a-rebours/compte-a-rebours.component";
import { KeynoteSpeakerComponent } from "../keynote-speaker/keynote-speaker.component";
import { SponsorComponent } from '../sponsor/sponsor.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { EvenementComponent } from "../web/evenement/evenement.component";
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, CompteAReboursComponent, KeynoteSpeakerComponent, SponsorComponent, EvenementComponent, RouterLink],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  slides: any[] = [];
  currentIndex = 0;
  slideInterval: Subscription | undefined;
  translate: TranslateService = inject(TranslateService)



  ngOnInit() {
    this.translate.setDefaultLang('en');
    
    // Utilise onLangChange pour s'assurer que les traductions sont chargées et initialisées
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.initializeSlides();
    });


    // Appel initial pour initialiser les slides à la première charge
    this.initializeSlides();

    // Commence le diaporama
    this.startSlideShow();
  }

      
  translateText(lang: string) {
    this.translate.use(lang);
  }
  initializeSlides() {
    this.translate.get([
      'accueil.banner-block.conference',
      'accueil.banner-block.date',
      'accueil.banner-block.year',
      'accueil.banner-block.description',
      'accueil.banner-block.about',
      'accueil.banner-block.register',
      'accueil.banner-block.desc1'
    ]).subscribe(translations => {
      this.slides = [
        {
          conference: translations['accueil.banner-block.conference'],
          date: translations['accueil.banner-block.date'],
          year: translations['accueil.banner-block.year'],
          description: translations['accueil.banner-block.description'],
          aboutText: translations['accueil.banner-block.about'],
          registerText: translations['accueil.banner-block.register'],
          desc1: translations['accueil.banner-block.desc1'],
          image: '../../../assets/slide.jpeg'
        },
        {
          conference: translations['accueil.banner-block.desc1'],
          year: translations['accueil.banner-block.year'],
          description: translations['accueil.banner-block.description'],
          aboutText: translations['accueil.banner-block.about'],
          registerText: translations['accueil.banner-block.register'],
          image: '../../../assets/page_2_img_1.png'
        }
      ];
    });
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
}
