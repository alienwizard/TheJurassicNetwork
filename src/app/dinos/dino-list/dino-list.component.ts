import { DinoService } from './../dino.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dino-list',
  moduleId: module.id,
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.css']
})

export class DinoListComponent implements OnInit {
  title = 'DinoList';
  listFilter = '';
  errorMessage = '';
  DinoArray = [];
  currentDino = { };
  constructor(private _DinoService: DinoService) {
  }

  ngOnInit() {
    this._DinoService.fetchDinos()
                    .subscribe(
                      dinos => this.DinoArray = dinos,
                      error => this.errorMessage = error
                    );

  }

  setCurrentDino(id: number): void {
    this._DinoService.setCurrentDino(id);
    console.log(this._DinoService.currentDinoId);
  }

  onDinoClicked(message: string) {
    this.title = message;
  }

}

