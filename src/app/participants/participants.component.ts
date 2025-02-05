import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import saveAs from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [TranslateModule, CommonModule, CarouselModule],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss'
})
export class ParticipantsComponent {
  translate: TranslateService = inject(TranslateService);

  currentLang: string = 'en'; // Initialize language to 'en'
  constructor(private router: Router){}
  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.currentLang = this.translate.currentLang; // Get the initial language

    // Listen for language changes if needed
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
