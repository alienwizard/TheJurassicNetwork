import { DinoService } from './dinos/dino.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DinoService]
})

export class AppComponent {
  title = 'The Jurassic Network';

  constructor(private _dinoService: DinoService) {
  }



}
