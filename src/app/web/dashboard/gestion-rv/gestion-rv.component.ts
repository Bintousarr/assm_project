import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface Item {
  id: number;
  statut: string;
  date: string;
}
@Component({
  selector: 'app-gestion-rv',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gestion-rv.component.html',
  styleUrl: './gestion-rv.component.scss'
})
export class GestionRvComponent {
  isDropdownOpen = false;
  isPopupOpen = false;
  selectedItem: Item | null = null;
  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  items: Item[] = [
    { id: 1, statut: 'VALIDÉE', date: '09 Aout 2024' },
    { id: 2, statut: 'REFUSÉE', date: '11 Aout 2024' }
  ];

  

  openPopup(item: Item) {
    this.selectedItem = item;
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.selectedItem = null;
  }

  validateRequest() {
    if (this.selectedItem) {
      console.log('Request validated for item:', this.selectedItem);
      this.closePopup(); // Ferme le popup après validation
    }
  }

  refuseRequest() {
    if (this.selectedItem) {
      console.log('Request refused for item:', this.selectedItem);
      this.closePopup(); // Ferme le popup après refus
    }
  }
}
