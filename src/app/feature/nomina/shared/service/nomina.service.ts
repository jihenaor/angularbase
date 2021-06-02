import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Nomina } from '../model/nomina';

import { HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NominaService {

  constructor(protected http: HttpClient) {}

  public consultar() {
    return this.http.get<Nomina[]>(`${environment.endpoint}/nominas`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public guardar(nomina: Nomina): Observable<any> {
    return this.http.post<Nomina>(`${environment.endpoint}/nominas`, nomina)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      switch (error.status) {
        case 400:
          return throwError(error.error.mensaje);
        default:
          return throwError('Se ha presentado un error.  Intente de nuevo mas tarde.' + error.message);
      }
      /*
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        */
    }
  }

}
