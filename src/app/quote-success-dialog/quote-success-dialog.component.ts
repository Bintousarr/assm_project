import { Component, inject, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-quote-success-dialog',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './quote-success-dialog.component.html',
  styleUrl: './quote-success-dialog.component.scss'
})
export class QuoteSuccessDialogComponent {
  isSuccess: boolean;
  apiMessage: string;
  translate: TranslateService = inject(TranslateService)

  currentLang: string;
  constructor(
    public dialogRef: MatDialogRef<QuoteSuccessDialogComponent>,  // Injecter MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: { message: string, isSuccess: boolean },
    private router: Router
  ) {
     this.currentLang = this.translate.currentLang || 'en';
    this.isSuccess = data.isSuccess;
    this.apiMessage = data.message;
  }

  onOkClick(): void {
    console.log(this.apiMessage)
    if (this.apiMessage == 'User created successfully.' || this.apiMessage == 'Utilisateur créé et disponibilités définies avec succès.'|| this.apiMessage =='User registered successfully'||this.apiMessage=='Veuillez retrouver votre devis dans votre boîte mail.'|| this.apiMessage=='Please find your quote in your email inbox.') {
      this.dialogRef.close(); // Fermer le popup
      this.router.navigate(['/']); // Redirige vers la page d'accueil ou une autre page
    } else {
      this.dialogRef.close(); // Fermer simplement le popup, reste sur la page de registre
    }
  }
}
