import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost/OTIF_BACKEND/register.php'; // URL de votre fichier PHP

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
