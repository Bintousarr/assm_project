import { Component, inject, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-quote-mdp',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './quote-mdp.component.html',
  styleUrl: './quote-mdp.component.scss'
})
export class QuoteMdpComponent {
 isSuccess: boolean;
  apiMessage: string;
  translate: TranslateService = inject(TranslateService)

  currentLang: string;

  constructor(
    public dialogRef: MatDialogRef<QuoteMdpComponent>,  // Injecter MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: { message: string, isSuccess: boolean },
    private router: Router
  ) {
    this.currentLang = this.translate.currentLang || 'en';

    this.isSuccess = data.isSuccess;
    this.apiMessage = data.message;
  }
  ngOnInit(){
    this.isSuccess = this.data.isSuccess;
    console.log(this.isSuccess)

  }

  onOkClick(): void {
    if (this.apiMessage == 'Password updated successfully.' || this.apiMessage == 'Mot de passe mis à jour avec succès.'|| this.apiMessage =='User registered successfully'||this.apiMessage=='Veuillez retrouver votre devis dans votre boîte mail.'|| this.apiMessage=='Please find your quote in your email inbox.') {
      this.dialogRef.close(); // Fermer le popup
      this.router.navigate(['/homeuser']); // Redirige vers la page d'accueil ou une autre page
    } else {
      this.dialogRef.close(); // Fermer simplement le popup, reste sur la page de registre
    }
  }
}
