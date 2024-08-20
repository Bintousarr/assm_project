import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registrationForm: FormGroup;
  filteredCountries: string[] = [];
  countries: string[] = ['Senegal', 'France', 'Canada', 'United States', 'Brazil', 'China', 'India', 'Nigeria', 'South Africa'];

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registrationForm = this.fb.group({
      titre: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      genre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      pays: ['', Validators.required],
      participation: ['', Validators.required]
    });
  }

  onCountryInput() {
    const input = this.registrationForm.get('pays')?.value.toLowerCase();
    this.filteredCountries = this.countries.filter(country => 
      country.toLowerCase().startsWith(input)
    );
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registerService.register(this.registrationForm.value).subscribe(
        response => {
          console.log('Inscription réussie !', response);
        },
        error => {
          console.error('Erreur lors de l\'inscription', error);
        }
      );
    }
  }
}
