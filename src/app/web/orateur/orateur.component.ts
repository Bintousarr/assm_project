import { Component } from '@angular/core';
import { SponsorComponent } from "../../sponsor/sponsor.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-orateur',
  standalone: true,
  imports: [SponsorComponent, CommonModule, RouterLink],
  templateUrl: './orateur.component.html',
  styleUrl: './orateur.component.scss'
})
export class OrateurComponent {
 
  showMoreFabrice = false;
  showMoreTidiane = false;
  showMoreDiawara = false;
  showMoreSedky = false;
  
}
