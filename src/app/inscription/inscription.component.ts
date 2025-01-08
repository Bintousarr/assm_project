import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationSuccessDialogComponent } from '../registration-success-dialog/registration-success-dialog.component';
import { QuoteSuccessDialogComponent } from '../quote-success-dialog/quote-success-dialog.component';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  translate: TranslateService = inject(TranslateService)

  paymentForm: FormGroup;
  products = [
    { name: 'Start-Up', price: 1000 },
    { name: 'ARGENT', price: 6000 },
    { name: 'GOLD', price: 12000 },
    { name: 'PLATINIUM', price: 23000 },
    { name: 'SPONSOR OFFICIEL', price: 50000 },
  ];
  total = 0;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private dialog: MatDialog) {
    this.paymentForm = this.fb.group({
      products: this.fb.array([]), // FormArray pour les produits avec quantité
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  

 
ngOnInit(): void {
  localStorage.removeItem('userToken');
  const productsArray = this.paymentForm.get('products') as FormArray;

  // Initialise chaque produit avec "selected" et "quantity"
  this.products.forEach(() => {
    productsArray.push(
      this.fb.group({
        selected: [false],
        quantity: [1, [Validators.required, Validators.min(1)]],
      })
    );
  });

  const productIndex = Number(this.route.snapshot.queryParamMap.get('productIndex'));
  if (!isNaN(productIndex) && productIndex >= 0 && productIndex < this.products.length) {
    const productGroup = productsArray.at(productIndex) as FormGroup;
    productGroup.get('selected')?.setValue(true);
    this.calculateTotal();
  }

  // Recalculer le total à chaque modification
  this.paymentForm.valueChanges.subscribe(() => this.calculateTotal());
}

  initFormArray(): void {
    const productsArray = this.paymentForm.get('products') as FormArray;
    this.products.forEach(() => productsArray.push(this.fb.control(false))); // Ajoute un contrôle par produit
  }

  preSelectProduct(index: number): void {
    const productsArray = this.paymentForm.get('products') as FormArray;
    productsArray.at(index).setValue(true); // Pré-cocher le produit
    this.calculateTotal();
  }


  calculateTotal(): void {
    const productsArray = this.paymentForm.get('products') as FormArray;
    this.total = productsArray.controls.reduce((acc, control, index) => {
      const productControl = control as FormGroup;
      const isSelected = productControl.get('selected')?.value;
      const quantity = productControl.get('quantity')?.value || 0;
  
      return acc + (isSelected ? this.products[index].price * quantity : 0);
    }, 0);
  }

  onSubmit(): void {
    //console.log('Current Language:', this.translate.currentLang);
    if (this.paymentForm.valid) {
      const selectedProducts = this.products.filter((_, index) =>
        this.paymentForm.value.products[index]
      );
      const emailData = {
        firstName: this.paymentForm.value.firstName,
        lastName: this.paymentForm.value.lastName,
        email: this.paymentForm.value.email,
        selectedProducts: selectedProducts.map((product) => product.name),
        totalPrice: this.total,
      };
      if (this.translate.currentLang == 'en') {
        this.http.post('https://mass.otif-africa-space.com/devis/generateDevisAndSendEmailEnglish.php', emailData).subscribe(
          (response: any) => {
            //alert(response.message);
            this.openDialog('Please find your quote in your email inbox.', true)
          },
          (error) => {
            // console.error('Erreur lors de l\'envoi de l\'email :', error);
            this.openDialog('An error occurred while sending the quote.', false)

            // alert('Une erreur s\'est produite lors de l\'envoi du devis.');
          }
        );

      } else {
        this.http.post('https://mass.otif-africa-space.com/devis/generateDevisAndSendEmail.php', emailData).subscribe(
          (response: any) => {
            //alert(response.message);
            this.openDialog('Veuillez retrouver votre devis dans votre boîte mail.', true)
          },
          (error) => {
            // console.error('Erreur lors de l\'envoi de l\'email :', error);
            this.openDialog('Une erreur s\'est produite lors de l\'envoi du devis.', false)

            // alert('Une erreur s\'est produite lors de l\'envoi du devis.');
          }
        );
      }

    } else {
      this.openDialog('Veuillez remplir tous les champs obligatoires.', false)

      //   alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }

  openDialog(message: string, isSuccess: boolean): void {
    this.dialog.open(QuoteSuccessDialogComponent, {
      data: { message: message, isSuccess: isSuccess }
    });
  }
}
