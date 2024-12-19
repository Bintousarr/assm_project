import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SponsorComponent } from "../../sponsor/sponsor.component";
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApppointmentService } from '../../services/apppointment.service';

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
  selector: 'app-user-appointment',
  standalone: true,
  imports: [SponsorComponent,CommonModule,TranslateModule],
  templateUrl: './user-appointment.component.html',
  styleUrl: './user-appointment.component.scss'
})
export class UserAppointmentComponent {
  intervenants: any[] = [];
  user:any;
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
    // { label: 'home-user.logout', route: 'logout', icon: 'fas fa-sign-out-alt' },
  ];
  constructor( private router:Router,private userService: UserService,private appointmentService: ApppointmentService) {

  }
  ngOnInit(): void {
    this.translate.setDefaultLang('fr');

    // this.userService.getParticipants().subscribe(
    //   (data) => {
    //     this.intervenants = data;
    //     console.log('Intervenants:', this.intervenants);
    //   },
    //   (error) => {
    //     console.error('Error fetching intervenants', error);
    //   }
    // );
  
    
    const storedUserString = localStorage.getItem('userToken');

    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.user = JSON.parse(storedUserString);
      console.log(this.user)
    } else {
      // Gérer le cas où `storedUserString` est `null`, par exemple, en affichant un message d'erreur
      console.error('No user token found in localStorage');
    }

    this.userService.getIntervenants().subscribe(
      (data:User[]) => {
       this.intervenants = data.filter(user => user.role !== 'Intervenant' && user.id !== this.user.id);
    
        console.log('Intervenants:', this.intervenants);
        //this.intervenants = data;
        
        //console.log('Intervenants:', this.intervenants);
      },
      (error) => {
        console.error('Error fetching intervenants', error);
      }
    );

  }

  translateText(lang: string) {
    this.translate.use(lang);
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
  goToParticipants(){
    window.location.href = '/participants';
  }
  

  goTocandar(){
    this.router.navigate(['/calandar']);


  }
  downloadPdf() {
    const userId = '123'; // ID de l'utilisateur
    this.appointmentService.downloadCalendar(this.user.id);
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

