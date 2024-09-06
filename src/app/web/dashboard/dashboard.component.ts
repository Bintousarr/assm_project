import { Component,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApppointmentService } from '../../services/apppointment.service'

interface Participant {
  first_name: string;
  last_name: string;
}

interface Appointment {
  id: string; // ou `number` si `id` est un nombre
  participant: Participant;
  day_name: string;
  date: string;
  start_time: string;
  end_time: string;
  theme: string;
  status: string;
}


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {


  user: any;
appointment:any
// Initialiser app_approuv avec le type correct
app_approuv: Appointment[] = [];
app_decline: Appointment[] = [];
app_wait: Appointment[] = [];
  constructor( private router:Router,private apppointmentService: ApppointmentService) {
  }  
  ngOnInit() {

    const storedUserString = localStorage.getItem('userToken');

    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.user = JSON.parse(storedUserString);
      console.log(this.user)
    } else {
      // Gérer le cas où `storedUserString` est `null`, par exemple, en affichant un message d'erreur
      console.error('No user token found in localStorage');
    }

    console.log(this.user)

    this.apppointmentService.getBySpeaker(this.user.id).subscribe(response => {

      console.log('Intervenants:', response);
      this.appointment = response;
      for(let el of response){
        if(el.status=="approuvé"){
          this.app_approuv.push(el)
          console.log(this.app_approuv.length)
        }else if(el.status=="décliné"){
          this.app_decline.push(el)
        }else if(el.status="en attente"){
          this.app_wait.push(el)
        }
      }
    },
      (error) => {
        console.error('Error fetching intervenants', error);
      })
  }

  
  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    window.location.href = '/login';

    //this.router.navigate(['/login']);
   // this.router.navigate(['/login']);
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
}
