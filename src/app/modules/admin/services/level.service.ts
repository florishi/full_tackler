import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Level } from '../interfaces/level';

@Injectable()
export class LevelService {
private _url: string;
  constructor(private _http: HttpClient) { }

  getLevels(): Observable<Level[]> {
    this._url = 'http://localhost:3030/admin/level/list';
    return this._http.get<Level[]>(this._url)
    .catch(this._handleError);
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
