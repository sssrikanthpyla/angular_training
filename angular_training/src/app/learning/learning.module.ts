import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { FormsComponent } from './components/forms/forms.component';
import { LearningDashboardComponent } from './learning-dashboard/learning-dashboard.component';


@NgModule({
  declarations: [
    FormsComponent,
    LearningDashboardComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
