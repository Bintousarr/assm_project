import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private apiUrl = 'https://votre-api.com/submitMotif'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  submitMotif(time: string, motif: string): Observable<any> {
    const body = { time, motif };
    return this.http.post<any>(this.apiUrl, body);
  }
}
