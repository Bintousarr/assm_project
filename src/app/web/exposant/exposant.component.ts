import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import saveAs from 'file-saver';

@Component({
  selector: 'app-exposant',
  standalone: true,
  imports: [ TranslateModule, RouterLink],
  templateUrl: './exposant.component.html',
  styleUrl: './exposant.component.scss'
})
export class ExposantComponent {
  translate: TranslateService = inject(TranslateService)
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
        fileUrl = '/assets/DOSSIER_SPONSORING _MASS_2025_FR_Compress_Version.pdf';
        fileName = 'DOSSIER_SPONSORING _MASS_2025_FR_Compress_Version.pdf';
      } else {
        fileUrl = '/assets/DOSSIER_SPONSORING _MASS_2025_EN_Compress_Version.pdf';
        fileName = 'DOSSIER_SPONSORING _MASS_2025_EN_Compress_Version.pdf';
      }
  
      // Télécharger le fichier
      fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
          saveAs(blob, fileName);
        })
        .catch(error => console.error('Error downloading the file:', error));
    }
   
}
