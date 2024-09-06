import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from '../../../shared/header/header.component';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { BannerComponent } from "../../../banner/banner.component";
import { SponsorComponent } from "../../../sponsor/sponsor.component";
import { CompteAReboursComponent } from "../../../compte-a-rebours/compte-a-rebours.component";
import { KeynoteSpeakerComponent } from "../../../keynote-speaker/keynote-speaker.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, BannerComponent, SponsorComponent, CompteAReboursComponent, KeynoteSpeakerComponent, FooterComponent, RouterOutlet,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit  {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      console.log("lelog:",loggedIn)
      this.isLoggedIn = loggedIn;
      console.log("ishh", this.isLoggedIn)
    });
  }
}
