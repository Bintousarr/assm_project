import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import saveAs from 'file-saver';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  animations:[]
})
export class ProgramComponent  {
  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    localStorage.removeItem('userToken');
    this.translate.setDefaultLang('en');
    
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
     downloadFile() {
        // Obtenir la langue actuelle
        const currentLang = this.translate.currentLang;
    
        let fileUrl = '';
        let fileName = '';
    
        if (currentLang === 'fr') {
          fileUrl = '/assets/TDR_MASS_2025_FR_Compress_Version.pdf';
          fileName = 'TDR_MASS_2025_FR_Compress_Version.pdf';
        } else {
          fileUrl = '/assets/TDR_MASS_2025_EN_Compress_Version.pdf';
          fileName = 'TDR_MASS_2025_EN_Compress_Version.pdf';
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

//   getBackgroundColor(day: string) {
//     switch(day) {
//       case 'Premier Jour':
//         return 'bg-gray-200'; 
//       case 'Deuxième Jour':
//       case 'Quatrième Jour':
//         return 'bg-white'; 
//       case 'Troisième Jour':
//       case 'Cinquième Jour':
//         return 'bg-gray-200'; 
//       default:
//         return '';
//     }
//   }
// }

//days: Day[] = [];
  // translate: TranslateService = inject(TranslateService)

 

  // ngOnInit() {
  //   this.translate.setDefaultLang('fr');
    
  //   // Charger les traductions à chaque changement de langue
  //   this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
  //     this.initializeProgram();
  //   });

  //   // Initialiser le programme avec les traductions actuelles
  //   this.initializeProgram();
  // }

      
  // translateText(lang: string) {
  //   this.translate.use(lang);
  // }

  // initializeProgram() {
  //   this.translate.get([
  //     'day.Premier Jour',
  //     'day.Deuxième Jour',
  //     'day.Troisième Jour',
  //     'day.Quatrième Jour',
  //     'day.Cinquième Jour',
  //     'program.type1',
  //     'program.type2',
  //     'program.type3',
  //     'program.type4',
  //     'program.type5',
  //     'program.theme1',
  //     'program.theme2',
  //     'program.theme3',
  //     'program.theme4',
  //     'program.theme5',
  //     'program.theme6',
  //     'program.openingCeremony',
  //     'program.satelliteTelecommunication',
  //     'program.earthObservation',
  //     'program.dinnerGala',
  //     'program.navigationPositioning',
  //     'program.astronomyExperiments',
  //     'program.socialActivities'
  //   ]).subscribe(translations => {
  //     this.days = [
  //       {
  //         day: translations['day.Premier Jour'],
  //         events: [
  //           {
  //             type: translations['program.type1'],
  //             speakerImg: '../../../assets/affaire.jpg',
  //             speakerName: '',
  //             title: 'Program',
  //             description: translations['program.openingCeremony']
  //           }
  //         ]
  //       },
  //       {
  //         day: translations['day.Deuxième Jour'],
  //         events: [
  //           {
  //             type: translations['program.type2'],
  //             speakerImg: '../../../assets/propulsion.jpg',
  //             speakerName: '',
  //             title: translations['program.theme1'],
  //             description: translations['program.satelliteTelecommunication']
  //           }
  //         ]
  //       },
  //       {
  //         day:  translations['day.Troisième Jour'],
  //         events: [
  //           {
  //             type: translations['program.type3'],
  //             speakerImg: '../../../assets/observ.jpg',
  //             speakerName: '',
  //             title: translations['program.theme2'],
  //             description: translations['program.earthObservation']
  //           },
  //           {
  //             type: translations['program.type3'],
  //             speakerImg: '../../../assets/diner.jpeg',
  //             speakerName: '',
  //             title:  translations['program.theme3'],
  //             description: translations['program.dinnerGala']
  //           }
  //         ]
  //       },
  //       {
  //         day: translations['day.Quatrième Jour'], 
  //         events: [
  //           {
  //             type: translations['program.type4'],
  //             speakerImg: '../../../assets/galileo-satellite.jpg',
  //             speakerName: '',
  //             title:  translations['program.theme4'],
  //             description: translations['program.navigationPositioning']
  //           }
  //         ]
  //       },
  //       {
  //         day:  translations['day.Cinquième Jour'], 
  //         events: [
  //           {
  //             type: translations['program.type5'],
  //             speakerImg: '../../../assets/agriculture.jpeg',
  //             speakerName: '',
  //             title:  translations['program.theme5'],
  //             description: translations['program.astronomyExperiments']
  //           },
  //           {
  //             type: translations['program.type5'],
  //             speakerImg: '../../../assets/tourisme.png',
  //             speakerName: '',
  //             title:  translations['program.theme6'],
  //             description: translations['program.socialActivities']
  //           }
  //         ]
  //       }
  //     ];
  //   });