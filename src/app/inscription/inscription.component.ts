import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule,FormsModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  paymentForm: FormGroup;
  products = [
    { name: 'Start-Up', price: 1000 },
    { name: 'ARGENT', price: 6000 },
    { name: 'GOLD', price: 12000 },
    { name: 'PLATINIUM', price: 23000 },
    { name: 'SPONSOR OFFICIEL', price: 50000 },
  ];
  total = 0;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      product0: [false],
      product1: [false],
      product2: [false],
      product3: [false],
      product4: [false],
      paymentMethod: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.paymentForm.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
    this.translate.setDefaultLang('en');

  }

  calculateTotal(): void {
    this.total = this.products.reduce((acc, product, index) => {
      return acc + (this.paymentForm.get(`product${index}`)?.value ? product.price : 0);
    }, 0);
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      console.log('Form Data:', this.paymentForm.value);
      alert('Paiement soumis avec succès !');
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
  translate: TranslateService = inject(TranslateService)

  
  translateText(lang: string) {
    this.translate.use(lang);
  }
  
}
