import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candiadates',
  templateUrl: './candiadates.component.html',
  styleUrls: ['./candiadates.component.css']
})
export class CandiadatesComponent implements OnInit {
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
