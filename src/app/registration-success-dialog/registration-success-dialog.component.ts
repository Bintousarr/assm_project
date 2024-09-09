import { Component, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-registration-success-dialog',
  imports: [ CommonModule,],
  standalone: true,
  templateUrl: './registration-success-dialog.component.html',
  styleUrls: ['./registration-success-dialog.component.scss']
})
export class RegistrationSuccessDialogComponent {
  isSuccess: boolean;
  apiMessage: string;


  constructor(
    public dialogRef: MatDialogRef<RegistrationSuccessDialogComponent>,  // Injecter MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: { message: string, isSuccess: boolean },
    private router: Router
  ) {
    this.isSuccess = data.isSuccess;
    this.apiMessage = data.message;
  }

  onOkClick(): void {
    console.log(this.apiMessage)
    if (this.apiMessage == 'User created successfully.' || this.apiMessage == 'Utilisateur créé et disponibilités définies avec succès.'|| this.apiMessage =='User registered successfully') {
      this.dialogRef.close(); // Fermer le popup
      this.router.navigate(['/']); // Redirige vers la page d'accueil ou une autre page
    } else {
      this.dialogRef.close(); // Fermer simplement le popup, reste sur la page de registre
    }
  }
}
