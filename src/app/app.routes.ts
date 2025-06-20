import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: Main,
  },
  {
    path: 'about',
    component: About,
  },
];
