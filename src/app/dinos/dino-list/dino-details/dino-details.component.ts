import { DinoService } from './../../dino.service';
import { Component, OnInit, OnChanges, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { DinoImageStyles } from '../../styles';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: ['./dino-details.component.css']
})
export class DinoDetailsComponent implements OnInit, OnDestroy {
  currentDino: any = {id: 0, name: 'lajka', image: 'me.png', clicks: 0, level: 0};
  public Styles = DinoImageStyles;

  @Output () DinoClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor(private _DinoService: DinoService) {
  }

  ngOnInit() {
    this._DinoService.dino$.subscribe(Dino => this.currentDino = this._DinoService.getCurrentDino(Dino.valueOf()));
  }

  // TODO ugrade messages for Dinoclick
  imageClicked() {
    this.DinoClicked.emit(`Katten ${this.currentDino.name} Clickades`);
  }

  ngOnDestroy() {

  }

}
