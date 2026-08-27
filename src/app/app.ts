import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import trendingPageComponent from './gifs/pages/trending-page.component/trending-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gifs-app');
}
