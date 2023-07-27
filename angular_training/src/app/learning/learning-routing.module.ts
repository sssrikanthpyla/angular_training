import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { LearningDashboardComponent } from './learning-dashboard/learning-dashboard.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';

const routes: Routes = [
  {
    path: '', component: LearningDashboardComponent
  },
  {
    path: 'forms', component: FormsComponent
  },
  {
    path: 'display', component: DisplayDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
