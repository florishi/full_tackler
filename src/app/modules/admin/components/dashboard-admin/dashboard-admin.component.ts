import { Component, OnInit } from '@angular/core';

import { CandidateService } from '../../services/candidate.service';
import { DashboardService } from '../../services/dashboard.service';
import { HrDashboard } from '../../interfaces/hr-dashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardComponent implements OnInit {
activeCandidateProgress: HrDashboard[];
inActiveCandidateProgress: HrDashboard[];

constructor(private _candidateService: CandidateService) { }

  ngOnInit() {
    this.getActiveCandidateProgress();
    this.getInActiveCandidateProgress();
  }

  isValidActiveCandidateprogress(): boolean {
    let result = false;
    if (this.activeCandidateProgress !== undefined) {
      result = (this.activeCandidateProgress.length !== 0);
    }
    return result;
  }

  isValidInActiveCandidateprogress(): boolean {
    let result = false;
    if (this.inActiveCandidateProgress !== undefined) {
      result = (this.inActiveCandidateProgress.length !== 0);
    }
    return result;
  }

  getActiveCandidateProgress() {
    this._candidateService.getActiveCandidatesProgress()
    .subscribe(
      data => {
        this.activeCandidateProgress = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getInActiveCandidateProgress() {
    this._candidateService.getInActiveCandidatesProgress()
    .subscribe(
      data => {
        this.inActiveCandidateProgress = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
