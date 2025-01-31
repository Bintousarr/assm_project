import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/registerService/register.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationSuccessDialogComponent } from '../registration-success-dialog/registration-success-dialog.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-mpd-oublier',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './mpd-oublier.component.html',
  styleUrl: './mpd-oublier.component.scss'
})
export class MpdOublierComponent {
  loginForm: FormGroup;

  translate: TranslateService = inject(TranslateService)


  constructor(private fb: FormBuilder, private registerService: RegisterService, private dialog: MatDialog, private router: Router) {
    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],

    });
  }
  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }


  // onCountryInput() {
  //   const input = this.loginForm.get('country')?.value.toLowerCase();
  //   this.filteredCountries = this.countries.filter(country => 
  //     country.toLowerCase().startsWith(input)
  //   );
  // }   


  onReset() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;

      if (this.translate.currentLang == 'en') {
        this.registerService.resetPassword(email).subscribe(
          response => {
            this.openDialog(response.en, false); // Affiche le popup d'erreur
          },
          error => {
            this.openDialog(error.error.en, false); // Affiche le popup d'erreur
          }
        );
      } else {
        this.registerService.regenerePassword(email).subscribe(
          response => {
            this.openDialog(response.fr, false); // Affiche le popup d'erreur
          },
          error => {

            this.openDialog(error.error.fr, false); // Affiche le popup d'erreur
          }
        );

      }

    }
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Force l'affichage des erreurs si le formulaire est invalide
      return;
    }
  }
  openDialog(message: string, isSuccess: boolean): void {
    this.dialog.open(RegistrationSuccessDialogComponent, {
      data: { message: message, isSuccess: isSuccess }
    });
  }
}
