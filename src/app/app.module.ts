import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DinoListComponent } from './dinos/dino-list/dino-list.component';
import { DinoDetailsComponent } from './dinos/dino-list/dino-details/dino-details.component';
import { DinoFilterPipe } from './dinos/dino-filter.pipe';
import { LevelComponent } from './dinos/shared/level.component';
import { DinoService } from './dinos/dino.service';

@NgModule({
  declarations: [
    AppComponent,
    DinoListComponent,
    DinoDetailsComponent,
    DinoFilterPipe,
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
