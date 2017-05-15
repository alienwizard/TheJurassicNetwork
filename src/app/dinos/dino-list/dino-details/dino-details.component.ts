import { DinoService } from './../../dino.service';
import { Component, OnInit, OnChanges, Output, Input, EventEmitter, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { DinoImageStyles } from '../../styles';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-dino-details',
  templateUrl: './dino-details.component.html',
  styleUrls: ['./dino-details.component.css']
})
export class DinoDetailsComponent implements OnInit, OnDestroy {
  public currentDino: any;
  public Styles = DinoImageStyles;

  @Output () DinoClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _router: Router, private _route: ActivatedRoute, private _DinoService: DinoService) {
  }

  ngOnInit() {
    const currentDino = this._DinoService.setCurrentDino(this._route.snapshot.params['id']);
    currentDino.mergeMap(
      dino => this._DinoService.getCurrentDino(dino)
    ).subscribe(
      (data) =>   this.currentDino = data[0]);

  }

  // TODO ugrade messages for Dinoclick
  imageClicked(): void {
    this.DinoClicked.emit(`Dinosaurien ${this.currentDino.title} Clickades`);
  }

  onBack(): void {
    this._router.navigate(['/dinos']);
  }

  like() {

  }

  dislike() {

  }

  ngOnDestroy() {

  }

}
