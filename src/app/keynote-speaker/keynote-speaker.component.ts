import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keynote-speaker',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './keynote-speaker.component.html',
  styleUrl: './keynote-speaker.component.scss'
})
export class KeynoteSpeakerComponent {
  translate: TranslateService = inject(TranslateService)

  orateurs = [
    {
      titre: 'Dr',
      nom: 'TIDIANE OUATTARA',
      organisation: 'Commission de l’Union Africaine, Agence Spatiale Africaine',
      photoUrl: '../../assets/page_20_img_1.png',
      linkedinUrl: 'https://www.linkedin.com/in/tidiane-ouattara'
    },
    {
      titre: 'Prof',
      nom: 'SHERIF SEDGY',
      organisation: 'Agence Spatiale Egyptienne',
      photoUrl: '../../assets/Sheri.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/sherif-sedgy'
    },
    {
      titre: 'Dr',
      nom: 'TIDIANE OUATTARA',
      organisation: 'Ministère de l’Enseignement Supérieur et de la Recherche Scientifique',
      photoUrl: '../../assets/adama-diawara.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/tidiane-ouattara'
    },
    {
      titre: 'Mr',
      nom: 'IRIE Bi FABRICE',
      organisation: 'OTIF Espace Afrique',
      photoUrl: '../../assets/image_irie_fabrice.png',
      linkedinUrl: 'https://www.linkedin.com/in/irie-bi-fabrice'
    }
  ];

  speakers = [
    {
      name: 'accueil.orateur-block.titre2',
      organization: 'accueil.orateur-block.desc1',
      image: '../../assets/tidiane.png',
      linkedin: 'https://www.linkedin.com/in/tidiane-ouattara/',
    },
    {
      name: 'accueil.orateur-block.titre3',
      organization: 'accueil.orateur-block.desc2',
      image: '../../assets/sherif.png',
      linkedin: 'https://www.linkedin.com/in/sherif-sedgy'
    },
    {
      name: 'accueil.orateur-block.titre4',
      organization: 'accueil.orateur-block.desc3',
      image: '../../assets/tidiane2.png',
      linkedin: 'https://www.linkedin.com/in/tidiane-ouattara'
    },
    {
      name: 'accueil.orateur-block.titre5',
      organization: 'accueil.orateur-block.desc4',
      image: '../../assets/tidiane.png',
      linkedin: 'https://www.linkedin.com/in/tidiane-ouattara/',
    },
    // Add other speakers here
  ];

  ngOnInit() {
    this.translate.setDefaultLang('en');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  

}
