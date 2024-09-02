import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://mass.otif-africa-space.com/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
  // private apiUrl = 'http://localhost:8000/api.php'; // URL de l'API; // URL de votre fichier PHP

  constructor(private http: HttpClient) { }

   // Méthode pour enregistrer un utilisateur
   register(userData: any): Observable<any> {
    const url = `${this.apiUrl}?action=register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, userData, { headers });
  }

  login(userData: any): Observable<any> {
    const url = `${this.apiUrl}?action=login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, userData, { headers });
  }
}
