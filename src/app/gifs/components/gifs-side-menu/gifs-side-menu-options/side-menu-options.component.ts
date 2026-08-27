import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface MenuOption {
  icon: string;
  label: string;
  route: string;
  sublabel: string;
  
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  menuOptions:MenuOption[] = [
    {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    route: '/dashboard/trending',
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
