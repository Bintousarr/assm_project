import { Component } from '@angular/core';

@Component({
  selector: 'app-compte-a-rebours',
  standalone: true,
  imports: [],
  templateUrl: './compte-a-rebours.component.html',
  styleUrl: './compte-a-rebours.component.scss'
})
export class CompteAReboursComponent {

  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  countdownMessage: string = '';

  private eventDate: Date = new Date('2024-12-02T00:00:00'); // Date de l'événement

  ngOnInit(): void {

    this.updateCountdown(); // Appel initial
    setInterval(() => this.updateCountdown(), 1000); // Actualisation chaque seconde
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
}
