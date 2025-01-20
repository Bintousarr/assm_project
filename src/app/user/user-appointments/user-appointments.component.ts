import { Component, inject, OnInit } from '@angular/core';
import { ApppointmentService } from '../../services/apppointment.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { DateFormatPipe } from '../../date-format.pipe'; 
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-appointments',
  imports: [RouterLink, CommonModule,DateFormatPipe,TranslateModule],
  standalone: true,
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.scss']
})
export class UserAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  storedUser:any;
  translate: TranslateService = inject(TranslateService)
  isCollapsed: boolean = false; // État pour basculer entre le menu réduit et complet
  activeRoute: string = ''; // Gère l'élément de menu actif
  menuItems = [
    { label: 'home-user.intervenants', route: 'homeuser', icon: 'fas fa-users' },
    { label: 'home-user.participants', route: 'participants', icon: 'fas fa-users' },
    { label: 'home-user.my-appointments', route: 'mes-rendez-vous', icon: 'fas fa-calendar-alt' },
    { label: 'home-user.appointment-management', route: '/dashboard/gestion-rv', icon: 'fas fa-database' },
    { label: 'home-user.calendar-management', route: 'calandar', icon: 'fas fa-calendar-check' },
    { label: 'home-user.download', route: 'download', icon: 'fa fa-arrow-circle-down' },
    { label: 'home-user.pass', route: '/updatePass', icon: 'fa fa-user' },
    // { label: 'home-user.logout', route: 'logout', icon: 'fas fa-sign-out-alt' },
  ];
  constructor(private appointmentService: ApppointmentService, private router:Router,) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('fr');

    const storedUserString = localStorage.getItem('userToken');
    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.storedUser = JSON.parse(storedUserString);
    } else {
      // Gérer le cas où `storedUserString` est `null`, par exemple, en affichant un message d'erreur
      console.error('No user token found in localStorage');
    }


    if (this.storedUser) {
      this.appointmentService.getAppointmentsByUser(this.storedUser.id).subscribe(
        (data) => {
          this.appointments = data;
         // console.log('User appointments:', this.appointments);
        },
        (error) => {
          console.error('Error fetching user appointments',);
        }
      );
    }
  }
  goToRdv(){
    this.router.navigate(['/mes-rendez-vous']);


  }

  translateText(lang: string) {
    this.translate.use(lang);
  }

  goToIntervenant(){
    window.location.href = '/homeuser';
  }

  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    window.location.href = '/login';

    //this.router.navigate(['/login']);
  }

  goToParticipants(){
    window.location.href = '/participants';
  }
  goTocandar(){
    this.router.navigate(['/calandar']);


  }
  downloadPdf() {
    const userId = '123'; // ID de l'utilisateur
    this.appointmentService.downloadCalendar(this.storedUser.id);
  }


  goto(route: string): void {
    //  this.activeRoute = route;
      this.router.navigate([route]);
      //console.log(`Navigating to: ${route}`);
      // Ajouter ici la logique pour naviguer, exemple avec Angular Router :
      // this.router.navigate([route]);
    }
    toggleSidebar(): void {
      this.isCollapsed = !this.isCollapsed;
    }
}
