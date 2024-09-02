import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { SpeakerAvalabilityService } from '../../services/speaker-avalability.service'
import { ApppointmentService } from '../../services/apppointment.service'
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intervenant-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './intervenant-detail.component.html',
  styleUrls: ['./intervenant-detail.component.scss']
})
export class IntervenantDetailComponent implements OnInit {
  intervenant: any;
  storedUser: any;
  disponibilities: any;
  idintervenant: number = 0;
  appointment = {
    speaker_id: 0,
    participant_id: 0,
    day_id: 0,
    time_slot_id: 0,
    theme: ""
  }
intervant_id:any;

  isModalOpen = false;
  selectedTime: string | null = null;
  motif: string = '';

  // Jours de la semaine
  days = [
    { name: 'Lundi', date: '02 Déc.' },
    { name: 'Mardi', date: '03 Déc.' },
    { name: 'Mercredi', date: '04 Déc.' },
    { name: 'Jeudi', date: '05 Déc.' },
    { name: 'Vendredi', date: '06 Déc.' }
  ];

  // Créneaux horaires pour chaque jour
  timeSlots = [
    ['15:30', '16:00'],
    ['10:30', '11:00', '11:45'],
    ['10:30', '11:00', '11:45', '13:00'],
    ['10:30', '11:00', '12:15'],
    ['—', '—']
  ];


  constructor(private route: ActivatedRoute, private userService: UserService, private speakerAvalabilityService: SpeakerAvalabilityService, private apppointmentService:ApppointmentService) { }

  ngOnInit(): void {


    // Récupérer la chaîne JSON depuis le localStorage
    const storedUserString = localStorage.getItem('userToken');
    console.log(localStorage.getItem('userToken'))

    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.storedUser = JSON.parse(storedUserString);
    } else {
      // Gérer le cas où `storedUserString` est `null`, par exemple, en affichant un message d'erreur
      console.error('No user token found in localStorage');
    }


    console.log('Stored user:', this.storedUser);
    const intervenantId = this.route.snapshot.paramMap.get('id');


    if (intervenantId) {
      this.intervant_id=intervenantId;
      this.userService.getIntervenantById(intervenantId).subscribe(
        (data) => {
          this.intervenant = data;
          console.log('Intervenant:', this.intervenant);
        },
        (error) => {
          console.error('Error fetching intervenant details', error);
        }
      );

      this.speakerAvalabilityService.getSpeakerAvailabilityWithDetails(parseInt(intervenantId)).subscribe((response) => {
        this.disponibilities = response;
        console.log('Disponibilité:', this.disponibilities);
      },
        (error) => {
          console.error('Error fetching disponibility details', error);

        })
    }
  }

  // Ouvrir le modal pour une heure spécifique
  openModal(disponibility: any, slot:any) {
    console.log(disponibility)
    console.log(slot)
    this.appointment.day_id=disponibility.day_id;
    this.appointment.speaker_id=disponibility.speaker_id;
    this.appointment.participant_id=this.storedUser.id;
    this.appointment.time_slot_id=slot.time_slot_id;

    console.log( this.appointment)

    
    this.isModalOpen = true;

  }

  // Fermer le modal
  closeModal() {
    this.isModalOpen = false;
    this.motif = '';
    this.selectedTime = null;
  }

  // Soumettre le motif
  submitMotif() {
    this.appointment.theme= this.motif;

    console.log('Motif pour :',  this.appointment);

    this.apppointmentService.register(this.appointment).subscribe(response=>{

        console.log('Intervenant:', response);
        location.reload();
        },
        (error) => {
          console.error('Error fetching intervenant details', error);
        })
      
    this.closeModal();
  }
}
