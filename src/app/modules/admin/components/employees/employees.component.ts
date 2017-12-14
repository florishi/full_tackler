import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private _employees: EmployeesService) { }

  ngOnInit() {
  }

  getCandidates(): void {
    this._employees.getEmployees()
    .subscribe(
      data => {
        this._employees = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
