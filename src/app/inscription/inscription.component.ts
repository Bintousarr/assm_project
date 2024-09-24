import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {

  inscriptionForm: FormGroup;
  regions = ['Paris', 'Lyon', 'Marseille']; // Sample list of regions

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      titre: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      courriel: ['', [Validators.required, Validators.email]],
      typeOrganisation: [''],
      organisation: [''],
      telephone1: ['', Validators.required],
      telephone2: [''],
      adresse: ['', Validators.required],
      adresseComplement: [''],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      region: ['', Validators.required],
      formule: ['', Validators.required],
      participationDate: ['', Validators.required],
      dejeuner: ['', Validators.required],
      paiementOption: ['', Validators.required],
      facturationAdresse: [''],
      courrielAdministratif: [''],
      autresInfos: [''],
      conditions: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      console.log(this.inscriptionForm.value);
    } else {
      console.log('Formulaire non valide');
    }
  }
}