import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import saveAs from 'file-saver';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-exposant',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './exposant.component.html',
  styleUrl: './exposant.component.scss'
})
export class ExposantComponent {
  translate: TranslateService = inject(TranslateService)

  exhibitorPackages = [
    {
      name: "PACK_DECOLLAGE",
      priceUSD: "3 000",
      priceXOF: "1 900 000",
      area: "1_BOX_9M2",
      features: ["1_TABLE", "2_CHAIRS", "1_LIGHTING", "1_PLUG"],
      img:"../../../assets/pack-decollage.png"
    },
    {
      name: "PACK_ASCENSION",
      priceUSD: "6 000",
      priceXOF: "3 750 000",
      area: "2_BOX_9M2",
      features: ["2_TABLES", "4_CHAIRS", "2_LIGHTINGS", "2_PLUGS"],
      img:"../../../assets/pack-ascension.png"

      
    },
    {
      name: "PACK_EN_ORBITE",
      priceUSD: "9 000",
      priceXOF: "5 700 000",
      area: "3_BOX_9M2",
      features: ["3_TABLES", "6_CHAIRS", "3_LIGHTINGS", "3_PLUGS"],
      img:"../../../assets/pack-orbite.png"

     
    }
  ];

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.translate.setDefaultLang('en');
    localStorage.removeItem('userToken');

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

  goToPaymentPage(selectedIndex: number) {
    this.router.navigate(['/reservation'], { queryParams: { productIndex: selectedIndex } });
  }

  sendEmail(id: number) {
    console.log("rrr")
    let nomPackage = ""
    if (this.translate.currentLang == "en") {

      let tab = ["Start UP", "Bronze", "Silver", "Gold", "Platinum"]
      nomPackage = "Official Sponsor"

      const email = "secretariat@mass.ci"; // Remplace par l'adresse email souhaitée
      // const packageName = "Nom du Package"; // Remplace par le nom du package
      const subject = encodeURIComponent("Request for a quote");
      const body = encodeURIComponent(`Hello,\n\nI would like a quote for the ${tab[id]} package from MASS.\n\nBest regards.`);
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      window.location.href = mailtoLink;
    } else {

      let tab = ["Start UP", "Bronze", "Argent", "Gold", "Platinium"]

      nomPackage = "Sponsor Officiel"
      const email = "secretariat@mass.ci"; // Remplace par l'adresse email souhaitée
      // const packageName = "Nom du Package"; // Remplace par le nom du package
      const subject = encodeURIComponent("Demande de devis");
      const body = encodeURIComponent(`Bonjour,\n\nJ'aimerais un devis pour le package ${tab[id]} du MASS.\n\nCordialement.`);
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      window.location.href = mailtoLink;


    }



  }
}
