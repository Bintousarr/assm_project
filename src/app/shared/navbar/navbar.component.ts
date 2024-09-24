import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  activeDropdown: string | null = null;  // Pour savoir quel dropdown est ouvert
  translate: TranslateService = inject(TranslateService)

  constructor(private router: Router) {
    // Ferme le menu automatiquement quand la route change
    this.router.events.subscribe(() => {
      this.isMenuOpen = false;
      this.activeDropdown = null;  // Ferme tous les dropdowns
    });
  }
  ngOnInit() {
    this.translate.setDefaultLang('fr');

  }

  translateText(lang: string) {
    this.translate.use(lang);
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
  toggleDropdownHome(menu: string) {
    if (menu === 'accueil') {
      if (this.router.url === '/') {
        // Si on est déjà sur la page d'accueil, ouvrir le sous-menu
        this.activeDropdown = this.activeDropdown === menu ? null : menu;
      } else {
        // Sinon, naviguer vers la page d'accueil
        this.router.navigate(['/']);
        this.closeMenu();  // Fermer le menu mobile après la navigation
      }
    } else {
      // Pour les autres menus, basculer l'affichage des sous-menus
      this.activeDropdown = this.activeDropdown === menu ? null : menu;
    }
  }

}
