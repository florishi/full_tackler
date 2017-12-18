import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CandidateProgressService {
private _url: string;

constructor(private _http: HttpClient) { }

  createCandidate(payload): Observable<any> {

    this._url = 'http://localhost:3030/admin/candidate_progress/create';
    return this._http.post(this._url, payload)
    .catch(this._handleError);
  }

  private _handleError(err: HttpErrorResponse) {
    if (err.status === 400) {
      return Observable.throw(err.error);
    }
    return Observable.throw(err.message);
  }
}
