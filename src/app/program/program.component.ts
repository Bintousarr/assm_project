import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Event {
  // time: string;
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
          //time: '10:00 - 12:00',
          type: 'Lundi 16 Juin 2025',
          speakerImg: '../../../assets/affaire.jpg',
          speakerName: '',
          title: 'Program',
          description: "Cérémonie d’ouverture Présentation des organismes de Financement du spatial &  Présentation des organismes de formation.",
          
        }

      ]
    },
    {
      day: 'Deuxième Jour',
      events: [
        {
          //time: '10:00 - 12:00',
          type: 'Mardi 17 Juin 2025',
          speakerImg: '../../assets/propulsion.jpg',
          speakerName: '',
          title: 'Thème : Télécommunication par satellite ',
          description: 'La télécommunication par satellite implique l\'utilisation de satellites artificiels pour transmettre des signaux de communication tels que des appels téléphoniques, des données Internet, des émissions de télévision et de radio, et d\'autres formes de communication numérique. Ces satellites reçoivent des signaux de communication d\'une station terrestre, les amplifient, et les retransmettent à une autre station terrestre ou à plusieurs stations à travers de grandes distances.',
          
        }/* ,
        {
          time: '14:00 - 15:30',
          type: 'Mardi 06 Mai 2025',
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
        */
      ]
    },
    {
      day: 'Troisième Jour',
      events: [
        {
          //time: '10:00 - 12:00',
          type: ' Mercredi 18 Juin 2025 ',
          speakerImg: '../../assets/observ.jpg',
          speakerName: '',
          title: 'Thème : Observation de la terre',
          description: "L’observation de la terre regroupe l’ensemble des méthodes et technologies utilisées pour collecter des informations sur la surface terrestre, l'atmosphère et les océans à partir de capteurs situés sur des satellites, des avions, des drones ou des stations terrestres. Les données d'observation de la Terre sont utilisées pour surveiller les changements environnementaux, gérer les ressources naturelles, suivre les phénomènes météorologiques et climatiques, et soutenir les activités de planification urbaine et agricole.",
          
        },
        {
         // time: '',
          type: 'Mercredi 18 Juin 2025 ',
          speakerImg: '../../assets/diner.jpeg',
          speakerName: '',
          title: 'Soirée: Dîner gala et récompense des Awards du spatial',
          description: "Le dîner gala vise plusieurs objectifs : Sensibilisation et Promotion, Reconnaissance et Récompenses, Renforcement des Relations, Renforcement de l'Image et de la Marque, Célébration des Réalisations et Éducation et Inspiration"
         
        }
     
        ]
    },
    {
      day: 'Quatrième Jour',
      events: [
        {
         // time: '10:00 - 12:00',
          type: 'Jeudi 19 Juin 2025 ',
          speakerImg: '../../assets/galileo-satellite.jpg',
          speakerName: '',
          title: 'Thème : Navigation et le positionnement',
          description: "La navigation est le processus de planification, de suivi et de contrôle du mouvement d'un objet ou d'une personne d'un point à un autre. Cela peut inclure des véhicules terrestres, maritimes, aériens et spatiaux. Il existe quatre types de navigation : la navigation Terrestre, la navigation maritime, la navigation aérienne, la navigation spatiale. Le positionnement est la détermination précise de la localisation d'un objet ou d'une personne en termes de coordonnées géographiques (latitude, longitude, et altitude). La navigation et le positionnement sont des technologies interconnectées qui jouent un rôle crucial dans diverses industries et applications quotidiennes. Les avancées dans les systèmes de satellites, les capteurs et les algorithmes de traitement des données continuent d’améliorer leur précision et leur fiabilité.",
          
        
        }
      ]
    },
    {
      day: 'Cinquième Jour',
      events: [
        {
          //time: '10:00 - 12:00',
          type: 'Vendredi 20 Juin 2025 ',
          speakerImg: '../../assets/agriculture.jpeg',
          speakerName: '',
          title: 'Thème : Astronomie et les expériences scientifiques dans l’espace',
          description: "L'astronomie est la science qui étudie les objets célestes (tels que les étoiles, les planètes, les comètes, les galaxies) et les phénomènes qui se produisent en dehors de l'atmosphère terrestre (comme le rayonnement cosmique de fond). Elle implique l'observation et l'analyse des émissions lumineuses, des radiations électromagnétiques et d'autres signaux provenant de ces objets et phénomènes.",
          
        },
        {
          //time: '14:00 - 17:00',
          type: 'Vendredi 20 Juin 2025',
          speakerImg: '../../assets/tourisme.png',
          speakerName: '',
          title: 'Thème : Activités sociales et conférence au sein d’une école ',
          description: "Exemple d’activités sociales : initiation des enfants des orphelinats aux activités spatiales Visite au Clergé et aux responsables musulmans",
          
        },
       
       
      ]
    },
  ];

  getBackgroundColor(day: string) {
    switch(day) {
      case 'Premier Jour':
        return 'bg-gray-200'; 
      case 'Deuxième Jour':
      case 'Quatrième Jour':
        return 'bg-white'; 
      case 'Troisième Jour':
      case 'Cinquième Jour':
        return 'bg-gray-200'; 
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
