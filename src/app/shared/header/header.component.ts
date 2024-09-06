import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      console.log("lelog:",loggedIn)
      this.isLoggedIn = loggedIn;
      console.log("ishh", this.isLoggedIn)
    });
  }
  
}

