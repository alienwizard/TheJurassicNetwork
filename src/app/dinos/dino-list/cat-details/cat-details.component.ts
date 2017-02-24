import { CatService } from './../../cat.service';
import { Component, OnInit, OnChanges, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Cat } from '../../types';
import { CatImageStyles } from '../../styles';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit, OnDestroy {
  currentCat: Cat = {id: 0, name: 'lajka', image: 'me.png', clicks: 0, level: 0};
  public Styles = CatImageStyles;

  @Output () catClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor(private _catService: CatService) {
  }

  ngOnInit() {
    this._catService.cat$.subscribe(cat => this.currentCat = this._catService.getCurrentCat(cat.valueOf()));
  }

  // TODO ugrade messages for catclick
  imageClicked() {
    this.catClicked.emit(`Katten ${this.currentCat.name} Clickades`);
  }

  ngOnDestroy() {

  }

}
