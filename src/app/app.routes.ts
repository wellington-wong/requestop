import { Routes } from '@angular/router';

export const routes: Routes = [
  // Authenticated Workspace Pages (Wrapped by Dashboard Shell)
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then((m) => m.Register),
  },

  // Authenticated Workspace Pages (Wrapped by Dashboard Shell)
  {
    path: 'analytics',
    loadComponent: () =>
      import('./pages/analytics/analytics').then((m) => m.Analytics),
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('./pages/customers/customers').then((m) => m.Customers),
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team').then((m) => m.Team),
  },
  {
    path: 'billing',
    loadComponent: () =>
      import('./pages/billing/billing').then((m) => m.Billing),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings').then((m) => m.Settings),
  },

  // Safe fallback
  {
    path: '**',
    redirectTo: '',
  },
];
