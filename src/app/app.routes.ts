import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutPreparationComponent } from './component/layout-preparation/layout-preparation.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // {path: '', component: AppComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  // {
  //   path: 'home',
  //   title: 'Home',
  //   loadComponent: () =>
  //     import(
  //       './component/home/home.component'
  //     ).then((m) => m.HomeComponent),
  // },
  {
    path: 'layout-preparation',
    title: 'LayoutPre',
    loadComponent: () =>
      import(
        './component/layout-preparation/layout-preparation.component'
      ).then((m) => m.LayoutPreparationComponent),
  },
];
