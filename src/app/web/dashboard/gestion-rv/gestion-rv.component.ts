import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NotificationComponent } from "../notification/notification.component";
import { ApppointmentService } from '../../../services/apppointment.service'
import { DateFormatPipe } from '../../../date-format.pipe'; 

interface Item {
  id: number;
  statut: string;
  date: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  motif: string;
}


@Component({
  selector: 'app-gestion-rv',
  standalone: true,
  imports: [CommonModule, RouterLink, NotificationComponent,DateFormatPipe],
  templateUrl: './gestion-rv.component.html',
  styleUrl: './gestion-rv.component.scss'
})
export class GestionRvComponent implements OnInit {
  isDropdownOpen = false;
  isPopupOpen = false;
  selectedItem: any;
  user: any;
  intervants: any;
  constructor(private router: Router, private apppointmentService: ApppointmentService) { }

  ngOnInit() {

    const storedUserString = localStorage.getItem('userToken');

    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.user = JSON.parse(storedUserString);
    } else {
      // Gérer le cas où `storedUserString` est `null`, par exemple, en affichant un message d'erreur
      console.error('No user token found in localStorage');
    }

    console.log(this.user)

    this.apppointmentService.getBySpeaker(this.user.id).subscribe(response => {

      console.log('Intervenants:', response);
      this.intervants = response;
    },
      (error) => {
        console.error('Error fetching intervenants', error);
      })
  }
  selectedTab: string = 'initiator';

  items: Item[] = [
    { id: 1, statut: 'En attente', date: '09 Aout 2024', nom: 'PAPE', prenom: 'SOW', telephone: '776666666', email: 'pape@gmail.com', motif: 'Proposition d\'affaire' },
    { id: 2, statut: 'En attente', date: '11 Aout 2024', nom: 'Bintou', prenom: 'Sarr', telephone: '789999880', email: 'sarr@gmail.com', motif: 'Entretien pour un éventuel collaboration' }
  ];


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openPopup(item: Item) {
    this.selectedItem = item;
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.selectedItem = null;
    this.selectedTab = 'initiator';
  }

  validateRequest() {
    if (this.selectedItem) {
      this.selectedItem.statut = 'Validée';
      console.log('Request validated for item:', this.selectedItem);
    }
    this.apppointmentService.updateAppointmentStatus(this.selectedItem.id, 'approuvé').subscribe(response => {
      console.log('Intervenants:', response);
      window.location.href ='/dashboard/gestion-rv' 
    
    },
      (error) => {
        console.error('Error fetching intervenants', error);
      })

    this.closePopup();
  }

  refuseRequest() {
    this.apppointmentService.updateAppointmentStatus(this.selectedItem.id, 'décliné').subscribe(response => {
      console.log('Intervenants:', response);
      window.location.href ='/dashboard/gestion-rv' 
    
    },
      (error) => {
        console.error('Error fetching intervenants', error);
      })
    this.closePopup();
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }


  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');

    // Rediriger vers la page de login
    window.location.href = '/login';

    //this.router.navigate(['/login']);
  }

  goTobord() {
    window.location.href = '/dashboard';

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
