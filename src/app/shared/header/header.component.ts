import { Component,inject,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
 
  constructor(private authService: AuthService) {}
  isLoggedIn: boolean = false;
  isDropdownOpen = false; // State for the dropdown
  currentLanguage = 'EN'; // Default language
  currentFlag = '../../../assets/usa.png'; // Default flag

  

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.authService.isLoggedIn.subscribe(loggedIn => {
      console.log("lelog:",loggedIn)
      this.isLoggedIn = loggedIn;
      console.log("ishh", this.isLoggedIn)
    });
  }
  toggleDropdown(): void {
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
  
}

