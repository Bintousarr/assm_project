import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EvenementComponent } from "../web/evenement/evenement.component";
import { KeynoteSpeakerComponent } from "../keynote-speaker/keynote-speaker.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, EvenementComponent, KeynoteSpeakerComponent, CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  slides = [
    { image: '../../../assets/head.png', title: 'accueil.banner-block.desc2', subtitle: 'accueil.banner-block.desc3', highlight: 'accueil.banner-block.desc4', hasText: true },
    { image: '../../../assets/slider.png', hasText: false },
  ];
  
  currentIndex = 0;
  slideInterval: Subscription | undefined;
  translate: TranslateService = inject(TranslateService);

  ngOnInit() {
    this.translate.setDefaultLang('en');

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
