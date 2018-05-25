import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../../services/message.service';

import { Knowledge } from '../../models/skill';

@Injectable()
export class KnowledgeService {

  private apiUrl = '/api/knowledges';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getItems(): Observable<Knowledge[]> {
    return this.http.get<Knowledge[]>(this.apiUrl)
      .pipe(
        tap(skills => this.log(`fetched skills`)),
        catchError(this.handleError('getItems', []))
      );
  }

  /** Log a Service message with the MessageService */
  private log(message: string) {
    this.messageService.add('Service: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
