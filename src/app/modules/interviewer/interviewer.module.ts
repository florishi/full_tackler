import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { InterviewerComponent } from './interviewer.component';
import { DashboardInterviewerComponent } from './components/dashboard-interviewer/dashboard-interviewer.component';
import { QuestionsInterviewerComponent } from './components/questions-interviewer/questions-interviewer.component';
import { NavbarInterviewerComponent } from './components/navbar-interviewer/navbar-interviewer.component';

@NgModule({
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InterviewerComponent,
    DashboardInterviewerComponent,
    QuestionsInterviewerComponent,
    NavbarInterviewerComponent
  ],
  bootstrap: [
    InterviewerComponent
  ]
})
export class InterviewerModule { }
