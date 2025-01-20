import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, switchMap } from 'rxjs';
import { LoaderService } from '../loader.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingService = inject(LoaderService);
    loadingService.show();

   
    return next(req).pipe(
        finalize(() => {
            // Désactiver le spinner
            loadingService.hide();
        })
    );

};
