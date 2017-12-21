import { Component, OnInit } from '@angular/core';

import { QuestionCategoryService } from '../../services/question-category.service';
import { TechnologyService } from '../../../admin/services/technology.service';
import { LevelService } from '../../../admin/services/level.service';

@Component({
  selector: 'app-questions-interviewer',
  templateUrl: './questions-interviewer.component.html',
  styleUrls: ['./questions-interviewer.component.css']
})
export class QuestionsInterviewerComponent implements OnInit {

  constructor(
    private _questionCategoryService: QuestionCategoryService,
    private _technologyService: TechnologyService,
    private _levelService: LevelService
  ) { }

  ngOnInit() {
    this.getActiveQuestionCategoryNames();
    this.getActiveTechnologyNames();
    this.getActiveLevelNames();
  }

  getActiveQuestionCategoryNames() {
    this._questionCategoryService.getActiveNames()
    .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  getActiveTechnologyNames() {
    this._technologyService.getCustomTechnologies()
    .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  /* no interface to follow */
  getActiveLevelNames() {
    this._levelService.getActiveNames()
    .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
