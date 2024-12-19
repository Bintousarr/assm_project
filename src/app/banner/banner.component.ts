import { Component, OnInit, OnDestroy, inject ,AfterViewInit  } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EvenementComponent } from "../web/evenement/evenement.component";
import { KeynoteSpeakerComponent } from "../keynote-speaker/keynote-speaker.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
declare var $: any; // Déclarer jQuery
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, EvenementComponent, KeynoteSpeakerComponent, CommonModule, RouterLink],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements AfterViewInit,OnInit, OnDestroy {
  slides = [
    { image: '../../../assets/head.png', title: 'accueil.banner-block.desc2', subtitle: 'accueil.banner-block.desc3', highlight: 'accueil.banner-block.desc4' },
    { image: '../../../assets/Cover.png', title: 'accueil.banner-block.desc5', subtitle: 'accueil.banner-block.desc6', highlight: 'accueil.banner-block.desc7' },
  ];
  
  currentIndex = 0;
  slideInterval: Subscription | undefined;
  currentLang: string = 'en'; // Initialize language to 'en'

  translate: TranslateService = inject(TranslateService);

  
  ngAfterViewInit(): void {
    $('.slick-slider').slick({
      autoplay: true,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.currentLang = this.translate.currentLang; // Get the initial language

    // Listen for language changes if needed
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });

    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = interval(5000).subscribe(() => {
      this.nextSlide();
    });
  }

  stopSlideShow() {
    this.slideInterval?.unsubscribe();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
}
