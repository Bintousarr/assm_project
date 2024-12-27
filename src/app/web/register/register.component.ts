import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/registerService/register.service';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationSuccessDialogComponent } from '../../registration-success-dialog/registration-success-dialog.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TranslateModule,ReactiveFormsModule, CommonModule, MatDialogModule],
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

  translate: TranslateService = inject(TranslateService)

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  translateText(lang: string) {
    this.translate.use(lang);
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

  selectedFile: File = new File([], 'user.jpg');


  constructor(private fb: FormBuilder, private _registerService: RegisterService, private dialog: MatDialog) {
    this.registrationForm = this.fb.group({
      title: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]], // Doit contenir entre 10 et 15 chiffres
      country: ['', Validators.required],
      role: ['', Validators.required],
      poste: ['', [Validators.required, Validators.minLength(2)]],
      organisme: ['', [Validators.required, Validators.minLength(2)]],
      photo: [null, [fileTypeValidator(['image/jpeg', 'image/png']), fileSizeValidator(5 * 1024 * 1024)]], // Valideurs pour la photo
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

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.selectedFile = file;
  //     this.registrationForm.patchValue({ photo: file });
  //   }
  // }
  // onSubmit() {
  //   console.log(this.registrationForm.value);
  //   if (this.registrationForm.valid) {
  //     const formData = new FormData();
  //     Object.keys(this.registrationForm.controls).forEach(key => {
  //       formData.append(key, this.registrationForm.get(key)?.value);
  //     });

  //     if (this.selectedFile) {
  //       formData.append('photo', this.selectedFile);
  //     }

  //     this._registerService.register(formData).subscribe(
  //       response => {
  //         console.log('User registered successfully', response);
  //         this.openDialog(response.message, true); // isSuccess = true pour succès
  //       },
  //       error => {
  //         console.error('Error registering user', error);
  //         this.openDialog(error.error.message, false); // isSuccess = false pour erreur
  //       }
  //     );
  //   }
  // }
  openDialog(message: string, isSuccess: boolean): void {
    this.dialog.open(RegistrationSuccessDialogComponent, {
      data: { message: message, isSuccess: isSuccess }
    });
  }


  onSubmit() {
    if (this.registrationForm.invalid) {
      this.markAllFieldsAsTouched(); // Marque tous les champs comme "touchés" pour afficher les erreurs
      return;
    }
    const formData = new FormData();

    console.log(this.registrationForm.value);
  // Ajouter tous les champs du formulaire
  Object.keys(this.registrationForm.controls).forEach(key => {
    const value = this.registrationForm.get(key)?.value;
    if (key === 'photo' && value) {
      formData.append('photo', this.selectedFile, this.selectedFile.name); // Ajouter la photo si elle est sélectionnée
    } else {
      formData.append(key, value);
    }
  });

  this._registerService.register(formData).subscribe(
    response => {
      console.log('User registered successfully', response);
      this.openDialog(response.message, true); // Affiche un message de succès
    },
    error => {
      console.error('Error registering user', error);
      this.openDialog(error.error.message || 'Une erreur est survenue.', false); // Affiche un message d'erreur
    }
  );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Stocker seulement le nom du fichier dans le formulaire
      this.registrationForm.patchValue({ photo: file.name });

      // Valider le fichier (pour vérifier son type)
      this.registrationForm.get('photo')?.setErrors(fileTypeValidator(['image/png', 'image/jpeg'])(file) ? { invalidFileType: true } : null);

      this.registrationForm.get('photo')?.updateValueAndValidity();  // Met à jour la validation
    }
  }
  private markAllFieldsAsTouched() {
    Object.keys(this.registrationForm.controls).forEach(field => {
      const control = this.registrationForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
function fileTypeValidator(allowedTypes: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File;  // Récupérer le fichier depuis le control

    if (file && file instanceof File) {
      const fileType = file.type;
      console.log(fileType);  // Vérification du type de fichier
      if (!allowedTypes.includes(fileType)) {
        return { invalidFileType: true };
      }
    }
    return null;
  };
}



function fileSizeValidator(maxSize: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File;
    if (file) {
      const fileSize = file.size;
      if (fileSize > maxSize) {
        return { fileTooLarge: true };
      }
    }
    return null;
  };
}
// Marquer tous les champs comme "touchés"
