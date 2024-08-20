import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sponsor-page',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './sponsor-page.component.html',
  styleUrl: './sponsor-page.component.scss'
})
export class SponsorPageComponent {

  
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<', '>'],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }

}
