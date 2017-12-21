import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { IquestionCategory } from '../interfaces/iquestion-category';
@Injectable()
export class QuestionCategoryService {
private _url: string;
  constructor(private _http: HttpClient) { }

  getActiveNames(): Observable<IquestionCategory[]> {
    this._url = 'http://localhost:3030/interviewer/question_category/listActiveNames';
    return this._http.get<IquestionCategory[]>(this._url)
    ._catch(this._handleError);
  }

  private _handleError(err: HttpErrorResponse) {
    if (err.status === 400) {
      return Observable.throw(err.error);
    }
    return Observable.throw(err.message);
  }
}
