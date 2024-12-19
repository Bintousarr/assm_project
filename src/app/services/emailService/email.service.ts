import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../services/environnements/environement.service';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://mass.ci/email/send_mail.php'; // Remplacez par l'URL de votre APIhttps://mass.otif-africa-space.com
 // private apiUrl = 'https://otif-africa-space.com/api/send_mail.php'; // Remplacez par l'URL de votre API
  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, emailData);
  }
}