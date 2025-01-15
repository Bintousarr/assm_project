import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { SpeakerAvalabilityService } from '../../services/speaker-avalability.service'
import { ApppointmentService } from '../../services/apppointment.service'
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
  imports: [DateFormatPipe,CommonModule,TranslateModule],
  templateUrl: './user-calendar.component.html',
  styleUrl: './user-calendar.component.scss'
})
export class UserCalendarComponent {
  intervenants: any[] = [];
  user:any;
  translate: TranslateService = inject(TranslateService)

  appointments:any
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
  constructor(private route: ActivatedRoute, private userService: UserService, private speakerAvalabilityService: SpeakerAvalabilityService,private router:Router,private appointmentService: ApppointmentService, private apppointmentService:ApppointmentService) { }
  ngOnInit(): void {
    this.translate.setDefaultLang('fr');

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
       // console.log('Disponibilité:', this.appointments);
      },
        (error) => {
          console.error('Error fetching disponibility details');

        })
    } else {
      // Gérer le cas où `storedUserString` est `null`, par exemple, en affichant un message d'erreur
      console.error('No user token found in localStorage');
    }

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
      this.speakerAvalabilityService.updateAvailability(id).subscribe(
        (data)=>{
          window.location.href = '/calandar';

        }
      )
  }

  goTocandar(){
    this.router.navigate(['/calandar']);


  }

    goToRv(){
    // window.location.href ='' 
    this.router.navigate(['dashboard/gestion-rv']);

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
