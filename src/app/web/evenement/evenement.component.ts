;
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [TranslateModule, RouterLink,CommonModule],
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.scss'
})
export class EvenementComponent {
  private eventDate: Date = new Date('2025-06-16T00:00:00'); // Date de l'événement

  slides: any[] = [];
  currentIndex = 0;
  slideInterval: Subscription | undefined;
  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  countdownMessage: string = '';

  constructor(private router:Router,){ }
  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.updateCountdown(); // Appel initial
    setInterval(() => this.updateCountdown(), 1000); // Actualisation chaque seconde
  }

  
  translateText(lang: string) {
    this.translate.use(lang);
  }

  private updateCountdown() {
    const currentTime = new Date().getTime();
    const eventTime = this.eventDate.getTime();
    const remainingTime = eventTime - currentTime;

    if (remainingTime > 0) {
      this.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    } else {
      // Si l'événement est passé, affichez par exemple des valeurs par défaut ou un message
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      
    }
  }

  translate: TranslateService = inject(TranslateService)
 gotoReservation(){
  window.location.href = '/reservation';
  
   //this.router.navigate(['/reservation']);

 }
 gotoSponsor(){
  window.location.href = '/sponsor-page';

 // this.router.navigate(['/sponsor-page']);

}
gotoVisiteur(){
  window.location.href = '/profesional-visitor';
  
  //this.router.navigate(['/profesional-visitor']);

}


}
