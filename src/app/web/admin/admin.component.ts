import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor( private router:Router) {
  }  

  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    this.router.navigate(['/login']);
  }
}
