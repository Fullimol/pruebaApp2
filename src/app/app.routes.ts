import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'bienvenida',
    loadComponent: () =>
      import('./bienvenida/bienvenida.page').then((m) => m.BienvenidaPage)
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./registro/registro.component').then((m) => m.RegistroComponent)
  },
  {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'tab1',
          loadComponent: () =>
            import('./tab1/tab1.page').then((m) => m.Tab1Page),
        },
        {
          path: 'tab2',
          loadComponent: () =>
            import('./tab2/tab2.page').then((m) => m.Tab2Page),
        },
        {
          path: 'tab3',
          loadComponent: () =>
            import('./tab3/tab3.page').then((m) => m.Tab3Page),
        },
        // {
        //   path: '',
        //   redirectTo: '/tabs/tab1',
        //   pathMatch: 'full',
        // },
      ],
    },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  }
];