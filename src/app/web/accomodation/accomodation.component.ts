import { Component, inject } from '@angular/core';
import { CompteAReboursComponent } from "../../compte-a-rebours/compte-a-rebours.component";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



interface Team {
  rank: number;
  logo: string;
  name: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
}


@Component({
  selector: 'app-accomodation',
  standalone: true,
  imports: [CompteAReboursComponent, CommonModule, TranslateModule],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.scss'
})
export class AccomodationComponent {

 
openSection: string = '';

translate: TranslateService = inject(TranslateService)

ngOnInit() {
  this.translate.setDefaultLang('fr');
}

translateText(lang: string) {
  this.translate.use(lang);
}


toggleSection(section: string) {
    this.openSection = this.openSection === section ? '' : section;
  }
}
