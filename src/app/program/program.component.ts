import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Event {
  time: string;
  type: string;
  speakerImg: string;
  speakerName: string;
  title: string;
  description: string;
}


interface Day {
  day: string;
  events: Event[];
}
@Component({
  selector: 'app-program',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BannerComponent, FooterComponent,  RouterLink, CommonModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {

  days: Day[] = [
    {
      day: 'Premier Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '02, Dec-2024',
          speakerImg: '../../../assets/don.png',
          speakerName: '',
          title: 'Don Social',
          description: " OTIF organisera un événement social en Côte d'Ivoire, qui a connu cette année des inondations causant des dégâts matériels et humains. L'objectif est de mobiliser le public, de rendre visite aux familles touchées et de leur offrir des dons. Cela permettra également de sensibiliser le public à l’impact des défis climatiques sur les nations africaines, souvent dépourvues de solutions durables."
        },
        {
          time: '14:00 - 16:00',
          type: '02, Dec-2024',
          speakerImg: '../../../assets/conference.jpg',
          speakerName: '',
          title: 'Conférence dans une école',
          description: "Initiation de la jeune génération aux métiers de l'espace. L’objectif est de leur faire connaître le monde spatial et les opportunités qu'il offre."
        },
        {
          time: '16:00 - 17:30',
          type: '02, Dec-2024',
          speakerImg: '../../../assets/club.jpg',
          speakerName: '',
          title: 'Réunion pour le club d\'affaires',
          description: " La réunion du club d'affaires constitue un forum dédié aux discussions sur les tendances actuelles dans le domaine spatial, permettant aux membres d’échanger des idées, d’élargir leur réseau et de développer des stratégies pour réussir dans l’industrie spatiale."
        }

      ]
    },
    {
      day: 'Deuxième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '03, Dec-2024',
          speakerImg: '../../assets/parole.jpg',
          speakerName: '',
          title: 'Cérémonie d\'ouvertures et Ressources Naturelles',
          description: 'Prise de parole de quelques autorités et directeurs tels que Mr Tidiane OUATTARA, Professeur Sherif SEDKY, Mr Adama DIAWARA et M Irie Bi FABRICE'
        },
        {
          time: '14:00 - 15:30',
          type: '03, Dec-2024',
          speakerImg: '../../assets/dc4c97e654.jpeg',
          speakerName: '',
          title: 'Cérémonie d\'ouvertures et Ressources Naturelles',
          description: 'Session 1: Solution spatiale pour la gestion foncière. '
        },
        {
          time: '16:30 - 17:30',
          type: '03, Dec-2024',
          speakerImg: '../../assets/dc4c97e654.jpeg',
          speakerName: '',
          title: 'Cérémonie d\'ouvertures et Ressources Naturelles',
          description: 'Session 2: Solution spatiale pour la gestion foncière'
        },
       
      ]
    },
    {
      day: 'Troisième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '04, Dec-2024',
          speakerImg: '../../assets/agriculture.jpeg',
          speakerName: '',
          title: 'Ressources Naturelles',
          description: "Session 4: Solutions pour l'agriculture, l'eau et les fôrets"
        },
        {
          time: '14:00 - 15:30',
          type: '04, Dec-2024',
          speakerImg: '../../assets/inondation.jpg',
          speakerName: '',
          title: 'Ressources Naturelles',
          description: "Session 5:  Solution spatiale pour les inondations"
        },
        {
          time: '19:00 - 23:00',
          type: '04, Dec-2024',
          speakerImg: '../../assets/parole.jpg',
          speakerName: '',
          title: 'Ressources Naturelles',
          description: "Dîner: Prix spatial annuel"
        },
       
      ]
    },
    {
      day: 'Quatrième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '05, Dec-2024',
          speakerImg: '../../assets/agriculture.jpeg',
          speakerName: '',
          title: 'Sécurité & Défense',
          description: "Session 7: Solutions pour la sécurité et la défense"
        },
        {
          time: '14:00 - 15:30',
          type: '05, Dec-2024',
          speakerImg: '../../assets/maritime.png',
          speakerName: '',
          title: 'Sécurité & Défense',
          description: "Session 8:  Solution spatiale pour le maritime",
        },
        {
          time: '16:00 - 17:00',
          type: '05, Dec-2024',
          speakerImg: '../../assets/parole.jpg',
          speakerName: '',
          title: 'Sécurité & Défense',
          description: "Réservé au club d'affaires"
        },
       
      ]
    },
    {
      day: 'Cinquième Jour',
      events: [
        {
          time: '10:00 - 12:00',
          type: '06, Dec-2024',
          speakerImg: '../../assets/agriculture.jpeg',
          speakerName: '',
          title: 'CLÔTURE',
          description: 'Prise de parole de quelques autorités et directeurs tels que Mr Tidiane OUATTARA, Professeur Sherif SEDKY, Mr Adama DIAWARA et M Irie Bi FABRICE'
        },
        {
          time: '14:00 - 17:00',
          type: '06, Dec-2024',
          speakerImg: '../../assets/tourisme.png',
          speakerName: '',
          title: 'CLÔTURE',
          description: "Visite touristique"
        },
       
       
      ]
    },
  ];

  getBackgroundColor(day: string) {
    switch(day) {
      case 'Premier Jour':
        return 'bg-white'; 
      case 'Deuxième Jour':
      case 'Quatrième Jour':
        return 'bg-gray-100'; 
      case 'Troisième Jour':
      case 'Cinquième Jour':
        return 'bg-white'; 
      default:
        return '';
    }
  }

  /* events: Event[] = [
    {
      time: '10:00 - 12:00',
      type: 'Atelier',
      speakerImg: '../../../assets/donate.png',
      speakerName: '',
      title: 'Don Social',
      description: ''
    },
    {
      time: '14:00 - 16:00',
      type: 'Atelier',
      speakerImg: '../../../assets/donate.png',
      speakerName: '',
      title: 'Conférence dans une école',
      description: ''
    },
    {
      time: '16:00 - 17:30',
      type: 'Atelier',
      speakerImg: '../../../assets/donate.png',
      speakerName: '',
      title: 'Réunion pour le club d\'affaires',
      description: ''
    },


  ]; */
}
