import { Component, OnInit } from '@angular/core';
import { ApppointmentService } from '../../services/apppointment.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-appointments',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.scss']
})
export class UserAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  storedUser:any;

  constructor(private appointmentService: ApppointmentService) {}

  ngOnInit(): void {
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
          console.log('User appointments:', this.appointments);
        },
        (error) => {
          console.error('Error fetching user appointments', error);
        }
      );
    }
  }
}
