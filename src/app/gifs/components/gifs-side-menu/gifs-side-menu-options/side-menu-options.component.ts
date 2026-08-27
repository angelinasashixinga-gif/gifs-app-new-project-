import { Component } from '@angular/core';


interface MenuOption {
  icon: string;
  label: string;
  route: string;
  sublabel: string;
  
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  menuOptions:MenuOption[] = [
    {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    route: '/dashboard/treding',
    sublabel: 'Gifs Popolares',
    },
    {
    icon: 'fa-solid fa-magifying-glass',
    label: 'Buscador',
    route: '/dashboard/search',
    sublabel: 'Buscar gifs',
    },
    
  ]
 }
