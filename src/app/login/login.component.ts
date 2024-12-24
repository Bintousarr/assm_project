
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/registerService/register.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationSuccessDialogComponent } from '../registration-success-dialog/registration-success-dialog.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:  [TranslateModule, ReactiveFormsModule, CommonModule,MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
 
  translate: TranslateService = inject(TranslateService)

 
constructor(private fb: FormBuilder, private registerService: RegisterService,    private dialog: MatDialog, private router:Router) {
  this.loginForm = this.fb.group({
   
    email: ['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  
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


onLogin() {
  if (this.loginForm.valid) {
    this.registerService.login(this.loginForm.value).subscribe(
      response => {
        if (response.user) { // Vérifie si l'objet 'user' est présent dans la réponse
          console.log('User login successfully', response);
          const userString = JSON.stringify(response.user);
          localStorage.setItem('userToken', userString);
          // if(response.user.role=="Intervenant"){
          //   window.location.href = '/dashboard';
          // }else{
          //   window.location.href = '/homeuser';
          // }
          window.location.href = '/homeuser';
         // this.router.navigate(['/homeuser']);
          //this.router.navigate(['/homeuser']);
        } else {
          console.error('test', response);
          this.openDialog(response.message, false);
        }
      },
      error => {
        console.error('Error login user', error);
        this.openDialog(error.error.message, false); // Affiche le popup d'erreur
      }
    );
  }
}
openDialog(message: string, isSuccess: boolean): void {
  this.dialog.open(RegistrationSuccessDialogComponent, {
    data: { message: message, isSuccess: isSuccess }
  });
}
}
