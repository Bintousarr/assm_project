import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import saveAs from 'file-saver';

@Component({
  selector: 'app-sponsor-page',
  standalone: true,
  imports: [TranslateModule, CommonModule, CarouselModule],
  templateUrl: './sponsor-page.component.html',
  styleUrl: './sponsor-page.component.scss'
})
export class SponsorPageComponent {
  translate: TranslateService = inject(TranslateService)

  // Variables pour contrôler le déroulement
  isTextExpanded: boolean = false;
  isUAExpanded: boolean = false;
  isCIExpanded: boolean = false;
  isESAExpanded: boolean = false;
  isNASAExpanded: boolean = false;
  isCNESExpanded: boolean = false;
  isISROExpanded: boolean = false;
  isORANGEExpanded: boolean = false;
  isUVExpanded: boolean = false;

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
  downloadFile() {
    // Obtenir la langue actuelle
    const currentLang = this.translate.currentLang;

    // Déterminer quel fichier télécharger en fonction de la langue
    let fileUrl = '';
    let fileName = '';

    if (currentLang === 'fr') {
      fileUrl = '/assets/Sponsoring_Mass_2025_FR.pdf';
      fileName = 'Sponsoring_Mass_2025_FR.pdf';
    } else {
      fileUrl = '/assets/Sponsoring_Mass_2025_EN.pdf';
      fileName = 'Sponsoring_Mass_2025_EN.pdf';
    }

    // Télécharger le fichier
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, fileName);
      })
      .catch(error => console.error('Error downloading the file:', error));
  }
 
 
   // Méthodes pour toggle les divs
   toggleText() {
     this.isTextExpanded = !this.isTextExpanded;
   }

   toggleESA() {
    this.isESAExpanded = !this.isESAExpanded;
  }

  
  toggleUA() {
    this.isUAExpanded = !this.isUAExpanded;
  }

  toggleCI() {
    this.isCIExpanded = !this.isCIExpanded;
  }


   toggleNASA() {
     this.isNASAExpanded= !this.isNASAExpanded;
   }

   toggleCNES() {
    this.isCNESExpanded = !this.isCNESExpanded;
  }

  toggleISRO() {
    this.isISROExpanded= !this.isISROExpanded;
  }

   toggleORANGE() {
    this.isORANGEExpanded = !this.isORANGEExpanded;
  }

  toggleUV() {
    this.isUVExpanded = !this.isUVExpanded;
  }
  
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<', '>'],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }

 
}
