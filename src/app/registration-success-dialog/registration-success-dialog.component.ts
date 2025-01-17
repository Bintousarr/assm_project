import { Component, inject, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registration-success-dialog',
  imports: [ CommonModule,TranslateModule],
  standalone: true,
  templateUrl: './registration-success-dialog.component.html',
  styleUrls: ['./registration-success-dialog.component.scss']
})
export class RegistrationSuccessDialogComponent {
  isSuccess: boolean;
  apiMessage: string;
  translate: TranslateService = inject(TranslateService)

  currentLang: string;

  constructor(
    public dialogRef: MatDialogRef<RegistrationSuccessDialogComponent>,  // Injecter MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: { message: string, isSuccess: boolean },
    private router: Router
  ) {
    this.currentLang = this.translate.currentLang || 'en';

    this.isSuccess = data.isSuccess;
    this.apiMessage = data.message;
  }
  ngOnInit(){
    this.isSuccess = this.data.isSuccess;

  }

  onOkClick(): void {
    if (this.apiMessage == 'User created successfully.' || this.apiMessage == 'Utilisateur créé et disponibilités définies avec succès.'|| this.apiMessage =='User registered successfully'||this.apiMessage=='Veuillez retrouver votre devis dans votre boîte mail.'|| this.apiMessage=='Please find your quote in your email inbox.'|| this.apiMessage=='A new password has been sent to your email address.' || this.apiMessage=='Un nouveau mot de passe a été envoyé à votre adresse e-mail.') {
      this.dialogRef.close(); // Fermer le popup
      this.router.navigate(['/login']); // Redirige vers la page d'accueil ou une autre page
    } else {
      this.dialogRef.close(); // Fermer simplement le popup, reste sur la page de registre
    }
  }
}
