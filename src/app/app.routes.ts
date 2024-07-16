import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
// import { AboutComponent } from './component/about/about.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./component/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'my-counter',
    title: 'Counter',
    loadComponent: () =>
      import('./component/my-counter/my-counter.component').then((m) => m.MyCounterComponent),
  },
];
