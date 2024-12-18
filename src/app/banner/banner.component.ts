import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EvenementComponent } from "../web/evenement/evenement.component";
import { KeynoteSpeakerComponent } from "../keynote-speaker/keynote-speaker.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, EvenementComponent, KeynoteSpeakerComponent, CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  
  
  currentIndex = 0;
  slideInterval: Subscription | undefined;
  currentLang: string = 'en'; // Initialize language to 'en'

  translate: TranslateService = inject(TranslateService);

  currentSlide: number = 0;
  slides: number = 2; // Nombre total de slides

 

  startAutoSlide(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides;
    }, 5000); // Change toutes les 5 secondes
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.currentLang = this.translate.currentLang; // Get the initial language

    // Listen for language changes if needed
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });

    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  

  stopSlideShow() {
    this.slideInterval?.unsubscribe();
  }

 

  translateText(lang: string) {
    this.translate.use(lang);
  }
}
