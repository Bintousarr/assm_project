import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.checkToken());

  // Observable pour suivre l'état de connexion
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor() {}

  // Vérifier si un token existe dans le localStorage
  private checkToken(): boolean {
    return !!localStorage.getItem('userToken');
  }

  // Méthode pour simuler la connexion (remplacer par un appel réel à une API)
  login(userData: any): void {
    // En général, ici vous feriez un appel à une API pour obtenir un jeton.
    // Exemple de code : this.http.post('url-api', userData).subscribe((response) => { ... });
    
    // Pour cet exemple, nous stockons un "fake token" dans le localStorage
    localStorage.setItem('userToken', 'fake-jwt-token');
    this.loggedIn.next(true);
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('userToken');
    this.loggedIn.next(false);
  }
}
