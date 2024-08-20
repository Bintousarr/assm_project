import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss'
})
export class SponsorComponent {
 
   sponsors = [
    '../../../assets/AFRICAN_UNION.png',
    '../../../assets/spon1.png',
    '../../../assets/spon2.png',
    '../../../assets/spon3.png'
  ];

  constructor() { }

  ngOnInit(): void {
    this.duplicateImages();
  }

  duplicateImages(): void {
    const sponsorContainer = document.querySelector('.animate-scroll') as HTMLElement;
    const originalContent = sponsorContainer.innerHTML; // Obtenir le contenu actuel

    sponsorContainer.innerHTML += originalContent; // Dupliquer le contenu
  }
}
