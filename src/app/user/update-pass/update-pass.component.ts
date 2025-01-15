import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { SpeakerAvalabilityService } from '../../services/speaker-avalability.service'
import { ApppointmentService } from '../../services/apppointment.service'
import { FormBuilder, ReactiveFormsModule, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RegisterService } from '../../services/registerService/register.service';
import { QuoteMdpComponent } from '../../quote-mdp/quote-mdp.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-update-pass',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule,MatDialogModule],
  templateUrl: './update-pass.component.html',
  styleUrl: './update-pass.component.scss'
})
export class UpdatePassComponent {
  passwordForm: FormGroup;
  intervenant: any;
  storedUser: any;
  disponibilities: any;
  notMacth=false;
  idintervenant: number = 0;
  appointment = {
    speaker_id: 0,
    participant_id: 0,
    day_id: 0,
    time_slot_id: 0,
    theme: ""
  }
  intervant_id: any;
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

  translate: TranslateService = inject(TranslateService)

  constructor(private dialog: MatDialog,private fb: FormBuilder, private route: ActivatedRoute, private registerService: RegisterService, private userService: UserService, private speakerAvalabilityService: SpeakerAvalabilityService, private router: Router, private apppointmentService: ApppointmentService) {
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    // Récupérer la chaîne JSON depuis le localStorage
    const storedUserString = localStorage.getItem('userToken');
    if (storedUserString) {
      // Convertir la chaîne JSON en objet JavaScript uniquement si elle n'est pas `null`
      this.storedUser = JSON.parse(storedUserString);
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
  goToRdv() {
    this.router.navigate(['/mes-rendez-vous']);


  }

  goToIntervenant() {
    window.location.href = '/homeuser';
  }

  goToDetail(intervenantId: number) {
    this.router.navigate(['/intervenant', intervenantId]);
  }

  goToParticipants() {
    window.location.href = '/participants';
  }
  goTocandar() {
    this.router.navigate(['/calandar']);


  }
  downloadPdf() {
    this.apppointmentService.downloadCalendar(this.storedUser.id);
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

  onUpdatePassword(): void {
    if (this.passwordForm.invalid) {
      return;
    }

    const { oldPassword, newPassword, confirmPassword } = this.passwordForm.value;
    const passReset = {
      "email": this.storedUser.email,
      "oldPassword": oldPassword,
      "newPassword": newPassword
    }

    if (newPassword !== confirmPassword) {
      this.notMacth=true;
      return;
    } else {
      this.registerService.updatePassword(passReset).subscribe(response => {
        //window.location.href = '/homeuser';
        console.log(response)
        if (this.translate.currentLang == "en") {
          this.openDialog(response.message, true); // Affiche le popup d'erreur
         // console.log("rrrrr")
  
        }else{
          this.openDialog(response.fr, true); // Affiche le popup d'erreur
  
        }

      }, (error) => {
        console.log(error)
        //this.openDialog(error.fr, false); // Affiche le popup d'erreur
         //window.location.href = '/homeuser';
         if (this.translate.currentLang == "en") {
          this.openDialog(error.message, true); // Affiche le popup d'erreur
         // console.log("rrrrr")
  
        }else{
          this.openDialog(error.fr, true); // Affiche le popup d'erreur
  
        }

      })

    }
    // this.userService.updatePassword({ oldPassword, newPassword }).subscribe(
    //   (response) => {
    //     alert('Mot de passe mis à jour avec succès !');
    //     this.passwordForm.reset();
    //   },
    //   (error) => {
    //     alert('Erreur lors de la mise à jour du mot de passe : ' + error.message);
    //   }
    // );
  }

   openDialog(message: string, isSuccess: boolean): void {
      this.dialog.open(QuoteMdpComponent, {
        data: { message: message, isSuccess: isSuccess }
      });
    }
}
