import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { HrTable } from '../interfaces/hr-table';

@Injectable()
export class CandidateService {
private _url: string;

  constructor(private _http: HttpClient) { }

  getCandidates(): Observable<any> {
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
    this._url = 'http://localhost:3030/admin/candidate/list';
    return this._http.get(this._url)
    .catch(this.handleError);
  }

  createCandidate(payload): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    /* const options: {
            headers?: HttpHeaders,
            observe?: 'body',
            params?: HttpParams,
            reportProgress?: boolean,
            responseType: 'json',
            withCredentials?: boolean,
            body?: string
        } = {
            headers: headers,
            responseType: 'json',
            body: JSON.stringify(payload)
        }; */
    this._url = 'http://localhost:3030/admin/candidate/create';
    return this._http.post(this._url, payload)
    .catch(this.handleError);
  }

  getTable(): Observable<HrTable[]> {
    this._url = 'http://localhost:3030/admin/candidate/getTable';
    return this._http.get<HrTable[]>(this._url)
    .map(this._mapTable)
    .catch(this.handleError);
  }

  private _mapTable(response) {
    return response.map( item => {
      return ({
      id: item._id,
      name: item.name,
      email: item.email,
      technology: item.technology.name,
      updated: item.updated,
      active: item.active,
      employee: {
        firstName: item.employee.employee_details.firstName,
        lastName: item.employee.employee_details.lastName,
        designation: item.employee.designation.name
      }
      });
    });
  }

  private handleError(err: HttpErrorResponse) {
    let error: Error;
    if (err.status === 400) {
      error = new Error('400');
      return Observable.throw(error.message);
    }
    return Observable.throw(err.message);
  }
}
