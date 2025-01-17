import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);
  loadingService.show();
  console.log('Intercepteur exécuté pour la requête :', req.url);
  return next(req).pipe(
    finalize(() => {
      // Désactiver le spinner
      loadingService.hide();
    })
  );
};
