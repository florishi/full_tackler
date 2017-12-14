import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { TechnologyService } from '../../services/technology.service';
import { CandidateService } from '../../services/candidate.service';
import { EmployeesService } from '../../services/employees.service';
import { HrEmployee } from '../../interfaces/hr-employee';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})

export class CreateCandidateComponent implements OnInit {

floatLabel = 'always';
candidateForm: FormGroup;
private _name: FormControl;
private _email: FormControl;
private _technology: FormControl;
private _hrEmployees: FormControl;
technologies: Array<any> = [];
hrEmployees: HrEmployee[] = [];
  constructor(public snackBar: MatSnackBar, private _router: Router,
     private _technologyService: TechnologyService, private _candidateService: CandidateService,
      private _employeeService: EmployeesService) { }

  ngOnInit() {
    this._getCustomTechnologies();
    this._getHrEmployees();
    this._setProperties();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  private _getCustomTechnologies() {
    this._technologyService.getCustomTechnologies()
    .subscribe(
      data => {
        this.technologies = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  private _getHrEmployees() {
    this._employeeService.getHrEmployees()
    .subscribe(
      data => {
        this.hrEmployees = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  private _setProperties() {
    this._name = new FormControl('', Validators.required);
    this._email = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
    this._technology = new FormControl((this.technologies.length > 0 ? this.technologies : ''), Validators.required);
    this._hrEmployees = new FormControl((this.hrEmployees.length > 0 ? this.hrEmployees : ''), Validators.required);
    this.candidateForm = new FormGroup({
      name: this._name,
      email: this._email,
      technology: this._technology,
      employee: this._hrEmployees
    });
  }

  isValidName() {
    return this._name.valid || this._name.untouched;
  }

  isValidEmail() {
    return this._email.valid || this._email.untouched;
  }

  isValidTechnology() {
    return this._technology.valid || this._technology.untouched;
  }

  isValidHrEmployee() {
    return this._hrEmployees.valid || this._hrEmployees.untouched;
  }

  onSubmit(values): void {
    if (this.candidateForm.valid) {
      this._candidateService.createCandidate(values)
      .subscribe(
        data => {
          this._router.navigate(['/admin/candidates']);
          this.openSnackBar('Candidate Creation', 'Success');
        },
        err => {
          this._router.navigate(['/admin/candidates/create']);
          this.openSnackBar('Candidate Creation', 'Failed');
        }
      );
    }else {
      this.openSnackBar('Information Correction', 'Failed');
    }
  }
}
