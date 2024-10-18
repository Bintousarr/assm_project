import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class ApppointmentService {

  private apiUrl = 'https://mass.otif-africa-space.com/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
  //private apiUrl = 'http://localhost:8000/api.php'; // URL de l'API; // URL de votre fichier PHP

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    const url = `${this.apiUrl}?action=appointment`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, userData, { headers });
  }

  getAppointmentsByUser(userId: string): Observable<any[]> {
    const url = `${this.apiUrl}?action=getParticipantAppointments&participant_id=${userId}`;
    return this.http.get<any[]>(url);
  }
  getBySpeaker(userId: string): Observable<any[]> {
    const url = `${this.apiUrl}?action=appointments&speaker_id=${userId}`;
    return this.http.get<any[]>(url);
  }

  updateAppointmentStatus(id: number, status: string): Observable<any> {
    const url = `${this.apiUrl}?action=updateAppointmentStatus`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { id, status };

    return this.http.post<any>(url, body, { headers });
  }

  // getCalandar(userId: string): Observable<any[]> {
  //   const url = `${this.apiUrl}?action=generatePdfCalendar&speaker_id=${userId}`;
  //   return this.http.get<any[]>(url);
  // }

  // Méthode pour télécharger le calendrier au format PDF
  getCalendar(userId: string): Observable<Blob> {
    const url = `${this.apiUrl}?action=generatePdfCalendar&speaker_id=${userId}`;
    const headers = new HttpHeaders({
      'Accept': 'application/pdf', // Assure que l'API renvoie un PDF
    });

    return this.http.get(url, { headers, responseType: 'blob' });
  }

  // Méthode pour déclencher le téléchargement
  downloadCalendar(userId: string) {
    this.getCalendar(userId).subscribe((blob) => {
      // Utilise FileSaver pour déclencher le téléchargement
      const fileName = `calendar_${userId}.pdf`;
      saveAs(blob, fileName);
    }, error => {
      console.error('Error downloading the PDF:', error);
    });
  }

}
