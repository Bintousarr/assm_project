import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NotificationComponent } from "../notification/notification.component";

interface Item {
  id: number;
  statut: string;
  date: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  motif: string;
  title: string;
  organisme: string;
  photo: string;
  gender: string;
  country: string;
  role: string;
  profession:string;

}

@Component({
  selector: 'app-gestion-rv',
  standalone: true,
  imports: [CommonModule, RouterLink, NotificationComponent],
  templateUrl: './gestion-rv.component.html',
  styleUrl: './gestion-rv.component.scss'
})
export class GestionRvComponent {
  isDropdownOpen = false;
  isPopupOpen = false;
  selectedItem: Item | null = null;
  selectedTab: string = 'initiator';

  items: Item[] = [
    { id: 1, statut: 'En attente', date: '09 Aout 2024', nom: 'PAPE', prenom: 'SOW', telephone: '776666666', email: 'pape@gmail.com', motif: 'Proposition d\'affaire' , title:'Directeur', organisme:'Orange', profession:'Ingénieur ', gender:"Homme", country:"France", role:'Orateur',photo:''},
    { id: 2, statut: 'En attente', date: '11 Aout 2024', nom: 'Bintou', prenom: 'Sarr', telephone:'789999880', email: 'sarr@gmail.com', motif: 'Entretien pour un éventuel collaboration', title:'Directeur', organisme:'Orange', profession:'Ingénieur ', gender:"Homme", country:"France", role:'Orateur',photo:'' }
  ];

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openPopup(item: Item) {
    this.selectedItem = item;
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.selectedItem = null;
    this.selectedTab = 'initiator';
  }

  validateRequest() {
    if (this.selectedItem) {
      this.selectedItem.statut = 'Validée';
      console.log('Request validated for item:', this.selectedItem);
    }
    this.closePopup();
  }

  refuseRequest() {
    if (this.selectedItem) {
      this.selectedItem.statut = 'Refusée';
      console.log('Request refused for item:', this.selectedItem);
    }
    this.closePopup();
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    this.router.navigate(['/login']);
  }
}
