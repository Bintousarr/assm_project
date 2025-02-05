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
    this.activeDropdown = null;  
  });}
  
  isLoggedIn: boolean = false;
  isDropdownOpen = false; 
  currentLanguage = 'EN'; 
  currentFlag = '../../../assets/drapeau_uk.jpg' ; 

  isMenuOpen: boolean = false; // Variable pour contrôler l'ouverture du menu mobile
  openSubMenus: Set<string> = new Set();
  subMenusState = {
    accueilMenu: false,
    massMenu: false,
    // Ajoute d'autres sous-menus si nécessaire
  };
  toggleDropdown(menu: string) {
    console.log(this.activeDropdown)
    console.log(menu)
    if (this.activeDropdown === menu) {
      this.activeDropdown = null;  // Ferme le dropdown si c'est déjà ouvert
    } else {
      this.activeDropdown = menu;  // Ouvre le dropdown du menu cliqué
    }
  }

  toggleDropdownd(menu: string) {
    console.log(this.activeDropdown)
    if (this.activeDropdown === menu) {
      this.activeDropdown = null;  // Ferme le dropdown si c'est déjà ouvert
    } else {
      this.activeDropdown = menu;  // Ouvre le dropdown du menu cliqué
    }
  }
  toggleDropdownHome(menu: string) {
    if (menu === 'accueil') {
      if (this.router.url === '/') {

        this.activeDropdown = this.activeDropdown === menu ? null : menu;
      } else {

        this.router.navigate(['/']);
        this.closeMenu();  
      }
    } else {

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
      this.isLoggedIn = loggedIn;
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
      this.currentFlag = '../../../assets/drapeau_uk.jpg';
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

