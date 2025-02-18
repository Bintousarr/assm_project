import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import saveAs from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsor-page',
  standalone: true,
  imports: [TranslateModule, CommonModule, CarouselModule],
  templateUrl: './sponsor-page.component.html',
  styleUrl: './sponsor-page.component.scss'
})
export class SponsorPageComponent {
  translate: TranslateService = inject(TranslateService);

  logos = [
    { src: 'assets/AU.png', link: 'https://au.int/en/node/35984' },
    { src: 'assets/tourisme_ci_logo.png', link: 'https://tourismecotedivoire.ci/' },
    { src: 'assets/corsair.png', link: 'https://www.flycorsair.com/fr-ci' },
    { src: 'assets/digitaux.png', link: 'https://telecom.gouv.ci/new/index.php/ministere/organigramme-du-ministere' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };


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

  currentLang: string = 'en'; // Initialize language to 'en'

  sponsorPackages = [
    {
      name: "SP_SPONSOR_ETOILE",
      fullname_fr:"Sponsor Étoile",
      fullname_en:"Star Sponsor",
      priceUSD: "12 000",
      priceXOF: "7 500 000",
      standSize: "SP_STAND_18M2",
      bgColor: "bg-gray-900",
      equipments: ["SP_TABLES_2", "SP_CHAIRS_4", "SP_LIGHTINGS_2", "SP_PLUGS_2"],
      features: [
        "SP_SPONSOR_STATUS", "SP_LOGO_ON_WEBSITE", "SP_LOGO_ON_COVER", "SP_QUARTER_PAGE_AD",
        "SP_LOGO_ON_COMMUNICATION", "SP_PROMO_ITEMS", "SP_PRESENCE_KAKEMONO",
        "SP_LIVE_INTERVIEW", "SP_VIDEO_PLAY_30S", "SP_AGORA_SPEECH_15MIN", "SP_GALA_ACCESS",
        "SP_HONORED_GUESTS_ACCESS", "SP_VIP_LUNCH_ACCESS", "SP_INSTITUTIONAL_SPOT_MASS_WEBSITE",
        "SP_SPONSOR_EVENT_ITEM"
      ],
      img:"../../../assets/sp_etoile.png"

    },
    {
      name: "SP_SPONSOR_CONSTELLATION",
      fullname_fr:"Sponsor Constellation",
      fullname_en:"Constellation Sponsor",
      priceUSD: "20 000",
      priceXOF: "12 500 000",
      standSize: "SP_STAND_27M2",
      bgColor: "bg-gray-700",
      equipments: ["SP_TABLES_3", "SP_CHAIRS_6", "SP_LIGHTINGS_3", "SP_PLUGS_3"],
      features: [
        "SP_SPONSOR_STATUS", "SP_LOGO_ON_WEBSITE", "SP_LOGO_ON_COVER", "SP_HALF_PAGE_AD",
        "SP_LOGO_ON_ALL_SUPPORTS", "SP_PROMO_ITEMS", "SP_PRESENCE_KAKEMONO",
        "SP_LIVE_INTERVIEW", "SP_VIDEO_PLAY_1MIN30", "SP_AGORA_SPEECH_20MIN", "SP_GALA_ACCESS",
        "SP_PRIORITY_BOOKING", "SP_OPENING_CEREMONY_INVITES_5", "SP_INSTITUTIONAL_SPOT_MASS_WEBSITE",
        "SP_SPONSOR_EVENT_ITEM"
      ],
      img:"../../../assets/sp_constelation.png"

    },
    {
      name: "SP_SPONSOR_GALAXIE",
      fullname_fr:"Sponsor Galaxie",
      fullname_en:"Galaxy Sponsor",
      priceUSD: "35 000",
      priceXOF: "22 000 000",
      standSize: "SP_STAND_36M2",
      bgColor: "bg-gray-900",
      equipments: ["SP_TABLES_4", "SP_CHAIRS_8", "SP_LIGHTINGS_4", "SP_PLUGS_4"],
      features: [
        "SP_SPONSOR_STATUS", "SP_LOGO_ON_WEBSITE", "SP_LOGO_ON_COVER", "SP_FULL_PAGE_AD",
        "SP_LOGO_ON_ALL_SUPPORTS", "SP_PROMO_ITEMS", "SP_PRESENCE_KAKEMONO",
        "SP_LIVE_INTERVIEW", "SP_VIDEO_PLAY_2MIN", "SP_AGORA_SPEECH_30MIN", "SP_GALA_ACCESS",
        "SP_RECOGNITION_AT_EVENT", "SP_INSTITUTIONAL_SPOT_MASS_WEBSITE", "SP_SPONSOR_EVENT_ITEM",
        "SP_PRIORITY_BOOKING", "SP_OPENING_CEREMONY_INVITES_10",
        "SP_PROMOTIONAL_ACTIONS", "SP_BRANDING_CONTEST_OPPORTUNITY",
        "SP_GALA_TABLE_RESERVATION", "SP_VIP_LUNCH_ACCESS", "SP_EXCLUSIVE_INTERVIEW_WEB_TV",
        "SP_COMPANY_MENTION_RADIO_AD", "SP_MASS_SCREEN_PRESENCE"
      ],
      img:"../../../assets/sp_galaxy.png"

    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.currentLang = this.translate.currentLang; // Get the initial language

    // Listen for language changes if needed
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
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
    this.isNASAExpanded = !this.isNASAExpanded;
  }

  toggleCNES() {
    this.isCNESExpanded = !this.isCNESExpanded;
  }

  toggleISRO() {
    this.isISROExpanded = !this.isISROExpanded;
  }

  toggleORANGE() {
    this.isORANGEExpanded = !this.isORANGEExpanded;
  }

  toggleUV() {
    this.isUVExpanded = !this.isUVExpanded;
  }


  goToPaymentPage(selectedIndex: number) {
    this.router.navigate(['/reservation'], { queryParams: { productIndex: selectedIndex+3 } });
  }
  sendEmail() {
    let nomPackage = ""
    if (this.currentLang == "en") {
      nomPackage = "Official Sponsor"

    const email = "secretariat@mass.ci"; // Remplace par l'adresse email souhaitée
    // const packageName = "Nom du Package"; // Remplace par le nom du package
    const subject = encodeURIComponent("Request for a quote");
    const body = encodeURIComponent(`Hello,\n\nI would like a quote for the ${nomPackage} package from MASS.\n\nBest regards.`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    window.location.href = mailtoLink; 
    } else {
      nomPackage = "Sponsor Officiel"
      const email = "secretariat@mass.ci"; // Remplace par l'adresse email souhaitée
    // const packageName = "Nom du Package"; // Remplace par le nom du package
    const subject = encodeURIComponent("Demande de devis");
    const body = encodeURIComponent(`Bonjour,\n\nJ'aimerais un devis pour le package ${nomPackage} du MASS.\n\nCordialement.`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;


    }
    

  

  
  }
  sendEmails(packageName: any) {
    console.log(`Sending email for`,packageName);
    if (this.currentLang == "en") {

    const email = "secretariat@mass.ci"; // Remplace par l'adresse email souhaitée
    // const packageName = "Nom du Package"; // Remplace par le nom du package
    const subject = encodeURIComponent("Request for a quote");
    const body = encodeURIComponent(`Hello,\n\nI would like a quote for the ${packageName.fullname_en} package from MASS.\n\nBest regards.`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    window.location.href = mailtoLink; 
    } else {
      const email = "secretariat@mass.ci"; // Remplace par l'adresse email souhaitée
    // const packageName = "Nom du Package"; // Remplace par le nom du package
    const subject = encodeURIComponent("Demande de devis");
    const body = encodeURIComponent(`Bonjour,\n\nJ'aimerais un devis pour le package ${packageName.fullname_fr} du MASS.\n\nCordialement.`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;


    }
    
  }
  goToPaymentPages(selectedIndex: number) {
    this.router.navigate(['/reservation'], { queryParams: { productIndex: selectedIndex } });
  }
}
