import { Component } from '@angular/core';
import { CompteAReboursComponent } from "../../compte-a-rebours/compte-a-rebours.component";
import { CommonModule } from '@angular/common';



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
  imports: [CompteAReboursComponent, CommonModule],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.scss'
})
export class AccomodationComponent {

 
openSection: string = '';



toggleSection(section: string) {
    this.openSection = this.openSection === section ? '' : section;
  }
}
