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
    { name: 'STARTUP', price: 1000, quantity: 1 },
    { name: 'SILVER-PACK', price: 6000, quantity: 1 },
    { name: 'GOLD-PACK', price: 12000, quantity: 1 },
    { name: 'PLATINIUM', price: 23000, quantity: 1 },
    { name: 'HEADLINE SPONSOR', price: 50000, quantity: 1 },
  ];
  total = 0;
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
  paymentMode: string = '';


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private dialog: MatDialog) {
    this.paymentForm = this.fb.group({
      products: this.fb.array([]), // FormArray pour les produits avec quantité
      numeroCarte: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: [''], // Nouveau champ pour le nom de l'entreprise
      country: ['', Validators.required], // Champ pour le pays
    });
    }



  ngOnInit(): void {
    localStorage.removeItem('userToken');
    console.log("dsssdddddsssss")

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
      const productsArray = this.paymentForm.get('products') as FormArray;
      const selectedProducts = this.products
        .map((product, index) => {
          const productControl = productsArray.at(index) as FormGroup;
          const isSelected = productControl.get('selected')?.value;
          const quantity = productControl.get('quantity')?.value || 1;

          // Retourner les informations du produit uniquement s'il est sélectionné
          if (isSelected) {
            return {
              name: product.name,
              unitPrice: product.price,
              quantity: quantity,
            };
          }
          return null; // Si non sélectionné, ignorer
        })
        .filter((product) => product !== null);
      console.log(selectedProducts)
      const emailData = {
        firstName: this.paymentForm.value.firstName,
        lastName: this.paymentForm.value.lastName,
        email: this.paymentForm.value.email,
        selectedProducts: selectedProducts,
        totalPrice: this.total,
        entreprisename:this.paymentForm.value.companyName,
        country:this.paymentForm.value.country
      };
      if (this.translate.currentLang == 'en') {
        this.http.post('https://mass.ci/devis/generateDevisAndSendEmailEnglish.php', emailData).subscribe(
          (response: any) => {
            //alert(response.message);
            this.openDialog('Please find your quote in your email inbox.', true)
          },
          (error) => {
             console.error('Erreur lors de l\'envoi de l\'email :', error);
            this.openDialog('An error occurred while sending the quote.', false)

            // alert('Une erreur s\'est produite lors de l\'envoi du devis.');
          }
        );

      } else {
        this.http.post('https://mass.ci/devis/generateDevisAndSendEmail.php', emailData).subscribe(
          (response: any) => {
            //alert(response.message);
            this.openDialog('Veuillez retrouver votre devis dans votre boîte mail.', true)
          },
          (error) => {
            console.error('Erreur lors de l\'envoi de l\'email :', error);
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
  selectPaymentMode(mode: string): void {
    this.paymentMode = mode;
    if (mode === 'carte') {
      this.paymentForm.get('numeroCarte')?.setValidators([Validators.required]);
    } else {
      this.paymentForm.get('numeroCarte')?.clearValidators();
    }
    this.paymentForm.get('numeroCarte')?.updateValueAndValidity();
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
