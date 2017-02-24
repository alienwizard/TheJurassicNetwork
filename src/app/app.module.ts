import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatListComponent } from './cats/cat-list/cat-list.component';
import { CatDetailsComponent } from './cats/cat-list/cat-details/cat-details.component';
import { CatFilterPipe } from './cats/cat-filter.pipe';
import { LevelComponent } from './cats/shared/level.component';
import { CatService } from './cats/cat.service';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatDetailsComponent,
    CatFilterPipe,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
