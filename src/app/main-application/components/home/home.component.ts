import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { BannerComponent } from "../../../banner/banner.component";
import { SponsorComponent } from "../../../sponsor/sponsor.component";
import { CompteAReboursComponent } from "../../../compte-a-rebours/compte-a-rebours.component";
import { KeynoteSpeakerComponent } from "../../../keynote-speaker/keynote-speaker.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BannerComponent, SponsorComponent, CompteAReboursComponent, KeynoteSpeakerComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
