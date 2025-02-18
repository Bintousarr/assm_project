import { CommonModule, } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject,ChangeDetectorRef  } from '@angular/core';
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
  cartepaymentForm: FormGroup;
  sponsorPackages = [
    {
      name: "SP_SPONSOR_ETOILE",
      fullname_fr:"Sponsor Étoile",
      fullname_en:"Star Sponsor",
      priceUSD: "12 000",
      priceXOF: "7 500 000",
      standSize: "SP_STAND_18M2",
      bgColor: "bg-gray-900",
      equipments: ["SP_TABLES_2", "SP_CHAIRS_4", "SP_LIGHTINGS_2", "SP_PLUGS_2"],
      features: [
        "SP_SPONSOR_STATUS", "SP_LOGO_ON_WEBSITE", "SP_LOGO_ON_COVER", "SP_QUARTER_PAGE_AD",
        "SP_LOGO_ON_COMMUNICATION", "SP_PROMO_ITEMS", "SP_PRESENCE_KAKEMONO",
        "SP_LIVE_INTERVIEW", "SP_VIDEO_PLAY_30S", "SP_AGORA_SPEECH_15MIN", "SP_GALA_ACCESS",
        "SP_HONORED_GUESTS_ACCESS", "SP_VIP_LUNCH_ACCESS", "SP_INSTITUTIONAL_SPOT_MASS_WEBSITE",
        "SP_SPONSOR_EVENT_ITEM"
      ]
    },
    {
      name: "SP_SPONSOR_CONSTELLATION",
      fullname_fr:"Sponsor Constellation",
      fullname_en:"Constellation Sponsor",
      priceUSD: "20 000",
      priceXOF: "12 500 000",
      standSize: "SP_STAND_27M2",
      bgColor: "bg-gray-700",
      equipments: ["SP_TABLES_3", "SP_CHAIRS_6", "SP_LIGHTINGS_3", "SP_PLUGS_3"],
      features: [
        "SP_SPONSOR_STATUS", "SP_LOGO_ON_WEBSITE", "SP_LOGO_ON_COVER", "SP_HALF_PAGE_AD",
        "SP_LOGO_ON_ALL_SUPPORTS", "SP_PROMO_ITEMS", "SP_PRESENCE_KAKEMONO",
        "SP_LIVE_INTERVIEW", "SP_VIDEO_PLAY_1MIN30", "SP_AGORA_SPEECH_20MIN", "SP_GALA_ACCESS",
        "SP_PRIORITY_BOOKING", "SP_OPENING_CEREMONY_INVITES_5", "SP_INSTITUTIONAL_SPOT_MASS_WEBSITE",
        "SP_SPONSOR_EVENT_ITEM"
      ]
    },
    {
      name: "SP_SPONSOR_GALAXIE",
      fullname_fr:"Sponsor Galaxie",
      fullname_en:"Galaxy Sponsor",
      priceUSD: "35 000",
      priceXOF: "22 000 000",
      standSize: "SP_STAND_36M2",
      bgColor: "bg-gray-900",
      equipments: ["SP_TABLES_4", "SP_CHAIRS_8", "SP_LIGHTINGS_4", "SP_PLUGS_4"],
      features: [
        "SP_SPONSOR_STATUS", "SP_LOGO_ON_WEBSITE", "SP_LOGO_ON_COVER", "SP_FULL_PAGE_AD",
        "SP_LOGO_ON_ALL_SUPPORTS", "SP_PROMO_ITEMS", "SP_PRESENCE_KAKEMONO",
        "SP_LIVE_INTERVIEW", "SP_VIDEO_PLAY_2MIN", "SP_AGORA_SPEECH_30MIN", "SP_GALA_ACCESS",
        "SP_RECOGNITION_AT_EVENT", "SP_INSTITUTIONAL_SPOT_MASS_WEBSITE", "SP_SPONSOR_EVENT_ITEM",
        "SP_PRIORITY_BOOKING", "SP_OPENING_CEREMONY_INVITES_10",
        "SP_PROMOTIONAL_ACTIONS", "SP_BRANDING_CONTEST_OPPORTUNITY",
        "SP_GALA_TABLE_RESERVATION", "SP_VIP_LUNCH_ACCESS", "SP_EXCLUSIVE_INTERVIEW_WEB_TV",
        "SP_COMPANY_MENTION_RADIO_AD", "SP_MASS_SCREEN_PRESENCE"
      ]
    }
  ];
  products = [
    { name: 'PACK_DECOLLAGE', price: 3000, quantity: 1 },
    { name: 'PACK_ASCENSION', price: 6000, quantity: 1 },
    { name: 'PACK_EN_ORBITE', price: 9000, quantity: 1 },
    { name: 'SP_SPONSOR_ETOILE', price: 12000, quantity: 1 },
    { name: 'SP_SPONSOR_CONSTELLATION', price: 20000, quantity: 1 },
    { name: 'SP_SPONSOR_GALAXIE', price: 35000, quantity: 1 },
  ];
  total = 0;
  totalFCA: number = 0; // Total en XOF
  exchangeRate: number = 600; // Taux de conversion USD → XOF (à mettre à jour dynamiquement)
  countries: { name: string, slug: string }[] = [
    { name: 'Afghanistan', slug: 'AF' }, { name: 'Afrique du Sud', slug: 'ZA' },
    { name: 'Albanie', slug: 'AL' },
    { name: 'Algérie', slug: 'DZ' },
    { name: 'Allemagne', slug: 'DE' },
    { name: 'Andorre', slug: 'AD' },
    { name: 'Angola', slug: 'AO' },
    { name: 'Arabie saoudite', slug: 'SA' },
    { name: 'Argentine', slug: 'AR' },
    { name: 'Arménie', slug: 'AM' },
    { name: 'Australie', slug: 'AU' },
    { name: 'Autriche', slug: 'AT' },
    { name: 'Azerbaïdjan', slug: 'AZ' },
    { name: 'Bahamas', slug: 'BS' },
    { name: 'Bahreïn', slug: 'BH' },
    { name: 'Bangladesh', slug: 'BD' },
    { name: 'Belgique', slug: 'BE' },
    { name: 'Bénin', slug: 'BJ' },
    { name: 'Brésil', slug: 'BR' },
    { name: 'Burkina Faso', slug: 'BF' },
    { name: 'Cameroun', slug: 'CM' },
    { name: 'Canada', slug: 'CA' },
    { name: 'Chili', slug: 'CL' },
    { name: 'Chine', slug: 'CN' },
    { name: 'Côte d’Ivoire', slug: 'CI' },
    { name: 'Danemark', slug: 'DK' },
    { name: 'Égypte', slug: 'EG' },
    { name: 'Espagne', slug: 'ES' },
    { name: 'États-Unis', slug: 'US' },
    { name: 'France', slug: 'FR' },
    { name: 'Gabon', slug: 'GA' },
    { name: 'Ghana', slug: 'GH' },
    { name: 'Grèce', slug: 'GR' },
    { name: 'Guinée', slug: 'GN' },
    { name: 'Inde', slug: 'IN' },
    { name: 'Indonésie', slug: 'ID' },
    { name: 'Italie', slug: 'IT' },
    { name: 'Japon', slug: 'JP' },
    { name: 'Kenya', slug: 'KE' },
    { name: 'Liban', slug: 'LB' },
    { name: 'Madagascar', slug: 'MG' },
    { name: 'Maroc', slug: 'MA' },
    { name: 'Mexique', slug: 'MX' },
    { name: 'Nigéria', slug: 'NG' },
    { name: 'Norvège', slug: 'NO' },
    { name: 'Pays-Bas', slug: 'NL' },
    { name: 'Portugal', slug: 'PT' },
    { name: 'Royaume-Uni', slug: 'GB' },
    { name: 'Russie', slug: 'RU' },
    { name: 'Sénégal', slug: 'SN' },
    { name: 'Suisse', slug: 'CH' },
    { name: 'Tunisie', slug: 'TN' },
    { name: 'Turquie', slug: 'TR' },
    { name: 'Ukraine', slug: 'UA' },
    { name: 'Vatican', slug: 'VA' },
    { name: 'Venezuela', slug: 'VE' },
    { name: 'Viêt Nam', slug: 'VN' },
    { name: 'Zambie', slug: 'ZM' },
    { name: 'Zimbabwe', slug: 'ZW' }
  ];

  paymentMode: string = '';


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private dialog: MatDialog, private cdRef: ChangeDetectorRef) {
    this.paymentForm = this.fb.group({
      products: this.fb.array([]), // FormArray pour les produits avec quantité
      numeroCarte: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: [''], // Nouveau champ pour le nom de l'entreprise
      country: ['', Validators.required], // Champ pour le pays
    });

    this.cartepaymentForm = this.fb.group({
      // amount: [this.totalFCA, [Validators.required]],
      clientName: ['', Validators.required],
      clientSurname: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientPhone: ['', Validators.required],
      clientAddress: ['', Validators.required],
      clientCity: ['', Validators.required],
      clientCountry: ['', Validators.required],
      clientZip: ['', Validators.required],
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
      console.log(this.total)
      this.totalFCA = this.total * this.exchangeRate;
      console.log(this.totalFCA)


    }

    // Recalculer le total à chaque modification
    this.paymentForm.valueChanges.subscribe(() =>{ this.calculateTotal(); });
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
    this.totalFCA = this.total * this.exchangeRate;
    this.cdRef.detectChanges();
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
        entreprisename: this.paymentForm.value.companyName,
        country: this.paymentForm.value.country
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

  onPay() {
    if (this.cartepaymentForm.valid) {
      const formValues = this.cartepaymentForm.value;

      // Charger le SDK CinetPay
      const cinetpay = (window as any).CinetPay;

      // Configurer les détails du paiement
      cinetpay.setConfig({
        apikey: '15611078206799ff602425f0.36041230', // Remplacez par votre clé API
        site_id: '105886679', // Remplacez par votre site ID
        //notify_url: 'https://votre-backend.com/cinetpay/callback',
        notify_url: 'https://mass.ci/payment-success',
        mode: 'PRODUCTION'
      });

      // cinetpay.setSignature({
      //   transaction_id: 'txn_' + new Date().getTime(),
      //   amount: formValues.amount,
      //   currency: 'XOF', // Changez selon la devise utilisée
      //   channels: 'ALL',
      //   description: `Paiement pour ${formValues.clientName}`,
      // });

      cinetpay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(),
        amount: this.totalFCA,
        currency: 'XOF',
        channels: 'ALL',
        description: `Paiement pour ${formValues.clientName}`,
        customer_name: formValues.clientName,
        customer_surname: formValues.clientSurname,
        customer_email: formValues.clientEmail,
        customer_phone_number: formValues.clientPhone,
        customer_address: formValues.clientAddress,
        customer_city: formValues.clientCity,
        customer_country: formValues.clientCountry,
        customer_state : "CM",// le code ISO l'état
        customer_zip_code: formValues.clientZip,
      });


      cinetpay.on('paymentSuccessfull', (paymentInfo: any) => {
        console.log('Paiement réussi', paymentInfo);
        alert('Votre paiement a été effectué avec succès.');
      });

      cinetpay.on('error', (error: any) => {
        console.error('Erreur lors du paiement', error);
        alert('Le paiement a échoué.');
      });
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

  // cinetpay.on('paymentPending', (paymentInfo: any) => {
  //   console.log('Paiement en attente : ', paymentInfo);
  //   alert('Votre paiement est en attente.');
  // });

  // cinetpay.validate();
}
