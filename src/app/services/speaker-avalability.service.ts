import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakerAvalabilityService {

  //private apiUrl = 'https://mass.otif-africa-space.com/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
  private apiUrl = 'http://localhost:8000/api.php'; // URL de l'API; // URL de votre fichier PHP

  constructor(private http: HttpClient) { }

  getSpeakerAvailabilityWithDetails(speakerId: number): Observable<any> {
    const url = `${this.apiUrl}?action=getSpeakerAvailabilityWithDetails&speaker_id=${speakerId}`;
    return this.http.get<any>(url);
  }
}
