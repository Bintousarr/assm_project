import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ReactiveFormsModule],
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

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
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
    const productIndex = Number(this.route.snapshot.queryParamMap.get('productIndex'));
  
    const controlsConfig: any = {};
    this.products.forEach((_, index) => {
      controlsConfig[`product${index}`] = [index === productIndex]; // Par défaut, coche le produit sélectionné
    });
  
    this.paymentForm = this.fb.group({
      ...controlsConfig,
      paymentMethod: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  
    this.calculateTotal();
  
    this.paymentForm.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
  }
  
  onCheckboxChange(selectedIndex: number): void {
    this.products.forEach((_, index) => {
      const controlName = `product${index}`;
      this.paymentForm.get(controlName)?.setValue(index === selectedIndex);
    });
  
    this.calculateTotal();
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
