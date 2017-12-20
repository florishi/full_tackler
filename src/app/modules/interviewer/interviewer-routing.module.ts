import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterviewerComponent } from './interviewer.component';
import { DashboardInterviewerComponent } from './components/dashboard-interviewer/dashboard-interviewer.component';
import { QuestionsInterviewerComponent } from './components/questions-interviewer/questions-interviewer.component';

const routes: Routes = [
  {
    path: 'interviewer',
    component: InterviewerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardInterviewerComponent
      },
      {
        path: 'questions/create',
        component: QuestionsInterviewerComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'interviewer/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
