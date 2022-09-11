import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

import { environment } from '../environments/environment'


@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getSessionData(sessionId) {
    const getSessionDataUrl =
        "https://api.filesync.pro/session_data?session_id=" + sessionId;
    return this.get(getSessionDataUrl, "");
  }

  get(url, name): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(url).pipe(
        catchError(this.handleError(name, []))
      ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error && error.error && error.error.message) {
        return throwError(error.error.message);
      } else {
        return throwError('Unknow error.');
      }
    };
  }
}
