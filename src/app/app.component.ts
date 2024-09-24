import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SponsorComponent } from "./sponsor/sponsor.component";
import { CompteAReboursComponent } from "./compte-a-rebours/compte-a-rebours.component";
import { KeynoteSpeakerComponent } from "./keynote-speaker/keynote-speaker.component";
import { HomeComponent } from "./main-application/components/home/home.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TranslateModule, NavbarComponent, BannerComponent, FooterComponent, SponsorComponent, CompteAReboursComponent, KeynoteSpeakerComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OtifProject';

  langage: any = 'en';

  constructor(protected translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
    const browserLang = translate.getBrowserLang();
  }

  // Méthode pour changer de langue
  translateText(arg0: any) {
    this.translate.use(arg0.value);
  }

}
