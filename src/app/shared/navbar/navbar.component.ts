import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  activeDropdown: string | null = null;  // Pour savoir quel dropdown est ouvert

  constructor(private router: Router) {
    // Ferme le menu automatiquement quand la route change
    this.router.events.subscribe(() => {
      this.isMenuOpen = false;
      this.activeDropdown = null;  // Ferme tous les dropdowns
    });
  }

  // Fonction pour ouvrir/fermer le menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Fonction pour fermer le menu
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Ouvre/ferme un sous-menu
  toggleDropdown(menu: string) {
    if (this.activeDropdown === menu) {
      this.activeDropdown = null;  // Ferme le dropdown si c'est déjà ouvert
    } else {
      this.activeDropdown = menu;  // Ouvre le dropdown du menu cliqué
    }
  }
}
