import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Availability {
  id: number;
  speakerName: string;
  dayName: string;
  timeSlot: string; // Format: "HH:MM - HH:MM"
  status: string;
}

@Component({
  selector: 'app-gestion-user',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './gestion-user.component.html',
  styleUrl: './gestion-user.component.scss'
})
export class GestionUserComponent {
  constructor( private router:Router) {
  }  

  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    this.router.navigate(['/login']);
  }
  showPopup = false;
  speakerName: string = '';
  dayName: string = '';
  startTime: string = '';
  endTime: string = '';
  status: string = 'libre';

  availabilities: Availability[] = [];

  // Données pour les listes déroulantes
  speakers = ['Irie Fabrice', ' Tidiane Ouattara', 'Sherif Sedky'];
  days = ['Jour 1', 'Jour 2', 'Jour 3'];
  hours = ['09:00' , '10:00' , '11:00', '12:00', '15:00']; // Liste fixe d'heures

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  saveAvailability() {
    if (!this.speakerName || !this.dayName || !this.startTime || !this.endTime || !this.status) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const newId = this.availabilities.length > 0
      ? Math.max(...this.availabilities.map(a => a.id)) + 1
      : 1;

    const newAvailability: Availability = {
      id: newId,
      speakerName: this.speakerName,
      dayName: this.dayName,
      timeSlot: `${this.startTime} - ${this.endTime}`,
      status: this.status
    };

    this.availabilities.push(newAvailability);

    this.speakerName = '';
    this.dayName = '';
    this.startTime = '';
    this.endTime = '';
    this.status = 'libre';

    this.closePopup();
  }
}
