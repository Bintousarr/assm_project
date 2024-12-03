import { Component,inject,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate: TranslateService = inject(TranslateService)
  
  activeDropdown: string | null = null;  // Pour savoir quel dropdown est ouvert
  constructor(private authService: AuthService,private router: Router) { this.router.events.subscribe(() => {
    this.isMenuOpen = false;
    this.activeDropdown = null;  // Ferme tous les dropdowns
  });}
  
  isLoggedIn: boolean = false;
  isDropdownOpen = false; // State for the dropdown
  currentLanguage = 'EN'; // Default language
  currentFlag = '../../../assets/ru.png' ; // Default flag

  isMenuOpen: boolean = false; // Variable pour contrôler l'ouverture du menu mobile
  openSubMenus: Set<string> = new Set();
  subMenusState = {
    accueilMenu: false,
    massMenu: false,
    // Ajoute d'autres sous-menus si nécessaire
  };
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

  toggleSubMenu(menu: string): void {
    if (this.openSubMenus.has(menu)) {
      this.openSubMenus.delete(menu);
    } else {
      this.openSubMenus.add(menu);
    }
  }
  

  // Vérifie si un sous-menu est ouvert
  isSubMenuOpen(menu: string): boolean {
    return this.openSubMenus.has(menu);
  }

  // Fonction pour basculer l'état du menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.authService.isLoggedIn.subscribe(loggedIn => {
      console.log("lelog:",loggedIn)
      this.isLoggedIn = loggedIn;
      console.log("ishh", this.isLoggedIn)
    });
  }
   toggleDropdown2(): void {
     this.isDropdownOpen = !this.isDropdownOpen;
   }

  selectLanguage(language: string): void {
    if (language === 'fr') {
      this.currentLanguage = 'FR';
      this.translateText('fr')
      this.currentFlag = '../../../assets/fra.jpg';
    } else if (language === 'en') {
      this.currentLanguage = 'EN';
      this.translateText('en')
      this.currentFlag = '../../../assets/usa.png';
    }
    this.isDropdownOpen = false; // Close dropdown after selection
  }
  translateText(lang: string) {
    this.translate.use(lang);
  }

    // Fonction pour fermer le menu
    closeMenu() {
      this.isMenuOpen = false;
    }
  
}

