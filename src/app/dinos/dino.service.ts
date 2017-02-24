import { Http, Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Cat } from './types';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class DinoService {
    public URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f52bb5ed3d0a7d33519e8b354799a&tags=dinosaurs&sort=interestingness-desc&safe_search=2&media=photos&format=json&nojsoncallback=1&per_page=50&page=1';
    public currentDinoId = new Subject<number>();
    public searchString = new Subject<string>();
    dino$ = this.currentDinoId.asObservable();
    debugger;

    constructor(private _http: Http) {}

    fetchDinos(): Observable<any[]> {
        return this._http.get(this.URL)
                    .map(( response: Response) => response.json().photos.photo)
                    .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getCats(): Cat[] {
        return [
            {
                id: 0,
                name: 'Rufus',
                image: '',
                clicks: 0,
                level: 1,
            },
            {
                id: 1,
                name: 'lassie',
                image: 'cat2.jpg',
                clicks: 0,
                level: 1,

            },
            {
                id: 2,
                name: 'salty',
                image: 'cat2.jpg',
                clicks: 0,
                level: 3,

            }
        ];
    }

    setCurrentDino(id: number) {
        this.currentDinoId.next(id);
    }

    dinoSearch(search: string) {
        this.searchString.next(search);
    }

    getCurrentDino(id: number) {
        return this.getCats().find((cat) => cat.id === id);
    }


};
