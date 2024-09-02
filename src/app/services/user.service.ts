import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private apiUrl = 'https://mass.otif-africa-space.com/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
  //private apiUrl = 'http://localhost:8000/api.php'; // URL de l'API; // URL de votre fichier PHP

  constructor(private http: HttpClient) { }
  getIntervenants(): Observable<any> {
    const url = `${this.apiUrl}?action=getIntervenants`;
    return this.http.get<any>(url);
  }
  getIntervenantById(id: string): Observable<any> {
    const url = `${this.apiUrl}?action=getIntervenantById&id=${id}`;
    return this.http.get<any>(url);
  }
}
