import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adama',
  standalone: true,
  imports: [RouterLink, CommonModule,  FormsModule],
  templateUrl: './adama.component.html',
  styleUrl: './adama.component.scss'
})
export class AdamaComponent {

  isModalOpen = false;
  selectedTime: string | null = null;
  motif: string = '';

  // Jours de la semaine
  days = [
    { name: 'Lundi', date: '02 Déc.' },
    { name: 'Mardi', date: '03 Déc.' },
    { name: 'Mercredi', date: '04 Déc.' },
    { name: 'Jeudi', date: '05 Déc.' },
    { name: 'Vendredi', date: '06 Déc.' }
  ];

  // Créneaux horaires pour chaque jour
  timeSlots = [
    ['15:30', '16:00'],
    ['10:30', '11:00', '11:45'],
    ['10:30', '11:00', '11:45', '13:00'],
    ['10:30', '11:00', '12:15'],
    ['—', '—']
  ];

  // Ouvrir le modal pour une heure spécifique
  openModal(time: string) {
    this.selectedTime = time;
    this.isModalOpen = true;
  }

  // Fermer le modal
  closeModal() {
    this.isModalOpen = false;
    this.motif = '';
    this.selectedTime = null;
  }

  // Soumettre le motif
  submitMotif() {
    console.log('Motif pour', this.selectedTime, ':', this.motif);
    this.closeModal();
  }
}
