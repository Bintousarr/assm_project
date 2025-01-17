import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { importProvidersFrom } from '@angular/core';
import { authInterceptor } from './app/services/interceptor/auth-interceptor.service';


// Fonction de création du loader pour ngx-translate
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      })
    ),
    provideRouter(routes),
    provideAnimationsAsync(), // <-- added back
  ],
}).catch((err) => console.error(err));







