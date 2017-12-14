import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TechnologyService {
private _url: string;

  constructor(private _http: HttpClient) { }

  getCustomTechnologies(): Observable<any> {
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
    this._url = 'http://localhost:3030/admin/technology/names';
    return this._http.get(this._url)
    .catch(this.handleError);
  }

  getTechnologies(): Observable<any> {
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
    this._url = 'http://localhost:3030/admin/technology/list';
    return this._http.get(this._url)
    .catch(this.handleError);
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
