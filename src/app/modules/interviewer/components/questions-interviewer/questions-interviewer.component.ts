import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { QuestionCategoryService } from '../../services/question-category.service';
import { TechnologyService } from '../../../admin/services/technology.service';
import { LevelService } from '../../../admin/services/level.service';
import { IquestionCategory } from '../../interfaces/iquestion-category';

@Component({
  selector: 'app-questions-interviewer',
  templateUrl: './questions-interviewer.component.html',
  styleUrls: ['./questions-interviewer.component.css']
})
export class QuestionsInterviewerComponent implements OnInit {
floatLabel = 'always';
questionForm: FormGroup;
private _name: FormControl;
private _level: FormControl;
private _questionCategory: FormControl;
private _options: FormControl;
private _defaultAnswer: FormControl;
private _defaultOptionLimit = 4;
private _multipleChoice = '5a3a6aa05fc4ee26e34edce6';
private _trueOrFalse = '5a3a6a935fc4ee26e34edce5';
levels: Array<any> = [];
questionCategories: IquestionCategory[] = [];
optionsNumber: Array<string> = [];

  constructor(
    public snackBar: MatSnackBar,
    private _questionCategoryService: QuestionCategoryService,
    private _technologyService: TechnologyService,
    private _levelService: LevelService
  ) { }

  ngOnInit() {
    this._getActiveQuestionCategoryNames();
    this._getActiveTechnologyNames();
    this._getActiveLevelNames();
    this._setProperties();
  }

  private _openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  private _setProperties(): void {
    for (let i = 1; i <= this._defaultOptionLimit; i++) {
      this.optionsNumber.push('Option ' + i);
    }
    this._name = new FormControl('', Validators.required);
    this._level = new FormControl((this.levels !== [] ? this.levels : ''), Validators.required);
    this._questionCategory = new FormControl((this.questionCategories !== [] ? this.questionCategories : ''), Validators.required);
    this.questionForm = new FormGroup({
      name: this._name,
      level: this._level,
      category: this._questionCategory
    });
  }

  isMulitpleChoice(): boolean {
    let _result = false;
    if (this.questionForm.controls['category'].value !== undefined &&
     this.questionForm.controls['category'].value === this._multipleChoice) {
    this._options = new FormControl(this.optionsNumber, Validators.required);
    this.questionForm.addControl('options', this._options);
      _result = true;
    }
    return _result;
  }

  hasDefaultAnswer(): boolean {
    let _result = false;
    if (this.questionForm.controls['category'].value !== undefined &&
    this.questionForm.controls['category'].value === this._multipleChoice ||
     this.questionForm.controls['category'].value === this._trueOrFalse) {
      this._defaultAnswer = new FormControl('', Validators.required);
      this.questionForm.addControl('defaultAnswer', this._defaultAnswer);
      _result = true;
    }
    return _result;
  }

  isValidName() {
    return this._name.valid || this._name.untouched;
  }

  isValidLevel() {
    return this._level.valid || this._level.untouched;
  }

  isValidQuestionCategory() {
    return this._questionCategory.valid || this._questionCategory.untouched;
  }

  isValidDefaultAnswer() {
    return this._defaultAnswer.valid || this._defaultAnswer.untouched;
  }

  private _getActiveQuestionCategoryNames() {
    this._questionCategoryService.getActiveNames()
    .subscribe(
      data => {
        this.questionCategories = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  private _getActiveTechnologyNames() {
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
  private _getActiveLevelNames() {
    this._levelService.getActiveNames()
    .subscribe(
      data => {
        this.levels = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(values): void {
    if (this.questionForm.valid) {
      console.log(values);
    }else {
      this._openSnackBar('Information Correction', 'Failed');
    }
  }

}
