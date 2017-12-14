import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
public candidates;

  constructor(private _candidates: CandidateService) { }

  ngOnInit() {
  }

  getCandidates(): void {
    this._candidates.getCandidates()
    .subscribe(
      data => {
        this.candidates = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
