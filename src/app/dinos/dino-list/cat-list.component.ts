import { CatService } from './../cat.service';
import { Component, OnInit } from '@angular/core';

export interface Cat  {
    id: number;
    name: string;
    image: string;
    clicks: number;
    level: number;
}

@Component({
  selector: 'app-cat-list',
  moduleId: module.id,
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})

export class CatListComponent implements OnInit {
  title = 'CatList';
  listFilter = '';
  errorMessage = '';
  CatArray = [];
  currentCat = {};
  constructor(private _catService: CatService) {
  }

  ngOnInit() {
    this._catService.fetchDinos()
                    .subscribe(
                      dinos => this.CatArray = dinos,
                      error => this.errorMessage = error
                    );
                    debugger;

  }

  setCurrentCat(id: number): void {
    this._catService.setCurrentCat(id);
    console.log(this._catService.currentCatId);
  }

  onCatClicked(message: string) {
    this.title = message;
  }

}
