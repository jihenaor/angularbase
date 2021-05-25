import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Compania } from '../model/compania';


@Injectable()
export class CompaniaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Compania[]>(`${environment.endpoint}/companias`, 
                                                this.http.optsName('consultar companias'));
  }

  public guardar(compania: Compania) {
    return this.http.doPost<Compania, boolean>(`${environment.endpoint}/companias`, compania,
                                                this.http.optsName('crear/actualizar companias'));
  }

  public eliminar(compania: Compania) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/companias/${compania.id}`,
                                                this.http.optsName('eliminar companias'));
  }

  /*
  async post(compania: Compania) {
    const url = `${environment.endpoint}/companias`;
    const datos = JSON.stringify(compania);
    let response;
    try {
      response = await fetch(url,
        {
          method: 'POST',
          body: datos,
          headers: {
            'Content-Type': 'application/json',
          }
        });
    } catch (error) {
      throw new Error('Se genero un error: ' + error);
    } finally {

    }

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw {
        json: await response.json(),
        status: response.status,
        statusText: response.statusText
      };
//        throw new Error('Se genero un error: ' + response.statusText);
    }
  }
  */
}
