import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { SpeakerAvalabilityService } from '../../services/speaker-avalability.service'
import { ApppointmentService } from '../../services/apppointment.service'
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DateFormatPipe } from '../../date-format.pipe'; 
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
  selector: 'app-user-calendar',
  standalone: true,
  imports: [DateFormatPipe,CommonModule],
  templateUrl: './user-calendar.component.html',
  styleUrl: './user-calendar.component.scss'
})
export class UserCalendarComponent {
  intervenants: any[] = [];
  user:any;
  appointments:any
  constructor(private route: ActivatedRoute, private userService: UserService, private speakerAvalabilityService: SpeakerAvalabilityService,private router:Router, private apppointmentService:ApppointmentService) { }
  ngOnInit(): void {
    // this.userService.getIntervenants().subscribe(
    //   (data:User[]) => {
    //     this.intervenants = data.filter(user => user.role === 'Intervenant'&& user.id!=this.user.id);
    
    //     console.log('Intervenants:', this.intervenants);
    //     //this.intervenants = data;
        
    //     //console.log('Intervenants:', this.intervenants);
    //   },
    //   (error) => {
    //     console.error('Error fetching intervenants', error);
    //   }
    // );
    const storedUserString = localStorage.getItem('userToken');

    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.user = JSON.parse(storedUserString);
      
      this.speakerAvalabilityService.getUserCalendar(parseInt( this.user.id)).subscribe((response) => {
        this.appointments = response;
        console.log('Disponibilité:', this.appointments);
      },
        (error) => {
          console.error('Error fetching disponibility details', error);

        })
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
  goToRdv(){
    this.router.navigate(['/mes-rendez-vous']);


  }

  goToIntervenant(){
    window.location.href = '/homeuser';
  }

  goToDetail(intervenantId: number) {
    this.router.navigate(['/intervenant', intervenantId]);
  }

  goToParticipants(){
    window.location.href = '/participants';
  }
  declineAvailability(id:any){
      console.log(id)
      this.speakerAvalabilityService.updateAvailability(id).subscribe(
        (data)=>{
          console.log(data)
          window.location.href = '/calandar';

        }
      )
  }

  goTocandar(){
    this.router.navigate(['/calandar']);


  }

}
