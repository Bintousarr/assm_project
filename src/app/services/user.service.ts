import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse   } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


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
  // getParticipants() :Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?action=user`, { responseType: 'text' as 'json' })
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Error occurred:', error);
  //       return throwError(error);
  //     })
  //   );
  // }
  getParticipants(): Observable<any> {
    const url = `${this.apiUrl}?action=user`;
    return this.http.get<any>(url);
  }
  // getParticipants(): Observable<any> {
   
  //   return this.http.get<any>(`${this.apiUrl}?action=getIntervenants`, { responseType: 'text' as 'json' })
  //     .pipe(
  //       map(response => {
  //         console.log('Response from API:', response);
  //         return response;
  //       }),
  //       catchError((error: HttpErrorResponse) => {
  //         console.error('Error occurred:', error);
  //         return throwError(error);
  //       })
  //     );
  // }
  
  
  getParticipantById(id: string): Observable<any> {
    const url = `${this.apiUrl}?action=user&id=${id}`;
    return this.http.get<any>(url);
  }
}
