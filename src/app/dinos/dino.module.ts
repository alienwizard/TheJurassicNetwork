import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DinoService } from './dino.service';
import { DinoGuardService } from './../dino-guard.service';
import { DinoFilterPipe } from './dino-filter.pipe';
import { DinoListComponent } from './dino-list/dino-list.component';
import { DinoDetailsComponent } from './dino-list/dino-details/dino-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dinos', component: DinoListComponent},
      { path: 'dino/:id',
        canActivate: [DinoGuardService],
       component: DinoDetailsComponent },
    ]),
    SharedModule
  ],
  providers: [
    DinoGuardService,
    DinoService
  ],
  declarations: [
    DinoListComponent,
    DinoDetailsComponent,
    DinoFilterPipe,
  ]
})
export class DinoModule { }
