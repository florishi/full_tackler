import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { CandidateService } from '../../services/candidate.service';
import { HrTable } from '../../interfaces/hr-table';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
displayedColumns: Array<string> = ['Name', 'Email', 'Technology', 'CreatedDate', 'Status' , 'HrDetails'];
dataSource = new HrTableDataSource(this._candidates);

  constructor(private _candidates: CandidateService) { }

  ngOnInit() { }
}

export class HrTableDataSource extends DataSource<any> {
  constructor(private _candidates: CandidateService) {
    super();
  }
  connect(): Observable<HrTable[]> {
    return this._candidates.getTable();
  }
  disconnect() {}
}
