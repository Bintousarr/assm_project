import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationSuccessDialogComponent } from '../../registration-success-dialog/registration-success-dialog.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,MatDialogModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public get registerService(): RegisterService {
    return this._registerService;
  }
  public set registerService(value: RegisterService) {
    this._registerService = value;
  }

  registrationForm: FormGroup;
  filteredCountries: string[] = [];
  countries: string[] = [
  'Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne', 'Andorre', 'Angola', 'Antigua-et-Barbuda', 'Arabie saoudite', 
  'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Belgique', 'Belize', 
  'Bénin', 'Bhoutan', 'Biélorussie', 'Birmanie', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodge', 'Cameroun', 'Canada', 'Centrafrique', 'Chili', 'Chine', 'Chypre', 'Colombie', 
  'Comores', 'Congo', 'Congo (RDC)', 'Corée du Nord', 'Corée du Sud', 'Costa Rica', 'Côte d’Ivoire', 'Croatie', 'Cuba', 'Danemark', 
  'Djibouti', 'Dominique', 'Égypte', 'Émirats arabes unis', 'Équateur', 'Érythrée', 'Espagne', 'Estonie', 'Eswatini', 'États-Unis', 
  'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 'Géorgie', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée', 
  'Guinée équatoriale', 'Guinée-Bissau', 'Guyana', 'Haïti', 'Honduras', 'Hongrie', 'Îles Marshall', 'Îles Salomon', 'Inde', 'Indonésie', 
  'Irak', 'Iran', 'Irlande', 'Islande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kirghizistan', 
  'Kiribati', 'Koweït', 'Laos', 'Lesotho', 'Lettonie', 'Liban', 'Liberia', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord', 
  'Madagascar', 'Malaisie', 'Malawi', 'Maldives', 'Mali', 'Malte', 'Maroc', 'Maurice', 'Mauritanie', 'Mexique', 'Micronésie', 'Moldavie', 
  'Monaco', 'Mongolie', 'Monténégro', 'Mozambique', 'Namibie', 'Nauru', 'Népal', 'Nicaragua', 'Niger', 'Nigeria', 'Norvège', 'Nouvelle-Zélande', 
  'Oman', 'Ouganda', 'Ouzbékistan', 'Pakistan', 'Palaos', 'Palestine', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pays-Bas', 
  'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Saint-Christophe-et-Niévès', 
  'Sainte-Lucie', 'Saint-Marin', 'Saint-Vincent-et-les-Grenadines', 'Salvador', 'Samoa', 'São Tomé-et-Principe', 'Sénégal', 'Serbie', 
  'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie', 'Soudan', 'Soudan du Sud', 'Sri Lanka', 'Suède', 
  'Suisse', 'Suriname', 'Syrie', 'Tadjikistan', 'Tanzanie', 'Tchad', 'République Tchèque', 'Thaïlande', 'Timor oriental', 'Togo', 
  'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turkménistan', 'Turquie', 'Tuvalu', 'Ukraine', 'Uruguay', 'Vanuatu', 'Vatican', 'Venezuela', 
  'Viêt Nam', 'Yémen', 'Zambie', 'Zimbabwe'
];


  constructor(private fb: FormBuilder, private _registerService: RegisterService,    private dialog: MatDialog) {
    this.registrationForm = this.fb.group({
      title: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  // onCountryInput() {
  //   const input = this.registrationForm.get('country')?.value.toLowerCase();
  //   this.filteredCountries = this.countries.filter(country => 
  //     country.toLowerCase().startsWith(input)
  //   );
  // }   

  onCountryInput() {
    const inputValue = this.registrationForm.get('country')?.value.toLowerCase();
    this.filteredCountries = this.countries.filter(country =>
      country.toLowerCase().includes(inputValue)
    );
  }

  selectCountry(country: string) {
    this.registrationForm.get('country')?.setValue(country);
    this.filteredCountries = []; // Clear the dropdown after selection
  }
  onSubmit() {
    console.log(this.registrationForm.value)
    if (this.registrationForm.valid) {
      this.registerService.register(this.registrationForm.value).subscribe(
        response => {
          console.log('User registered successfully', response);
          this.openDialog(response.message, true); // isSuccess = true pour succès
        },
        error => {
          console.error('Error registering user', error);
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
