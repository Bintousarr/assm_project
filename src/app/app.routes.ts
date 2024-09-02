import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./banner/banner.component').then((x) => x.BannerComponent),
    children: [



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
        path: 'fournisseurs', loadComponent: () => 
          import('./web/fournisseurs/fournisseurs.component').then((c) => c.FournisseursComponent)
      }, 
      {
        path: 'rendez-vous', loadComponent: () => 
          import('./web/rendez-vous/accueil/accueil.component').then((c) => c.AccueilComponent)
      }, 
      {
        path: 'login', loadComponent: () => 
          import('../app/login/login.component').then((c) => c.LoginComponent)
      },  
      {
        path: 'rendez-vous/intervenant/sherif', loadComponent: () => 
          import('./web/rendez-vous/intervenant/sherif/sherif.component').then((c) => c.SherifComponent)
      },
      {
        path: 'rendez-vous/intervenant/adama', loadComponent: () => 
          import('./web/rendez-vous/intervenant/adama/adama.component').then((c) => c.AdamaComponent)
      },
      {
        path: 'rendez-vous/intervenant/tidiane', loadComponent: () => 
          import('./web/rendez-vous/intervenant/tidiane/tidiane.component').then((c) => c.TidianeComponent)
      },
      {
        path: 'rendez-vous/intervenant/fabrice', loadComponent: () => 
          import('./web/rendez-vous/intervenant/fabrice/fabrice.component').then((c) => c.FabriceComponent)
      },
      {
        path: 'dashboard', loadComponent: () => 
          import('./web/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'homeuser',
        loadComponent: () => import('../app/user/home-user/home-user.component').then((c) => c.HomeUserComponent),
        canActivate: [authGuard]  // Protection de la route
      },
      {
        path: 'intervenant/:id',
        loadComponent: () => import('../app/user/intervenant-detail/intervenant-detail.component').then(m => m.IntervenantDetailComponent),
        canActivate: [authGuard]  // Protection de la route
      },
    
      {
        path: 'mes-rendez-vous',
        loadComponent: () => import('../app/user/user-appointments/user-appointments.component').then(m => m.UserAppointmentsComponent),
        canActivate: [authGuard]  // Protection de la route
    
      },
      {
        path: '**', redirectTo:'banner',pathMatch:'full'
       
      }
];
