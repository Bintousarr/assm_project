import { Component } from '@angular/core';

import { HomeComponent } from "./main-application/components/home/home.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoaderComponent } from './shared/loader/loader.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LoaderComponent, TranslateModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OtifProject';

  langage: any = 'en';

  constructor(protected translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
    const browserLang = translate.getBrowserLang();
  }

  // Méthode pour changer de langue
  translateText(arg0: any) {
    this.translate.use(arg0.value);
  }

}
