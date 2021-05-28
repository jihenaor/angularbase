import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Compania } from '../model/compania';

import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CompaniaService {

  constructor(protected http: HttpClient) {}

  public consultar() {
    return this.http.get<Compania[]>(`${environment.endpoint}/companias`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public guardar(compania: Compania) {
    return this.http.post<Compania>(`${environment.endpoint}/companias`, compania);
  }

  public eliminar(compania: Compania) {
    return this.http.delete<boolean>(`${environment.endpoint}/companias/${compania.id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      /*
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        */
    }
    return throwError('Se ha presentado un error.  Intente de nuevo mas tarde.');
  }

}
