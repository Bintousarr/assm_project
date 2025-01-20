import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from "../../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoaderComponent } from '../../../shared/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,LoaderComponent,FooterComponent, RouterOutlet,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit  {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }
}
