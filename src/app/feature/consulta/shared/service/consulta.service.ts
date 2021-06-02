import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consulta } from '../model/consulta';

@Injectable()
export class ConsultaService {

  constructor(protected http: HttpClient) {}

  public consultar() {
    return this.http.get<Consulta[]>(`${environment.endpoint}/consultanominas`)
      .pipe(

      );
  }


}
