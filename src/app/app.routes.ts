import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./banner/banner.component').then((x) => x.BannerComponent),
      children:[
        
        
    
    ],
      },
      {
        path: 'program', loadComponent: () => 
          import('./program/program.component').then((c) => c.ProgramComponent),
      },
      {
        path: 'sponsor-page', loadComponent: () => 
          import('./web/sponsor-page/sponsor-page.component').then((c) => c.SponsorPageComponent)
      },      
      {
        path: 'register', loadComponent: () => 
          import('./web/register/register.component').then((c) => c.RegisterComponent)
      },
      {
        path: 'orateur', loadComponent: () => 
          import('./web/orateur/orateur.component').then((c) => c.OrateurComponent)
      },
      {
        path: 'about', loadComponent: () => 
          import('./web/about/about.component').then((c) => c.AboutComponent)
      },
      {
        path: 'accomodation', loadComponent: () => 
          import('./web/accomodation/accomodation.component').then((c) => c.AccomodationComponent)
      },
      {
        path: 'contact', loadComponent: () => 
          import('./web/contact/contact.component').then((c) => c.ContactComponent)
      },
      {
        path: 'evenement', loadComponent: () => 
          import('./web/evenement/evenement.component').then((c) => c.EvenementComponent)
      },
      {
        path: 'details', loadComponent: () => 
          import('./web/details/details.component').then((c) => c.DetailsComponent)
      },
      {
        path: 'marche', loadComponent: () => 
          import('./web/marche/marche.component').then((c) => c.MarcheComponent)
      },
      {
        path: 'voir-marche', loadComponent: () => 
          import('./web/voir-marche/voir-marche.component').then((c) => c.VoirMarcheComponent)
      },
      {
        path: 'espace-visiteur', loadComponent: () => 
          import('./web/espace-visiteur/espace-visiteur.component').then((c) => c.EspaceVisiteurComponent)
      },
      {
        path: 'profil/fabrice', loadComponent: () => 
          import('./web/profil/fabrice/fabrice.component').then((c) => c.FabriceComponent)
      },
      {
        path: 'profil/adama', loadComponent: () => 
          import('./web/profil/adama/adama.component').then((c) => c.AdamaComponent)
      },
      {
        path: 'profil/tidiane', loadComponent: () => 
          import('./web/profil/tidiane/tidiane.component').then((c) => c.TidianeComponent)
      },
      {
        path: 'profil/sherif', loadComponent: () => 
          import('./web/profil/sherif/sherif.component').then((c) => c.SherifComponent)
      },
      {
        path: 'actualite', loadComponent: () => 
          import('./web/actualite/actualite.component').then((c) => c.ActualiteComponent)
      },
      
      {
        path: '**', redirectTo:'banner',pathMatch:'full'
       
      }
];
