import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListComponent } from "../../components/gifs-side-menu/gif-list/gif-list.component";


@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class trendingPageComponent { }
