import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SponsorComponent } from "../../sponsor/sponsor.component";
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
export interface User {
  id: string;
  title: string;
  gender: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  role: string;
  image: string | null;
  description_parcours: string | null;
  poste: string | null;
  image_entreprise: string | null;
}


@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [SponsorComponent,CommonModule],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.scss'
})
export class HomeUserComponent {
  intervenants: any[] = [];
  user:any;
  constructor( private router:Router,private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getIntervenants().subscribe(
      (data:User[]) => {
        this.intervenants = data.filter(user => user.role === 'Intervenant'&& user.id!=this.user.id);
    
        console.log('Intervenants:', this.intervenants);
        //this.intervenants = data;
        
        //console.log('Intervenants:', this.intervenants);
      },
      (error) => {
        console.error('Error fetching intervenants', error);
      }
    );
    const storedUserString = localStorage.getItem('userToken');

    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.user = JSON.parse(storedUserString);
      console.log(this.user)
    } else {
      // Gérer le cas où `storedUserString` est `null`, par exemple, en affichant un message d'erreur
      console.error('No user token found in localStorage');
    }

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
  goToParticipants(){
    window.location.href = '/participants';
  }
  

  goToDetail(intervenantId: number) {
    this.router.navigate(['/intervenant', intervenantId]);
  }

  goToRdv(){
    this.router.navigate(['/mes-rendez-vous']);


  }
  gestionRdv(){
    this.router.navigate(['/dashboard/gestion-rv']);
   
  }
  goTocandar(){
    this.router.navigate(['/calandar']);


  }
}
