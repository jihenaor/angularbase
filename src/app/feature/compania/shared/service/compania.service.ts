import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Compania } from '../model/compania';


@Injectable()
export class CompaniaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Compania[]>(`${environment.endpoint}/companias`, this.http.optsName('consultar companias'));
  }

  public guardar(compania: Compania) {
    return this.http.doPost<Compania, boolean>(`${environment.endpoint}/companias`, compania,
                                                this.http.optsName('crear/actualizar companias'));
  }

  public eliminar(compania: Compania) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/companias/${compania.id}`,
                                                 this.http.optsName('eliminar companias'));
  }
}
