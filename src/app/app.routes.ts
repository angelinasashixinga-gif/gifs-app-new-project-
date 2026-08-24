import { Routes } from '@angular/router';
/* import { DashboardPageComponent } from './gifs/pages/dashboard-page/dashboard-page-components'; */

export const routes: Routes = [

{
    path: 'dashboard',
    loadComponent: () => 
        import('./gifs/pages/dashboard-page/dashboard-page-components'),
},
{
    path: '**',
    redirectTo: 'dashboard',
}
];
