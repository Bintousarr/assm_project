
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/registerService/register.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationSuccessDialogComponent } from '../registration-success-dialog/registration-success-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:  [ReactiveFormsModule, CommonModule,MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
 



constructor(private fb: FormBuilder, private registerService: RegisterService,    private dialog: MatDialog, private router:Router) {
  this.loginForm = this.fb.group({
   
    email: ['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  
  });
}

// onCountryInput() {
//   const input = this.loginForm.get('country')?.value.toLowerCase();
//   this.filteredCountries = this.countries.filter(country => 
//     country.toLowerCase().startsWith(input)
//   );
// }   


onLogin() {
  console.log(this.loginForm.value)
  if (this.loginForm.valid) {
    this.registerService.login(this.loginForm.value).subscribe(
      response => {
        console.log('User login successfully', response);
        // Extraire l'objet 'user' depuis la réponse
      const user = response.user;

      // Convertir l'objet 'user' en chaîne JSON
      const userString = JSON.stringify(user);

      // Stocker la chaîne JSON dans le localStorage
      localStorage.setItem('userToken', userString);
       // localStorage.setItem('userToken', 'fake-jwt-token');
        this.router.navigate(['/homeuser']);
       // isSuccess = true pour succès
      },
      error => {
        console.error('Error login user', error);
        this.openDialog(error.error.message, false); // isSucce
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
