import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Horaire {
  start_time: string;
  end_time: string;
}

@Component({
  selector: 'app-gestion-horaire',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './gestion-horaire.component.html',
  styleUrl: './gestion-horaire.component.scss'
})
export class GestionHoraireComponent {
  constructor( private router:Router) {
    
  }  
  horaires: Horaire[] = [];
  showPopup = false;
  startTime: string = '';
  endTime: string = '';

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.startTime = '';
    this.endTime = '';
  }

  saveHoraire() {
    if (this.startTime && this.endTime) {
      this.horaires.push({
        start_time: this.startTime,
        end_time: this.endTime
      });
      this.closePopup();
    } else {
      alert('Veuillez renseigner toutes les informations.');
    }
  }
  
  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    this.router.navigate(['/login']);
  }
}
