import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import saveAs from 'file-saver';
import { jsPDF } from 'jspdf';
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



    generatePersonalizedDocument(event: Event): void {
      event.preventDefault(); // Empêche le rechargement de la page
      
      const form = event.target as HTMLFormElement;
    
      const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
      const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
      const email = (form.elements.namedItem('email') as HTMLInputElement).value;
      const address = (form.elements.namedItem('address') as HTMLInputElement).value;
      const country = (form.elements.namedItem('country') as HTMLInputElement).value;
      const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    
      const doc = new jsPDF();
    
      // Ajouter le logo OTIF
      const logoUrl = '../../../assets/logo.png'; 
      doc.addImage(logoUrl, 'PNG', 10, 10, 50, 20);
    
      // Titre principal
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('INVITATION OFFICIELLE - MASS 2025', 105, 40, { align: 'center' });
    
      // Corps de l'invitation avec retour à la ligne
      doc.setFont('Times', 'normal');
      doc.setFontSize(12);
    
      const content = `
    Cher(e) ${firstName} ${lastName},
    
    Nous avons l'honneur de vous inviter à l'événement officiel MASS 2025, organisé par OTIF SPACE AFRICA.
    
    L'événement se déroulera :
    - Lieu : Parc des Expositions, Abidjan, Côte d'Ivoire
    - Dates : 6 au 8 mai 2025
    
    MASS mettra en avant des solutions concrètes basées sur l'espace pour répondre aux défis socio-économiques urgents à travers l'Afrique.
    
    Informations personnelles :
    - Email : ${email}
    - Adresse : ${address}
    - Pays : ${country}
    - Téléphone : ${phone}
    
    Nous serions honorés de votre présence.
    
    Cordialement,
    L'équipe OTIF SPACE AFRICA
      `;
    
      // Utiliser un retour automatique à la ligne (maxWidth défini)
      doc.text(content, 20, 60, { maxWidth: 170 });
    
      // Pied de page
      doc.setFontSize(10);
      doc.text('Document officiel - OTIF SPACE AFRICA © 2025', 105, 280, { align: 'center' });
    
      // Téléchargement du PDF
      doc.save(`invitation_MASS2025_${lastName}.pdf`);
    }
    
   
}
