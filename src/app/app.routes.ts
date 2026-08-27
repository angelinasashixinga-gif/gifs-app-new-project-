import { Routes } from '@angular/router';
/* import { DashboardPageComponent } from './gifs/pages/dashboard-page/dashboard-page-components'; */

export const routes: Routes = [

{
    path: 'dashboard',
    loadComponent: () => 
        import('./gifs/pages/dashboard-page/dashboard-page-components'),

children: [
 {
   path: 'trending',
  loadComponent: () =>
    import('./gifs/pages/trending-page.component/trending-page.component'),

 },
 {

    path: 'search',
    loadComponent: () => 
        import('./gifs/pages/search-page.component/search-page.component'),

 },
]

},

{
    path: '**',
    redirectTo: 'dashboard',
},

];
