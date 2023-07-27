import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LearningRoutingModule } from './learning-routing.module';
import { FormsComponent } from './components/forms/forms.component';
import { LearningDashboardComponent } from './learning-dashboard/learning-dashboard.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';


@NgModule({
  declarations: [
    FormsComponent,
    LearningDashboardComponent,
    DisplayDataComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LearningModule { }
