import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { HrEmployee } from '../interfaces/hr-employee';
import { EmployeeDetails } from '../interfaces/employee-details';

@Injectable()
export class EmployeesService {
private _url: string;

  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options: {
            headers?: HttpHeaders,
            observe?: 'body',
            params?: HttpParams,
            reportProgress?: boolean,
            responseType: 'json',
            withCredentials?: boolean
        } = {
            headers: headers,
            responseType: 'json'
        };
    this._url = 'http://localhost:3030/admin/employee/allEmployees';
    return this._http.get(this._url)
    .catch(this._handleError);
  }

  getHrEmployees(): Observable<HrEmployee[]> {
    /* const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options: {
            headers?: HttpHeaders,
            observe?: 'body',
            params?: HttpParams,
            reportProgress?: boolean,
            responseType: 'json',
            withCredentials?: boolean
        } = {
            headers: headers,
            responseType: 'json'
        }; */
    this._url = 'http://localhost:3030/admin/employee/hrEmployees';
    return this._http.get<Observable<HrEmployee[]>>(this._url)
    .map(this._mapHrEmployees)
    .catch(this._handleError);
  }

  private _mapHrEmployees(response) {
    return response.map(item => {
      return ({
        id: item._id,
        firstName: item.employee_details.firstName,
        lastName: item.employee_details.lastName,
        designation: item.designation.name
      });
    });
  }

  getAllEmployeeDetails(): Observable<EmployeeDetails[]> {
    this._url = 'http://localhost:3030/admin/employee/allEmployeesDetails';
    return this._http.get<Observable<EmployeeDetails[]>>(this._url)
    .map(this._employeeDetails)
    .catch(this._handleError);
  }


  private _employeeDetails(response) {
    return response.map(item => {
      return ({
        _id: item._id,
        firstName: item.employee_details.firstName,
        lastName: item.employee_details.lastName,
        department: item.department.name,
        designation: item.designation.name
      });
    });
  }

  private _handleError(err: HttpErrorResponse) {
    let error: Error;
    if (err.status === 400) {
      error = new Error('400');
      return Observable.throw(error.message);
    }
    return Observable.throw(err.message);
  }
}
