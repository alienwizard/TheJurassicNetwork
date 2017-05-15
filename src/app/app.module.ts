import { DinoModule } from './dinos/dino.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: LandingComponent },
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent}
      ]),
    DinoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
