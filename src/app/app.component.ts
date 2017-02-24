import { CatService } from './cats/cat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CatService]
})

export class AppComponent {
  title = 'Cat Clicker 2';

  constructor(private _catService: CatService) {
  }



}
