import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

interface Event {
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
  imports: [HeaderComponent, NavbarComponent, BannerComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  days: Day[] = [];
  translate: TranslateService = inject(TranslateService)

 

  ngOnInit() {
    this.translate.setDefaultLang('fr');
    
    // Charger les traductions à chaque changement de langue
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.initializeProgram();
    });

    // Initialiser le programme avec les traductions actuelles
    this.initializeProgram();
  }

      
  translateText(lang: string) {
    this.translate.use(lang);
  }

  initializeProgram() {
    this.translate.get([
      'day.Premier Jour',
      'day.Deuxième Jour',
      'day.Troisième Jour',
      'day.Quatrième Jour',
      'day.Cinquième Jour',
      'program.theme1',
      'program.theme2',
      'program.theme3',
      'program.theme4',
      'program.theme5',
      'program.theme6',
      'program.openingCeremony',
      'program.satelliteTelecommunication',
      'program.earthObservation',
      'program.dinnerGala',
      'program.navigationPositioning',
      'program.astronomyExperiments',
      'program.socialActivities'
    ]).subscribe(translations => {
      this.days = [
        {
          day: translations['day.Premier Jour'],
          events: [
            {
              type: 'Lundi 16 Juin 2025',
              speakerImg: '../../../assets/affaire.jpg',
              speakerName: '',
              title: 'Programme',
              description: translations['program.openingCeremony']
            }
          ]
        },
        {
          day: translations['day.Deuxième Jour'],
          events: [
            {
              type: 'Mardi 17 Juin 2025',
              speakerImg: '../../../assets/propulsion.jpg',
              speakerName: '',
              title: translations['program.theme1'],
              description: translations['program.satelliteTelecommunication']
            }
          ]
        },
        {
          day:  translations['day.Troisième Jour'],
          events: [
            {
              type: 'Mercredi 18 Juin 2025',
              speakerImg: '../../../assets/observ.jpg',
              speakerName: '',
              title: translations['program.theme2'],
              description: translations['program.earthObservation']
            },
            {
              type: 'Mercredi 18 Juin 2025',
              speakerImg: '../../../assets/diner.jpeg',
              speakerName: '',
              title:  translations['program.theme3'],
              description: translations['program.dinnerGala']
            }
          ]
        },
        {
          day: translations['day.Quatrième Jour'], 
          events: [
            {
              type: 'Jeudi 19 Juin 2025',
              speakerImg: '../../../assets/galileo-satellite.jpg',
              speakerName: '',
              title:  translations['program.theme4'],
              description: translations['program.navigationPositioning']
            }
          ]
        },
        {
          day:  translations['day.Cinquième Jour'], 
          events: [
            {
              type: 'Vendredi 20 Juin 2025',
              speakerImg: '../../../assets/agriculture.jpeg',
              speakerName: '',
              title:  translations['program.theme5'],
              description: translations['program.astronomyExperiments']
            },
            {
              type: 'Vendredi 20 Juin 2025',
              speakerImg: '../../../assets/tourisme.png',
              speakerName: '',
              title:  translations['program.theme6'],
              description: translations['program.socialActivities']
            }
          ]
        }
      ];
    });
  }

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
}
