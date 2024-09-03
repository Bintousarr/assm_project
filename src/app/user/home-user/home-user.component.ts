import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SponsorComponent } from "../../sponsor/sponsor.component";
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [SponsorComponent,CommonModule],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.scss'
})
export class HomeUserComponent {
  intervenants: any[] = [];
  constructor( private router:Router,private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getIntervenants().subscribe(
      (data) => {
        this.intervenants = data;
        console.log('Intervenants:', this.intervenants);
      },
      (error) => {
        console.error('Error fetching intervenants', error);
      }
    );
  }
  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    window.location.href = '/login';

    //this.router.navigate(['/login']);
  }

  goToIntervenant(){
    window.location.href = '/homeuser';
  }

  goToDetail(intervenantId: number) {
    this.router.navigate(['/intervenant', intervenantId]);
  }

  goToRdv(){
    this.router.navigate(['/mes-rendez-vous']);


  }


}
