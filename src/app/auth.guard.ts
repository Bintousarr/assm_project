import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Vérifier l'authentification de l'utilisateur
  const isAuthenticated = !!localStorage.getItem('userToken');

  if (isAuthenticated) {
    return true; // Autoriser l'accès à la route
  } else {
    // Rediriger vers la page de login si l'utilisateur n'est pas authentifié
    const router = new Router(); // Besoin d'injecter Router d'une manière ou d'une autre
    router.navigate(['/login']);
    return false; // Bloquer l'accès à la route
  }
};
