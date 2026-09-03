import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-gif-history',
  imports: [],
  templateUrl: './gif-history.component.html',

})
export default class GifHistoryComponent {
 
query = toSignal(inject(ActivatedRoute).params.pipe(
    map((params) => params['query']))
);


}