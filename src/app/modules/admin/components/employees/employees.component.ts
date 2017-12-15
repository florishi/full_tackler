import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { CandidateService } from '../../services/candidate.service';
import { HrCandidateTable } from '../../interfaces/hr-candidate-table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: Array<string> = ['Name', 'CreatedDate', 'Status'];
  dataSource = new CandidateTableDataSource(this._candidates);

  constructor(private _candidates: CandidateService) { }

  ngOnInit() { }
}

export class CandidateTableDataSource extends DataSource<any> {
  constructor(private _candidates: CandidateService) {
    super();
  }
  connect(): Observable<HrCandidateTable[]> {
    return this._candidates.getActiveCandidates();
  }
  disconnect() {}
}

