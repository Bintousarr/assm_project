import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../services/environnements/environement.service';


@Injectable({
  providedIn: 'root'
})
export class SpeakerAvalabilityService {

  //private apiUrl = 'https://mass.otif-africa-space.com/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
  //private apiUrl = 'https://mass.ci/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
  //private apiUrl = 'http://localhost:8000/api.php'; // URL de l'API; // URL de votre fichier PHP

  constructor(private http: HttpClient) { }

  getSpeakerAvailabilityWithDetails(speakerId: number): Observable<any> {
    const url = `${environment.apiUrl}?action=getSpeakerAvailabilityWithDetails&speaker_id=${speakerId}`;
    return this.http.get<any>(url);
  }

  getUserCalendar(speakerId: number): Observable<any> {
    const url = `${environment.apiUrl}?action=getUserCalendar&speaker_id=${speakerId}`;
    return this.http.get<any>(url);
  }
  
  updateAvailability(availabilityId: number): Observable<any> {
    const url = `${environment.apiUrl}?action=updateAvailability`;
    
    // Le payload que vous envoyez dans la requête POST
    const payload = {
        availability_id: availabilityId
    };

    return this.http.post<any>(url, payload);
}

  
  
}
