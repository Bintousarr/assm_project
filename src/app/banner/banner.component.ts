import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CompteAReboursComponent } from "../compte-a-rebours/compte-a-rebours.component";
import { KeynoteSpeakerComponent } from "../keynote-speaker/keynote-speaker.component";
import { SponsorComponent } from '../sponsor/sponsor.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { EvenementComponent } from "../web/evenement/evenement.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CompteAReboursComponent, KeynoteSpeakerComponent, SponsorComponent, EvenementComponent, RouterLink],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  slides = [
    {
      conference: 'Marché Africain des Solutions Spatiales (MASS)',
      date: 'Du 16 au 20 Juin 2025',
      location: '',
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

  currentIndex = 0;
  slideInterval: Subscription | undefined;

  ngOnInit() {
    this.startSlideShow();
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
