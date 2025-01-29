
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-profesional-visitor',
  standalone: true,
  imports: [RouterLink, TranslateModule,FormsModule,CommonModule],
  templateUrl: './profesional-visitor.component.html',
  styleUrl: './profesional-visitor.component.scss'
})
export class ProfesionalVisitorComponent {
  translate: TranslateService = inject(TranslateService);
  currentLang: string = 'en'; // Initialize language to 'en'
   // visitorForm: FormGroup;
   visitorData = {
      firstName:'',
      lastName: '',
      companyName: ''
    };
    photoPreview: string | null = null;
    photoData: string | null = null; 
  constructor( private router:Router,private fb: FormBuilder) {
  
  } 
  ngOnInit() {
    this.translate.setDefaultLang('fr');
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
    
  }
  translateText(lang: string) {
    this.translate.use(lang);
  }
  goToRegister(){
    this.router.navigate(['/register']); // Assure-toi d'avoir injecté Router
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoPreview = e.target.result;
        this.photoData = e.target.result.split(',')[1]; // Récupération des données en base64
      };
      reader.readAsDataURL(file);
    }
  }

  generateBadge(visitorForm:any) {
   
    if (visitorForm.valid) {
      const { firstName, lastName, companyName } = this.visitorData;
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',  
        format: [85, 130] // Format badge ID 
      });

      // Fond blanc et cadre
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, 85, 130, 'F');

      // Ajout du logo
      const logo = '../../../assets/newlogo.png'; // Assurez-vous d'avoir le logo dans assets/
      // 📌 Dimensions du badge
      const pdfWidth = doc.internal.pageSize.getWidth();

      // 📌 Taille du logo et positionnement en haut
      const logoWidth = 80; // Ajuste la largeur du logo
      const logoHeight = 35; // Ajuste la hauteur du logo
      const logoX = (pdfWidth - logoWidth) / 2; // Centrage horizontal
      const logoY = 1; // Place le logo tout en haut

      // 📌 Ajout du logo centré en haut
      doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);
      //doc.addImage(logo, 'PNG', 25, 5, 35, 15);

      // Nom et prénom centrés
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text(firstName.toUpperCase(), 42.5, 40, { align: 'center' });
      doc.setFont('helvetica', 'bold');
      doc.text(lastName.toUpperCase(), 42.5, 50, { align: 'center' });

      // Ajout de l’entreprise
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text(companyName.toUpperCase(), 42.5, 60, { align: 'center' });

      // Ajout de la photo en bas
      //doc.addImage(`data:image/png;base64,${this.photoData}`, 'PNG', 30, 38, 25, 25);


      // 📌 Générer le QR Code à partir d’une URL
      const qrText = 'https://www.mass.ci'; // URL cible
      const qrSize = 30; // Taille du QR Code
      const qrX = (pdfWidth - qrSize) / 2; // Centrage horizontal
      const qrY = 70; // Position verticale du QR Code

      QRCode.toDataURL(qrText, { width: qrSize, margin: 1 }).then((qrImage: any) => {
        doc.addImage(qrImage, 'PNG', qrX, qrY, qrSize, qrSize);

        // Téléchargement du badge
        doc.save(`badge_${firstName}_${lastName}.pdf`);
      });
    }

  }
}
