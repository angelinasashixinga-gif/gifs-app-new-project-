import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environments.development";
import type { GiphyResponse } from "../interfaces/giphy.interfaces";
import { GifMapper } from "../mapper/gif.mapper";
import { Gif } from "../interfaces/gif.interface";
import { map, tap } from "rxjs";

// {
//     'goku': [gif1,gif2,gif3],
//     'saitama': [gif1,gif2,gif3],
//     'dragon ball': [gif1,gif2,gif3],
// }

// Record<string, Gif[]>

@Injectable({providedIn: 'root'})
export class GifService {

private http = inject(HttpClient);

trendingGifs = signal<Gif[]>([]);
trendingGifsLoading = signal(true);

searchHistory = signal<Record<string, Gif[]>>({});
searchHistoryKeys = computed(() => Object.keys(this.searchHistory()) );
    
constructor() {
    this.loadTrendingGifs();
}

loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
            api_key: environment.giphyApikey,
            limit: 20,
        },
    }).subscribe( (resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });

        });
    }
    searchGifs(query: string) {
          return this.http
          .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
            api_key: environment.giphyApikey,
            limit: 20,
            q: query,
        },
    })
    .pipe(
    map( ({ data }) => data),
    map( ( items ) => GifMapper.mapGiphyItemsToGifArray(items)),

    tap( items => {
        this.searchHistory.update( history => ({
           ...history,
           [query.toLocaleLowerCase()]: items,
        }))
    })
);
    // .subscribe( (resp) => {
    //     const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        
    //     console.log({ search: gifs });

    //     });
    // 
    }

}
