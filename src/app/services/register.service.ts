import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/server';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
