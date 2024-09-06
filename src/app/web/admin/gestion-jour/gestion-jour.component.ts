import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-jour',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './gestion-jour.component.html',
  styleUrl: './gestion-jour.component.scss'
})
export class GestionJourComponent {

  constructor( private router:Router) {
    
  }  
  days: { name: string; date: string }[] = [
    { name: 'Jour 1', date: '2024-09-04' },
    { name: 'Jour 2', date: '2024-09-05' },
    { name: 'Jour 3', date: '2024-09-06' },
  ];
  selectedDate!: string;
  dateName!: string;
  
  showPopup = false;
  
  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  saveDate() {
    if (this.dateName && this.selectedDate) {
      this.days.push({ name: this.dateName, date: this.selectedDate });
      this.closePopup();
    }
  }
  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    this.router.navigate(['/login']);
  }
}
