import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../services/environnements/environement.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }


  register(formData: FormData): Observable<any> {
    console.log(formData)
    return this.http.post<any>(`${environment.apiUrl}?action=register`, formData, { responseType: 'json' });
  } 
  

  login(userData: any): Observable<any> {
    const url = `${environment.apiUrl}?action=login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, userData, { headers });
  }

  resetPassword(email: any): Observable<any> {
    const url = `${environment.apiUrl}?action=resetPass`; // Endpoint de votre script PHP
    const body = { 'email': email }; // Corps de la requête
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body,{ responseType: 'json' });
  }

  regenerePassword(email: any): Observable<any> {
    const url = `${environment.apiUrl}?action=regenerePass`; // Endpoint de votre script PHP
    const body = { 'email': email }; // Corps de la requête
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body,{ responseType: 'json' });
  }


  updatePassword(data: any): Observable<any> {
    const url = `${environment.apiUrl}?action=updateMypass`; // Endpoint de votre script PHP
    const body =  data ; // Corps de la requête
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body,{ responseType: 'json' });
  }

  // updatePassword(data: {email:string; oldPassword: string; newPassword: string }): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}?action=updateMypass`, data,{ responseType: 'json' });
  // }
}
